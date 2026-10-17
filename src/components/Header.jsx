import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { AVATAR_URL, LOGO_URL } from "../site"

const LINKS = [
  { to: "/", label: "首页", end: true },
  { to: "/about", label: "关于我" },
  { to: "/projects", label: "项目案例" },
  { to: "/projects", hash: "#notes", label: "实践笔记", badge: "V2 待上线" },
  { to: "/contact", label: "联系我" },
]

function isCurrent(link, pathname, hash) {
  if (link.hash) return pathname === "/projects" && hash === "#notes"
  if (link.to === "/projects") return pathname === "/projects" && hash !== "#notes"
  if (link.end) return pathname === "/"
  return pathname === link.to
}

export default function Header() {
  const { pathname, hash } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 max-w-[1280px] mx-auto px-margin md:px-margin-md lg:px-margin-lg flex items-center justify-between">
        <div className="flex items-center gap-space-sm min-w-0">
          <img alt="" className="h-8 w-auto object-contain" src={LOGO_URL} />
          <Link className="flex items-center gap-space-xs min-w-0" to="/" onClick={() => setOpen(false)}>
            <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface font-bold">
              Alex.AI
            </span>
            <span className="hidden sm:inline font-code-sm text-code-sm px-1.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant">
              PM & Automation
            </span>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-space-md">
          {LINKS.map((link) => {
            const active = isCurrent(link, pathname, hash)
            return (
              <div key={link.label} className="relative flex items-center">
                <Link
                  className={
                    active
                      ? "px-3 py-1.5 transition-colors text-on-surface font-semibold bg-surface-container-high rounded-lg"
                      : "px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
                  }
                  to={{ pathname: link.to, hash: link.hash }}
                >
                  {link.label}
                </Link>
                {link.badge ? (
                  <span className="font-label-sm text-[10px] uppercase font-bold px-1.5 rounded-full bg-surface-container-highest text-secondary tracking-wide ml-0.5">
                    {link.badge}
                  </span>
                ) : null}
              </div>
            )
          })}
        </nav>
        <div className="flex items-center gap-space-sm sm:gap-space-md">
          <Link
            className="inline-flex items-center justify-center font-label-md text-label-md font-semibold bg-secondary-container text-on-secondary-fixed px-4 py-2 rounded-lg hover:opacity-90 transition-all shadow-[0_1px_3px_0_rgba(16,24,40,0.04)]"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            预约交流
          </Link>
          <img
            alt=""
            className="w-8 h-8 rounded-full object-cover ring-2 ring-surface-container-highest"
            src={AVATAR_URL}
          />
          <button
            aria-expanded={open}
            aria-label={open ? "关闭菜单" : "打开菜单"}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-on-surface hover:bg-surface-container-high"
            type="button"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="material-symbols-outlined text-[22px]">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav className="lg:hidden border-t border-surface-container-high bg-surface px-margin py-space-sm flex flex-col">
          {LINKS.map((link) => {
            const active = isCurrent(link, pathname, hash)
            return (
              <Link
                key={link.label}
                className={
                  active
                    ? "px-3 py-2.5 rounded-lg text-on-surface font-semibold bg-surface-container-high"
                    : "px-3 py-2.5 rounded-lg text-on-surface-variant"
                }
                to={{ pathname: link.to, hash: link.hash }}
                onClick={() => setOpen(false)}
              >
                {link.label}
                {link.badge ? (
                  <span className="ml-2 font-label-sm text-[10px] uppercase font-bold px-1.5 rounded-full bg-surface-container-highest text-secondary">
                    {link.badge}
                  </span>
                ) : null}
              </Link>
            )
          })}
        </nav>
      ) : null}
    </header>
  )
}
