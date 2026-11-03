export type ProjectFile = {
  file: File
  path: string
}

export function projectFiles(files: File[]): ProjectFile[] {
  return files.map((file) => ({
    file,
    path: file.webkitRelativePath || file.name,
  }))
}

export function mergeProjectFiles(
  previous: ProjectFile[],
  incoming: ProjectFile[],
): ProjectFile[] {
  const byPath = new Map(previous.map((item) => [item.path, item]))
  for (const item of incoming) byPath.set(item.path, item)
  return [...byPath.values()].sort((a, b) => a.path.localeCompare(b.path))
}

async function readEntry(entry: FileSystemEntry): Promise<ProjectFile[]> {
  if (entry.isFile) {
    const file = await new Promise<File>((resolve, reject) =>
      (entry as FileSystemFileEntry).file(resolve, reject),
    )
    return [{ file, path: entry.fullPath.replace(/^\/+/, "") || file.name }]
  }
  if (!entry.isDirectory) return []
  const reader = (entry as FileSystemDirectoryEntry).createReader()
  const entries: FileSystemEntry[] = []
  // Directory readers may return a large directory in multiple batches.
  while (true) {
    const batch = await new Promise<FileSystemEntry[]>((resolve, reject) =>
      reader.readEntries(resolve, reject),
    )
    if (batch.length === 0) break
    entries.push(...batch)
  }
  return (await Promise.all(entries.map(readEntry))).flat()
}

export async function droppedProjectFiles(
  data: DataTransfer,
): Promise<ProjectFile[]> {
  // Capture entries before the browser releases the drop event's data store.
  const entries = Array.from(data.items || [])
    .filter((item) => item.kind === "file")
    .map((item) => item.webkitGetAsEntry?.())
    .filter((entry): entry is FileSystemEntry => !!entry)
  const fallback = projectFiles(Array.from(data.files))
  if (entries.length === 0) return fallback
  return (await Promise.all(entries.map(readEntry))).flat()
}
