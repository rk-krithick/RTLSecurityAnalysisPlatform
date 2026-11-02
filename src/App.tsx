import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ComponentProps,
} from "react"

type IconName = "grid" | "folder" | "chip" | "play" | "shield" | "layers" | "file" | "book" | "report" | "terminal" | "settings" | "help" | "chevron" | "search" | "bell" | "plus" | "arrow" | "clock" | "check" | "close" | "upload" | "download" | "filter" | "code" | "activity" | "collapse" | "external" | "more" | "branch"
function Icon({
  name,
  size = 18,
  className = "",
}: {
  name: IconName
  size?: number
  className?: string
}) {
  const paths: Record<IconName, ReactNode> = {
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
    folder: <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10H3Z" />,
    chip: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M9 3v3m6-3v3M9 18v3m6-3v3M3 9h3m-3 6h3m12-6h3m-3 6h3" />
      </>
    ),
    play: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m10 8 6 4-6 4Z" />
      </>
    ),
    shield: (
      <>
        <path d="m12 3 8 3v6c0 5-8 9-8 9S4 17 4 12V6Z" />
        <path d="M12 8v5m0 3h.01" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5Zm-9 9 9 5 9-5m-18 5 9 5 9-5" />
      </>
    ),
    file: (
      <>
        <path d="M14 3H5v18h14V8Z" />
        <path d="M14 3v6h5M8 13h8m-8 4h6" />
      </>
    ),
    book: (
      <>
        <path d="M12 5c-3-2-7-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-3-1-7-1-10 1Zm0 0v15" />
      </>
    ),
    report: (
      <>
        <path d="M14 3H5v18h14V8Z" />
        <path d="M14 3v6h5M8 17v-3m4 3v-6m4 6v-4" />
      </>
    ),
    terminal: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="m7 9 3 3-3 3m6 0h4" />
      </>
    ),
    settings: (
      <>
        <path d="m9 3-1 3-3 1-2 5 2 5 3 1 1 3h6l1-3 3-1 2-5-2-5-3-1-1-3Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9a2.5 2.5 0 1 1 4 2c-1.5 1-1.5 1.5-1.5 2m0 3h.01" />
      </>
    ),
    chevron: <path d="m9 5 7 7-7 7" />,
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    bell: (
      <>
        <path d="M5 17h14l-2-4V9A5 5 0 0 0 7 9v4Zm5 3h4" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    upload: (
      <>
        <path d="M4 16v5h16v-5M12 16V3m-5 5 5-5 5 5" />
      </>
    ),
    download: (
      <>
        <path d="M4 16v5h16v-5M12 3v13m-5-5 5 5 5-5" />
      </>
    ),
    filter: (
      <>
        <path d="M4 6h16M7 12h10m-7 6h4" />
        <circle cx="8" cy="6" r="2" fill="currentColor" stroke="none" />
        <circle cx="15" cy="12" r="2" fill="currentColor" stroke="none" />
      </>
    ),
    code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18" />,
    activity: <path d="M2 12h5l3-8 4 16 3-8h5" />,
    collapse: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M9 4v16m7-11-3 3 3 3" />
      </>
    ),
    external: (
      <>
        <path d="M14 3h7v7m0-7L10 14M10 4H4v16h16v-6" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
      </>
    ),
    branch: (
      <>
        <circle cx="6" cy="5" r="2" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="6" r="2" />
        <path d="M6 7v10m0-4h7a5 5 0 0 0 5-5" />
      </>
    ),
  }
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
const navigation: {
  label: string
  icon: IconName
  count?: string
}[] = [
  { label: "Dashboard", icon: "grid" },
  { label: "Projects", icon: "folder" },
  { label: "Design Explorer", icon: "chip" },
  { label: "Analysis Runs", icon: "play", count: "1" },
  { label: "Security Findings", icon: "shield", count: "24" },
  { label: "Security Properties", icon: "layers" },
  { label: "Evidence and Artifacts", icon: "file" },
  { label: "Knowledge Base", icon: "book" },
  { label: "Reports", icon: "report" },
]
const initialProjects = [
  {
    name: "Secure SoC Controller",
    desc: "Root of Trust · Main development",
    lang: "SystemVerilog",
    module: "soc_security_top",
    time: "12 minutes ago",
    status: "Completed with Findings",
    findings: 12,
    critical: 2,
    files: 48,
    color: "purple",
  },
  {
    name: "AES Crypto Engine",
    desc: "Cryptographic IP · AES-256",
    lang: "Verilog",
    module: "aes_core_top",
    time: "1 hour ago",
    status: "Completed",
    findings: 5,
    critical: 0,
    files: 32,
    color: "teal",
  },
  {
    name: "RISC-V Security Extension",
    desc: "SoC · RV32IM security extensions",
    lang: "SystemVerilog",
    module: "riscv_secure_top",
    time: "Running now",
    status: "Running",
    findings: 7,
    critical: 1,
    files: 86,
    color: "blue",
  },
  {
    name: "Trusted Boot Controller",
    desc: "Root of Trust · Secure boot",
    lang: "Verilog",
    module: "secure_boot_top",
    time: "Yesterday",
    status: "Completed",
    findings: 0,
    critical: 0,
    files: 24,
    color: "amber",
  },
]
const findings = [
  {
    id: "FIND-0001",
    title: "Protected register access control weakness",
    severity: "Critical",
    module: "access_control",
    project: "Secure SoC Controller",
    status: "Validated Violation",
    line: 142,
    category: "CWE-1262",
  },
  {
    id: "FIND-0002",
    title: "Potential key exposure through debug interface",
    severity: "High",
    module: "key_manager",
    project: "Secure SoC Controller",
    status: "Potential Issue",
    line: 87,
    category: "CWE-200",
  },
  {
    id: "FIND-0003",
    title: "Security state transition inconsistency",
    severity: "High",
    module: "security_controller",
    project: "RISC-V Security Extension",
    status: "Unresolved Hypothesis",
    line: 215,
    category: "CWE-1245",
  },
  {
    id: "FIND-0004",
    title: "Reset sequence does not clear key material",
    severity: "Medium",
    module: "reset_manager",
    project: "AES Crypto Engine",
    status: "Potential Issue",
    line: 63,
    category: "CWE-1239",
  },
  {
    id: "FIND-0005",
    title: "Unconstrained privilege escalation path",
    severity: "Medium",
    module: "bus_interface",
    project: "Secure SoC Controller",
    status: "Potential Issue",
    line: 108,
    category: "CWE-269",
  },
]
const runs = [
  ["RUN-0024", "RISC-V Security Extension", "Running", "Just now", "03:42"],
  [
    "RUN-0023",
    "Secure SoC Controller",
    "Completed with Findings",
    "12 min ago",
    "08:16",
  ],
  ["RUN-0022", "AES Crypto Engine", "Completed", "1 hour ago", "05:32"],
  ["RUN-0021", "Trusted Boot Controller", "Completed", "Yesterday", "04:18"],
]
const properties = [
  {
    name: "Protected register immutability",
    asset: "Configuration register",
    module: "access_control",
    category: "Access control",
    status: "Violated",
    confidence: "High",
    objective:
      "Once the lock is enabled, the protected register must remain stable until reset.",
    expression:
      "assert property (@(posedge clk)\n  disable iff (!rst_n)\n  lock_enable |=> $stable(protected_reg)\n);",
    finding: 0,
  },
  {
    name: "Key material zeroisation on reset",
    asset: "AES key storage",
    module: "key_manager",
    category: "Confidentiality",
    status: "Validated",
    confidence: "High",
    objective:
      "Reset must clear sensitive key material and invalidate the active key.",
    expression: "assert property (@(posedge clk)\n  !rst_n |=> !key_valid\n);",
    finding: 3,
  },
  {
    name: "Authenticated privilege transition",
    asset: "Security state",
    module: "security_controller",
    category: "Access control",
    status: "Proposed",
    confidence: "Moderate",
    objective:
      "Transitions to a privileged security state require an authenticated request.",
    expression:
      "// Candidate expectation; signal mapping not yet validated.\n// Privileged transitions require authenticated access.",
    finding: 2,
  },
  {
    name: "Debug interface access restriction",
    asset: "Debug port",
    module: "bus_interface",
    category: "Access control",
    status: "Unresolved",
    confidence: "Moderate",
    objective:
      "Debug access must not expose protected key material or security state.",
    expression:
      "// Candidate expectation; validation remains unresolved.\n// Debug reads must respect the protected asset boundary.",
    finding: 1,
  },
]
const reportNames = [
  "Secure SoC Security Assessment",
  "AES Engine Static Analysis",
  "Secure Boot Property Review",
]
const reportProjectNames = [
  "Secure SoC Controller",
  "AES Crypto Engine",
  "Trusted Boot Controller",
]
const waveformSignals = [
  "clk",
  "rst_n",
  "lock_enable",
  "write_enable",
  "protected_reg",
  "access_grant",
]
const artifacts = [
  ["register_access_trace.vcd", "VCD Waveform", "2.4 MB"],
  ["security_assertions.json", "Assertion Results", "18 KB"],
  ["module_dependencies.graphml", "Graph Snapshot", "124 KB"],
  ["static_analysis.log", "Execution Log", "84 KB"],
  ["rtl_source_a3f72c1.zip", "RTL Source Snapshot", "412 KB"],
]
const logMessages: Record<string, string[]> = {
  Operational: [
    "Workspace services initialised",
    "Local storage connected",
    "Formal solver unavailable",
    "Index service ready",
  ],
  "Security audit": [
    "Local workspace opened",
    "Project configuration updated",
    "Static Security Analysis initiated",
    "Finding marked as reviewed",
  ],
  "Analysis & evidence": [
    "Validated 48 source files",
    "Elaborated 16 modules and 328 signals",
    "Formal validation skipped: solver unavailable",
    "Discovered 8 candidate security properties",
    "Correlated 12 evidence artifacts",
    "Analysis completed with reportable findings",
  ],
}
const waveformPaths = [
  Array.from(
    { length: 40 },
    (_, j) =>
      `${j === 0 ? "M" : "L"}${j * 25} ${
        j % 2 === 0 ? 36 : 12
      }H${(j + 1) * 25}`,
  ).join(" "),
  "M0 36H100V12H1000",
  "M0 36H625V12H1000",
  "M0 36H650V12H700V36H1000",
  "M0 12H650L665 36H1000M0 36H650L665 12H1000",
  "M0 36H650V12H700V36H1000",
]
function Badge({
  children,
  tone,
  dot = false,
}: {
  children: ReactNode
  tone?: string
  dot?: boolean
}) {
  const text = String(children)
  const tones: Record<string, string> = {
    Critical: "red",
    High: "amber",
    Medium: "blue",
    Low: "teal",
    Informational: "neutral",
    "Validated Violation": "red",
    "Potential Issue": "amber",
    "Unresolved Hypothesis": "neutral",
    "Unsupported / Uncheckable": "neutral",
    Running: "blue",
    Completed: "green",
    "Completed with Findings": "amber",
    Partial: "amber",
    Failed: "red",
    Cancelled: "neutral",
    Validated: "green",
    Violated: "red",
    Proposed: "blue",
    Unresolved: "neutral",
    Indexed: "green",
    Indexing: "blue",
    Available: "green",
  }
  const color = tone || tones[text] || "neutral"
  return (
    <span className={`badge ${color}`}>
      {dot && <span className="status-dot" />}
      {children}
    </span>
  )
}
function Button({
  children,
  onClick,
  primary = false,
  icon,
  disabled = false,
  className = "",
}: {
  children: ReactNode
  onClick?: () => void
  primary?: boolean
  icon?: IconName
  disabled?: boolean
  className?: string
}) {
  return (
    <button
      type="button"
      className={`button ${primary ? "primary" : ""} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <Icon name={icon} size={15} />}
      {children}
    </button>
  )
}
function Panel({
  title,
  children,
  action,
  subtitle,
  className = "",
}: {
  title: string
  children: ReactNode
  action?: ReactNode
  subtitle?: string
  className?: string
}) {
  return (
    <section className={`panel ${className}`}>
      <div className="panel-heading">
        <div>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  )
}
function EmptyState({
  title,
  description,
  icon = "search",
}: {
  title: string
  description: string
  icon?: IconName
}) {
  return (
    <div className="empty" role="status">
      <Icon name={icon} size={24} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
function InteractiveRow({ children, ...props }: ComponentProps<"tr">) {
  return (
    <tr
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          e.currentTarget.click()
        }
      }}
      {...props}
    >
      {children}
    </tr>
  )
}
function Tabs({
  items,
  value,
  onChange,
  label,
}: {
  items: string[]
  value: string
  onChange: (value: string) => void
  label: string
}) {
  return (
    <div className="tabs" role="tablist" aria-label={label}>
      {items.map((item) => (
        <button
          key={item}
          role="tab"
          aria-selected={value === item}
          className={value === item ? "active" : ""}
          onClick={() => onChange(item)}
          onKeyDown={(e) => {
            if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return
            e.preventDefault()
            const next =
              (items.indexOf(item) +
                (e.key === "ArrowRight" ? 1 : -1) +
                items.length) %
              items.length
            onChange(items[next])
            const siblings =
              e.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
                '[role="tab"]',
              )
            siblings?.[next]?.focus()
          }}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
function Dialog({
  children,
  onClose,
  className = "modal",
  label,
  labelledBy,
}: {
  children: ReactNode
  onClose: () => void
  className?: string
  label?: string
  labelledBy?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const closeRef = useRef(onClose)
  closeRef.current = onClose
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const focusable = () =>
      Array.from(
        ref.current?.querySelectorAll<HTMLElement>(
          'button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]',
        ) || [],
      ).filter((el) => el.getClientRects().length > 0)
    focusable()[0]?.focus()
    const keydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        closeRef.current()
        return
      }
      if (e.key !== "Tab") return
      const elements = focusable()
      const first = elements[0],
        last = elements[elements.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }
    document.addEventListener("keydown", keydown)
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener("keydown", keydown)
      previous?.focus()
    }
  }, [])
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section
        ref={ref}
        className={className}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        aria-labelledby={labelledBy}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </section>
    </div>
  )
}
function LinkButton({
  children = "View all",
  onClick,
}: {
  children?: ReactNode
  onClick: () => void
}) {
  return (
    <button className="text-link" onClick={onClick}>
      {children}
      <Icon name="arrow" size={14} />
    </button>
  )
}
function download(name: string, data: unknown) {
  const url = URL.createObjectURL(
    new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }),
  )
  const a = document.createElement("a")
  a.href = url
  a.download = name
  a.click()
  URL.revokeObjectURL(url)
}

export default function App() {
  const [page, setPage] = useState("Dashboard")
  const [collapsed, setCollapsed] = useState(false)
  const [projects, setProjects] = useState(initialProjects)
  const [selectedProject, setSelectedProject] = useState(initialProjects[0])
  const [selectedFinding, setSelectedFinding] = useState(findings[0])
  const [toast, setToast] = useState("")
  const [modal, setModal] = useState("")
  const [query, setQuery] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [globalSearch, setGlobalSearch] = useState(false)
  const [severity, setSeverity] = useState("All severities")
  const [logLevel, setLogLevel] = useState("All levels")
  const [validation, setValidation] = useState("All validation statuses")
  const [period, setPeriod] = useState("Last 30 days")
  const [step, setStep] = useState(1)
  const [projectName, setProjectName] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState("")
  const [activeTab, setActiveTab] = useState("Source code")
  const [activeFile, setActiveFile] = useState("access_control")
  const [progress, setProgress] = useState(6)
  const [running, setRunning] = useState(false)
  const [reviewed, setReviewed] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null)
  const [selectedRunId, setSelectedRunId] = useState("RUN-0024")
  const [selectedReport, setSelectedReport] = useState(0)
  const [selectedCollection, setSelectedCollection] = useState("")
  const [documentCollection, setDocumentCollection] = useState(
    "Project documentation",
  )
  const [documentCollections, setDocumentCollections] = useState([
    "Project documentation",
    "Weaknesses & standards",
    "Project documentation",
    "Reviewed analysis history",
  ])
  const [setting, setSetting] = useState("General")
  const [logTab, setLogTab] = useState("Analysis & evidence")
  const [zoom, setZoom] = useState(1)
  const [cursor, setCursor] = useState(65)
  const [hiddenSignals, setHiddenSignals] = useState<string[]>([])
  const [selectedSignal, setSelectedSignal] = useState("protected_reg")
  const [indexing, setIndexing] = useState(false)
  const [docName, setDocName] = useState("")
  const [documents, setDocuments] = useState([
    "SoC security architecture v2.1.pdf",
    "CWE Hardware Design View",
    "Access control security requirements.md",
    "Reviewed findings — Secure SoC",
  ])
  const fileInput = useRef<HTMLInputElement>(null)
  const notify = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(""), 4200)
  }
  const go = (target: string) => {
    if (target === "New Project") {
      setStep(1)
      setProjectName("")
      setFiles([])
      setFileError("")
    }
    if (target === "Design Explorer") setActiveTab("Source code")
    setPage(target)
    setQuery("")
    setGlobalSearch(false)
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    if (!running) return
    const timer = window.setInterval(
      () =>
        setProgress((p) => {
          if (p >= 10) {
            setRunning(false)
            return 10
          }
          return p + 1
        }),
      2500,
    )
    return () => window.clearInterval(timer)
  }, [running])
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setGlobalSearch((v) => !v)
      }
      if (e.key === "Escape") {
        setModal("")
        setGlobalSearch(false)
      }
    }
    window.addEventListener("keydown", listener)
    return () => window.removeEventListener("keydown", listener)
  }, [])
  const openProject = (project: typeof selectedProject) => {
    setSelectedProject(project)
    go("Project Workspace")
  }
  const openFinding = (finding: typeof selectedFinding) => {
    setSelectedFinding(finding)
    setSelectedProject(
      projects.find((p) => p.name === finding.project) || projects[0],
    )
    setActiveFile(finding.module)
    setActiveTab("Source code")
    setReviewed(false)
    go("Finding Details")
  }
  const openRun = (id: string) => {
    const run = runs.find((r) => r[0] === id)
    if (run) {
      setSelectedProject(projects.find((p) => p.name === run[1]) || projects[0])
      setProgress(run[2] === "Running" ? 6 : 10)
    }
    setSelectedRunId(id)
    setRunning(false)
    go("Analysis Progress")
  }
  const openSource = (moduleName: string) => {
    setActiveFile(moduleName)
    setActiveTab("Source code")
    go("Design Explorer")
  }
  const openWaveform = () => {
    setSelectedProject(projects[0])
    go("Waveform Viewer")
  }
  const activeSection =
    ({
      "Project Workspace": "Projects",
      "New Project": "Projects",
      "Finding Details": "Security Findings",
      "Analysis Progress": "Analysis Runs",
      "New Security Analysis": "Analysis Runs",
      "Dynamic Security Testing": "Analysis Runs",
      "Waveform Viewer": "Evidence and Artifacts",
      "Report Preview": "Reports",
      "Design System": "Help & Documentation",
    } as Record<string, string>)[page] || page
  const title =
    page === "Security Findings"
      ? "Security Findings"
      : page === "New Project"
        ? "Create a new project"
        : page === "Dynamic Security Testing"
          ? "Dynamic Security Testing"
          : page === "Help & Documentation"
            ? "Documentation"
            : page === "Analysis Progress"
              ? selectedRunId
              : page === "Finding Details"
                ? selectedFinding.id
                : page
  const projectContext = [
    "Project Workspace",
    "Design Explorer",
    "New Security Analysis",
    "Analysis Progress",
    "Finding Details",
    "Waveform Viewer",
  ].includes(page)
  const filteredFindings = findings.filter(
    (f) =>
      (severity === "All severities" || f.severity === severity) &&
      (validation === "All validation statuses" || f.status === validation) &&
      `${f.title} ${f.module} ${f.id}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  )
  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()),
  )
  const filteredArtifacts = artifacts.filter((a) =>
    a[0].toLowerCase().includes(query.toLowerCase()),
  )
  const visibleLogs = (logMessages[logTab] || [])
    .map((s, i) => ({ s, i }))
    .filter(
      ({ s }) =>
        s.toLowerCase().includes(query.toLowerCase()) &&
        (logLevel === "All levels" ||
          (s.includes("unavailable") ? "WARNING" : "INFO") === logLevel),
    )
  const runStatus =
    selectedRunId === "RUN-0025"
      ? progress === 10
        ? "Completed with Findings"
        : running
          ? "Running"
          : "Partial"
      : runs.find((r) => r[0] === selectedRunId)?.[2] || "Partial"
  const property =
    selectedProperty === null ? null : properties[selectedProperty]
  const reportProject =
    projects.find((p) => p.name === reportProjectNames[selectedReport]) ||
    projects[0]
  const reportFindings = findings.filter(
    (f) => f.project === reportProject.name,
  )
  const findingRunId =
    runs.find((r) => r[1] === selectedFinding.project)?.[0] || "RUN-0023"
  const searchResults = [
    ...navigation.map((n) => ({
      name: n.label,
      sub: "Workspace page",
      action: () => go(n.label),
    })),
    ...projects.map((p) => ({
      name: p.name,
      sub: "Project",
      action: () => openProject(p),
    })),
    ...findings.map((f) => ({
      name: f.title,
      sub: f.id,
      action: () => openFinding(f),
    })),
  ]
    .filter((x) =>
      `${x.name} ${x.sub}`.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .slice(0, 9)
  const field = (
    label: string,
    placeholder: string,
    value?: string,
    onChange?: (s: string) => void,
  ) => (
    <label className="field" key={label}>
      {label}
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </label>
  )

  function projectTable() {
    return (
      <div className="table-scroll">
        <table className="project-table">
          <thead>
            <tr>
              <th scope="col">Project name</th>
              <th scope="col">Language / Top module</th>
              <th scope="col">Last analysis</th>
              <th scope="col">Status</th>
              <th scope="col">Findings</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((p) => (
              <InteractiveRow key={p.name} onClick={() => openProject(p)}>
                <td>
                  <div className="project-name">
                    <span className={`project-icon ${p.color}`}>
                      <Icon name="chip" size={19} />
                    </span>
                    <div>
                      <strong>{p.name}</strong>
                      <span>{p.desc}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="language">{p.lang}</span>
                  <code className="subtext">{p.module}</code>
                </td>
                <td className={p.status === "Running" ? "blue-text" : "muted"}>
                  {p.status === "Running" && <span className="tiny-spinner" />}
                  {p.time}
                </td>
                <td>
                  <Badge dot>{p.status}</Badge>
                </td>
                <td>
                  <div className="finding-count">
                    <strong>{p.findings}</strong>
                    {p.critical > 0 && (
                      <span className="critical-count">
                        {p.critical} critical
                      </span>
                    )}
                    {p.findings === 0 && <span className="muted">—</span>}
                  </div>
                </td>
                <td>
                  <Icon name="chevron" size={15} />
                </td>
              </InteractiveRow>
            ))}
          </tbody>
        </table>
        {filteredProjects.length === 0 && (
          <EmptyState
            title="No matching projects"
            description="Try another project name or clear your search."
          />
        )}
      </div>
    )
  }
  function findingsList(compact = false) {
    return compact ? (
      <div className="compact-findings">
        {findings.slice(0, 3).map((f) => (
          <button
            className="finding-row"
            key={f.id}
            onClick={() => openFinding(f)}
          >
            <div className={`severity-icon ${f.severity.toLowerCase()}`}>
              <Icon name="shield" size={16} />
            </div>
            <div className="finding-info">
              <strong>{f.title}</strong>
              <span>
                <code>{f.id}</code>
                <i /> {f.module}
              </span>
            </div>
            <Badge>{f.severity}</Badge>
            <Icon name="chevron" size={14} />
          </button>
        ))}
      </div>
    ) : (
      <div className="table-scroll">
        <table className="findings-table">
          <thead>
            <tr>
              <th scope="col">Finding / Title</th>
              <th scope="col">Severity</th>
              <th scope="col">Module / Source</th>
              <th scope="col">Validation status</th>
              <th scope="col">Confidence</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredFindings.map((f) => (
              <InteractiveRow key={f.id} onClick={() => openFinding(f)}>
                <td>
                  <code className="small-id">{f.id}</code>
                  <strong className="block">{f.title}</strong>
                </td>
                <td>
                  <Badge>{f.severity}</Badge>
                </td>
                <td>
                  <code>{f.module}</code>
                  <span className="subtext">
                    {f.module}.sv:{f.line}
                  </span>
                </td>
                <td>
                  <Badge>{f.status}</Badge>
                </td>
                <td>
                  {f.severity === "Critical" ? "High · 96%" : "Moderate · 82%"}
                </td>
                <td>
                  <code>{f.category}</code>
                </td>
              </InteractiveRow>
            ))}
          </tbody>
        </table>
        {filteredFindings.length === 0 && (
          <EmptyState
            title="No matching findings"
            description="Try another search, severity, or validation filter."
          />
        )}
      </div>
    )
  }
  const codeLines = [
    "// Secure register access controller",
    `module ${activeFile} (`,
    "  input  logic        clk,",
    "  input  logic        rst_n,",
    "  input  logic        lock_enable,",
    "  input  logic        write_enable,",
    "  input  logic [31:0] write_data,",
    "  output logic [31:0] protected_reg",
    ");",
    "",
    "  // Update protected register",
    "  always_ff @(posedge clk or negedge rst_n) begin",
    "    if (!rst_n) begin",
    "      protected_reg <= 32'h0000_0000;",
    "    end else begin",
    "      if (write_enable) begin",
    "        protected_reg <= write_data;",
    "      end",
    "    end",
    "  end",
    "",
    "  // Expected: writes blocked when lock_enable is set",
    "  // See PROP-0012: Protected register immutability",
    "endmodule",
  ]
  function codeViewer() {
    return (
      <div className="code-view">
        {codeLines.map((line, i) => (
          <div
            className={`code-line ${
              i === 15 || i === 16 ? "highlight-line" : ""
            }`}
            key={i}
          >
            <span className="line-number">{i + 127}</span>
            <code className={line.trim().startsWith("//") ? "comment" : ""}>
              {line
                .split(
                  /(module|input|output|logic|always_ff|begin|end|if|else|endmodule)/g,
                )
                .map((part, j) =>
                  /^(module|input|output|logic|always_ff|begin|end|if|else|endmodule)$/.test(
                    part,
                  ) ? (
                    <span className="syntax" key={j}>
                      {part}
                    </span>
                  ) : (
                    part
                  ),
                )}
            </code>
          </div>
        ))}
      </div>
    )
  }

  function renderContent() {
    if (page === "Dashboard")
      return (
        <>
          <div className="page-heading">
            <div>
              <div className="eyebrow">YOUR WORKSPACE, AT A GLANCE</div>
              <h1>
                Good morning, Alex <span className="greeting-dot">.</span>
              </h1>
              <p>Here's an overview of your RTL security workspace.</p>
            </div>
            <Button
              primary
              icon="plus"
              onClick={() => {
                setStep(1)
                go("New Project")
              }}
            >
              New Project
            </Button>
          </div>
          <div className="overview-label">
            <span>Workspace overview</span>
            <button
              className="period-select"
              onClick={() =>
                setPeriod(
                  period === "Last 30 days" ? "Last 7 days" : "Last 30 days",
                )
              }
            >
              <Icon name="clock" size={13} />
              {period}
              <Icon name="chevron" size={12} />
            </button>
          </div>
          <div className="metrics">
            {[
              {
                label: "Total projects",
                value: String(projects.length + 4),
                icon: "folder" as IconName,
                color: "purple",
                foot: "+2",
                text: "this month",
                graph: [10, 16, 13, 21, 18, 25, 30],
                target: "Projects",
              },
              {
                label: "Analysis runs",
                value: period === "Last 30 days" ? "24" : "9",
                icon: "play" as IconName,
                color: "blue",
                foot: "1 running",
                text: "across 8 projects",
                graph: [12, 20, 15, 28, 18, 30, 23],
                target: "Analysis Runs",
              },
              {
                label: "Total findings",
                value: "24",
                icon: "shield" as IconName,
                color: "teal",
                foot: "18 reviewed",
                text: "6 awaiting review",
                graph: [24, 19, 28, 21, 16, 23, 16],
                target: "Security Findings",
              },
              {
                label: "Critical & high",
                value: "7",
                icon: "activity" as IconName,
                color: "red",
                foot: "3 critical",
                text: "4 high severity",
                graph: [10, 18, 14, 23, 16, 12, 8],
                target: "Security Findings",
              },
            ].map((m) => (
              <button
                className="metric-card"
                key={m.label}
                onClick={() => go(m.target)}
              >
                <div className="metric-top">
                  <span>{m.label}</span>
                  <span className={`metric-icon ${m.color}`}>
                    <Icon name={m.icon} size={17} />
                  </span>
                </div>
                <div className="metric-middle">
                  <strong>{m.value}</strong>
                  <div className={`spark ${m.color}`}>
                    {m.graph.map((h, i) => (
                      <i key={i} style={{ height: h }} />
                    ))}
                  </div>
                </div>
                <div className="metric-foot">
                  <span
                    className={
                      m.color === "red"
                        ? "red-text"
                        : m.color === "blue"
                          ? "blue-text"
                          : "green-text"
                    }
                  >
                    {m.foot}
                  </span>
                  <span>{m.text}</span>
                </div>
              </button>
            ))}
          </div>
          <Panel
            title="Recent projects"
            subtitle="Your recently active RTL designs."
            action={
              <LinkButton onClick={() => go("Projects")}>
                All projects
              </LinkButton>
            }
          >
            {projectTable()}
          </Panel>
          <div className="dashboard-columns">
            <Panel
              title="Recent analysis runs"
              action={<LinkButton onClick={() => go("Analysis Runs")} />}
            >
              <div className="run-list">
                {runs.slice(0, 3).map((r, i) => (
                  <button
                    className="run-row"
                    key={r[0]}
                    onClick={() => {
                      openRun(r[0])
                    }}
                  >
                    <span
                      className={`run-symbol ${i === 0 ? "is-running" : ""}`}
                    >
                      <Icon name={i === 0 ? "activity" : "check"} size={17} />
                    </span>
                    <div className="run-info">
                      <strong>
                        <code>{r[0]}</code>
                        <span>Static Security Analysis</span>
                      </strong>
                      <span>
                        {r[1]} <i /> {r[3]}
                      </span>
                    </div>
                    <div className="run-status">
                      <Badge dot>{r[2]}</Badge>
                      <span>
                        {i === 0 ? "Stage 6 of 10" : `${r[4]} duration`}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <button
                className="run-progress-strip"
                onClick={() => openRun("RUN-0024")}
              >
                <span className="tiny-spinner" />
                <span>
                  <strong>RUN-0024</strong> is discovering security properties
                </span>
                <span className="mini-progress">
                  <i />
                </span>
                <span>60%</span>
                <Icon name="arrow" size={14} />
              </button>
            </Panel>
            <Panel
              title="Findings to review"
              action={<LinkButton onClick={() => go("Security Findings")} />}
            >
              {findingsList(true)}
              <div className="panel-note">
                <Icon name="shield" size={14} />
                <span>
                  Prioritised by severity. Findings require evidence-based
                  review.
                </span>
              </div>
            </Panel>
          </div>
          <div className="dashboard-bottom">
            <Panel
              title="Workspace activity"
              action={<span className="muted small">Today, October 24</span>}
            >
              <div className="activity-list">
                {[
                  [
                    "check",
                    "Analysis completed",
                    "Secure SoC Controller",
                    "12 min ago",
                    "green",
                  ],
                  [
                    "layers",
                    "Security properties discovered",
                    "8 candidate properties · RUN-0023",
                    "18 min ago",
                    "purple",
                  ],
                  [
                    "book",
                    "Knowledge source indexed",
                    "SoC security architecture v2.1.pdf",
                    "42 min ago",
                    "blue",
                  ],
                ].map(([icon, label, sub, time, color]) => (
                  <div className="activity-item" key={label}>
                    <span className={`activity-icon ${color}`}>
                      <Icon name={icon as IconName} size={14} />
                    </span>
                    <div>
                      <strong>{label}</strong>
                      <span>{sub}</span>
                    </div>
                    <time>{time}</time>
                  </div>
                ))}
              </div>
            </Panel>
            <section className="workspace-note">
              <span className="local-icon">
                <Icon name="shield" size={22} />
              </span>
              <div className="note-title">Your designs stay yours.</div>
              <p>
                Your RTL source and analysis artifacts stay in your local
                workspace. You're in control of what leaves your machine.
              </p>
              <button
                className="text-link"
                onClick={() => {
                  setSetting("AI & Agent")
                  go("Settings")
                }}
              >
                Review privacy settings <Icon name="arrow" size={14} />
              </button>
              <span className="local-caption">
                <span className="status-dot" /> Local-first by design
              </span>
            </section>
          </div>
          <footer className="dashboard-footer">
            <span>
              <span className="status-dot" /> Illustrative workspace data
            </span>
            <span>
              Session-only workspace <span className="footer-divider">|</span>{" "}
              Illustrative demo data
            </span>
          </footer>
        </>
      )
    if (page === "Projects")
      return (
        <>
          <PageHeader
            title="Projects"
            subtitle="Organise your hardware designs and security assessments."
            action={
              <Button
                primary
                icon="plus"
                onClick={() => {
                  setStep(1)
                  go("New Project")
                }}
              >
                New Project
              </Button>
            }
          />
          <div className="toolbar">
            <Search
              value={query}
              onChange={setQuery}
              placeholder="Search projects…"
            />
            <span className="muted">
              {projects.length} projects in this workspace
            </span>
          </div>
          <Panel title="All projects">{projectTable()}</Panel>
        </>
      )
    if (page === "New Project")
      return (
        <>
          <PageHeader
            title="Create a new project"
            subtitle="Bring your RTL design into your security workspace."
          />
          <div className="wizard-layout">
            <aside className="wizard-steps">
              {[
                "Project information",
                "Upload RTL source",
                "Design configuration",
                "Project context",
                "Review & create",
              ].map((s, i) => (
                <button
                  key={s}
                  className={step === i + 1 ? "selected" : ""}
                  onClick={() => i + 1 < step && setStep(i + 1)}
                >
                  <span>
                    {step > i + 1 ? <Icon name="check" size={15} /> : i + 1}
                  </span>
                  <div>
                    {s}
                    <small>
                      {
                        [
                          "Name and organise your design",
                          "Add files or a project archive",
                          "Set language and top module",
                          "Optional supporting documents",
                          "Confirm project details",
                        ][i]
                      }
                    </small>
                  </div>
                </button>
              ))}
              <div className="wizard-tip">
                <Icon name="shield" />
                <p>
                  Source files stay in your local workspace. No design data is
                  sent to a remote service.
                </p>
              </div>
            </aside>
            <Panel
              title={
                [
                  "Project information",
                  "Upload RTL source",
                  "Design configuration",
                  "Project context",
                  "Ready to create your project",
                ][step - 1]
              }
              subtitle={`Step ${step} of 5`}
              className="wizard-panel"
            >
              <div className="form-body">
                {step === 1 && (
                  <>
                    {field(
                      "Project name *",
                      "e.g. Secure SoC Controller",
                      projectName,
                      setProjectName,
                    )}
                    <label className="field">
                      Description
                      <textarea
                        placeholder="What does this hardware design do?"
                        rows={3}
                      />
                    </label>
                    <div className="form-grid">
                      <label className="field">
                        Project category
                        <select>
                          <option>Root of Trust</option>
                          <option>SoC</option>
                          <option>Cryptographic IP</option>
                          <option>Security Controller</option>
                          <option>Other</option>
                        </select>
                      </label>
                      {field("Project version", "v1.0.0")}
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <div
                      className="upload-zone"
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        e.preventDefault()
                        addFiles(Array.from(e.dataTransfer.files))
                      }}
                    >
                      <span className="upload-icon">
                        <Icon name="upload" size={24} />
                      </span>
                      <h3>Drop your RTL source files here</h3>
                      <p>Upload a ZIP archive or individual HDL files</p>
                      <Button onClick={() => fileInput.current?.click()}>
                        Browse files
                      </Button>
                      <small>.v, .sv, .vh, .svh, .vhd, .vhdl, .zip</small>
                    </div>
                    <input
                      hidden
                      type="file"
                      multiple
                      ref={fileInput}
                      accept=".v,.sv,.vh,.svh,.vhd,.vhdl,.zip"
                      onChange={(e) =>
                        addFiles(Array.from(e.target.files || []))
                      }
                    />
                    {fileError && (
                      <div className="error-message">{fileError}</div>
                    )}
                    {files.map((f, i) => (
                      <div className="uploaded-file" key={f.name}>
                        <Icon name="file" />
                        <span>
                          {f.name}
                          <small>{(f.size / 1024).toFixed(1)} KB</small>
                        </span>
                        <Badge tone="green">Ready</Badge>
                        <button
                          className="icon-button"
                          onClick={() =>
                            setFiles(files.filter((_, n) => i !== n))
                          }
                        >
                          <Icon name="close" size={14} />
                        </button>
                      </div>
                    ))}
                  </>
                )}
                {step === 3 && (
                  <>
                    <label className="field">
                      Primary HDL language
                      <select>
                        <option>SystemVerilog</option>
                        <option>Verilog</option>
                        <option>VHDL (planned)</option>
                      </select>
                    </label>
                    {field("Top module", "soc_security_top")}
                    <label className="check-label">
                      <input type="checkbox" defaultChecked /> Automatically
                      detect top module
                    </label>
                    {field("Include directories", "./rtl/include, ./common")}
                    {field("Additional compile options", "-DSYNTHESIS")}
                    {field("Target design version", "v1.0.0")}
                  </>
                )}
                {step === 4 && (
                  <>
                    <div className="info-banner">
                      <Icon name="book" />
                      <span>
                        Additional context helps make security properties more
                        relevant to your design. You can add it later.
                      </span>
                    </div>
                    <label className="field">
                      Architecture, security requirements, or project notes
                      <textarea
                        rows={8}
                        placeholder="Describe protected assets, trust boundaries, threat assumptions, or register access requirements…"
                      />
                    </label>
                    <Button
                      icon="upload"
                      onClick={() =>
                        notify(
                          "Add project documentation from the Knowledge Base after creation.",
                        )
                      }
                    >
                      Attach context documents
                    </Button>
                  </>
                )}
                {step === 5 && (
                  <>
                    <div className="success-heading">
                      <Icon name="check" size={26} />
                      <h3>Your workspace is ready</h3>
                      <p>
                        Review your configuration before creating the project.
                      </p>
                    </div>
                    <dl className="detail-list">
                      <dt>Project name</dt>
                      <dd>{projectName}</dd>
                      <dt>HDL language</dt>
                      <dd>SystemVerilog</dd>
                      <dt>Top module</dt>
                      <dd>Automatic detection</dd>
                      <dt>Source files</dt>
                      <dd>{files.length} uploaded files</dd>
                      <dt>Processing</dt>
                      <dd>Local workspace</dd>
                    </dl>
                    <div className="info-banner">
                      This prototype creates a session-only project. RTL parsing
                      and analysis engines are not connected.
                    </div>
                  </>
                )}
              </div>
              <div className="wizard-footer">
                <Button
                  onClick={() =>
                    step === 1 ? go("Projects") : setStep(step - 1)
                  }
                >
                  {step === 1 ? "Cancel" : "Back"}
                </Button>
                <Button
                  primary
                  disabled={
                    (step === 1 && !projectName.trim()) ||
                    (step === 2 && !files.length)
                  }
                  onClick={() => {
                    if (step < 5) setStep(step + 1)
                    else {
                      const p = {
                        ...initialProjects[0],
                        name: projectName,
                        desc: "Root of Trust · New project",
                        findings: 0,
                        critical: 0,
                        status: "Not analysed",
                        time: "Not yet",
                        files: files.length,
                      }
                      setProjects([...projects, p])
                      openProject(p)
                      notify("Project created in this demo session.")
                    }
                  }}
                >
                  {step === 5
                    ? "Create Project"
                    : step === 4
                      ? "Continue to review"
                      : "Continue"}
                  <Icon name="arrow" size={15} />
                </Button>
              </div>
            </Panel>
          </div>
        </>
      )
    if (page === "Project Workspace" || page === "Design Explorer")
      return (
        <>
          <PageHeader
            title={selectedProject.name}
            subtitle="Hardware Root of Trust and secure peripheral access controller."
            action={
              <>
                <Button onClick={() => go("Security Findings")}>
                  View findings
                </Button>
                <Button
                  primary
                  icon="play"
                  onClick={() => go("New Security Analysis")}
                >
                  Run Analysis
                </Button>
              </>
            }
          />
          <div className="project-meta">
            <Badge tone="purple">{selectedProject.lang}</Badge>
            <span>v2.1.0</span>
            <span>
              <Icon name="branch" size={14} />
              <code>main · a3f72c1</code>
            </span>
            <span>Updated 12 minutes ago</span>
          </div>
          <div className="small-metrics">
            {[
              ["Source files", selectedProject.files],
              ["Modules", 16],
              ["Hierarchy depth", 4],
              ["Signals", 328],
              ["Clock domains", 3],
              ["Reset domains", 2],
              ["Security Findings", selectedProject.findings],
            ].map(([l, v]) => (
              <div key={l}>
                <span>{l}</span>
                <strong>{v}</strong>
              </div>
            ))}
          </div>
          <Tabs
            items={["Source code", "Module hierarchy", "Security overview"]}
            value={activeTab}
            onChange={setActiveTab}
            label="Design workspace"
          />
          {activeTab === "Module hierarchy" ? (
            <Panel
              title="Design hierarchy"
              action={<Badge tone="neutral">16 modules</Badge>}
            >
              <div className="module-graph">
                <button
                  className="graph-node root"
                  onClick={() => openSource("soc_security_top")}
                >
                  <Icon name="chip" />
                  soc_security_top<small>Top module · 5 submodules</small>
                </button>
                <div className="graph-children">
                  {[
                    "security_controller",
                    "key_manager",
                    "access_control",
                    "reset_manager",
                    "bus_interface",
                  ].map((m) => (
                    <button
                      className={`graph-node ${
                        m === "access_control" ? "has-finding" : ""
                      }`}
                      key={m}
                      onClick={() => {
                        setActiveFile(m)
                        setActiveTab("Source code")
                      }}
                    >
                      <Icon name="chip" />
                      <code>{m}</code>
                      <small>
                        {m === "access_control"
                          ? "2 findings"
                          : "View RTL source"}
                      </small>
                    </button>
                  ))}
                </div>
              </div>
            </Panel>
          ) : activeTab === "Security overview" ? (
            <>
              <Panel title="Associated findings">{findingsList()}</Panel>
              <div className="info-banner">
                Generated security properties are candidates, not proof of
                design correctness.{" "}
                <button
                  className="text-link"
                  onClick={() => go("Security Properties")}
                >
                  Review properties <Icon name="arrow" size={14} />
                </button>
              </div>
            </>
          ) : (
            <div className="explorer">
              <aside className="file-tree">
                <div className="explorer-heading">
                  EXPLORER
                  <Icon name="more" size={16} />
                </div>
                <div className="tree-folder">
                  <Icon name="chevron" size={12} />
                  <Icon name="folder" size={15} /> rtl
                </div>
                {[
                  "soc_security_top",
                  "security_controller",
                  "key_manager",
                  "access_control",
                  "reset_manager",
                  "bus_interface",
                ].map((f) => (
                  <button
                    key={f}
                    className={activeFile === f ? "active" : ""}
                    onClick={() => setActiveFile(f)}
                  >
                    <Icon name="code" size={14} />
                    <span className="file-name">{f}.sv</span>
                    {f === "access_control" && (
                      <span className="red-text">2</span>
                    )}
                  </button>
                ))}
                <div className="tree-folder">
                  <Icon name="chevron" size={12} />
                  <Icon name="folder" size={15} /> include
                </div>
                <div className="tree-folder">
                  <Icon name="chevron" size={12} />
                  <Icon name="folder" size={15} /> tb
                </div>
                <div className="tree-folder">
                  <Icon name="chevron" size={12} />
                  <Icon name="folder" size={15} /> docs
                </div>
              </aside>
              <div className="editor">
                <div className="editor-tab">
                  <Icon name="code" size={15} />
                  {activeFile}.sv<span className="muted">Read only</span>
                </div>
                {codeViewer()}
                <div className="editor-status">
                  <span>SystemVerilog</span>
                  <span>UTF-8 · Ln 142, Col 7</span>
                </div>
              </div>
              <aside className="module-details">
                <h3>Module details</h3>
                <code>{activeFile}</code>
                <hr />
                <h4>INTERFACE</h4>
                {[
                  "clk",
                  "rst_n",
                  "lock_enable",
                  "write_enable",
                  "write_data [31:0]",
                ].map((s) => (
                  <div className="signal-item" key={s}>
                    <Icon name="arrow" size={13} />
                    <code>{s}</code>
                    <small>input</small>
                  </div>
                ))}
                <hr />
                <h4>RELATED SECURITY</h4>
                <button
                  className="related-card"
                  onClick={() => {
                    setSelectedProperty(0)
                    go("Security Properties")
                  }}
                >
                  <Icon name="layers" size={16} />
                  <div>
                    <strong>PROP-0012</strong>
                    <span>Protected register immutability</span>
                  </div>
                  <Icon name="chevron" size={12} />
                </button>
                <button
                  className="related-card"
                  onClick={() => openFinding(findings[0])}
                >
                  <Icon name="shield" size={16} />
                  <div>
                    <strong>FIND-0001</strong>
                    <span>Access control weakness</span>
                  </div>
                  <Badge>Critical</Badge>
                </button>
              </aside>
            </div>
          )}
        </>
      )
    if (page === "New Security Analysis")
      return (
        <>
          <PageHeader
            title="New Security Analysis"
            subtitle="Configure the analysis before examining your RTL design."
          />
          <div className="analysis-config">
            <div>
              <Panel title="Project & revision">
                <div className="form-body">
                  <label className="field">
                    Project
                    <select
                      value={selectedProject.name}
                      onChange={(e) =>
                        setSelectedProject(
                          projects.find((p) => p.name === e.target.value)!,
                        )
                      }
                    >
                      {projects.map((p) => (
                        <option key={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </label>
                  <div className="revision-box">
                    <Icon name="branch" />
                    <code>main · a3f72c1</code>
                    <Badge tone="green">Latest revision</Badge>
                  </div>
                </div>
              </Panel>
              <Panel title="Analysis type">
                <div className="form-body">
                  <div className="analysis-option selected">
                    <Icon name="shield" size={23} />
                    <div>
                      <strong>Static Security Analysis</strong>
                      <p>
                        Examine RTL structure, signal relationships, control
                        paths, and security properties to identify potential
                        weaknesses.
                      </p>
                    </div>
                    <input type="radio" checked readOnly />
                  </div>
                  <button
                    className="analysis-option planned"
                    onClick={() => go("Dynamic Security Testing")}
                  >
                    <Icon name="activity" size={23} />
                    <div>
                      <strong>
                        Dynamic Security Testing{" "}
                        <Badge tone="neutral">Planned</Badge>
                      </strong>
                      <p>
                        Evidence-guided test campaigns to examine observed RTL
                        behaviour.
                      </p>
                    </div>
                    <Icon name="chevron" />
                  </button>
                </div>
              </Panel>
              <Panel title="Static analysis checks">
                <div className="check-grid">
                  {[
                    "Structural Analysis",
                    "Security Property Discovery",
                    "Known Weakness Detection",
                    "Data-Flow Analysis",
                    "Control-Flow Analysis",
                    "Inter-Module Analysis",
                    "Formal Validation (tool unavailable)",
                  ].map((s, i) => (
                    <label className="check-label" key={s}>
                      <input
                        type="checkbox"
                        defaultChecked={i < 6}
                        disabled={i === 6}
                      />
                      {s}
                    </label>
                  ))}
                </div>
                <details className="advanced">
                  <summary>Advanced settings</summary>
                  <div className="form-grid">
                    {field("Module scope", "All modules")}
                    {field("Maximum analysis depth", "32")}
                  </div>
                </details>
              </Panel>
            </div>
            <Panel title="Execution summary">
              <div className="form-body">
                <dl className="detail-list">
                  <dt>Engine</dt>
                  <dd>Static Security Analysis</dd>
                  <dt>Revision</dt>
                  <dd>
                    <code>a3f72c1</code>
                  </dd>
                  <dt>Processing</dt>
                  <dd>Local</dd>
                  <dt>Source files</dt>
                  <dd>{selectedProject.files}</dd>
                </dl>
                <hr />
                <h4>TOOL AVAILABILITY</h4>
                <div className="tool-status">
                  <span>RTL parser</span>
                  <Badge tone="neutral">Demo only</Badge>
                </div>
                <div className="tool-status">
                  <span>Formal solver</span>
                  <Badge tone="neutral">Unavailable</Badge>
                </div>
                <div className="info-banner">
                  This interactive prototype demonstrates the pipeline. No real
                  RTL analysis will execute.
                </div>
                <Button
                  primary
                  icon="play"
                  onClick={() => {
                    setSelectedRunId("RUN-0025")
                    setProgress(0)
                    setRunning(true)
                    go("Analysis Progress")
                  }}
                >
                  Start demo analysis
                </Button>
              </div>
            </Panel>
          </div>
        </>
      )
    if (page === "Analysis Runs")
      return (
        <>
          <PageHeader
            title="Analysis Runs"
            subtitle="Trace every analysis from source revision to supporting evidence."
            action={
              <Button
                primary
                icon="plus"
                onClick={() => go("New Security Analysis")}
              >
                New Analysis
              </Button>
            }
          />
          <div className="tabs">
            <button className="active">Static Security Analysis</button>
            <button onClick={() => go("Dynamic Security Testing")}>
              Dynamic Security Testing <Badge>Planned</Badge>
            </button>
          </div>
          <Panel title="Recent runs">
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Run ID</th>
                    <th scope="col">Project</th>
                    <th scope="col">Analysis type</th>
                    <th scope="col">Started</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {runs.map((r, i) => (
                    <InteractiveRow
                      key={r[0]}
                      onClick={() => {
                        openRun(r[0])
                      }}
                    >
                      <td>
                        <code className="blue-text">{r[0]}</code>
                      </td>
                      <td>
                        <strong>{r[1]}</strong>
                      </td>
                      <td>Static Security Analysis</td>
                      <td>{r[3]}</td>
                      <td>
                        <code>{r[4]}</code>
                      </td>
                      <td>
                        <Badge dot>{r[2]}</Badge>
                      </td>
                    </InteractiveRow>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </>
      )
    if (page === "Analysis Progress")
      return (
        <>
          <PageHeader
            title={selectedRunId}
            subtitle={`${selectedProject.name} · Static Security Analysis · Illustrative pipeline`}
            action={
              <>
                <Badge dot>{runStatus}</Badge>
                {selectedRunId !== "RUN-0025" && progress < 10 ? (
                  <Badge tone="neutral">Illustrative snapshot</Badge>
                ) : running ? (
                  <Button
                    onClick={() => {
                      setRunning(false)
                      notify("Demo run paused.")
                    }}
                  >
                    Pause run
                  </Button>
                ) : progress < 10 ? (
                  <Button primary onClick={() => setRunning(true)}>
                    Resume demo
                  </Button>
                ) : (
                  <Button primary onClick={() => go("Security Findings")}>
                    View findings
                    <Icon name="arrow" size={14} />
                  </Button>
                )}
              </>
            }
          />
          <div className="progress-summary">
            <div>
              <strong>
                {progress === 10
                  ? "Analysis completed"
                  : "Examining the security of your design"}
              </strong>
              <span>
                {progress === 10
                  ? "Review findings and evidence within the scope of the selected checks."
                  : `${progress} of 10 stages completed`}
              </span>
            </div>
            <strong>{progress * 10}%</strong>
            <div className="full-progress">
              <i style={{ width: `${progress * 10}%` }} />
            </div>
          </div>
          <div className="analysis-config">
            <Panel title="Analysis pipeline">
              {[
                "Source Validation",
                "RTL Parsing and Elaboration",
                "Design Representation",
                "Design Graph Construction",
                "Asset and Threat Inference",
                "Security Property Discovery",
                "Property Validation",
                "Static Security Checks",
                "Evidence Correlation",
                "Finding Generation",
              ].map((s, i) => (
                <details className="pipeline-stage" key={s}>
                  <summary>
                    <span
                      className={`stage-number ${
                        i < progress ? "done" : i === progress ? "current" : ""
                      }`}
                    >
                      {i < progress ? <Icon name="check" size={14} /> : i + 1}
                    </span>
                    <strong>{s}</strong>
                    <Badge
                      tone={
                        i < progress
                          ? "green"
                          : i === progress
                            ? "blue"
                            : "neutral"
                      }
                    >
                      {i < progress
                        ? "Completed"
                        : i === progress
                          ? "Running"
                          : "Pending"}
                    </Badge>
                  </summary>
                  <div className="stage-detail">
                    <code>
                      [demo]{" "}
                      {i < progress
                        ? "Stage finished. Evidence attached to this run."
                        : i === progress
                          ? "Processing design representation…"
                          : "Waiting for previous stages."}
                    </code>
                  </div>
                </details>
              ))}
            </Panel>
            <div>
              <Panel
                title="Analysis Assistant Activity"
                subtitle="Auditable action summaries, not internal reasoning."
              >
                <div className="assistant-activity">
                  {[
                    "Examining module hierarchy",
                    "Identifying security-sensitive signals",
                    "Retrieving related security knowledge",
                    "Evaluating candidate security properties",
                  ]
                    .slice(0, Math.min(progress + 1, 4))
                    .map((s, i) => (
                      <div key={s}>
                        <span className="activity-icon purple">
                          <Icon name={i === 2 ? "book" : "chip"} size={14} />
                        </span>
                        <p>
                          <strong>{s}</strong>
                          <small>{i + 1} evidence artifact(s) linked</small>
                        </p>
                      </div>
                    ))}
                </div>
              </Panel>
              <Panel title="Execution logs">
                <div className="log-console">
                  {[
                    "Source validation passed: 48 files",
                    "Top module: soc_security_top",
                    "Elaborated 16 modules, 328 signals",
                    "Design graph: 412 nodes, 684 edges",
                    "Detected 6 protected assets",
                    "Discovering candidate security properties…",
                  ]
                    .slice(0, progress + 1)
                    .map((s, i) => (
                      <div key={s}>
                        <span>10:2{i}:04</span>
                        <span className="green-text">INFO</span> {s}
                      </div>
                    ))}
                </div>
              </Panel>
            </div>
          </div>
        </>
      )
    if (page === "Security Findings")
      return (
        <>
          <PageHeader
            title="Security Findings"
            subtitle="Review, investigate, and validate potential RTL security weaknesses."
            action={
              <Button
                icon="download"
                onClick={() => download("rtl-findings-demo.json", findings)}
              >
                Export findings
              </Button>
            }
          />
          <div className="severity-summary">
            {[
              ["Total findings", 24, "neutral"],
              ["Critical", 3, "red"],
              ["High", 4, "amber"],
              ["Medium", 9, "blue"],
              ["Low", 6, "teal"],
              ["Informational", 2, "neutral"],
            ].map(([s, n, c]) => (
              <button
                key={s}
                onClick={() =>
                  setSeverity(
                    s === "Total findings" ? "All severities" : String(s),
                  )
                }
              >
                <span>
                  <i className={`severity-dot ${c}`} />
                  {s}
                </span>
                <strong>{n}</strong>
              </button>
            ))}
          </div>
          <div className="toolbar">
            <Search
              value={query}
              onChange={setQuery}
              placeholder="Search finding, module, or ID…"
            />
            <select
              aria-label="Filter findings by severity"
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
            >
              {[
                "All severities",
                "Critical",
                "High",
                "Medium",
                "Low",
                "Informational",
              ].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <Button icon="filter" onClick={() => setModal("Finding filters")}>
              More filters
            </Button>
            <span className="toolbar-end muted">
              {filteredFindings.length} illustrative findings
            </span>
          </div>
          <Panel
            title="Security Findings"
            action={<Badge tone="neutral">Illustrative data</Badge>}
          >
            {findingsList()}
          </Panel>
        </>
      )
    if (page === "Finding Details")
      return (
        <>
          <button className="back-link" onClick={() => go("Security Findings")}>
            ← All findings
          </button>
          <PageHeader
            title={selectedFinding.title}
            subtitle={`${selectedFinding.id} · ${selectedFinding.project} · Detected in ${findingRunId}`}
            action={
              <Button
                icon="download"
                onClick={() =>
                  download(`${selectedFinding.id}.json`, selectedFinding)
                }
              >
                Export
              </Button>
            }
          />
          <div className="finding-detail-badges">
            <div className="metadata-field">
              <span>Severity</span>
              <Badge>{selectedFinding.severity}</Badge>
            </div>
            <div className="metadata-field">
              <span>Validation</span>
              <Badge>{selectedFinding.status}</Badge>
            </div>
            <span className="muted">
              Confidence:{" "}
              {selectedFinding.severity === "Critical"
                ? "High · 96%"
                : "Moderate · 82%"}
            </span>
            {reviewed && <Badge tone="green">Reviewed</Badge>}
          </div>
          <div className="analysis-config">
            <div>
              <Panel title="Description">
                <div className="prose">
                  <p>
                    {selectedFinding.id === "FIND-0001" ? (
                      <>
                        The protected register can be modified when{" "}
                        <code>lock_enable</code> is asserted. The write path
                        checks <code>write_enable</code> but does not enforce
                        the lock signal, allowing a write to bypass the intended
                        access restriction.
                      </>
                    ) : (
                      {
                        "FIND-0002":
                          "The illustrative debug read path may expose key material without enforcing the intended access restriction. Further evidence is required to validate this potential issue.",
                        "FIND-0003":
                          "A candidate security state transition may occur without satisfying the expected authentication preconditions. This hypothesis remains unresolved.",
                        "FIND-0004":
                          "The illustrative reset sequence may leave sensitive key material uncleared. Review the reset behaviour and supporting property before accepting the finding.",
                        "FIND-0005":
                          "A candidate bus privilege path may lack the expected access-control constraint. This potential issue requires additional validation.",
                      }[selectedFinding.id]
                    )}
                  </p>
                  <div className="info-banner">
                    Illustrative finding only. This is not output from an actual
                    security analysis.
                  </div>
                  <h3>Security impact</h3>
                  <p>
                    {selectedFinding.id === "FIND-0001" ? (
                      <>
                        An actor with access to the register interface could
                        modify protected configuration after the security policy
                        has been locked, potentially weakening the Root of Trust
                        boundary.
                      </>
                    ) : (
                      "If exploitable, this weakness could violate the design’s intended confidentiality or access-control guarantees. The impact remains subject to evidence-based validation."
                    )}
                  </p>
                </div>
              </Panel>
              <Panel
                title="Affected RTL location"
                action={
                  <button
                    className="text-link"
                    onClick={() => {
                      openSource(selectedFinding.module)
                    }}
                  >
                    Open in explorer
                    <Icon name="external" size={14} />
                  </button>
                }
              >
                <div className="code-location">
                  <Icon name="code" size={14} />
                  <code>
                    rtl/{selectedFinding.module}.sv : {selectedFinding.line}
                  </code>
                </div>
                {selectedFinding.id === "FIND-0001" ? (
                  codeViewer()
                ) : (
                  <div className="empty">
                    <Icon name="code" size={24} />
                    <h3>Source excerpt not included</h3>
                    <p>
                      This illustrative finding identifies a source location,
                      but does not include a verified RTL excerpt.
                    </p>
                    <Button onClick={() => openSource(selectedFinding.module)}>
                      Open module in Design Explorer
                    </Button>
                  </div>
                )}
              </Panel>
              <Panel title="Technical evidence">
                <div className="prose">
                  {selectedFinding.id === "FIND-0001" ? (
                    <>
                      <div className="evidence-path">
                        <code>write_enable</code>
                        <Icon name="arrow" />
                        <code>write path</code>
                        <Icon name="arrow" />
                        <code>protected_reg</code>
                      </div>
                      <p>
                        <code>lock_enable</code> has no control dependency on
                        the register write path. The associated candidate
                        property expresses register immutability while the lock
                        is active.
                      </p>
                    </>
                  ) : (
                    <p>
                      Detailed signal-level evidence is not included in this
                      illustrative record. The validation status must not be
                      interpreted as stronger evidence than the record provides.
                    </p>
                  )}
                  <Button
                    icon="activity"
                    disabled={selectedFinding.id !== "FIND-0001"}
                    onClick={() => openWaveform()}
                  >
                    View illustrative waveform
                  </Button>
                </div>
              </Panel>
            </div>
            <div>
              <Panel title="Finding overview">
                <div className="form-body">
                  <dl className="detail-list vertical">
                    <dt>Related module</dt>
                    <dd>
                      <button
                        className="text-link"
                        onClick={() => {
                          openSource(selectedFinding.module)
                        }}
                      >
                        {selectedFinding.module}
                      </button>
                    </dd>
                    <dt>Security property</dt>
                    <dd>
                      <button
                        className="text-link"
                        onClick={() => {
                          setSelectedProperty(
                            [0, 3, 2, 1, null][
                              findings.indexOf(selectedFinding)
                            ],
                          )
                          go("Security Properties")
                        }}
                      >
                        {selectedFinding.id === "FIND-0005"
                          ? "Review candidate properties"
                          : `PROP-00${12 + [0, 3, 2, 1][findings.indexOf(selectedFinding)]} · ${properties[[0, 3, 2, 1][findings.indexOf(selectedFinding)]]?.name}`}
                      </button>
                    </dd>
                    <dt>Weakness category</dt>
                    <dd>{selectedFinding.category}</dd>
                    <dt>Analysis run</dt>
                    <dd>
                      <button
                        className="text-link"
                        onClick={() => openRun(findingRunId)}
                      >
                        {findingRunId}
                      </button>
                    </dd>
                  </dl>
                </div>
              </Panel>
              <Panel title="Review actions">
                <div className="action-stack">
                  <Button
                    icon="check"
                    onClick={() => {
                      setReviewed(true)
                      notify("Finding marked as reviewed in this session.")
                    }}
                  >
                    Mark as reviewed
                  </Button>
                  <Button primary onClick={() => setModal("Accept finding")}>
                    Accept finding
                  </Button>
                  <Button onClick={() => setModal("Reject finding")}>
                    Reject finding
                  </Button>
                  <Button
                    icon="plus"
                    onClick={() => setModal("Create investigation")}
                  >
                    Create investigation
                  </Button>
                </div>
              </Panel>
              <div className="info-banner">
                Severity describes potential impact. Validation status describes
                the available supporting evidence.
              </div>
            </div>
          </div>
        </>
      )
    if (page === "Security Properties")
      return (
        <>
          <PageHeader
            title="Security Properties"
            subtitle="Explore the security expectations inferred from your hardware design."
            action={<Badge tone="neutral">Candidate properties · demo</Badge>}
          />
          <div className="small-metrics">
            {[
              ["Total properties", 32],
              ["Validated", 12],
              ["Violated", 3],
              ["Proposed", 8],
              ["Unresolved", 9],
            ].map(([s, n]) => (
              <div key={s}>
                <span>{s}</span>
                <strong>{n}</strong>
              </div>
            ))}
          </div>
          <div className="info-banner">
            <Icon name="help" />
            <span>
              Generated properties are candidate expectations. Successful
              generation does not establish correctness or validation.
            </span>
          </div>
          <Panel title="Property library">
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Property</th>
                    <th scope="col">Protected asset</th>
                    <th scope="col">Module</th>
                    <th scope="col">Category</th>
                    <th scope="col">Status</th>
                    <th scope="col">Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((p, i) => (
                    <InteractiveRow
                      key={p.name}
                      onClick={() => setSelectedProperty(i)}
                      aria-selected={selectedProperty === i}
                    >
                      <td>
                        <code className="small-id">PROP-00{12 + i}</code>
                        <strong className="block">{p.name}</strong>
                      </td>
                      <td>{p.asset}</td>
                      <td>
                        <code>{p.module}</code>
                      </td>
                      <td>{p.category}</td>
                      <td>
                        <Badge>{p.status}</Badge>
                      </td>
                      <td>{p.confidence}</td>
                    </InteractiveRow>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
          {property && selectedProperty !== null && (
            <Panel
              title={`PROP-00${12 + selectedProperty} · ${property.name}`}
              action={
                <button
                  className="icon-button"
                  aria-label="Close property details"
                  onClick={() => setSelectedProperty(null)}
                >
                  <Icon name="close" />
                </button>
              }
            >
              <div className="prose">
                <div className="metadata-field">
                  <span>Validation result</span>
                  <Badge>{property.status}</Badge>
                </div>
                <h3>Security objective</h3>
                <p>
                  {property.objective} Protected asset: {property.asset} in{" "}
                  <code>{property.module}</code>.
                </p>
                <h4>CANDIDATE PROPERTY EXPRESSION · SVA</h4>
                <pre className="property-code">{property.expression}</pre>
                <div className="relationship-links">
                  <Button
                    icon="code"
                    onClick={() => openSource(property.module)}
                  >
                    Supporting RTL
                  </Button>
                  <Button
                    icon="shield"
                    onClick={() => openFinding(findings[property.finding])}
                  >
                    Related {findings[property.finding].id}
                  </Button>
                  <Button
                    icon="activity"
                    disabled={selectedProperty !== 0}
                    onClick={() => openWaveform()}
                  >
                    Waveform evidence
                  </Button>
                </div>
              </div>
            </Panel>
          )}
        </>
      )
    if (page === "Evidence and Artifacts")
      return (
        <>
          <PageHeader
            title="Evidence and Artifacts"
            subtitle="Trace analysis conclusions back to source, execution, and signal-level evidence."
            action={
              <Button
                icon="download"
                onClick={() =>
                  download("evidence-manifest.json", {
                    project: selectedProject.name,
                    run: "RUN-0023",
                    illustrative: true,
                  })
                }
              >
                Export manifest
              </Button>
            }
          />
          <div className="toolbar">
            <Search
              value={query}
              onChange={setQuery}
              placeholder="Search artifacts…"
            />
            <Badge>All artifact types</Badge>
          </div>
          <Panel title="Evidence library">
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Artifact name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Project</th>
                    <th scope="col">Run</th>
                    <th scope="col">Size</th>
                    <th scope="col">Created</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredArtifacts.map((r) => (
                    <InteractiveRow
                      key={r[0]}
                      onClick={() =>
                        r[1] === "VCD Waveform"
                          ? openWaveform()
                          : setModal(r[0])
                      }
                    >
                      <td>
                        <div className="inline-icon">
                          <Icon
                            name={r[1] === "VCD Waveform" ? "activity" : "file"}
                          />
                          <strong>{r[0]}</strong>
                        </div>
                      </td>
                      <td>{r[1]}</td>
                      <td>Secure SoC Controller</td>
                      <td>
                        <code>RUN-0023</code>
                      </td>
                      <td>{r[2]}</td>
                      <td>12 minutes ago</td>
                    </InteractiveRow>
                  ))}
                </tbody>
              </table>
              {filteredArtifacts.length === 0 && (
                <EmptyState
                  title="No matching artifacts"
                  description="Try another artifact name or clear your search."
                />
              )}
            </div>
          </Panel>
          <div className="info-banner">
            Artifacts shown are illustrative. The waveform viewer is an
            interactive visual prototype, not a simulator.
          </div>
        </>
      )
    if (page === "Waveform Viewer")
      return (
        <>
          <PageHeader
            title="Waveform Viewer"
            subtitle="register_access_trace.vcd · RUN-0023 · Illustrative waveform prototype"
            action={
              <Button icon="shield" onClick={() => openFinding(findings[0])}>
                Related finding
              </Button>
            }
          />
          <div className="wave-toolbar">
            <Button
              disabled={zoom >= 3}
              onClick={() => {
                const next = Math.min(zoom + 0.5, 3)
                setZoom(next)
                setCursor((v) => Math.min(v, 100 / next))
              }}
            >
              + Zoom in
            </Button>
            <Button
              disabled={zoom <= 0.5}
              onClick={() => setZoom(Math.max(zoom - 0.5, 0.5))}
            >
              − Zoom out
            </Button>
            <span className="muted">{zoom}×</span>
            <Button
              onClick={() => {
                setCursor(65)
                setZoom(1)
                notify("Navigated to assertion failure at 1300 ns.")
              }}
            >
              Next event
              <Icon name="chevron" size={14} />
            </Button>
            <span className="toolbar-end">
              <Badge tone="red">Assertion failed · 1300 ns</Badge>
            </span>
          </div>
          <div className="wave-layout">
            <aside className="signal-browser">
              <div className="wave-browser-header">
                <h4>SIGNAL BROWSER</h4>
                <div className="tree-folder">
                  <Icon name="folder" size={15} /> soc_security_top
                </div>
                <div className="tree-folder indent">
                  <Icon name="chip" size={15} /> access_control
                </div>
              </div>
              {waveformSignals.map((s) => (
                <div
                  className={`wave-signal ${
                    selectedSignal === s ? "selected" : ""
                  }`}
                  key={s}
                >
                  <input
                    type="checkbox"
                    aria-label={`Show ${s}`}
                    checked={!hiddenSignals.includes(s)}
                    onChange={() =>
                      setHiddenSignals(
                        hiddenSignals.includes(s)
                          ? hiddenSignals.filter((n) => n !== s)
                          : [...hiddenSignals, s],
                      )
                    }
                  />
                  <button
                    onClick={() => setSelectedSignal(s)}
                    aria-pressed={selectedSignal === s}
                  >
                    <code>{s}</code>
                  </button>
                </div>
              ))}
            </aside>
            <div
              className="wave-main"
              role="slider"
              tabIndex={0}
              aria-label="Waveform time cursor in nanoseconds"
              aria-valuemin={0}
              aria-valuemax={2000 / zoom}
              aria-valuenow={Math.round(cursor * 20)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                  e.preventDefault()
                  setCursor((v) =>
                    Math.max(
                      0,
                      Math.min(
                        100 / zoom,
                        v + (e.key === "ArrowRight" ? 1 : -1),
                      ),
                    ),
                  )
                }
              }}
              onClick={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                setCursor(
                  Math.max(
                    0,
                    Math.min(
                      100 / zoom,
                      Math.round(
                        (((e.clientX - r.left) / r.width) * 100) / zoom,
                      ),
                    ),
                  ),
                )
              }}
            >
              <div className="time-axis">
                {[0, 250, 500, 750, 1000, 1250, 1500, 1750, 2000].map((t) => (
                  <span key={t}>
                    {Math.round(t / zoom)}
                    <small>ns</small>
                  </span>
                ))}
              </div>
              {waveformSignals.map((s, i) => (
                <div
                  className={`wave-track ${
                    hiddenSignals.includes(s) ? "signal-hidden" : ""
                  } ${selectedSignal === s ? "selected" : ""}`}
                  key={s}
                  onClick={() => setSelectedSignal(s)}
                >
                  <svg
                    viewBox={`0 0 ${1000 / zoom} 50`}
                    preserveAspectRatio="none"
                    aria-label={`${s} illustrative waveform`}
                  >
                    <path
                      d={waveformPaths[i]}
                      fill="none"
                      stroke={
                        i === 4
                          ? "var(--status-warning)"
                          : "var(--signal-color)"
                      }
                      strokeWidth="1.7"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  {i === 4 && (
                    <div className="bus-values" aria-hidden="true">
                      <span style={{ left: `${25 * zoom}%` }}>0x00000000</span>
                      <span style={{ left: `${80 * zoom}%` }}>0xDEADBEEF</span>
                    </div>
                  )}
                </div>
              ))}
              <div
                className="wave-cursor"
                style={{ left: `${Math.min(cursor * zoom, 100)}%` }}
              >
                <span>{Math.round(cursor * 20)} ns</span>
              </div>
            </div>
            <aside className="signal-details">
              <h3>Signal details</h3>
              <code>{selectedSignal}</code>
              <dl className="detail-list vertical">
                <dt>Module</dt>
                <dd>
                  <button
                    className="text-link"
                    onClick={() => openSource("access_control")}
                  >
                    access_control
                  </button>
                </dd>
                <dt>Width / Type</dt>
                <dd>
                  {selectedSignal === "protected_reg"
                    ? "32-bit register"
                    : "1-bit logic"}
                </dd>
                <dt>Time cursor</dt>
                <dd>
                  <code>{Math.round(cursor * 20)} ns</code>
                </dd>
                <dt>Illustrative value</dt>
                <dd>
                  <code>
                    {selectedSignal === "protected_reg"
                      ? cursor >= 65
                        ? "0xDEADBEEF"
                        : "0x00000000"
                      : selectedSignal === "clk"
                        ? String(Math.floor(cursor / 2.5) % 2)
                        : selectedSignal === "rst_n"
                          ? cursor >= 10
                            ? "1"
                            : "0"
                          : selectedSignal === "lock_enable"
                            ? cursor >= 62.5
                              ? "1"
                              : "0"
                            : cursor >= 65 && cursor < 70
                              ? "1"
                              : "0"}
                  </code>
                </dd>
              </dl>
              <button
                className="text-link"
                onClick={() => {
                  setSelectedProperty(0)
                  go("Security Properties")
                }}
              >
                PROP-0012
                <Icon name="arrow" size={14} />
              </button>
            </aside>
          </div>
          <div className="dashboard-columns">
            <Panel title="Event timeline">
              <div className="event-list">
                {[
                  ["0 ns", "Reset asserted"],
                  ["200 ns", "Reset released"],
                  ["1250 ns", "Lock bit activated"],
                  ["1300 ns", "Protected register write · assertion failed"],
                ].map(([t, s]) => (
                  <button
                    key={t}
                    onClick={() => {
                      setZoom(1)
                      setCursor(parseInt(t) / 20)
                    }}
                  >
                    <code>{t}</code>
                    <span>{s}</span>
                    <Icon name="chevron" size={13} />
                  </button>
                ))}
              </div>
            </Panel>
            <Panel title="Evidence summary">
              <div className="prose">
                <Badge tone="neutral">Illustrative example</Badge>
                <p>
                  At <strong>1250 ns</strong>, the lock signal became active. At{" "}
                  <strong>1300 ns</strong>, a write request was observed on the
                  protected register interface. The access-control assertion
                  failed.
                </p>
                <button
                  className="text-link"
                  onClick={() => {
                    setSelectedProperty(0)
                    go("Security Properties")
                  }}
                >
                  PROP-0012 · Protected register immutability
                  <Icon name="arrow" size={14} />
                </button>
              </div>
            </Panel>
          </div>
        </>
      )
    if (page === "Dynamic Security Testing")
      return (
        <>
          <PageHeader
            title="Dynamic Security Testing"
            subtitle="Evidence-guided campaigns for hardware security research."
            action={<Badge tone="neutral">Planned engine · Preview only</Badge>}
          />
          <div className="info-banner">
            <Icon name="help" />
            <span>
              The dynamic testing engine is not available. This workspace
              previews the planned hypothesis, test, and evidence workflow. No
              tests can be executed.
            </span>
          </div>
          <div className="small-metrics">
            {[
              ["Campaign", "CAMP-0003"],
              ["Simulator", "Not connected"],
              ["Hypotheses", 8],
              ["Test cases", 24],
              ["Executed", "—"],
              ["Coverage", "—"],
            ].map(([s, n]) => (
              <div key={s}>
                <span>{s}</span>
                <strong>{n}</strong>
              </div>
            ))}
          </div>
          <Panel
            title="Hypothesis Ledger"
            subtitle="Illustrative research hypotheses; not validated results."
          >
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Hypothesis</th>
                    <th scope="col">Security property</th>
                    <th scope="col">Inputs / Observations</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Register write bypasses active lock",
                    "Reset sequence retains key material",
                    "Debug port exposes protected state",
                  ].map((s, i) => (
                    <InteractiveRow
                      key={s}
                      onClick={() => setModal(`HYP-000${8 + i} · ${s}`)}
                    >
                      <td>
                        <code className="small-id">HYP-000{8 + i}</code>
                        <strong className="block">{s}</strong>
                      </td>
                      <td>PROP-00{12 + i}</td>
                      <td>
                        <code>
                          {
                            [
                              "write_enable → protected_reg",
                              "rst_n → key_valid",
                              "debug_en → security_state",
                            ][i]
                          }
                        </code>
                      </td>
                      <td>
                        <Badge>{i === 0 ? "High" : "Medium"}</Badge>
                      </td>
                      <td>
                        <Badge>Proposed</Badge>
                      </td>
                    </InteractiveRow>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
          <div className="dashboard-columns">
            <Panel title="Planned test configuration">
              <div className="form-body">
                {[
                  "Testbench Selection",
                  "Simulator Selection",
                  "Campaign Duration",
                  "Test Strategy",
                  "Coverage Configuration",
                  "Waveform Capture",
                  "Assertion and Oracle Configuration",
                ].map((s) => (
                  <label className="field" key={s}>
                    {s}
                    <input
                      disabled
                      placeholder="Available when the dynamic engine is connected"
                    />
                  </label>
                ))}
              </div>
            </Panel>
            <div>
              <Panel title="Test plan">
                <div className="form-body">
                  {[
                    "Directed Tests",
                    "Boundary Tests",
                    "State Transition Tests",
                    "Sequence-Based Tests",
                    "Mutation Tests",
                    "Coverage-Guided Tests",
                    "Failure-Guided Tests",
                  ].map((s) => (
                    <label className="check-label" key={s}>
                      <input type="checkbox" disabled />
                      {s}
                      <Badge>Planned</Badge>
                    </label>
                  ))}
                </div>
              </Panel>
              <Panel title="Execution results">
                <div className="empty">
                  <Icon name="activity" size={28} />
                  <h3>No tests executed</h3>
                  <p>
                    Results, oracle outcomes, and coverage will appear when a
                    testing engine is connected.
                  </p>
                  <Button onClick={() => openWaveform()}>
                    Explore example waveform
                  </Button>
                </div>
              </Panel>
            </div>
          </div>
        </>
      )
    if (page === "Knowledge Base")
      return (
        <>
          <PageHeader
            title="Knowledge Base"
            subtitle="Manage the technical knowledge sources used during security analysis."
            action={
              <Button
                primary
                icon="plus"
                onClick={() => setModal("Add knowledge source")}
              >
                Add Knowledge Source
              </Button>
            }
          />
          <div className="knowledge-collections">
            {[
              [
                "book",
                "Research & publications",
                "12 sources",
                "Technical studies and papers",
              ],
              [
                "shield",
                "Weaknesses & standards",
                "8 sources",
                "CWE, security patterns and guidelines",
              ],
              [
                "folder",
                "Project documentation",
                "16 sources",
                "Specifications, register maps and models",
              ],
              [
                "check",
                "Reviewed analysis history",
                "6 sources",
                "Accepted findings and properties",
              ],
            ].map(([icon, name, count, desc]) => (
              <button
                className="collection-card"
                key={name}
                aria-pressed={selectedCollection === name}
                onClick={() =>
                  setSelectedCollection(selectedCollection === name ? "" : name)
                }
              >
                <span className="metric-icon purple">
                  <Icon name={icon as IconName} />
                </span>
                <strong>{name}</strong>
                <p>{desc}</p>
                <span>
                  {count}
                  <Icon name="arrow" size={14} />
                </span>
              </button>
            ))}
          </div>
          <div className="info-banner">
            <Icon name="book" />
            <span>
              Retrieved knowledge supplies context, not proof. Findings must be
              supported by current RTL structure and execution evidence.
            </span>
          </div>
          <Panel
            title="Knowledge sources"
            action={
              <Button
                icon="activity"
                disabled={indexing}
                onClick={() => {
                  setIndexing(true)
                  window.setTimeout(() => {
                    setIndexing(false)
                    notify("Demo knowledge index refreshed.")
                  }, 2200)
                }}
              >
                {indexing ? "Indexing demo…" : "Refresh demo index"}
              </Button>
            }
          >
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Document name</th>
                    <th scope="col">Collection</th>
                    <th scope="col">Source type</th>
                    <th scope="col">Indexing status</th>
                    <th scope="col">Sections</th>
                    <th scope="col">Last updated</th>
                  </tr>
                </thead>
                <tbody>
                  {documents
                    .map((d, i) => ({ d, i }))
                    .filter(
                      ({ i }) =>
                        !selectedCollection ||
                        documentCollections[i] === selectedCollection,
                    )
                    .map(({ d, i }) => (
                      <InteractiveRow key={d} onClick={() => setModal(d)}>
                        <td>
                          <div className="inline-icon">
                            <Icon name="file" />
                            <strong>{d}</strong>
                          </div>
                        </td>
                        <td>{documentCollections[i]}</td>
                        <td>{i === 1 ? "Reference" : "Document"}</td>
                        <td>
                          <Badge>{indexing ? "Indexing" : "Indexed"}</Badge>
                        </td>
                        <td>{[42, 128, 18, 24][i % 4]}</td>
                        <td>Today</td>
                      </InteractiveRow>
                    ))}
                </tbody>
              </table>
            </div>
            {selectedCollection && (
              <div className="panel-note">
                <span>Collection: {selectedCollection}</span>
                <Button onClick={() => setSelectedCollection("")}>
                  Show all sources
                </Button>
              </div>
            )}
            {selectedCollection &&
              !documentCollections.includes(selectedCollection) && (
                <div className="empty">
                  <Icon name="book" size={24} />
                  <h3>No sources in this collection</h3>
                  <p>
                    Add a knowledge source to this collection to review it here.
                  </p>
                </div>
              )}
          </Panel>
          <Panel title="Retrieval activity">
            <div className="prose">
              <div className="retrieval-row">
                <code>RUN-0023</code>
                <Icon name="arrow" size={15} />
                <span>SoC security architecture · §4.2 Register locking</span>
                <Badge>PROP-0012</Badge>
              </div>
              <p className="muted">
                Retrieved to contextualise register access requirements. RTL
                evidence remains the basis for validation.
              </p>
            </div>
          </Panel>
        </>
      )
    if (page === "Reports")
      return (
        <>
          <PageHeader
            title="Reports"
            subtitle="Document your assessment with traceable evidence and clear limitations."
            action={
              <Button
                primary
                icon="plus"
                onClick={() => setModal("Generate report")}
              >
                Generate Report
              </Button>
            }
          />
          <Panel title="Assessment reports">
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Report name</th>
                    <th scope="col">Project</th>
                    <th scope="col">Run</th>
                    <th scope="col">Type</th>
                    <th scope="col">Generated</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {reportNames.map((r, i) => (
                    <InteractiveRow
                      key={r}
                      onClick={() => {
                        setSelectedReport(i)
                        go("Report Preview")
                      }}
                    >
                      <td>
                        <div className="inline-icon">
                          <Icon name="report" />
                          <strong>{r}</strong>
                        </div>
                      </td>
                      <td>{reportProjectNames[i]}</td>
                      <td>
                        <code>RUN-00{23 - i}</code>
                      </td>
                      <td>
                        {i === 2
                          ? "Security Property Report"
                          : "Static Security Analysis"}
                      </td>
                      <td>Oct {24 - i}, 2025</td>
                      <td>
                        <Badge tone="green">Ready</Badge>
                      </td>
                    </InteractiveRow>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </>
      )
    if (page === "Report Preview")
      return (
        <>
          <PageHeader
            title="Report Preview"
            subtitle={`${reportNames[selectedReport]} · Illustrative assessment`}
            action={
              <>
                <Button
                  icon="download"
                  onClick={() =>
                    download("assessment-demo.json", {
                      project: reportProject.name,
                      findings: reportFindings,
                      limitations:
                        "Illustrative demo, no actual analysis performed.",
                    })
                  }
                >
                  Export JSON
                </Button>
                <Button icon="download" onClick={() => window.print()}>
                  Print / Save PDF
                </Button>
              </>
            }
          />
          <article className="report-paper">
            <div className="report-brand">
              <Icon name="chip" /> RTL SECURITY ANALYZER
              <span>ASSESSMENT REPORT · 2025-024</span>
            </div>
            <div className="eyebrow">STATIC SECURITY ASSESSMENT</div>
            <h1>{reportProject.name}</h1>
            <p className="muted">
              Revision a3f72c1 · October 24, 2025 · Internal research
            </p>
            <div className="report-rule" />
            <h2>01. Executive summary</h2>
            <p>
              This illustrative assessment demonstrates security review of the
              {reportProject.name}. The example covers register access controls,
              security state transitions, and sensitive data handling.
            </p>
            <div className="info-banner">
              DEMONSTRATION ONLY — No actual security assessment was performed.
            </div>
            <h2>02. Analysis configuration & design</h2>
            <p>
              Static checks · {reportProject.files} source files ·{" "}
              {reportProject.lang}. Scope includes data-flow, control-flow,
              known weakness detection, and property discovery. Formal
              validation was unavailable.
            </p>
            <h2>03. Security properties & findings</h2>
            {reportFindings.slice(0, 3).map((f) => (
              <div className="report-finding" key={f.id}>
                <code>{f.id}</code>
                <strong>{f.title}</strong>
                <Badge>{f.severity}</Badge>
              </div>
            ))}
            {reportFindings.length === 0 && (
              <p>
                No reportable findings are included in this illustrative report.
                This does not establish that the design is secure.
              </p>
            )}
            <h2>04. Evidence & traceability</h2>
            <p>
              {selectedReport === 0
                ? "Source snapshot a3f72c1, candidate property PROP-0012, and the illustrative register access waveform are linked to FIND-0001."
                : "Supporting source and evidence artifacts are not included in this illustrative report preview."}
            </p>
            <h2>05. Limitations and assumptions</h2>
            <p>
              Static checks do not prove the absence of security weaknesses.
              Dynamic testing and formal validation are not available in this
              prototype. No reportable findings would not establish that the
              design is secure.
            </p>
            <h2>06. Tool & version information</h2>
            <p>
              RTL Security Analyzer · UI prototype v0.1. All records in this
              report are illustrative.
            </p>
          </article>
        </>
      )
    if (page === "Logs")
      return (
        <>
          <PageHeader
            title="Logs & Monitoring"
            subtitle="Inspect operational events, security audits, and analysis evidence."
            action={
              <Button
                icon="download"
                onClick={() =>
                  download("analysis-logs-demo.json", {
                    run: "RUN-0023",
                    messages: [
                      "Source validation complete",
                      "16 modules elaborated",
                      "Security property discovery complete",
                    ],
                  })
                }
              >
                Export logs
              </Button>
            }
          />
          <Tabs
            items={["Operational", "Security audit", "Analysis & evidence"]}
            value={logTab}
            onChange={setLogTab}
            label="Log category"
          />
          <div className="toolbar">
            <Search
              value={query}
              onChange={setQuery}
              placeholder="Search log messages…"
            />
            <select
              aria-label="Filter logs by level"
              value={logLevel}
              onChange={(e) => setLogLevel(e.target.value)}
            >
              {["All levels", "INFO", "WARNING", "ERROR", "DEBUG"].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <Panel
            title={`${logTab} logs`}
            action={<Badge tone="green">Local workspace</Badge>}
          >
            <div className="table-scroll">
              <table className="logs-table">
                <thead>
                  <tr>
                    <th scope="col">Timestamp</th>
                    <th scope="col">Level</th>
                    <th scope="col">Component</th>
                    <th scope="col">Run ID</th>
                    <th scope="col">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleLogs.map(({ s, i }) => (
                    <InteractiveRow
                      key={s}
                      onClick={() => setModal(`Log entry · ${s}`)}
                    >
                      <td>2025-10-24 10:2{i}:04</td>
                      <td>
                        <Badge
                          tone={s.includes("unavailable") ? "amber" : "blue"}
                        >
                          {s.includes("unavailable") ? "WARNING" : "INFO"}
                        </Badge>
                      </td>
                      <td>
                        {logTab === "Operational"
                          ? "workspace"
                          : "static-engine"}
                      </td>
                      <td>RUN-0023</td>
                      <td>{s}</td>
                    </InteractiveRow>
                  ))}
                </tbody>
              </table>
              {visibleLogs.length === 0 && (
                <EmptyState
                  title="No matching log entries"
                  description="Try a different log level, category, or search term."
                />
              )}
            </div>
          </Panel>
          <div className="panel-note">
            <Icon name="shield" size={15} /> Sensitive values and credentials
            must never appear in logs. Demo messages contain no secrets.
          </div>
        </>
      )
    if (page === "Settings")
      return (
        <>
          <PageHeader
            title="Settings"
            subtitle="Configure your local analysis environment and workspace preferences."
          />
          <div className="settings-layout">
            <aside className="settings-nav">
              {[
                "General",
                "Analysis Engines",
                "AI & Agent",
                "Knowledge & RAG",
                "Storage",
                "Logs & Retention",
                "Appearance",
              ].map((s) => (
                <button
                  className={setting === s ? "active" : ""}
                  key={s}
                  onClick={() => setSetting(s)}
                >
                  {s}
                </button>
              ))}
            </aside>
            <Panel
              title={setting}
              subtitle="Configuration preview. Analysis services are not connected and these values are not applied."
            >
              <div className="form-body">
                {setting === "General" && (
                  <>
                    {field("Application name", "RTL Security Analyzer")}
                    {field("Default workspace", "Local workspace")}
                    {field(
                      "Default project location",
                      "~/rtl-security/projects",
                    )}
                    <label className="field">
                      Language
                      <select>
                        <option>English</option>
                      </select>
                    </label>
                  </>
                )}
                {setting === "Analysis Engines" && (
                  <>
                    {[
                      "Static Security Analysis engine",
                      "Parser & elaborator",
                      "Simulator",
                      "Formal verification solver",
                    ].map((s) => (
                      <div className="tool-status" key={s}>
                        <span>{s}</span>
                        <Badge>Not connected</Badge>
                      </div>
                    ))}
                    {field("Maximum concurrent runs", "2")}
                    {field("Execution memory limit", "8 GB")}
                    <div className="info-banner">
                      This prototype does not execute analysis tools.
                    </div>
                  </>
                )}
                {setting === "AI & Agent" && (
                  <>
                    <div className="info-banner">
                      <Icon name="shield" />
                      Your RTL stays local by default. Remote AI must be
                      explicitly enabled and configured before any source data
                      leaves this workspace.
                    </div>
                    <label className="field">
                      AI provider
                      <select>
                        <option>Local model (not connected)</option>
                        <option>Remote provider (requires consent)</option>
                      </select>
                    </label>
                    {field("Local model endpoint", "http://localhost:11434")}
                    <label className="check-label">
                      <input type="checkbox" /> Allow RTL context to be sent to
                      a remote provider
                    </label>
                    {field("Maximum execution budget", "Not configured")}
                    <label className="check-label">
                      <input type="checkbox" defaultChecked /> Require approval
                      for external tool access
                    </label>
                  </>
                )}
                {setting === "Knowledge & RAG" && (
                  <>
                    {field(
                      "Embedding model",
                      "Local embeddings (not connected)",
                    )}
                    {field("Vector storage", "~/rtl-security/knowledge/index")}
                    {field("Chunk size", "512 tokens")}
                    {field("Retrieval limit", "8 sections")}
                    <Button
                      onClick={() =>
                        notify(
                          "Re-indexing requires a connected knowledge service.",
                        )
                      }
                    >
                      Re-index knowledge sources
                    </Button>
                  </>
                )}
                {setting === "Storage" && (
                  <>
                    {[
                      "Application data",
                      "Database",
                      "RTL projects",
                      "Artifacts",
                      "Waveforms",
                      "Reports",
                    ].map((s) =>
                      field(
                        `${s} location`,
                        `~/rtl-security/${s.toLowerCase().replace(" ", "-")}`,
                      ),
                    )}
                    <div className="storage-bar">
                      <div />
                      <span>2.4 GB of 128 GB · illustrative usage</span>
                    </div>
                  </>
                )}
                {setting === "Logs & Retention" && (
                  <>
                    <div className="info-banner">
                      <Icon name="shield" />
                      Automatic cleanup applies only to eligible logs. Source
                      RTL, reports, active-run evidence, and reproducibility
                      artifacts remain protected.
                    </div>
                    {[
                      "Operational logs",
                      "Security audit logs",
                      "Analysis & evidence logs",
                    ].map((s) =>
                      field(
                        `${s} path`,
                        `~/rtl-security/logs/${s.split(" ")[0].toLowerCase()}`,
                      ),
                    )}
                    <label className="field">
                      Cleanup schedule
                      <select>
                        <option>Every week</option>
                      </select>
                    </label>
                    {field("Additional cleanup threshold", "2 GB")}
                    {field("Log retention", "90 days")}
                    <label className="check-label">
                      <input type="checkbox" defaultChecked /> Enable automatic
                      cleanup of eligible logs
                    </label>
                    <p className="muted">
                      Last cleanup: October 20 · Next cleanup: October 27 ·
                      Usage: 184 MB (illustrative)
                    </p>
                  </>
                )}
                {setting === "Appearance" && (
                  <>
                    <label className="field">
                      Theme
                      <select>
                        <option>Light</option>
                        <option disabled>Dark (coming soon)</option>
                      </select>
                    </label>
                    <label className="field">
                      Density
                      <select>
                        <option>Comfortable</option>
                        <option disabled>
                          Compact (not available in this prototype)
                        </option>
                      </select>
                    </label>
                    <label className="check-label">
                      <input
                        type="checkbox"
                        checked={collapsed}
                        onChange={(e) => setCollapsed(e.target.checked)}
                      />{" "}
                      Collapse sidebar
                    </label>
                  </>
                )}
                <div className="form-actions">
                  <Button primary disabled>
                    Configuration preview only
                  </Button>
                </div>
              </div>
            </Panel>
          </div>
        </>
      )
    if (page === "Design System")
      return (
        <>
          <PageHeader
            title="Design System"
            subtitle="Shared foundations for a considered engineering workspace."
          />
          <Panel title="Semantic colour system">
            <div className="token-grid">
              {[
                "purple",
                "blue",
                "teal",
                "green",
                "amber",
                "red",
                "neutral",
              ].map((c) => (
                <div key={c}>
                  <span className={`token-swatch ${c}`} />
                  <strong>{c}</strong>
                </div>
              ))}
            </div>
          </Panel>
          <div className="dashboard-columns">
            <Panel title="Typography & spacing">
              <div className="prose">
                <h1>Page heading</h1>
                <h2>Section heading</h2>
                <p>Body text — Clear, readable technical information.</p>
                <code>soc_security_top · JetBrains Mono</code>
                <p className="muted">
                  8-point spacing · Subtle borders · 6px control radius
                </p>
              </div>
            </Panel>
            <Panel title="Components">
              <div className="prose">
                <div className="relationship-links">
                  <Button primary>Primary action</Button>
                  <Button>Secondary action</Button>
                </div>
                <div className="relationship-links">
                  {[
                    "Critical",
                    "High",
                    "Completed",
                    "Running",
                    "Potential Issue",
                  ].map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
                {field("Input label", "Enter a value…")}
              </div>
            </Panel>
          </div>
        </>
      )
    return (
      <>
        <PageHeader
          title="Documentation"
          subtitle="A local-first workflow for evidence-based RTL security research."
        />
        <Panel title="Your investigation workflow">
          <div className="prose">
            <h3>From design to evidence</h3>
            <p>
              Create a project, upload RTL, configure the selected static
              checks, and inspect a run’s pipeline. Review findings separately
              from their severity, and trace each finding to source, a candidate
              property, and supporting evidence.
            </p>
            <h3>About this prototype</h3>
            <p>
              All findings, runs, waveforms, metrics, and assessments are
              illustrative. No HDL parser, static engine, simulator, AI
              provider, or knowledge service is connected. Newly created demo
              projects remain in memory until the page is reloaded. Settings are
              a configuration preview and are not applied.
            </p>
            <div className="relationship-links">
              <Button onClick={() => go("Design System")}>
                View design system
              </Button>
              <Button primary onClick={() => go("Dashboard")}>
                Back to workspace
              </Button>
            </div>
          </div>
        </Panel>
      </>
    )
  }
  function addFiles(incoming: File[]) {
    const valid = incoming.filter((f) =>
      /\.(v|sv|vh|svh|vhd|vhdl|zip)$/i.test(f.name),
    )
    setFileError(
      valid.length !== incoming.length
        ? "Unsupported file detected. Choose an HDL source file or ZIP archive."
        : "",
    )
    setFiles((prev) => [
      ...prev,
      ...valid.filter((f) => !prev.some((p) => p.name === f.name)),
    ])
  }

  return (
    <div className={`app ${collapsed ? "sidebar-collapsed" : ""}`}>
      <aside className="sidebar">
        <button className="brand" onClick={() => go("Dashboard")}>
          <span className="brand-symbol">
            <Icon name="chip" size={23} />
          </span>
          <div>
            <strong>RTL Security</strong>
            <span>ANALYZER</span>
          </div>
        </button>
        <button
          className="workspace-selector"
          onClick={() => setModal("Switch workspace")}
        >
          <span className="workspace-avatar">L</span>
          <div>
            <strong>Local workspace</strong>
            <span>Personal workspace</span>
          </div>
          <span className="double-chevron">
            ⌃<br />⌄
          </span>
        </button>
        <span className="nav-label">WORKSPACE</span>
        <nav>
          {navigation.map((n) => (
            <button
              title={n.label}
              key={n.label}
              aria-current={activeSection === n.label ? "page" : undefined}
              className={`nav-item ${
                activeSection === n.label ? "active" : ""
              }`}
              onClick={() => go(n.label)}
            >
              <Icon name={n.icon} size={18} />
              <span>{n.label}</span>
              {n.count && (
                <b
                  className={n.label === "Analysis Runs" ? "running-count" : ""}
                >
                  {n.count}
                </b>
              )}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="local-status">
            <span className="status-dot" />
            <span>Local environment</span>
            <Badge tone="neutral">v0.1.0</Badge>
          </div>
          {[
            { label: "Logs", icon: "terminal" },
            { label: "Settings", icon: "settings" },
            { label: "Help & Documentation", icon: "help" },
          ].map((n) => (
            <button
              key={n.label}
              title={n.label}
              aria-current={activeSection === n.label ? "page" : undefined}
              className={`nav-item ${
                activeSection === n.label ? "active" : ""
              }`}
              onClick={() => go(n.label)}
            >
              <Icon name={n.icon as IconName} />
              <span>{n.label}</span>
              {n.label.includes("Help") && <Icon name="external" size={13} />}
            </button>
          ))}
          <div className="sidebar-user">
            <span className="avatar">AL</span>
            <div>
              <strong>Alex Laurent</strong>
              <span>Local workspace</span>
            </div>
            <button
              title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              aria-expanded={!collapsed}
              className="icon-button"
              onClick={() => setCollapsed(!collapsed)}
            >
              <Icon name="collapse" size={17} />
            </button>
          </div>
        </div>
      </aside>
      <div className="main-shell">
        <header className="topbar">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <button
              className="mobile-menu icon-button"
              onClick={() => setCollapsed(!collapsed)}
              aria-label="Toggle sidebar"
            >
              <Icon name="collapse" />
            </button>
            <Icon name="grid" size={15} />
            <button onClick={() => go("Dashboard")}>Workspace</button>
            <Icon name="chevron" size={12} />
            {activeSection !== page && activeSection !== "Projects" && (
              <>
                <button onClick={() => go(activeSection)}>
                  {activeSection}
                </button>
                <Icon name="chevron" size={12} />
              </>
            )}
            {activeSection === "Projects" && (
              <>
                <button onClick={() => go("Projects")}>Projects</button>
                <Icon name="chevron" size={12} />
              </>
            )}
            {projectContext && (
              <>
                <button
                  className="breadcrumb-project"
                  onClick={() => go("Project Workspace")}
                >
                  {selectedProject.name}
                </button>
                <Icon name="chevron" size={12} />
              </>
            )}
            <span aria-current="page">{title}</span>
          </nav>
          <div className="topbar-right">
            <button
              className="global-search"
              onClick={() => {
                setSearchQuery("")
                setGlobalSearch(true)
              }}
            >
              <Icon name="search" size={15} />
              <span>Search anything…</span>
              <kbd>⌘ K</kbd>
            </button>
            <span className="system-online">
              <span className="status-dot" />
              Demo workspace
            </span>
            <span className="topbar-separator" />
            <button
              className="icon-button notification-button"
              title="Notifications"
              onClick={() => setModal("Notifications")}
            >
              <Icon name="bell" size={18} />
              <i />
            </button>
            <button
              className="avatar small-avatar"
              onClick={() => setModal("Workspace profile")}
            >
              AL
            </button>
          </div>
        </header>
        <main>{renderContent()}</main>
      </div>
      {toast && (
        <div className="toast" role="status">
          <span className="toast-check">
            <Icon name="check" size={16} />
          </span>
          {toast}
          <button
            className="icon-button"
            onClick={() => setToast("")}
            aria-label="Dismiss"
          >
            <Icon name="close" size={14} />
          </button>
        </div>
      )}
      {globalSearch && (
        <Dialog
          className="search-dialog"
          label="Global search"
          onClose={() => setGlobalSearch(false)}
        >
          <Search
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search projects, findings, modules, pages…"
          />
          <div className="search-results">
            {searchResults.map((x) => (
              <button key={x.name} onClick={x.action}>
                <Icon name="search" size={15} />
                <div>
                  <strong>{x.name}</strong>
                  <small>{x.sub}</small>
                </div>
                <Icon name="arrow" size={14} />
              </button>
            ))}
            {searchResults.length === 0 && (
              <div className="empty">
                <Icon name="search" size={24} />
                <h3>No matching results</h3>
                <p>Try a project name, finding ID, or workspace page.</p>
              </div>
            )}
          </div>
          <div className="panel-note">
            Search illustrative workspace data <kbd>esc</kbd> to close
          </div>
        </Dialog>
      )}
      {modal && (
        <Dialog labelledBy="modal-title" onClose={() => setModal("")}>
          <div className="panel-heading">
            <h2 id="modal-title">{modal}</h2>
            <button
              className="icon-button"
              aria-label="Close dialog"
              onClick={() => setModal("")}
            >
              <Icon name="close" size={18} />
            </button>
          </div>
          <div className="form-body">
            {modal === "Add knowledge source" ? (
              <>
                {field(
                  "Document title",
                  "e.g. Secure register specification",
                  docName,
                  setDocName,
                )}
                <label className="field">
                  Collection
                  <select
                    value={documentCollection}
                    onChange={(e) => setDocumentCollection(e.target.value)}
                  >
                    <option>Project documentation</option>
                    <option>Research & publications</option>
                    <option>Weaknesses & standards</option>
                    <option>Reviewed analysis history</option>
                  </select>
                </label>
                <label className="field">
                  Document
                  <input
                    type="file"
                    accept=".pdf,.md,.txt,.docx"
                    onChange={(e) => {
                      if (e.target.files?.[0])
                        setDocName(e.target.files[0].name)
                    }}
                  />
                </label>
                <div className="info-banner">
                  This demo adds an illustrative source record. Document
                  contents are not uploaded or indexed.
                </div>
              </>
            ) : modal === "Notifications" ? (
              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-icon green">
                    <Icon name="check" size={15} />
                  </span>
                  <div>
                    <strong>Analysis completed</strong>
                    <span>RUN-0023 · 12 illustrative findings</span>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon blue">
                    <Icon name="book" size={15} />
                  </span>
                  <div>
                    <strong>Knowledge source indexed</strong>
                    <span>SoC security architecture v2.1.pdf</span>
                  </div>
                </div>
              </div>
            ) : modal === "Switch workspace" ? (
              <>
                <div className="workspace-choice">
                  <span className="workspace-avatar">L</span>
                  <div>
                    <strong>Local workspace</strong>
                    <p>Personal · Active</p>
                  </div>
                  <Icon name="check" />
                </div>
                <p className="muted">
                  This demo includes a single local workspace.
                </p>
              </>
            ) : modal === "Workspace profile" ? (
              <>
                <div className="workspace-choice">
                  <span className="avatar">AL</span>
                  <div>
                    <strong>Alex Laurent</strong>
                    <p>Hardware security researcher</p>
                  </div>
                </div>
                <p className="muted">
                  Local workspace · No remote account connected.
                </p>
              </>
            ) : modal === "Finding filters" ? (
              <>
                <label className="field">
                  Severity
                  <select
                    value={severity}
                    onChange={(e) => setSeverity(e.target.value)}
                  >
                    {[
                      "All severities",
                      "Critical",
                      "High",
                      "Medium",
                      "Low",
                      "Informational",
                    ].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <p className="muted">
                  Use the search field to filter by module, finding ID, or
                  title.
                </p>
                <label className="field">
                  Validation status
                  <select
                    value={validation}
                    onChange={(e) => setValidation(e.target.value)}
                  >
                    {[
                      "All validation statuses",
                      "Validated Violation",
                      "Potential Issue",
                      "Unresolved Hypothesis",
                      "Unsupported / Uncheckable",
                    ].map((status) => (
                      <option key={status}>{status}</option>
                    ))}
                  </select>
                </label>
              </>
            ) : modal === "Generate report" ? (
              <>
                <label className="field">
                  Report type
                  <select>
                    <option>Static Analysis Report</option>
                    <option>Security Findings Report</option>
                    <option>Security Property Report</option>
                    <option>Combined Analysis Report</option>
                    <option disabled>
                      Dynamic Testing Report (unavailable)
                    </option>
                  </select>
                </label>
                {field("Report name", "Secure SoC Security Assessment")}
                <div className="info-banner">
                  The generated preview uses illustrative data only.
                </div>
              </>
            ) : [
                "Accept finding",
                "Reject finding",
                "Create investigation",
              ].includes(modal) ? (
              <>
                <p>
                  Record your review decision for{" "}
                  <strong>{selectedFinding.id}</strong>. This action is retained
                  only for this demo session.
                </p>
                <label className="field">
                  Review notes
                  <textarea
                    placeholder="Summarise the evidence supporting your decision…"
                    rows={4}
                  />
                </label>
              </>
            ) : (
              <>
                <Badge tone="neutral">Illustrative artifact</Badge>
                <p className="modal-description">
                  This record is linked to Secure SoC Controller and RUN-0023.
                  Source provenance, related properties, and supporting evidence
                  are available within the connected workspace.
                </p>
                <dl className="detail-list">
                  <dt>Source</dt>
                  <dd>Local workspace</dd>
                  <dt>Record type</dt>
                  <dd>
                    {modal.startsWith("Log entry")
                      ? "Log entry"
                      : modal.startsWith("HYP-")
                        ? "Security hypothesis"
                        : "Workspace artifact"}
                  </dd>
                  <dt>Provenance</dt>
                  <dd>Prototype data</dd>
                </dl>
              </>
            )}
          </div>
          <div className="wizard-footer">
            <Button onClick={() => setModal("")}>Close</Button>
            {![
              "Notifications",
              "Switch workspace",
              "Workspace profile",
            ].includes(modal) &&
              [
                "Add knowledge source",
                "Generate report",
                "Finding filters",
                "Accept finding",
                "Reject finding",
                "Create investigation",
              ].includes(modal) && (
                <Button
                  primary
                  disabled={modal === "Add knowledge source" && !docName.trim()}
                  onClick={() => {
                    if (modal === "Add knowledge source") {
                      setDocuments([...documents, docName])
                      setDocumentCollections([
                        ...documentCollections,
                        documentCollection,
                      ])
                      setSelectedCollection("")
                      setDocName("")
                      setIndexing(true)
                      setTimeout(() => {
                        setIndexing(false)
                        notify("Illustrative source indexed.")
                      }, 2000)
                    } else if (modal === "Generate report") {
                      setSelectedReport(0)
                      go("Report Preview")
                    } else if (
                      [
                        "Accept finding",
                        "Reject finding",
                        "Create investigation",
                      ].includes(modal)
                    ) {
                      setReviewed(true)
                      notify(
                        `${
                          modal === "Create investigation"
                            ? "Investigation created"
                            : modal === "Accept finding"
                              ? "Finding accepted"
                              : "Finding rejected"
                        } in this demo session.`,
                      )
                    }
                    setModal("")
                  }}
                >
                  {modal === "Add knowledge source"
                    ? "Add & index source"
                    : modal === "Generate report"
                      ? "Generate preview"
                      : modal === "Finding filters"
                        ? "Apply filters"
                        : "Confirm"}
                </Button>
              )}
          </div>
        </Dialog>
      )}
    </div>
  )
}
function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle: string
  action?: ReactNode
}) {
  return (
    <div className="page-heading standard">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="header-actions">{action}</div>
    </div>
  )
}
function Search({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (s: string) => void
  placeholder: string
}) {
  return (
    <div className="search-input">
      <Icon name="search" size={16} />
      <input
        aria-label={placeholder}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          className="icon-button"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          <Icon name="close" size={13} />
        </button>
      )}
    </div>
  )
}
