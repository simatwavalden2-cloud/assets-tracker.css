


import { useMemo, useState } from "react";

type IconName =
  | "grid"
  | "box"
  | "users"
  | "map"
  | "chart"
  | "settings"
  | "search"
  | "bell"
  | "plus"
  | "download"
  | "filter"
  | "chevron"
  | "arrow"
  | "laptop"
  | "monitor"
  | "phone"
  | "camera"
  | "more"
  | "help"
  | "menu"
  | "close";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    box: <><path d="m21 8-9-5-9 5 9 5 9-5Z" /><path d="m3 8 9 5 9-5v9l-9 5-9-5V8Z" /><path d="M12 13v9" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    map: <><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" /><path d="M9 3v15M15 6v15" /></>,
    chart: <><path d="M3 3v18h18" /><path d="m7 16 4-5 4 3 5-7" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.08A1.7 1.7 0 0 0 9 19.37a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15 1.7 1.7 0 0 0 3.08 14H3v-4h.08A1.7 1.7 0 0 0 4.63 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63 1.7 1.7 0 0 0 10 3.08V3h4v.08A1.7 1.7 0 0 0 15 4.63a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9 1.7 1.7 0 0 0 20.92 10H21v4h-.08A1.7 1.7 0 0 0 19.4 15Z" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M14 21h-4" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    download: <><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></>,
    filter: <path d="M4 6h16M7 12h10M10 18h4" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    arrow: <path d="m5 12 14 0m-5-5 5 5-5 5" />,
    laptop: <><rect x="4" y="5" width="16" height="11" rx="1" /><path d="M2 19h20" /></>,
    monitor: <><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></>,
    phone: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
    camera: <><path d="M14.5 5 13 3h-2L9.5 5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4.5Z" /><circle cx="12" cy="12" r="4" /></>,
    more: <><circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" /></>,
    help: <><circle cx="12" cy="12" r="9" /><path d="M9.8 9a2.5 2.5 0 1 1 3.3 2.4c-.7.3-1.1.8-1.1 1.6M12 17h.01" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };
  return <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

const assets = [
  { id: "AST-02941", name: "MacBook Pro 14”", type: "Laptop", icon: "laptop" as IconName, person: "Olivia Martin", initials: "OM", location: "New York HQ", status: "In use", updated: "2h ago" },
  { id: "AST-02940", name: "Dell UltraSharp 27", type: "Monitor", icon: "monitor" as IconName, person: "Unassigned", initials: "—", location: "London Office", status: "Available", updated: "5h ago" },
  { id: "AST-02939", name: "iPhone 15 Pro", type: "Mobile", icon: "phone" as IconName, person: "Marcus Chen", initials: "MC", location: "San Francisco", status: "In use", updated: "Yesterday" },
  { id: "AST-02938", name: "Sony A7 IV", type: "Camera", icon: "camera" as IconName, person: "Priya Shah", initials: "PS", location: "Creative Studio", status: "Maintenance", updated: "Yesterday" },
  { id: "AST-02937", name: "MacBook Air M3", type: "Laptop", icon: "laptop" as IconName, person: "Unassigned", initials: "—", location: "New York HQ", status: "Available", updated: "May 18" },
];

const nav = [
  { label: "Overview", icon: "grid" as IconName },
  { label: "Assets", icon: "box" as IconName },
  { label: "People", icon: "users" as IconName },
  { label: "Locations", icon: "map" as IconName },
  { label: "Reports", icon: "chart" as IconName },
];

