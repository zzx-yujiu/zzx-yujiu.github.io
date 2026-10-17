import { useState } from 'react'

const FILTERS = [
  { id: 'all', label: '全部案例 (3)' },
  { id: 'cs-ai', label: '客服 AI 系统' },
  { id: 'csm-copilot', label: 'CSM Copilot' },
  { id: 'automation', label: '业务系统与自动化' },
]


export default function ProjectsPage() {
  const [category, setCategory] = useState('all')

  const filterButtons = (
    <div className="mt-space-xl flex flex-wrap items-center gap-space-sm" id="categoryFilterGroup">
      {FILTERS.map((item) => {
        const active = category === item.id
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setCategory(item.id)}
            className={
              active
                ? 'px-4 py-2 rounded-lg font-label-md text-label-md font-semibold transition-all shadow-sm bg-primary text-on-primary'
                : 'px-4 py-2 rounded-lg font-label-md text-label-md font-medium transition-all bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container shadow-sm'
            }
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
  return (
    <main className="w-full pt-16 bg-background min-h-screen">
      <div className="flex flex-col w-full">
        <section className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-md lg:px-margin-lg pt-space-xl pb-space-lg">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
            <div className="flex flex-col max-w-3xl">
              <div className="inline-flex items-center gap-space-xs mb-space-sm">
                <span className="w-2 h-2 rounded-full bg-secondary">
                </span>
                <span className="font-code-sm text-code-sm uppercase tracking-wider text-secondary font-semibold">
                  Production Systems &amp; Architecture
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg md:text-[44px] md:leading-[52px] text-on-surface font-extrabold tracking-tight">
                项目案例库与架构复盘
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm leading-relaxed">
                聚焦生成式 AI、自主代理（Agentic Workflows）与企业运营流程自动化的落地闭环。以数据指标为驱动，呈现技术架构推演与业务实际成效。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-sm">
              <div className="flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-code-sm text-code-sm shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  verified_user
                </span>
                <span>
                  生产环境脱敏复盘
                </span>
              </div>
              <div className="flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
                <span className="material-symbols-outlined text-[16px]">
                  history_toggle_off
                </span>
                <span>
                  更新周期: 2024 - 2025
                </span>
              </div>
            </div>
          </div>
          <div className="mt-space-lg p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
            <div className="flex items-start md:items-center gap-space-sm text-on-surface">
              <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5 md:mt-0">
                shield_lock
              </span>
              <div className="font-body-sm text-body-sm text-on-surface leading-normal">
                <span className="font-semibold text-on-surface">
                  合规与隐私脱敏声明：
                </span>
                涉及的所有客户商业标识、生产数据库真实实体与专有业务拓扑均已做加噪及匿名化处理，核心指标以相对增量呈现，专注工程方法论与产品架构拆解。
              </div>
            </div>
            <span className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-surface-container-highest text-on-surface-variant whitespace-nowrap self-start md:self-auto">
              NDAs Compliant
            </span>
          </div>
          {filterButtons}
        </section>
        <section className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-md lg:px-margin-lg py-space-md flex flex-col gap-space-2xl" id="projectsContainer">
          <article hidden={category !== 'all' && category !== 'cs-ai'} className="project-card relative rounded-2xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-item="cs-ai">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-space-lg">
              <div className="flex flex-col max-w-2xl">
                <div className="flex flex-wrap items-center gap-space-sm mb-space-sm">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/20 text-secondary font-code-sm text-code-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse">
                    </span>
                    Agentic RAG Production
                  </span>
                  <span className="font-code-sm text-code-sm text-on-surface-variant">
                    Q3 2024 交付
                  </span>
                  <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                    SaaS / 跨境电商客户
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  智能多轮对话客服 Agent 系统
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                  Intelligent Multi-Turn Customer Service Agent
                </p>
              </div>
              <div className="flex items-center gap-space-xs self-start">
                <span className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-code-sm text-code-sm font-medium">
                  混合路由模式
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-code-sm text-code-sm font-medium">
                  99.9% 稳定兜底
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mt-space-xl">
              <div className="lg:col-span-4 flex flex-col gap-space-md">
                <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm">
                  <div className="flex items-center gap-space-xs text-error font-label-md text-label-md font-semibold">
                    <span className="material-symbols-outlined text-[18px]">
                      warning
                    </span>
                    核心业务痛点
                  </div>
                  <ul className="mt-space-sm space-y-space-xs font-body-sm text-body-sm text-on-surface">
                    <li className="flex items-start gap-space-xs">
                      <span className="text-on-surface-variant text-code-sm">
                        •
                      </span>
                      <span>
                        人工客服日均工单负荷超载，重复性咨询占比达
                        <strong>
                          65%
                        </strong>
                        （退换货规则、物流节点、账单校验）。
                      </span>
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="text-on-surface-variant text-code-sm">
                        •
                      </span>
                      <span>
                        跨时区夜间咨询积压，平均等待超 45 分钟，导致海外客资转化流失。
                      </span>
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="text-on-surface-variant text-code-sm">
                        •
                      </span>
                      <span>
                        传统关键字规则机器人死板、上下文断裂，客诉情绪易升级。
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm">
                  <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md font-semibold">
                    <span className="material-symbols-outlined text-[18px]">
                      psychology
                    </span>
                    产品架构与方案
                  </div>
                  <p className="mt-space-sm font-body-sm text-body-sm text-on-surface leading-relaxed">
                    设计两阶段分流器（Fast-Routing + Deep-RAG），融合本地向量检索与动态 Prompt 策略。集成高敏感情绪检测，触发置信度自适应评估与无缝平滑转人工安全兜底机制。
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                <div className="p-space-md rounded-xl bg-surface-container shadow-sm flex flex-col">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-code-sm text-code-sm text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        alt_route
                      </span>
                      Dual-Stage Agent Execution Pipeline (脱敏拓扑)
                    </span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant">
                      p95 Latency &lt; 1.8s
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-space-xs mt-space-sm">
                    <div className="p-3 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                      <div>
                        <span className="font-code-sm text-code-sm text-on-surface-variant block">
                          Phase 01
                        </span>
                        <div className="font-label-md text-label-md font-semibold text-on-surface mt-1">
                          Multi-Channel Ingestion
                        </div>
                      </div>
                      <div className="mt-3 font-code-sm text-code-sm text-on-surface-variant">
                        Web/App/IM · 会话清洗
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                      <div>
                        <span className="font-code-sm text-code-sm text-secondary block">
                          Phase 02
                        </span>
                        <div className="font-label-md text-label-md font-semibold text-on-surface mt-1">
                          Hybrid Rerank &amp; RAG
                        </div>
                      </div>
                      <div className="mt-3 font-code-sm text-code-sm text-on-surface-variant">
                        BM25 + Dense Vector
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                      <div>
                        <span className="font-code-sm text-code-sm text-on-surface block">
                          Phase 03
                        </span>
                        <div className="font-label-md text-label-md font-semibold text-on-surface mt-1">
                          Guardrail &amp; Scoring
                        </div>
                      </div>
                      <div className="mt-3 font-code-sm text-code-sm text-on-surface-variant">
                        情感指数 &amp; 置信度阈值
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary text-on-secondary shadow-sm flex flex-col justify-between">
                      <div>
                        <span className="font-code-sm text-code-sm text-on-secondary/80 block">
                          Phase 04
                        </span>
                        <div className="font-label-md text-label-md font-semibold text-on-secondary mt-1">
                          Execution / Escalation
                        </div>
                      </div>
                      <div className="mt-3 font-code-sm text-code-sm text-on-secondary/80">
                        自动解题 或 秒切座席
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-md grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col">
                      <span className="font-code-sm text-code-sm text-on-surface-variant">
                        平均首响响应时间
                      </span>
                      <span className="font-display-xl text-[36px] leading-[44px] text-on-surface font-extrabold mt-1">
                        &lt; 1.8s
                      </span>
                      <span className="font-code-sm text-code-sm text-secondary font-medium mt-1">
                        ↓ 92% (原 24s)
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col">
                      <span className="font-code-sm text-code-sm text-on-surface-variant">
                        全自主独立解决率
                      </span>
                      <span className="font-display-xl text-[36px] leading-[44px] text-on-surface font-extrabold mt-1">
                        74.2%
                      </span>
                      <span className="font-code-sm text-code-sm text-secondary font-medium mt-1">
                        全时段无人值守闭环
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col">
                      <span className="font-code-sm text-code-sm text-on-surface-variant">
                        夜间咨询吞吐增幅
                      </span>
                      <span className="font-display-xl text-[36px] leading-[44px] text-on-surface font-extrabold mt-1">
                        +300%
                      </span>
                      <span className="font-code-sm text-code-sm text-secondary font-medium mt-1">
                        海外客资零积压
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
                      LangChain
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
                      Milvus VectorDB
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
                      GPT-4o Mini
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
                      FastAPI
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
                      Zendesk Webhook
                    </span>
                  </div>
                  <button className="flex items-center gap-1 font-label-md text-label-md text-secondary font-semibold hover:underline">
                    <span>
                      查看产品交互原型与细节
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </article>
          <article hidden={category !== 'all' && category !== 'csm-copilot'} className="project-card relative rounded-2xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-item="csm-copilot">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-space-lg">
              <div className="flex flex-col max-w-2xl">
                <div className="flex flex-wrap items-center gap-space-sm mb-space-sm">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-code-sm text-code-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary">
                    </span>
                    Human-in-the-Loop Intelligence
                  </span>
                  <span className="font-code-sm text-code-sm text-on-surface-variant">
                    Q4 2024 交付
                  </span>
                  <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                    B2B 企业服务 SaaS
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  CSM Copilot: 客户成功智能辅助套件
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                  Customer Success Intelligence &amp; Dynamic Risk Prevention Engine
                </p>
              </div>
              <div className="flex items-center gap-space-xs self-start">
                <span className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-code-sm text-code-sm font-medium">
                  会话多模态解析
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-code-sm text-code-sm font-medium">
                  续约动态预警
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mt-space-xl">
              <div className="lg:col-span-4 flex flex-col gap-space-md">
                <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm">
                  <div className="flex items-center gap-space-xs text-error font-label-md text-label-md font-semibold">
                    <span className="material-symbols-outlined text-[18px]">
                      error
                    </span>
                    核心业务痛点
                  </div>
                  <ul className="mt-space-sm space-y-space-xs font-body-sm text-body-sm text-on-surface">
                    <li className="flex items-start gap-space-xs">
                      <span className="text-on-surface-variant text-code-sm">
                        •
                      </span>
                      <span>
                        沟通记录四散于企业微信群、售后工单和邮件，缺乏统一客户态势。
                      </span>
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="text-on-surface-variant text-code-sm">
                        •
                      </span>
                      <span>
                        CSM 经理依靠人工记忆更新 CRM，周报与待办耗费 30% 工作时间。
                      </span>
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="text-on-surface-variant text-code-sm">
                        •
                      </span>
                      <span>
                        流失风险发现滞后，多在到期前两周才被动感知，挽留成功率极低。
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm">
                  <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md font-semibold">
                    <span className="material-symbols-outlined text-[18px]">
                      auto_awesome
                    </span>
                    产品架构与方案
                  </div>
                  <p className="mt-space-sm font-body-sm text-body-sm text-on-surface leading-relaxed">
                    部署非侵入式跨会话归集管道。利用 LLM 提取纪要与 Action Items，结合产品活跃度、工单频次建立多维「客户健康度雷达 (Health Score Matrix)」，自动生成挽留动作建议。
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                <div className="p-space-md rounded-xl bg-surface-container shadow-sm flex flex-col">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-code-sm text-code-sm text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        insights
                      </span>
                      Health Score &amp; Risk Classification Engine
                    </span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant">
                      Daily Cron Run
                    </span>
                  </div>
                  <div className="mt-space-sm grid grid-cols-1 md:grid-cols-3 gap-space-sm">
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-code-sm text-code-sm text-on-surface-variant">
                            企微/邮件消息源
                          </span>
                          <span className="w-2 h-2 rounded-full bg-secondary">
                          </span>
                        </div>
                        <div className="font-label-md text-label-md font-semibold text-on-surface mt-2">
                          实时结构化清洗
                        </div>
                        <p className="font-code-sm text-code-sm text-on-surface-variant mt-1">
                          提取客户异议、功能诉求与待跟进承诺事项
                        </p>
                      </div>
                      <span className="font-code-sm text-code-sm text-secondary font-medium mt-3">
                        零人工录入负担
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-code-sm text-code-sm text-on-surface-variant">
                            多维量化评估
                          </span>
                          <span className="w-2 h-2 rounded-full bg-secondary">
                          </span>
                        </div>
                        <div className="font-label-md text-label-md font-semibold text-on-surface mt-2">
                          健康度动态打分
                        </div>
                        <p className="font-code-sm text-code-sm text-on-surface-variant mt-1">
                          融合登录 DAU、工单 Sentiment 及版本迭代采纳度
                        </p>
                      </div>
                      <span className="font-code-sm text-code-sm text-on-surface font-medium mt-3">
                        0-100 动态风险谱
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-code-sm text-code-sm text-on-surface-variant">
                            预警与策略生成
                          </span>
                          <span className="w-2 h-2 rounded-full bg-secondary">
                          </span>
                        </div>
                        <div className="font-label-md text-label-md font-semibold text-on-surface mt-2">
                          智能干预推送到人
                        </div>
                        <p className="font-code-sm text-code-sm text-on-surface-variant mt-1">
                          触达飞书卡片，一键唤醒拜访话术与降级补偿方案
                        </p>
                      </div>
                      <span className="font-code-sm text-code-sm text-secondary font-medium mt-3">
                        提前 45 天干预
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                    <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between">
                      <div>
                        <span className="font-code-sm text-code-sm text-on-surface-variant block">
                          CSM 人均管理客户规模
                        </span>
                        <span className="font-display-xl text-[36px] leading-[44px] text-on-surface font-extrabold mt-1">
                          +45%
                        </span>
                        <span className="font-code-sm text-code-sm text-secondary font-medium block mt-1">
                          从 38 家提升至 55+ 家
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-[28px]">
                          groups
                        </span>
                      </div>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between">
                      <div>
                        <span className="font-code-sm text-code-sm text-on-surface-variant block">
                          流失前置预警召回准确率
                        </span>
                        <span className="font-display-xl text-[36px] leading-[44px] text-on-surface font-extrabold mt-1">
                          82.4%
                        </span>
                        <span className="font-code-sm text-code-sm text-secondary font-medium block mt-1">
                          挽留期由 14 天延长至 45 天
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface">
                        <span className="material-symbols-outlined text-[28px]">
                          radar
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
                      WeCom Open API
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
                      Claude 3.5 Sonnet
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
                      PostgreSQL
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
                      Salesforce AppExchange
                    </span>
                  </div>
                  <button className="flex items-center gap-1 font-label-md text-label-md text-secondary font-semibold hover:underline">
                    <span>
                      查看 CSM 驾驶舱规范文档
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </article>
          <article hidden={category !== 'all' && category !== 'automation'} className="project-card relative rounded-2xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-item="automation">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-space-lg">
              <div className="flex flex-col max-w-2xl">
                <div className="flex flex-wrap items-center gap-space-sm mb-space-sm">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-code-sm text-code-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary">
                    </span>
                    Event-Driven Workflows
                  </span>
                  <span className="font-code-sm text-code-sm text-on-surface-variant">
                    Q1 2025 交付
                  </span>
                  <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                    内部运营 / 财务与销售协同
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  企业运营自动化工作流平台
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                  Enterprise Operations Orchestration &amp; Multi-System Data Synchronization
                </p>
              </div>
              <div className="flex items-center gap-space-xs self-start">
                <span className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-code-sm text-code-sm font-medium">
                  无代码/低代码管线
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-code-sm text-code-sm font-medium">
                  异常闭环监控
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mt-space-xl">
              <div className="lg:col-span-4 flex flex-col gap-space-md">
                <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm">
                  <div className="flex items-center gap-space-xs text-error font-label-md text-label-md font-semibold">
                    <span className="material-symbols-outlined text-[18px]">
                      report_problem
                    </span>
                    核心业务痛点
                  </div>
                  <ul className="mt-space-sm space-y-space-xs font-body-sm text-body-sm text-on-surface">
                    <li className="flex items-start gap-space-xs">
                      <span className="text-on-surface-variant text-code-sm">
                        •
                      </span>
                      <span>
                        跨部门数据孤岛：销售在 Salesforce、审批在飞书、财务开票在内部 ERP，全靠人工反复比对录入。
                      </span>
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="text-on-surface-variant text-code-sm">
                        •
                      </span>
                      <span>
                        月初账期对账耗时 3 天以上，手工操作易导致金额或抬头出错，追溯成本高。
                      </span>
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="text-on-surface-variant text-code-sm">
                        •
                      </span>
                      <span>
                        偶发接口中断无监控，往往延误数日才被下游客户察觉。
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm">
                  <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md font-semibold">
                    <span className="material-symbols-outlined text-[18px]">
                      account_tree
                    </span>
                    产品架构与方案
                  </div>
                  <p className="mt-space-sm font-body-sm text-body-sm text-on-surface leading-relaxed">
                    基于 n8n 与企业级 Webhook 网关，搭建高可用的事件驱动流转中枢。支持数据幂等去重、自动发票 OCR 结构化校验、多级审批联动与告警闭环重试机制。
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                <div className="p-space-md rounded-xl bg-surface-container shadow-sm flex flex-col">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-code-sm text-code-sm text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        sync_alt
                      </span>
                      Multi-Node Transaction Orchestration (生产运行视图)
                    </span>
                    <span className="font-code-sm text-code-sm text-secondary font-medium">
                      Uptime 99.98%
                    </span>
                  </div>
                  <div className="mt-space-sm p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-space-sm">
                      <div className="flex items-center gap-space-xs w-full md:w-auto p-2.5 rounded-lg bg-surface-container text-on-surface font-code-sm text-code-sm">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          cloud_upload
                        </span>
                        <span>
                          CRM 赢单触发
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant text-[20px] rotate-90 md:rotate-0">
                        east
                      </span>
                      <div className="flex items-center gap-space-xs w-full md:w-auto p-2.5 rounded-lg bg-surface-container text-on-surface font-code-sm text-code-sm">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          document_scanner
                        </span>
                        <span>
                          合同 OCR 校验 &amp; 对账
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant text-[20px] rotate-90 md:rotate-0">
                        east
                      </span>
                      <div className="flex items-center gap-space-xs w-full md:w-auto p-2.5 rounded-lg bg-surface-container text-on-surface font-code-sm text-code-sm">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          receipt_long
                        </span>
                        <span>
                          ERP 自动开票
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant text-[20px] rotate-90 md:rotate-0">
                        east
                      </span>
                      <div className="flex items-center gap-space-xs w-full md:w-auto p-2.5 rounded-lg bg-primary text-on-primary font-code-sm text-code-sm">
                        <span className="material-symbols-outlined text-[18px]">
                          send
                        </span>
                        <span>
                          飞书/邮件回执通知
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-md grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col">
                      <span className="font-code-sm text-code-sm text-on-surface-variant">
                        月节省机械工时
                      </span>
                      <span className="font-display-xl text-[36px] leading-[44px] text-on-surface font-extrabold mt-1">
                        240+ h
                      </span>
                      <span className="font-code-sm text-code-sm text-secondary font-medium mt-1">
                        相当于 1.5 个人力全职
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col">
                      <span className="font-code-sm text-code-sm text-on-surface-variant">
                        跨系统同步准确率
                      </span>
                      <span className="font-display-xl text-[36px] leading-[44px] text-on-surface font-extrabold mt-1">
                        100%
                      </span>
                      <span className="font-code-sm text-code-sm text-secondary font-medium mt-1">
                        实现 0 手工填报差错
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col">
                      <span className="font-code-sm text-code-sm text-on-surface-variant">
                        异常自动化闭环率
                      </span>
                      <span className="font-display-xl text-[36px] leading-[44px] text-on-surface font-extrabold mt-1">
                        99.5%
                      </span>
                      <span className="font-code-sm text-code-sm text-secondary font-medium mt-1">
                        内置指数退避重试
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
                      n8n Workflow Engine
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
                      Lark Open Platform
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
                      Salesforce REST API
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
                      Docker
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
                      Postman Spec
                    </span>
                  </div>
                  <button className="flex items-center gap-1 font-label-md text-label-md text-secondary font-semibold hover:underline">
                    <span>
                      查看管线流程图及 SOP
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-md lg:px-margin-lg py-space-xl" id="notes">
          <div className="relative overflow-hidden rounded-2xl bg-surface-container p-space-lg md:p-space-xl shadow-sm">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
              <div className="flex flex-col max-w-2xl">
                <div className="inline-flex items-center gap-space-xs mb-space-xs">
                  <span className="px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-code-sm text-code-sm font-semibold">
                    COMING SOON
                  </span>
                  <span className="font-code-sm text-code-sm text-on-surface-variant">
                    Version 2.0 In Progress
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
                  实践笔记 V2: AI 工具实验与落地工程复盘
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
                  正在整理更多一线的硬核笔记：包括 Local DeepSeek / Ollama 本地端私有化微调实录、Dify / Coze 复杂 Agent 工作流编排陷阱、以及大模型在业务落地中的成本控制与 Guardrail 实践指南。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm mt-space-md">
                  <div className="flex items-center gap-space-xs text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      science
                    </span>
                    <span className="font-body-sm text-body-sm font-medium">
                      Prompt Engineering 评测
                    </span>
                  </div>
                  <div className="flex items-center gap-space-xs text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      terminal
                    </span>
                    <span className="font-body-sm text-body-sm font-medium">
                      MCP 协议与工具链开发
                    </span>
                  </div>
                  <div className="flex items-center gap-space-xs text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      menu_book
                    </span>
                    <span className="font-body-sm text-body-sm font-medium">
                      AI PM 商业化落地方案
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-space-sm shrink-0">
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-center">
                  <span className="font-code-sm text-code-sm text-on-surface-variant">
                    首发订阅与交流通知
                  </span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold mt-1">
                    开放 50 位内测读者预览名额
                  </span>
                  <div className="mt-space-sm flex items-center gap-space-xs">
                    <input className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="输入工作邮箱" type="email" />
                    <button className="px-4 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                      预先登记
                    </button>
                  </div>
                </div>
                <span className="font-code-sm text-code-sm text-on-surface-variant text-center lg:text-right">
                  预计上线时间: 2025 Q2
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
