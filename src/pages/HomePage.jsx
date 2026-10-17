import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  function copyListedEmail() {
    navigator.clipboard.writeText('alex.ai.pm@example.com').then(() => {
      setCopiedEmail(true)
      window.setTimeout(() => setCopiedEmail(false), 2000)
    })
  }
  return (
    <main className="w-full pt-16 bg-background min-h-screen">
      <div className="flex flex-col w-full">
        {/* HERO SECTION */}
        <section className="relative w-full max-w-[1280px] mx-auto px-margin md:px-margin-md lg:px-margin-lg pt-space-xl pb-space-3xl overflow-hidden" id="hero">
          {/* Ambient tech glow subtle background shapes */}
          <div className="absolute -top-24 right-1/4 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none">
          </div>
          <div className="absolute top-1/2 -left-20 w-80 h-80 bg-primary-fixed/40 rounded-full blur-3xl pointer-events-none">
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-space-lg">
              {/* Status Indicator Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75">
                  </span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary">
                  </span>
                </span>
                <span className="font-code-sm text-code-sm text-secondary font-semibold tracking-tight">
                  目前开放顾问咨询与优质全职机会
                </span>
              </div>
              {/* Main Narrative Headline */}
              <div className="flex flex-col gap-space-sm">
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">
                  Alex • Product Architect &amp; Operator
                </p>
                <h1 className="font-display-xl text-display-xl-mobile lg:text-display-xl text-on-surface tracking-tight">
                  AI 产品经理
                  <br className="hidden sm:inline" />
                  <span className="text-secondary tracking-normal font-extrabold">
                    ×
                  </span>
                  AI 应用与自动化实践
                </h1>
              </div>
              {/* Subtitle */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                专注于大模型工程落地、智能客服系统、CSM Copilot 与企业自主自动化工作流。致力于以严谨的产品方法论与系统化 Agent 编排，连接尖端 AI 技术与真实业务的高 ROI 商业价值。
              </p>
              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs w-full sm:w-auto">
                <a className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-semibold px-6 py-3 rounded-lg hover:opacity-95 shadow-sm transition-all hover:-translate-y-0.5" href="#projects">
                  <span>
                    探索代表项目
                  </span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_downward
                  </span>
                </a>
                <Link className="inline-flex items-center justify-center gap-2 bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold px-6 py-3 rounded-lg shadow-sm hover:bg-surface-container-low transition-all hover:-translate-y-0.5" to="/contact">
                  <span>
                    预约深度交流
                  </span>
                  <span className="material-symbols-outlined text-[18px]">
                    calendar_today
                  </span>
                </Link>
              </div>
              {/* Live Metrics Micro-Bar */}
              <div className="w-full pt-space-sm grid grid-cols-3 gap-space-sm">
                <div className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm">
                  <span className="font-code-sm text-code-sm text-on-surface-variant block mb-1">
                    实践跨度
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    7+
                    <span className="text-xs font-normal text-on-surface-variant">
                      年
                    </span>
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm">
                  <span className="font-code-sm text-code-sm text-on-surface-variant block mb-1">
                    人效提增均值
                  </span>
                  <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                    40%+
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm">
                  <span className="font-code-sm text-code-sm text-on-surface-variant block mb-1">
                    每日调用承载
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    100w+
                    <span className="text-xs font-normal text-on-surface-variant">
                      Tok
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/* Right Visual Column: Avatar & Floating Metric Badges */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] aspect-square rounded-3xl bg-surface-container-high p-4 shadow-xl">
                {/* Main Headshot Image */}
                <div className="w-full h-full rounded-2xl overflow-hidden bg-surface-container-lowest relative">
                  <img alt="Professional Portrait of Alex, AI Product Manager" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6NyPkDCvdOmhsd4jrpVMn3t5C6qUP07_Kwyx6n9eNt3QXUO13lKYlExw_oAsaDH0MtJ8JcWXU_ibfbQsmvv8caLIVJZkceAPGsyDy-IYsRcnO1rUfzOC_6gGOMqV2eyYxLa4rAP7P4JRKOVg_t9E3gVVyc16NJSCtH0nOWYcIhWo-Ijfi-_h-o7vr4JhxuBvpbZfUVIPRHwWrWmauwhlhGgKiiG8B54VGkWfeZq0pcMAJ6pI3juqm" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent">
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-3.5 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-label-md text-label-md font-bold text-on-surface">
                          Alex Zhang
                        </h3>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          Lead AI PM &amp; Workflow Engineer
                        </p>
                      </div>
                      <div className="h-8 w-8 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
                        <span className="material-symbols-outlined text-[20px]">
                          smart_toy
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Badge: Top Left */}
                <div className="absolute -top-4 -left-6 bg-surface-container-lowest p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-fade-in">
                  <div className="w-10 h-10 rounded-xl bg-secondary-fixed-dim/30 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">
                      bolt
                    </span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      企业工作流降本
                    </p>
                    <p className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      65% 周期压缩
                    </p>
                  </div>
                </div>
                {/* Floating Badge: Bottom Right */}
                <div className="absolute -bottom-5 -right-4 bg-surface-container-lowest p-3.5 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-secondary-fixed">
                    <span className="material-symbols-outlined">
                      psychology
                    </span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      多智能体分发集群
                    </p>
                    <p className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      99.2% 调度准确率
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CORE ADVANTAGES & SUPERPOWERS */}
        <section className="w-full bg-surface-container-low py-space-3xl" id="about">
          <div className="max-w-[1280px] mx-auto px-margin md:px-margin-md lg:px-margin-lg flex flex-col gap-space-2xl">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs max-w-xl">
                <div className="flex items-center gap-2 text-secondary font-label-md text-label-md font-semibold tracking-wider uppercase">
                  <span className="material-symbols-outlined text-[18px]">
                    verified
                  </span>
                  <span>
                    Core Superpowers
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  以工程严谨度，解构大模型与实际业务鸿沟
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                跳出单一技术炫技，坚持以指标 ROI、高容错与可维护性驱动落地，将复杂的模型与算力封装为无缝易用的生产力工具。
              </p>
            </div>
            {/* 4 Superpower Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="flex flex-col gap-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">
                      schema
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-code-sm text-code-sm text-secondary font-semibold">
                      01 / ARCHITECTURE
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      业务与大模型架构拆解
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    深入业务链路，完成场景适配性评估。精准进行闭源/开源模型选型、Hybrid RAG 混合检索架构搭建与精细化 Prompt 工程编排。
                  </p>
                </div>
                <div className="pt-space-md flex flex-wrap gap-1.5">
                  <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant">
                    RAG Pipeline
                  </span>
                  <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant">
                    模型路由评测
                  </span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="flex flex-col gap-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">
                      account_tree
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-code-sm text-code-sm text-secondary font-semibold">
                      02 / ORCHESTRATION
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      自动化与 Agent 协同编排
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    熟练通过 Dify、LangChain、Make 及自研 Python 脚本组装多智能体。实现异步事件触发、条件分支决策与工具 API 的闭环调用。
                  </p>
                </div>
                <div className="pt-space-md flex flex-wrap gap-1.5">
                  <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant">
                    Multi-Agent
                  </span>
                  <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant">
                    Dify/Make
                  </span>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="flex flex-col gap-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">
                      query_stats
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-code-sm text-code-sm text-secondary font-semibold">
                      03 / METRICS &amp; ROI
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      数据驱动与 ROI 价值衡量
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    建立端到端业务监控沙盘，量化首解率、拦截率、人力工时释放度与单 Token 商业获益，拒绝无明确价值沉淀的概念炒作。
                  </p>
                </div>
                <div className="pt-space-md flex flex-wrap gap-1.5">
                  <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant">
                    人效量化
                  </span>
                  <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant">
                    Token成本优化
                  </span>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="flex flex-col gap-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">
                      shield
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-code-sm text-code-sm text-secondary font-semibold">
                      04 / GOVERNANCE
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      工程化脱敏与安全合规
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    构筑严密的企业级数据防护栏：动态敏感实体清洗、合规性审计过滤网关、幻觉校验对抗机制及自动化人工兜底降级方案。
                  </p>
                </div>
                <div className="pt-space-md flex flex-wrap gap-1.5">
                  <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant">
                    脱敏守卫
                  </span>
                  <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant">
                    幻觉压制
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FEATURED PROJECTS SHOWCASE */}
        <section className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-md lg:px-margin-lg py-space-3xl flex flex-col gap-space-2xl" id="projects">
          {/* Header with tab chips */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <span className="font-code-sm text-code-sm text-secondary font-semibold tracking-wider uppercase">
                Case Studies &amp; Artifacts
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                核心代表落地案例速览
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                所有数据与业务主体均遵循保密协定完成脱敏处理，侧重验证产品架构与落地成效。
              </p>
            </div>
            <div className="inline-flex p-1 bg-surface-container rounded-xl gap-1">
              <button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest font-label-sm text-label-sm font-semibold text-on-surface shadow-sm">
                全量案例 (3)
              </button>
              <button className="px-3.5 py-1.5 rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors">
                智能客服
              </button>
              <button className="px-3.5 py-1.5 rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors">
                Copilot 助手
              </button>
            </div>
          </div>
          {/* 3 High-Impact Showcase Cards */}
          <div className="flex flex-col gap-space-xl">
            {/* Project 1: Multi-Turn Customer Service AI Platform */}
            <article className="bg-surface-container-lowest rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center group">
              {/* Interactive Node Graph Preview / Graphic */}
              <div className="lg:col-span-6 bg-surface-container-low rounded-2xl p-6 flex flex-col justify-between h-[360px] relative overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <span className="font-code-sm text-code-sm text-secondary font-bold px-2.5 py-1 rounded bg-secondary-container/40">
                    PRODUCTION RUNNING
                  </span>
                  <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                    <span className="h-2 w-2 rounded-full bg-secondary">
                    </span>
                    99.8% Availability
                  </div>
                </div>
                {/* Conceptual Pipeline Vector Illustration */}
                <div className="my-auto flex flex-col gap-4 relative z-10">
                  <div className="flex items-center justify-between gap-2">
                    <div className="bg-surface-container-lowest px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2 text-xs font-semibold text-on-surface">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        chat
                      </span>
                      进线消息流
                    </div>
                    <span className="material-symbols-outlined text-outline-variant text-[20px]">
                      trending_flat
                    </span>
                    <div className="bg-surface-container-lowest px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2 text-xs font-semibold text-on-surface">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        psychology
                      </span>
                      意图消歧引擎
                    </div>
                    <span className="material-symbols-outlined text-outline-variant text-[20px]">
                      trending_flat
                    </span>
                    <div className="bg-surface-container-lowest px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2 text-xs font-semibold text-on-surface">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        alt_route
                      </span>
                      工单分流/自解
                    </div>
                  </div>
                  {/* Mini chart / stats block */}
                  <div className="bg-surface-container-lowest/80 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between mt-2">
                    <div>
                      <span className="text-xs text-on-surface-variant block">
                        首轮解决率 (FCR)
                      </span>
                      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        78.4%
                      </span>
                    </div>
                    <div className="h-8 w-px bg-surface-container-highest">
                    </div>
                    <div>
                      <span className="text-xs text-on-surface-variant block">
                        平均响应时长
                      </span>
                      <span className="font-headline-sm text-headline-sm font-bold text-secondary">
                        1.2 秒
                      </span>
                    </div>
                    <div className="h-8 w-px bg-surface-container-highest">
                    </div>
                    <div>
                      <span className="text-xs text-on-surface-variant block">
                        人工转接降幅
                      </span>
                      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        -52%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-on-surface-variant z-10 pt-2">
                  <span>
                    数据脱敏标准: PCI-DSS &amp; 动态实体哈希
                  </span>
                  <span className="font-code-sm">
                    v2.4.0 Engine
                  </span>
                </div>
              </div>
              {/* Project Detail Text */}
              <div className="lg:col-span-6 flex flex-col gap-space-md">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-surface-container font-code-sm text-code-sm text-on-surface">
                    LLM Gateway
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container font-code-sm text-code-sm text-on-surface">
                    Hybrid RAG
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container font-code-sm text-code-sm text-on-surface">
                    Dify Workflows
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-secondary-container/50 font-code-sm text-code-sm text-on-secondary-container font-semibold">
                    自解率 78%
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                  企业级智能多轮客服与意图编排平台
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  重构高并发客服场景下的知识检索与转派链路。依托意图识别分类器和动态上下文压缩技术，使复杂售后场景自主解决率跃升至 78%，单月沉淀超 12 万条自动化服务单。
                </p>
                <div className="grid grid-cols-2 gap-4 py-2">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      核心职责
                    </span>
                    <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                      PRD主导 / 检索知识库架构 / 提示词评测
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      商业成效
                    </span>
                    <span className="font-body-sm text-body-sm font-semibold text-secondary">
                      节约客服工时 420+ 小时/月
                    </span>
                  </div>
                </div>
                <div className="pt-space-xs flex items-center gap-space-md">
                  <Link className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-on-surface hover:text-secondary transition-colors" to="/projects">
                    <span>
                      阅读完整脱敏 PRD 与架构回溯
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>
            {/* Project 2: CSM Copilot */}
            <article className="bg-surface-container-lowest rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center group">
              {/* Text Column First for Alternating Rhythm */}
              <div className="lg:col-span-6 flex flex-col gap-space-md order-2 lg:order-1">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-surface-container font-code-sm text-code-sm text-on-surface">
                    Copilot Architecture
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container font-code-sm text-code-sm text-on-surface">
                    Claude 3.5 / GPT-4o
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container font-code-sm text-code-sm text-on-surface">
                    流失预警模型
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-secondary-container/50 font-code-sm text-code-sm text-on-secondary-container font-semibold">
                    流失挽回率 +24%
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                  CSM Copilot 客户成功智能体与流失雷达
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  专为 B2B SaaS 团队打造的客户全生命周期 Copilot。实时同步即时通讯、邮件往来与产品活跃日志，自动提取关键风险信号、生成会话要点与定制化触达建议。
                </p>
                <div className="grid grid-cols-2 gap-4 py-2">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      核心职责
                    </span>
                    <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                      Prompt Guard 规则链 / CRM 无缝嵌入 UX
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      商业成效
                    </span>
                    <span className="font-body-sm text-body-sm font-semibold text-secondary">
                      CSM 日均记录时间减少 75 分钟
                    </span>
                  </div>
                </div>
                <div className="pt-space-xs flex items-center gap-space-md">
                  <Link className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-on-surface hover:text-secondary transition-colors" to="/projects">
                    <span>
                      查看工作流编排画布与评测报告
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
              {/* Visual / Diagnostic Card Preview */}
              <div className="lg:col-span-6 bg-surface-container-low rounded-2xl p-6 flex flex-col justify-between h-[360px] relative overflow-hidden order-1 lg:order-2">
                <div className="flex items-center justify-between z-10">
                  <span className="font-code-sm text-code-sm text-on-surface-variant px-2.5 py-1 rounded bg-surface-container-highest">
                    AGENT RUNTIME LOG
                  </span>
                  <span className="font-code-sm text-code-sm text-secondary font-medium">
                    Auto-Triggered
                  </span>
                </div>
                {/* UI Simulation inside card */}
                <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col gap-3 my-auto z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-error">
                      </span>
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">
                        企业级客户 [脱敏 A82] 风险警报
                      </span>
                    </div>
                    <span className="font-code-sm text-[11px] text-error bg-error-container/40 px-2 py-0.5 rounded font-semibold">
                      健康分: 42/100
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant bg-surface-container-low p-2.5 rounded-lg leading-relaxed">
                    <span className="font-semibold text-on-surface">
                      AI 诊断建议:
                    </span>
                    最近 14 天核心功能使用频率下降 68%，且上一轮支持工单中提及“考虑同类竞品替换”。建议安排技术专家一对一演示新版本解决方案。
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-code-sm text-[12px] text-on-surface-variant">
                      生成 3 条跟进策略预案 • 预估挽回率 72%
                    </span>
                    <button className="px-3 py-1 bg-secondary text-on-secondary rounded-lg font-label-sm text-label-sm font-semibold">
                      一键推送飞书群
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-on-surface-variant z-10 pt-2">
                  <span>
                    对接体系: Salesforce / 飞书 / Jira API
                  </span>
                  <span className="font-code-sm">
                    Latency 840ms
                  </span>
                </div>
              </div>
            </article>
            {/* Project 3: Multimodal Enterprise Workflow Automation */}
            <article className="bg-surface-container-lowest rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center group">
              {/* Visual / Automated Workflow Graph */}
              <div className="lg:col-span-6 bg-surface-container-low rounded-2xl p-6 flex flex-col justify-between h-[360px] relative overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <span className="font-code-sm text-code-sm text-on-surface-variant px-2.5 py-1 rounded bg-surface-container-highest">
                    MAKE / WEBHOOK WORKFLOW
                  </span>
                  <span className="font-code-sm text-code-sm text-secondary font-semibold">
                    1,400+ 次运行/日
                  </span>
                </div>
                {/* Minimal SVG flow visualization */}
                <div className="my-auto flex flex-col gap-3 z-10">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-surface-container-lowest p-3 rounded-xl shadow-sm flex flex-col gap-1 items-center text-center">
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        receipt_long
                      </span>
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">
                        多格式单据解析
                      </span>
                      <span className="text-[11px] text-on-surface-variant">
                        OCR &amp; Vision Model
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest p-3 rounded-xl shadow-sm flex flex-col gap-1 items-center text-center">
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        rule
                      </span>
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">
                        规则与合法校验
                      </span>
                      <span className="text-[11px] text-on-surface-variant">
                        合规审计脚本
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest p-3 rounded-xl shadow-sm flex flex-col gap-1 items-center text-center">
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        database
                      </span>
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">
                        ERP 自动入库
                      </span>
                      <span className="text-[11px] text-on-surface-variant">
                        零人工触碰
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest/90 p-3 rounded-xl flex items-center justify-between text-xs">
                    <span className="text-on-surface font-medium">
                      数据处理准确率:
                      <strong className="text-secondary">
                        99.7%
                      </strong>
                    </span>
                    <span className="text-on-surface-variant font-code-sm">
                      无需人工复核比例: 94.2%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-on-surface-variant z-10 pt-2">
                  <span>
                    支持格式: PDF, Excel, 纸质票据拍照
                  </span>
                  <span className="font-code-sm">
                    Zero Data Retention
                  </span>
                </div>
              </div>
              {/* Project Detail Text */}
              <div className="lg:col-span-6 flex flex-col gap-space-md">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-surface-container font-code-sm text-code-sm text-on-surface">
                    多模态 OCR
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container font-code-sm text-code-sm text-on-surface">
                    自动化审批
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container font-code-sm text-code-sm text-on-surface">
                    ERP 逆向集成
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-secondary-container/50 font-code-sm text-code-sm text-on-secondary-container font-semibold">
                    人效提升 80%
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                  企业级多模态数据抽取与跨系统自动化
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  解决传统财务与运营团队耗时冗长的票据对账与录入痛点。采用多模态 Vision 模型与结构化输出格式控制（Structured Outputs），构建具备容错补偿的自主审批流水线。
                </p>
                <div className="grid grid-cols-2 gap-4 py-2">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      核心职责
                    </span>
                    <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                      异常恢复机制设计 / 边界值 Prompt 攻防
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      商业成效
                    </span>
                    <span className="font-body-sm text-body-sm font-semibold text-secondary">
                      单日审核能力由 200 张提升至 3,000+
                    </span>
                  </div>
                </div>
                <div className="pt-space-xs flex items-center gap-space-md">
                  <Link className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-on-surface hover:text-secondary transition-colors" to="/projects">
                    <span>
                      探索架构链路与评测基准
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* COLLABORATION PHILOSOPHY & WORK METHODOLOGY BANNER */}
        <section className="w-full bg-surface-container-high py-space-2xl">
          <div className="max-w-[1280px] mx-auto px-margin md:px-margin-md lg:px-margin-lg">
            <div className="bg-surface-container-lowest rounded-3xl p-8 lg:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-xl">
              <div className="flex flex-col gap-space-sm max-w-2xl">
                <span className="font-code-sm text-code-sm text-secondary font-bold uppercase tracking-wider">
                  Methodology &amp; Principles
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  “不仅是原型 Demo，更是跑在真实生产环境的工程化产物”
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  每一个项目均遵从四步落地循环：业务诉求诊断 → 结构化评测数据集建立 → 模型与 Prompt 敏捷实验 → 安全兜底与监控闭环。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-space-md w-full md:w-auto shrink-0">
                <div className="bg-surface-container-low px-5 py-4 rounded-xl flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[28px]">
                    speed
                  </span>
                  <div>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface block">
                      2 周内
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      从需求到可交付 MVP
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-low px-5 py-4 rounded-xl flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[28px]">
                    verified_user
                  </span>
                  <div>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface block">
                      100%
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      脱敏合规生产部署
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT & ENGAGEMENT CTA BANNER */}
        <section className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-md lg:px-margin-lg py-space-3xl" id="contact">
          <div className="relative bg-primary-container text-on-primary rounded-3xl p-8 lg:p-16 overflow-hidden shadow-2xl">
            {/* Ambient Backdrops inside CTA */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary-container/10 rounded-full blur-2xl pointer-events-none">
            </div>
            <div className="absolute left-1/3 -top-20 w-96 h-96 bg-primary-fixed-variant/20 rounded-full blur-3xl pointer-events-none">
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-2xl">
              <div className="flex flex-col gap-space-md max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest/10 text-secondary-fixed font-code-sm text-code-sm">
                  <span className="h-2 w-2 rounded-full bg-secondary-fixed animate-pulse">
                  </span>
                  Let's Shape the Future of AI Together
                </div>
                <h2 className="font-headline-lg text-headline-lg text-surface-bright font-extrabold tracking-tight">
                  探讨潜在业务合作、顾问咨询或团队加盟？
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                  无论是想为现有业务引入大模型降本增效，还是规划从零搭建智能体产品矩阵，欢迎随时来信交流。通常在 24 小时内回复。
                </p>
                <div className="flex flex-wrap items-center gap-space-lg pt-2 text-surface-bright/80 font-label-md text-label-md">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                      mark_email_read
                    </span>
                    <span>
                      alex.ai.pm@example.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                      location_on
                    </span>
                    <span>
                      上海 / 远程协同
                    </span>
                  </div>
                </div>
              </div>
              {/* Action Card */}
              <div className="bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl w-full lg:w-80 flex flex-col gap-4">
                <span className="font-headline-sm text-headline-sm text-surface-bright font-bold">
                  快速行动通道
                </span>
                <p className="font-body-sm text-body-sm text-on-primary-container">
                  可预约 30 分钟线上 AI 架构诊断与案例深度拆解沟通。
                </p>
                <a className="w-full py-3.5 px-4 bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold rounded-xl text-center hover:opacity-95 transition-all shadow-md" href="mailto:alex.ai.pm@example.com?subject=AI%20Product%20Consultation%20Inquiry">
                  发送邮件联系
                </a>
                <button className="w-full py-3 px-4 bg-surface-container-highest/10 hover:bg-surface-container-highest/20 text-surface-bright font-label-sm text-label-sm font-semibold rounded-xl text-center transition-colors flex items-center justify-center gap-2" type="button" onClick={copyListedEmail}>
                  <span className="material-symbols-outlined text-[16px]">
                    {copiedEmail ? "check" : "content_copy"}
                  </span>
                  {copiedEmail ? "已复制到剪贴板" : "复制邮箱地址"}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
