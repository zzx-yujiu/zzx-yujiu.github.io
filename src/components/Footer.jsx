import { Link } from "react-router-dom"
import { GITHUB_URL } from "../site"

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest mt-space-3xl shadow-[0_-1px_6px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1280px] mx-auto px-margin md:px-margin-md lg:px-margin-lg py-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex flex-col gap-space-xs text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-space-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed-dim opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            <span className="font-code-sm text-code-sm text-secondary font-medium tracking-wide">
              Open to AI collaboration & opportunities
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2025 Alex.AI • AI Product Management & Autonomous Workflows. Built with precision.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
          <Link className="flex items-center gap-1 hover:text-on-surface transition-colors" to="/contact">
            <span className="material-symbols-outlined text-[16px]">mail</span>
            邮箱直达
          </Link>
          <a
            className="flex items-center gap-1 hover:text-on-surface transition-colors"
            href={GITHUB_URL}
            rel="noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[16px]">terminal</span>
            GitHub
          </a>
          <Link className="flex items-center gap-1 hover:text-on-surface transition-colors" to="/contact">
            <span className="material-symbols-outlined text-[16px]">forum</span>
            微信公众号
          </Link>
          <button
            className="flex items-center gap-1 hover:text-on-surface transition-colors ml-space-sm"
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
            顶部
          </button>
        </div>
      </div>
    </footer>
  )
}