export default function App() {
  const [activeNav, setActiveNav] = useState("Overview");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const visibleAssets = useMemo(() => assets.filter((asset) => {
    const matchesQuery = `${asset.name} ${asset.id} ${asset.person}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (filter === "All" || asset.status === filter);
  }), [query, filter]);

  function notify(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2400);
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><span /><span /><span /></div>
          <span className="brand-name">SATIAH ALGO</span>
          <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close navigation"><Icon name="close" /></button>
        </div>

        <nav className="nav-list" aria-label="Primary navigation">
          <p className="nav-label">Workspace</p>
          {nav.map((item) => (
            <button
              key={item.label}
              className={`nav-item ${activeNav === item.label ? "active" : ""}`}
              onClick={() => { setActiveNav(item.label); setMenuOpen(false); }}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {item.label === "Assets" && <span className="nav-count">2,481</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="storage-card">
            <div className="storage-icon"><Icon name="box" size={18} /></div>
            <p className="storage-title">Asset capacity</p>
            <p className="storage-copy">2,481 of 3,000 assets</p>
            <div className="progress"><span /></div>
            <button onClick={() => notify("Upgrade options opened")}>Upgrade plan <Icon name="arrow" size={15} /></button>
          </div>
          <button className="nav-item"><Icon name="settings" /><span>Settings</span></button>
          <button className="nav-item"><Icon name="help" /><span>Help & support</span></button>
          <div className="profile">
            <div className="avatar avatar-photo">JD</div>
            <div><strong>Jamie Davis</strong><span>Administrator</span></div>
            <Icon name="more" />
          </div>
        </div>
      </aside>
      {menuOpen && <button className="overlay" aria-label="Close menu" onClick={() => setMenuOpen(false)} />}

      <main className="main">
        <header className="topbar">
          <div className="mobile-brand">
            <button className="icon-button" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Icon name="menu" /></button>
            <span>SATIAH ALGO</span>
          </div>
          <label className="global-search">
            <Icon name="search" size={19} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search assets, people, locations..." />
            <kbd>⌘ K</kbd>
          </label>
          <div className="top-actions">
            <button className="icon-button notification" aria-label="Notifications" onClick={() => notify("You’re all caught up")}><Icon name="bell" /><span /></button>
            <div className="top-avatar">JD</div>
          </div>
        </header>

        <div className="content">
          <section className="page-heading">
            <div>
              <p className="eyebrow">Workspace overview</p>
              <h1>Good morning, Jamie</h1>
              <p>Here’s what’s happening with your assets today.</p>
            </div>
            <div className="heading-actions">
              <button className="secondary-button" onClick={() => notify("Report exported successfully")}><Icon name="download" size={18} /> Export</button>
              <button className="primary-button" onClick={() => notify("New asset workflow opened")}><Icon name="plus" size={18} /> Add asset</button>
            </div>
          </section>

          <section className="stat-grid" aria-label="Asset summary">
            <article className="stat-card">
              <div className="stat-top"><span className="stat-icon indigo"><Icon name="box" /></span><span className="trend positive">↗ 8.2%</span></div>
              <p>Total assets</p><div className="stat-value">2,481</div><span className="stat-context">vs. 2,293 last month</span>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span className="stat-icon blue"><Icon name="users" /></span><span className="trend positive">↗ 3.1%</span></div>
              <p>Assigned</p><div className="stat-value">1,847</div><span className="stat-context">74.4% of all assets</span>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span className="stat-icon green"><Icon name="grid" /></span><span className="trend neutral">No change</span></div>
              <p>Available</p><div className="stat-value">526</div><span className="stat-context">Ready to assign</span>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span className="stat-icon amber"><Icon name="settings" /></span><span className="trend negative">↗ 4 this week</span></div>
              <p>Maintenance</p><div className="stat-value">108</div><span className="stat-context">4.3% of all assets</span>
            </article>
          </section>

          <section className="insights-grid">
            <article className="panel utilization">
              <div className="panel-heading">
                <div><h2>Asset utilization</h2><p>Assigned vs. available assets</p></div>
                <button className="select-button">Last 6 months <Icon name="chevron" size={15} /></button>
              </div>
              <div className="chart-area">
                <div className="y-axis"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div>
                <div className="chart">
                  <div className="gridlines"><i /><i /><i /><i /><i /></div>
                  <svg viewBox="0 0 600 180" preserveAspectRatio="none" aria-label="Utilization increasing from 68% to 74%">
                    <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#635bff" stopOpacity=".22" /><stop offset="1" stopColor="#635bff" stopOpacity="0" /></linearGradient></defs>
                    <path className="chart-fill" d="M0 105 C60 108 80 85 130 90 S210 105 260 75 S345 70 390 57 S470 63 520 40 S570 38 600 26 V180 H0Z" />
                    <path className="chart-line" d="M0 105 C60 108 80 85 130 90 S210 105 260 75 S345 70 390 57 S470 63 520 40 S570 38 600 26" />
                  </svg>
                  <div className="x-axis"><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span></div>
                </div>
              </div>
              <div className="chart-legend"><span><i className="legend-dot indigo-dot" /> Assigned <strong>74.4%</strong></span><span><i className="legend-dot gray-dot" /> Available <strong>21.2%</strong></span></div>
            </article>

            <article className="panel category-panel">
              <div className="panel-heading"><div><h2>Assets by category</h2><p>Current distribution</p></div><button className="more-button"><Icon name="more" /></button></div>
              <div className="donut-wrap">
                <div className="donut"><div><strong>2,481</strong><span>Total</span></div></div>
                <div className="category-list">
                  <div><span><i className="cat-dot purple" /> Computers</span><strong>1,284</strong></div>
                  <div><span><i className="cat-dot blue-dot" /> Displays</span><strong>612</strong></div>
                  <div><span><i className="cat-dot cyan" /> Mobile</span><strong>385</strong></div>
                  <div><span><i className="cat-dot slate" /> Other</span><strong>200</strong></div>
                </div>
              </div>
            </article>
          </section>

          <section className="panel inventory-panel">
            <div className="inventory-heading">
              <div><h2>Recent assets</h2><p>Manage and track your latest inventory</p></div>
              <div className="inventory-actions">
                <label className="table-search"><Icon name="search" size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search assets" /></label>
                <div className="filter-wrap">
                  <button className="secondary-button compact"><Icon name="filter" size={17} /> {filter === "All" ? "Filter" : filter}</button>
                  <div className="filter-menu">
                    {["All", "In use", "Available", "Maintenance"].map((item) => <button key={item} onClick={() => setFilter(item)}>{item}</button>)}
                  </div>
                </div>
              </div>
            </div>
            {selected.length > 0 && <div className="selection-bar"><strong>{selected.length} selected</strong><button onClick={() => setSelected([])}>Clear selection</button></div>}
            <div className="table-scroll">
              <table>
                <thead><tr><th><input type="checkbox" aria-label="Select all assets" checked={selected.length === visibleAssets.length && visibleAssets.length > 0} onChange={(e) => setSelected(e.target.checked ? visibleAssets.map((a) => a.id) : [])} /></th><th>Asset</th><th>Assigned to</th><th>Location</th><th>Status</th><th>Last updated</th><th /></tr></thead>
                <tbody>
                  {visibleAssets.map((asset) => (
                    <tr key={asset.id}>
                      <td><input type="checkbox" aria-label={`Select ${asset.name}`} checked={selected.includes(asset.id)} onChange={() => setSelected((current) => current.includes(asset.id) ? current.filter((id) => id !== asset.id) : [...current, asset.id])} /></td>
                      <td><div className="asset-cell"><span className={`asset-thumb ${asset.type.toLowerCase()}`}><Icon name={asset.icon} /></span><div><strong>{asset.name}</strong><span>{asset.id} · {asset.type}</span></div></div></td>
                      <td><div className="person-cell"><span className={`avatar ${asset.initials === "—" ? "empty" : ""}`}>{asset.initials}</span><span>{asset.person}</span></div></td>
                      <td>{asset.location}</td>
                      <td><span className={`status ${asset.status.toLowerCase().replace(" ", "-")}`}><i />{asset.status}</span></td>
                      <td>{asset.updated}</td>
                      <td><button className="more-button" aria-label={`Actions for ${asset.name}`}><Icon name="more" /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {visibleAssets.length === 0 && <div className="empty-state"><Icon name="search" /><strong>No assets found</strong><span>Try a different search or filter.</span></div>}
            </div>
            <div className="table-footer"><span>Showing {visibleAssets.length} of 2,481 assets</span><button onClick={() => setActiveNav("Assets")}>View all assets <Icon name="arrow" size={16} /></button></div>
          </section>
        </div>
      </main>
      {toast && <div className="toast"><span>✓</span>{toast}</div>}
    </div>
  );
}
