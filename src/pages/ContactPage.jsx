import { useState } from 'react'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('idle')

  function copyEmail() {
    navigator.clipboard.writeText('alex.ai.pm@example.com').then(() => {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    window.setTimeout(() => {
      setStatus('sent')
      event.target.reset()
    }, 900)
  }
  return (
    <main className="w-full pt-16 bg-background min-h-screen">
      <div className="flex flex-col w-full">
        {/* Subtle decorative ambient background glow */}
        <div className="relative w-full max-w-[1280px] mx-auto px-margin md:px-margin-md lg:px-margin-lg py-space-xl">
          {/* Top Header & Guidance Section */}
          <section className="relative z-10 max-w-3xl mb-space-2xl">
            <div className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-code-sm text-code-sm font-semibold tracking-wide mb-space-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75">
                </span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary">
                </span>
              </span>
              AVAILABLE FOR COLLABORATION &amp; INQUIRIES
            </div>
            <h1 className="font-display-xl text-display-xl-mobile lg:text-display-xl text-on-surface tracking-tight mb-space-md">
              建立连接 ·
              <span className="text-secondary">
                探讨 AI 商业化
              </span>
              与落地实践
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              无论您是寻找 AI 顾问咨询、团队合作、项目交流，还是优质全职合作机会，都欢迎随时沟通。
            </p>
          </section>
          {/* Main Asymmetric Dual-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-start">
            {/* Left Column: Direct Connection Channels & Specs (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              {/* Email Quick-Action Card */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-space-sm">
                  <div className="flex items-center gap-space-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[20px] text-secondary">
                      mail
                    </span>
                    <span className="font-label-md text-label-md font-semibold">
                      工作邮箱直达
                    </span>
                  </div>
                  <span className="font-code-sm text-code-sm px-2 py-0.5 rounded-full bg-surface-container-low text-secondary font-medium">
                    首选方式
                  </span>
                </div>
                <div className="bg-surface-container-low p-space-md rounded-lg flex items-center justify-between gap-space-sm mt-space-xs">
                  <span className="font-code-sm text-code-sm font-semibold text-on-surface select-all truncate" id="target-email">
                    alex.ai.pm@example.com
                  </span>
                  <button className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold px-2.5 py-1.5 rounded bg-surface-container-lowest hover:bg-secondary-container hover:text-on-secondary-fixed text-on-surface shadow-sm transition-all duration-200 shrink-0" id="copy-btn" type="button" onClick={copyEmail}>
                    <span className="material-symbols-outlined text-[15px]" id="copy-icon">
                      {copied ? "check" : "content_copy"}
                    </span>
                    <span id="copy-text">
                      {copied ? "已复制！" : "一键复制"}
                    </span>
                  </button>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                  通常在 2-4 小时内快速查阅与回复。
                </p>
              </div>
              {/* WeChat & Social Interactive Card */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-space-xs text-on-surface-variant mb-space-md">
                  <span className="material-symbols-outlined text-[20px] text-secondary">
                    forum
                  </span>
                  <h2 className="font-label-md text-label-md font-semibold text-on-surface">
                    微信与社群互联
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-space-md bg-surface-container-low p-space-md rounded-lg">
                  <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-surface-container-highest shadow-inner">
                    <img className="w-full h-full object-cover" data-alt="High-resolution, clear, clean monochrome vector-style QR code badge for modern WeChat connectivity on a clean white background with mint green corners and minimalist aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBUcnse1mSF_dmvDKbxYpcTuJcbwfcVkEZ0G6OACb6zIvVS7RJ4c-9mofYFWNTktcFQe5ORq8hMqUw2txr6cSammyXw3XaKxVpVd7neOUsLoS35zYj-Oj8k3joI5_drTFfSi1Kwgc5jH3og4UJPNzEDFHcWoF1ubiKAJtb6vdS8RJFU_SIlrsXaOkbyMM-9jP-v2LFIROMWg-lY3nOQBVAImvh83KWQW4la4hsNDrMRbqkFj4CifVm" />
                  </div>
                  <div className="flex flex-col gap-1 text-center sm:text-left min-w-0">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                      个人微信 / WECHAT ID
                    </span>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">
                      alex_ai_prod
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      添加时请注明「姓名 + 来意/机构」
                    </span>
                  </div>
                </div>
              </div>
              {/* GitHub & Tech Ecosystem Node */}
              <a className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between" href="https://github.com" rel="noopener noreferrer" target="_blank">
                <div className="flex items-center gap-space-md">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-secondary-container group-hover:text-on-secondary-fixed transition-colors">
                    <span className="material-symbols-outlined text-[22px]">
                      terminal
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                      GitHub 开源与实验仓库
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      查看 Agent 架构代码、工作流模版及自动化脚本
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 group-hover:text-secondary transition-transform duration-200">
                  arrow_outward
                </span>
              </a>
              {/* Location & Availability Specs Matrix */}
              <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-md">
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-[20px] text-secondary mt-0.5">
                    pin_drop
                  </span>
                  <div>
                    <div className="font-label-md text-label-md font-semibold text-on-surface">
                      地理基准与协同模式
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      中国 · 支持全远程 / 北京 / 深圳 / 全球异步敏捷协同
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-[20px] text-secondary mt-0.5">
                    schema
                  </span>
                  <div>
                    <div className="font-label-md text-label-md font-semibold text-on-surface">
                      常见深入探讨方向
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-space-xs">
                      <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">
                        AI 落地可行性论证
                      </span>
                      <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">
                        产品战略与路线图 (Roadmap)
                      </span>
                      <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">
                        Multi-Agent 原型构建
                      </span>
                      <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">
                        自动化工作流重构
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Structured Inquiry / Booking Form (7 Cols) */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-sm">
              <div className="flex items-center justify-between pb-space-md mb-space-lg bg-surface-container-lowest">
                <div className="flex flex-col">
                  <div className="flex items-center gap-space-xs text-secondary font-code-sm text-code-sm uppercase font-bold tracking-wider">
                    <span className="material-symbols-outlined text-[18px]">
                      calendar_add_on
                    </span>
                    INQUIRY &amp; BOOKING FORM
                  </div>
                  <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-1">
                    预约交流与详细留言
                  </h2>
                </div>
                <span className="material-symbols-outlined text-surface-container-highest text-[36px] hidden sm:block">
                  contract_edit
                </span>
              </div>
              <form className="flex flex-col gap-space-lg" id="contact-form" onSubmit={handleSubmit}>
                {/* Name and Team Field */}
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md font-semibold text-on-surface flex items-center justify-between" htmlFor="name">
                    <span>
                      您的称呼 / 团队与企业名称
                      <span className="text-secondary">
                        *
                      </span>
                    </span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant">
                      Name &amp; Org
                    </span>
                  </label>
                  <input className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all duration-200" id="name" placeholder="例如：李先生 / 智元科技 产品团队" required type="text" />
                </div>
                {/* Email / Contact Method Field */}
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md font-semibold text-on-surface flex items-center justify-between" htmlFor="contact-input">
                    <span>
                      您的邮箱 / 常用联系方式
                      <span className="text-secondary">
                        *
                      </span>
                    </span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant">
                      Email / WeChat / Phone
                    </span>
                  </label>
                  <input className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all duration-200" id="contact-input" placeholder="name@company.com 或 微信 / 电话号码" required type="text" />
                </div>
                {/* Interaction Type Dropdown */}
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md font-semibold text-on-surface flex items-center justify-between" htmlFor="type">
                    <span>
                      交流类型 / 诉求定位
                      <span className="text-secondary">
                        *
                      </span>
                    </span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant">
                      Subject Category
                    </span>
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none px-4 py-3 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all duration-200 pr-10 font-body-md text-body-md" defaultValue="" id="type" required>
                      <option disabled value="">
                        请选择希望交流的主要方向...
                      </option>
                      <option value="ai-consulting">
                        AI 商业化与产品顾问咨询 (AI Product Advisory)
                      </option>
                      <option value="full-time">
                        全职 / 长期合伙伙伴工作机会 (Full-Time Opportunity)
                      </option>
                      <option value="agent-build">
                        Agent 智能体与自动化系统原型搭建 (Prototype &amp; Build)
                      </option>
                      <option value="tech-exchange">
                        行业洞察、技术交流与社区互通 (General Exchange)
                      </option>
                      <option value="other">
                        其他合作需求 (Other Collaboration)
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[20px]">
                        keyboard_arrow_down
                      </span>
                    </div>
                  </div>
                </div>
                {/* Description & Expectations */}
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md font-semibold text-on-surface flex items-center justify-between" htmlFor="message">
                    <span>
                      简要描述与需求期望
                      <span className="text-secondary">
                        *
                      </span>
                    </span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant">
                      Project Scope &amp; Timeline
                    </span>
                  </label>
                  <textarea className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all duration-200 font-body-md text-body-md resize-none" id="message" placeholder="请简要介绍您的业务痛点、期望解决的问题或希望达成的协作目标（如：预计周期、现有产品形态、特定大模型技术选型要求等）..." required rows="5">
                  </textarea>
                </div>
                {/* Submit Button Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      verified_user
                    </span>
                    <span className="font-body-sm text-body-sm">
                      数据采用加密传输，绝不向第三方透露
                    </span>
                  </div>
                  <button className={`w-full sm:w-auto inline-flex items-center justify-center gap-space-xs font-label-md text-label-md font-semibold bg-secondary-container text-on-secondary-fixed px-6 py-3.5 rounded-lg hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ${status === "sending" ? "opacity-70 cursor-not-allowed" : ""}`} disabled={status === "sending"} id="submit-btn" type="submit">
                    {status === "sending" ? (
                      <>
                        <span className="material-symbols-outlined text-[18px] animate-spin">
                          refresh
                        </span>
                        <span>
                          投递中...
                        </span>
                      </>
                    ) : status === "sent" ? (
                      <>
                        <span className="material-symbols-outlined text-[18px]">
                          done
                        </span>
                        <span>
                          已提交
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[18px]">
                          send
                        </span>
                        <span>
                          提交交流预约
                        </span>
                      </>
                    )}
                  </button>
                </div>
                {/* Form Feedback Toast Alert */}
                <div className={`${status === "sent" ? "flex" : "hidden"} p-space-md rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm items-center gap-space-sm`} id="form-feedback">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    check_circle
                  </span>
                  <span id="feedback-text">
                    感谢您的留言！已成功投递，将在 24 小时内与您邮件联络。
                  </span>
                </div>
              </form>
            </div>
          </div>
          {/* Bottom Reassurance Banner */}
          <section className="mt-space-2xl bg-surface-container-low rounded-xl p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-full bg-secondary-container/40 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  history_toggle_off
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  敏捷响应与服务承诺
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  所有正式来信与咨询均承诺在 24 小时内给予详实反馈，所有商业创意与对话信息严格保密。
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md shrink-0">
              <span className="inline-flex items-center gap-1 font-code-sm text-code-sm text-on-surface-variant font-medium">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  lock
                </span>
                Non-Disclosure &amp; High Privacy
              </span>
            </div>
          </section>
        </div>
        {/* Inline Micro-interactions Script */}
      </div>
    </main>
  )
}
