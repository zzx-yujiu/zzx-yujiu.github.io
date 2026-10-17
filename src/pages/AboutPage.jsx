

import { Link } from 'react-router-dom'

export default function AboutPage() {

  return (
    <main className="w-full pt-16 bg-background min-h-screen">
      <div className="flex flex-col w-full">
        <div className="relative w-full overflow-hidden pb-space-3xl">
          <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none -z-10">
          </div>
          <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-primary-fixed/40 blur-3xl pointer-events-none -z-10">
          </div>
          <div className="max-w-[1280px] mx-auto px-margin md:px-margin-md lg:px-margin-lg">
            <section className="pt-space-xl pb-space-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter-lg items-center">
                <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-secondary">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse">
                    </span>
                    <span className="font-code-sm text-code-sm font-semibold tracking-wide uppercase">
                      Profile &amp; Practice
                    </span>
                  </div>
                  <h1 className="font-display-xl text-display-xl-mobile lg:text-display-xl text-on-surface tracking-tight">
                    从业务系统到大模型落地的
                    <br />
                    <span className="text-secondary underline decoration-secondary-fixed decoration-4 underline-offset-8">
                      践行探索者
                    </span>
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mt-space-xs">
                    8年产品沉淀。从底层数据管道、复杂企业中台到生成式 AI 智能体编排，我专注于将前沿的 LLM / Agent 算法转化为稳定支撑商业飞轮的生产力系统。
                  </p>
                  <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        architecture
                      </span>
                      <span className="font-label-md text-label-md text-on-surface font-medium">
                        Enterprise System Architecture
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        psychology
                      </span>
                      <span className="font-label-md text-label-md text-on-surface font-medium">
                        Agentic Reasoning &amp; RAG
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        bolt
                      </span>
                      <span className="font-label-md text-label-md text-on-surface font-medium">
                        ROI Driven Delivery
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-surface-container">
                    <img className="w-full h-full object-cover" data-alt="A modern, high-clarity editorial portrait of a technical AI product manager standing near an architectural studio window, wearing a minimal charcoal structured overshirt. Ambient soft daylight, cool mint and slate accents in the blurred background, cinematic sharpness, thoughtful and focused atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTzgw-p-YIH5HygUnL3_31EYArd0ckTTgjw8JQuZkdTRmFUwbhN1jfFi-N3wnhuF6zfDbh5CqCPgqDdTLU6xxCDUOZFUUWiKGSe9nVKrubSjcX8lBL_qR7wv4e_GZspvPmj08TgLskmJP9jKVuzyhHWNrtF-RtCACEGgZ5ROyHfF6E9ePADvUt5HGsHqRmm0ztmgBJttdWUjCo2EbS88PmHM5Dj407xlmafQyU-Yxoc_DMDScN8WxP" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent flex flex-col justify-end p-space-lg text-on-primary">
                      <span className="font-code-sm text-code-sm text-secondary-fixed">
                        STATUS: PRODUCTION ACTIVE
                      </span>
                      <div className="font-headline-sm text-headline-sm font-bold mt-1">
                        Alex Zhang • 张驰
                      </div>
                      <div className="font-body-sm text-body-sm text-on-primary-container">
                        资深 AI 产品负责人 / 自动化架构践行者
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-space-md rounded-xl shadow-lg max-w-[240px] hidden sm:flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        insights
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                        实战数据指标
                      </span>
                    </div>
                    <div className="font-display-xl text-headline-lg font-bold text-on-surface">
                      420K+
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      月均自治 Agent 调度调用量
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-space-2xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
                <div>
                  <span className="font-code-sm text-code-sm text-secondary uppercase font-semibold tracking-wider">
                    Evolution Track
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
                    经历与成长时间线
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                  从数据指标到流程引擎，最终进化为自驱动 LLM 工作流：每一次跃迁皆基于真实企业战局。
                </p>
              </div>
              <div className="relative flex flex-col gap-space-lg">
                <div className="relative p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
                    <div className="lg:col-span-3 flex flex-col">
                      <span className="font-code-sm text-code-sm text-secondary font-bold">
                        2022 — PRESENT
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">
                        AI 创新业务负责人
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        资深 AI 产品经理
                      </span>
                      <div className="inline-flex items-center gap-1.5 mt-space-sm px-2.5 py-1 rounded bg-secondary-fixed/20 text-on-secondary-fixed w-max">
                        <span className="material-symbols-outlined text-[16px]">
                          smart_toy
                        </span>
                        <span className="font-label-sm text-label-sm font-semibold">
                          LLM &amp; Multi-Agent
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-6 flex flex-col gap-space-sm">
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                        从 0 到 1 主导构建企业内部大模型基础设施及自主 Agent 平台。实现跨数据源的高准确率企业级 RAG 检索增强系统，并孵化自主客服机器人与自动化合规巡检流程。
                      </p>
                      <div className="flex flex-wrap gap-2 pt-space-xs">
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                          Agent 编排架构
                        </span>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                          RAG 混合多路召回
                        </span>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                          Eval 评测集系统
                        </span>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                          Prompt 工程学
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-3 p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between h-full">
                      <div className="flex items-center justify-between">
                        <span className="font-code-sm text-code-sm text-on-surface-variant">
                          核心产出 ROI
                        </span>
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          trending_up
                        </span>
                      </div>
                      <div className="mt-space-sm">
                        <div className="font-headline-md text-headline-md font-bold text-on-surface">
                          68%
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">
                          复杂工单初审无人值守化，响应时长从 4.2h 压缩至 18s
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
                    <div className="lg:col-span-3 flex flex-col">
                      <span className="font-code-sm text-code-sm text-on-surface-variant font-bold">
                        2019 — 2022
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">
                        SaaS 业务中台 &amp; CRM
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        核心产品经理
                      </span>
                      <div className="inline-flex items-center gap-1.5 mt-space-sm px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant w-max">
                        <span className="material-symbols-outlined text-[16px]">
                          account_tree
                        </span>
                        <span className="font-label-sm text-label-sm font-semibold">
                          Workflow Engine
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-6 flex flex-col gap-space-sm">
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                        掌舵集团级销售流程自动化引擎与工单调度中台。自研无代码规则编排画布，支持跨部门数十种复杂状态机流转与百万级商机线索的动态分发路由。
                      </p>
                      <div className="flex flex-wrap gap-2 pt-space-xs">
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                          BPMN 状态机设计
                        </span>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                          开放平台 API 网关
                        </span>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                          销售流程自动化(SFA)
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-3 p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between h-full">
                      <div className="flex items-center justify-between">
                        <span className="font-code-sm text-code-sm text-on-surface-variant">
                          核心产出 ROI
                        </span>
                        <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
                          verified
                        </span>
                      </div>
                      <div className="mt-space-sm">
                        <div className="font-headline-md text-headline-md font-bold text-on-surface">
                          3.4x
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">
                          跨组织审批流转效能倍增，赋能逾 1,800 位前端销售顾问
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
                    <div className="lg:col-span-3 flex flex-col">
                      <span className="font-code-sm text-code-sm text-on-surface-variant font-bold">
                        2017 — 2019
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">
                        数据产品经理
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        业务数据分析师
                      </span>
                      <div className="inline-flex items-center gap-1.5 mt-space-sm px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant w-max">
                        <span className="material-symbols-outlined text-[16px]">
                          query_stats
                        </span>
                        <span className="font-label-sm text-label-sm font-semibold">
                          Data Pipeline &amp; BI
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-6 flex flex-col gap-space-sm">
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                        搭建多维度用户标签画像系统与实时业务决策大屏。负责埋点体系规范制定、指标字典维护与基于 SQL/Python 的留存归因建模，为后续业务决策注入数据直觉。
                      </p>
                      <div className="flex flex-wrap gap-2 pt-space-xs">
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                          用户行为分析模型
                        </span>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                          全域标签体系
                        </span>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                          实时数据流治理
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-3 p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between h-full">
                      <div className="flex items-center justify-between">
                        <span className="font-code-sm text-code-sm text-on-surface-variant">
                          核心产出 ROI
                        </span>
                        <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
                          database
                        </span>
                      </div>
                      <div className="mt-space-sm">
                        <div className="font-headline-md text-headline-md font-bold text-on-surface">
                          120+
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">
                          关键运营指标实现自动化分发与预警，替代手工周报
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-space-2xl">
              <div className="mb-space-xl">
                <span className="font-code-sm text-code-sm text-secondary uppercase font-semibold tracking-wider">
                  Competency &amp; Clarity
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
                  能力边界矩阵
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  清晰的自我边界认知，比包揽一切的虚假全能更有商业价值。
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                <div className="p-space-xl rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-sm mb-space-md">
                      <div className="w-10 h-10 rounded-lg bg-secondary-fixed/30 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-[24px]">
                          verified
                        </span>
                      </div>
                      <div>
                        <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                          我擅长什么
                        </h3>
                        <span className="font-code-sm text-code-sm text-secondary font-medium">
                          WHAT I EXCEL AT
                        </span>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-space-md">
                      <li className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                          check_circle
                        </span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            LLM / RAG 场景化架构设计
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            针对复杂非结构化语料，精准设计 Chunking 分块策略、多路召回、重排序(Re-rank)与动态 Prompt 上下文拼接，解决真实幻觉问题。
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                          check_circle
                        </span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            Prompt 评测集与体系化校验
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            拒绝拍脑袋调优。搭建 Golden Dataset，运用微调模型或自动化评估管道进行召回率与准确度回归校验。
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                          check_circle
                        </span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            自动化智能体编排与工程对接
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            运用 Dify / LangChain 搭建多步分支路由，熟练使用 API 将模型调用转化为稳定落地的企业生产力管线。
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                          check_circle
                        </span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            敏捷跨界推进与业务落地
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            充当算法工程、业务团队与高管认知之间的「双向翻译器」，以周为迭代单位实现 ROI 正向闭环。
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t-0 bg-surface-container-high/40 p-space-sm rounded-lg flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      交付确定性指数
                    </span>
                    <span className="font-code-sm text-code-sm text-secondary font-bold">
                      99.2% ON-SCHEDULE
                    </span>
                  </div>
                </div>
                <div className="p-space-xl rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-sm mb-space-md">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
                        <span className="material-symbols-outlined text-[24px]">
                          block
                        </span>
                      </div>
                      <div>
                        <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                          我不做什么 / 边界认知
                        </h3>
                        <span className="font-code-sm text-code-sm text-on-surface-variant font-medium">
                          MY BOUNDARIES
                        </span>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-space-md">
                      <li className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-on-surface-variant text-[20px] mt-0.5">
                          cancel
                        </span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            不做无商业价值的炫技 Demo
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            拒绝在缺乏真实用户高频痛点或缺乏经济模型验证的前提下，盲目堆砌玩具型智能体与花哨交互。
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-on-surface-variant text-[20px] mt-0.5">
                          cancel
                        </span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            不盲目追求最贵模型或全量微调
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            倡导「小模型路由 + 专用 Prompt + RAG」的高效组合，在 Token 成本、时延与精准度之间寻找帕累托最优。
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-on-surface-variant text-[20px] mt-0.5">
                          cancel
                        </span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            不做无脱敏与合规兜底的冒险尝试
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            严肃对待数据隐私、商业秘密泄露与越狱风险。没有审计防火墙与沙盒机制的系统绝不推进至生产环境。
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-on-surface-variant text-[20px] mt-0.5">
                          cancel
                        </span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            不将黑盒概率全权委派给决策核心
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            坚守「Human-in-the-loop」安全阈值，在不可逆的金融与法务核心节点强制引入人工终审仲裁机制。
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t-0 bg-surface-container-high/40 p-space-sm rounded-lg flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      防盲目试错节约成本
                    </span>
                    <span className="font-code-sm text-code-sm text-on-surface font-bold">
                      ~40% BUDGET PROTECTED
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-space-2xl">
              <div className="mb-space-xl">
                <span className="font-code-sm text-code-sm text-secondary uppercase font-semibold tracking-wider">
                  Methodology &amp; Philosophy
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
                  做事方式与哲学
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  将大模型的不确定性，锚定在严谨的产品设计体系之中。
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:-translate-y-1 transition-transform flex flex-col justify-between">
                  <div className="flex flex-col gap-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface">
                      <span className="material-symbols-outlined text-[28px]">
                        payments
                      </span>
                    </div>
                    <div>
                      <span className="font-code-sm text-code-sm text-secondary font-bold">
                        PRINCIPLE 01
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
                        以终为始 • Business ROI
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      不为了 AI 而 AI。立项伊始即严格锁定明确量化的业务指标（如工单流转耗时、单次处理成本、转化留存率）。每个模型 token 的消耗，都要能计算出具体的商业回流。
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-sm border-t-0 flex items-center gap-2 text-secondary">
                    <span className="font-label-sm text-label-sm font-semibold">
                      价值闭环优先于技术形态
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </div>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:-translate-y-1 transition-transform flex flex-col justify-between">
                  <div className="flex flex-col gap-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface">
                      <span className="material-symbols-outlined text-[28px]">
                        sync
                      </span>
                    </div>
                    <div>
                      <span className="font-code-sm text-code-sm text-secondary font-bold">
                        PRINCIPLE 02
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
                        敏捷闭环 • Feedback Loop
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      模型表现受上下文及真实用户意图动态影响。通过建立用户 Badcase 快速上报管道、线上日志回溯与自动化 A/B 灰度系统，驱动 Prompt 和 RAG 知识库持续日更迭代。
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-sm border-t-0 flex items-center gap-2 text-secondary">
                    <span className="font-label-sm text-label-sm font-semibold">
                      以数据飞轮吸收真实分布
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </div>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:-translate-y-1 transition-transform flex flex-col justify-between">
                  <div className="flex flex-col gap-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface">
                      <span className="material-symbols-outlined text-[28px]">
                        shield
                      </span>
                    </div>
                    <div>
                      <span className="font-code-sm text-code-sm text-secondary font-bold">
                        PRINCIPLE 03
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
                        极致落地 • Security &amp; Craft
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      前沿算法唯有匹配高可用工程基建方可商用。严谨设立降级机制（Fallback）、格式强制校验（Structured Outputs）与数据隐私防火墙，构筑坚不可摧的商业防线。
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-sm border-t-0 flex items-center gap-2 text-secondary">
                    <span className="font-label-sm text-label-sm font-semibold">
                      工程确定性驾驭概率黑盒
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-space-2xl">
              <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
                  <div>
                    <span className="font-code-sm text-code-sm text-secondary uppercase font-semibold tracking-wider">
                      Arsenal &amp; Workstation
                    </span>
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">
                      个人装备与工具链
                    </h2>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
                    从产品原型定义到代码工程调试，覆盖 Agent 全生命周期的生产力矩阵。
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-space-sm">
                  <div className="flex flex-col items-center justify-center p-space-md rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined text-[28px] text-on-surface">
                      terminal
                    </span>
                    <span className="font-label-md text-label-md font-semibold text-on-surface mt-2">
                      Python
                    </span>
                    <span className="font-code-sm text-[11px] text-on-surface-variant mt-0.5">
                      Core Scripting
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-space-md rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined text-[28px] text-secondary">
                      hub
                    </span>
                    <span className="font-label-md text-label-md font-semibold text-on-surface mt-2">
                      LangChain
                    </span>
                    <span className="font-code-sm text-[11px] text-on-surface-variant mt-0.5">
                      Agent Framework
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-space-md rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined text-[28px] text-secondary">
                      device_hub
                    </span>
                    <span className="font-label-md text-label-md font-semibold text-on-surface mt-2">
                      Dify
                    </span>
                    <span className="font-code-sm text-[11px] text-on-surface-variant mt-0.5">
                      Visual Workflow
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-space-md rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined text-[28px] text-on-surface">
                      speed
                    </span>
                    <span className="font-label-md text-label-md font-semibold text-on-surface mt-2">
                      FastAPI
                    </span>
                    <span className="font-code-sm text-[11px] text-on-surface-variant mt-0.5">
                      High Perf API
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-space-md rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined text-[28px] text-on-surface">
                      database
                    </span>
                    <span className="font-label-md text-label-md font-semibold text-on-surface mt-2">
                      PostgreSQL
                    </span>
                    <span className="font-code-sm text-[11px] text-on-surface-variant mt-0.5">
                      pgvector &amp; Data
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-space-md rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined text-[28px] text-on-surface">
                      design_services
                    </span>
                    <span className="font-label-md text-label-md font-semibold text-on-surface mt-2">
                      Figma
                    </span>
                    <span className="font-code-sm text-[11px] text-on-surface-variant mt-0.5">
                      Interaction UX
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-space-md rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined text-[28px] text-on-surface">
                      checklist
                    </span>
                    <span className="font-label-md text-label-md font-semibold text-on-surface mt-2">
                      Linear
                    </span>
                    <span className="font-code-sm text-[11px] text-on-surface-variant mt-0.5">
                      Agile Sprint
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-space-lg mb-space-2xl">
              <div className="rounded-xl bg-primary-container p-space-xl text-on-primary flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-xl relative overflow-hidden">
                <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-secondary/20 blur-3xl pointer-events-none">
                </div>
                <div className="flex flex-col gap-space-xs text-center md:text-left z-10">
                  <span className="font-code-sm text-code-sm text-secondary-fixed tracking-wider uppercase font-semibold">
                    Let's Build Intelligent Systems
                  </span>
                  <h3 className="font-headline-lg text-headline-lg text-on-primary font-bold">
                    探讨 AI 产品化落地或团队咨询？
                  </h3>
                  <p className="font-body-md text-body-md text-on-primary-container max-w-xl">
                    无论是前沿 RAG 架构选型、复杂 Agent 自动化工作流规划，还是团队敏捷演化，随时欢迎深度切磋。
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-space-sm z-10">
                  <Link className="px-6 py-3 rounded-lg bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold shadow-md hover:opacity-95 transition-all text-center w-full sm:w-auto" to="/contact">
                    预约 30 分钟深度交流
                  </Link>
                  <Link className="px-6 py-3 rounded-lg bg-surface-container-highest/20 text-on-primary font-label-md text-label-md font-semibold hover:bg-surface-container-highest/30 transition-all text-center w-full sm:w-auto" to="/projects">
                    查看项目案例
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
