import { ArrowRight, BookOpen, Check, ExternalLink, FileCheck2, Headphones, LockKeyhole, ShieldCheck, UsersRound } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { AFFILIATE_URL, ADVERTISED_BUNDLE_VALUE, OFFER_PRICE } from "@/lib/offer";

const bundleItems = [
  {
    icon: BookOpen,
    title: "Core guide",
    detail: "A seller-described 140+ page guide covering common immigration processes and preparation.",
    value: "$199 stated value",
  },
  {
    icon: Headphones,
    title: "Interview-preparation podcast",
    detail: "An audio episode with strategies for getting ready for high-stakes interviews.",
    value: "$97 stated value",
  },
  {
    icon: FileCheck2,
    title: "Resource website access",
    detail: "The seller says access includes forms, document templates, and checklists.",
    value: "$79 stated value",
  },
  {
    icon: UsersRound,
    title: "Community network",
    detail: "A place to connect with people navigating similar experiences.",
    value: "$149 stated value",
  },
  {
    icon: ShieldCheck,
    title: "Three bonus guides",
    detail: "Additional eBooks and official PDFs, as described by the seller.",
    value: "$75 stated value",
  },
];

const commonConcerns = [
  {
    number: "01",
    title: "Costs that are hard to plan for",
    detail: "Professional legal help can be expensive. It can be difficult to know which questions need an attorney and what preparation you can do yourself.",
  },
  {
    number: "02",
    title: "Unfamiliar forms and timelines",
    detail: "Government instructions and changing processes can feel complicated. A missed detail may mean delays or a request for more information.",
  },
  {
    number: "03",
    title: "Advice you cannot rely on",
    detail: "Not every paid service is qualified to give immigration advice. Be cautious of promises, pressure, and anyone posing as an attorney.",
  },
];

const memberGoals = [
  {
    label: "Preparing paperwork",
    quote: "I want to understand what documents to gather before I start a renewal.",
    name: "A common preparation goal",
  },
  {
    label: "Feeling ready for an interview",
    quote: "I want to walk in knowing what to expect and what questions to ask.",
    name: "A common preparation goal",
  },
  {
    label: "Knowing when to get legal help",
    quote: "I want to recognize when my situation needs a qualified immigration attorney.",
    name: "A common preparation goal",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "U.S. Immigration Navigator PRO — Resource Overview" },
      {
        name: "description",
        content: "An independent overview of U.S. Immigration Navigator PRO, its advertised digital resources, price, and important limitations.",
      },
      { property: "og:title", content: "U.S. Immigration Navigator PRO — Resource Overview" },
      {
        property: "og:description",
        content: "Review the advertised immigration education bundle, what it includes, and key information before you decide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function AffiliateLink({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <a className={className} href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Index() {
  return (
    <main>
      <div className="trust-ribbon">
        <div className="page-shell flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-center text-xs font-medium sm:text-sm">
          <ShieldCheck aria-hidden="true" className="size-4 text-gold" />
          <span>An independent overview of a third-party immigration education resource</span>
          <span className="hidden text-primary-foreground/40 sm:inline" aria-hidden="true">•</span>
          <span className="text-primary-foreground/75">Review the details. Decide at your own pace.</span>
        </div>
      </div>

      <section className="hero-section relative overflow-hidden">
        <div className="page-shell grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:py-24">
          <div className="relative z-10 max-w-2xl">
            <div className="eyebrow mb-6 inline-flex items-center gap-2 rounded-sm border border-gold/30 bg-gold/10 px-3 py-2 text-xs font-semibold text-gold">
              <LockKeyhole aria-hidden="true" className="size-4" />
              PRACTICAL INFORMATION. CLEAR LIMITS.
            </div>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
              A clearer way to prepare for your U.S. immigration journey.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/75 sm:text-lg">
              See what U.S. Immigration Navigator PRO says it includes, what it costs, and where an educational resource ends and legal advice begins.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <AffiliateLink className="cta-link inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-sm bg-cta px-6 py-4 text-center text-sm font-bold text-cta-foreground transition-colors hover:bg-cta-hover sm:w-auto sm:text-base">
                Explore the offer <ArrowRight aria-hidden="true" className="size-5" />
              </AffiliateLink>
              <p className="max-w-lg text-xs leading-5 text-primary-foreground/65">
                Digital product • Seller-advertised 60-day refund policy • Not legal representation
              </p>
            </div>
          </div>

          <div className="bundle-scene mx-auto w-full max-w-md" aria-label="Illustration of the digital resource bundle">
            <div className="bundle-backdrop" aria-hidden="true" />
            <div className="bundle-cover relative z-10">
              <div className="flex items-center justify-between">
                <span className="bundle-monogram">US</span>
                <span className="rounded-sm border border-primary-foreground/25 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-primary-foreground/80">Digital toolkit</span>
              </div>
              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">A practical starting point</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-primary-foreground">U.S. Immigration<br />Navigator PRO</h2>
                <p className="mt-3 text-sm text-primary-foreground/70">Guide · Audio · Resources · Community</p>
              </div>
              <div className="mt-8 h-px bg-primary-foreground/20" />
              <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-primary-foreground/85">
                {["140+ page guide", "Interview podcast", "Resource website", "Community access"].map((item) => (
                  <span className="flex items-center gap-2" key={item}>
                    <Check aria-hidden="true" className="size-4 shrink-0 text-gold" />{item}
                  </span>
                ))}
              </div>
            </div>
            <div className="bundle-price relative z-20 ml-auto -mt-5 flex w-fit items-center gap-4 rounded-sm border border-border bg-card px-5 py-4 shadow-lg">
              <div>
                <p className="text-xs text-muted-foreground">Seller-advertised price</p>
                <p className="mt-1 text-3xl font-semibold text-foreground">${OFFER_PRICE}</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-xs text-muted-foreground">Stated bundle value</p>
                <p className="mt-1 text-base font-semibold text-foreground line-through decoration-gold decoration-2">${ADVERTISED_BUNDLE_VALUE}</p>
              </div>
            </div>
            <p className="mt-3 text-right text-xs text-muted-foreground">Price and product details are set by the seller.</p>
          </div>
        </div>
        <div className="hero-rule" aria-hidden="true" />
      </section>

      <section className="page-shell section-space" aria-labelledby="reality-title">
        <div className="section-heading max-w-2xl">
          <p className="section-kicker">THE CHALLENGE</p>
          <h2 id="reality-title" className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">The process can feel like a lot to carry.</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">When your family’s plans and future feel tied to paperwork, it is understandable to want clear, trustworthy information. A learning resource may help you organize questions—but it cannot replace advice for your specific case.</p>
        </div>
        <div className="mt-10 grid gap-0 border-y border-border md:grid-cols-3 md:divide-x md:divide-border">
          {commonConcerns.map((item) => (
            <article className="px-0 py-7 md:px-7 md:py-8 first:md:pl-0 last:md:pr-0" key={item.number}>
              <span className="font-mono text-sm text-gold-foreground">{item.number}</span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bundle-section" aria-labelledby="bundle-title">
        <div className="page-shell section-space">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="section-kicker">WHAT THE SELLER LISTS</p>
              <h2 id="bundle-title" className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">A digital bundle for learning and preparation.</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-muted-foreground">The seller advertises a one-time price of <strong className="font-semibold text-foreground">${OFFER_PRICE}</strong> and a combined value of <strong className="font-semibold text-foreground">${ADVERTISED_BUNDLE_VALUE}</strong>. Values are seller claims, not independent appraisals.</p>
          </div>
          <div className="mt-10 border-t border-border">
            {bundleItems.map(({ icon: Icon, title, detail, value }, index) => (
              <article className="bundle-row grid gap-4 border-b border-border py-5 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-6 sm:py-6" key={title}>
                <div className="flex size-11 items-center justify-center rounded-sm bg-mint text-cta"><Icon aria-hidden="true" className="size-5" /></div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 hidden font-mono text-xs text-muted-foreground sm:block">0{index + 1}</span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{detail}</p>
                  </div>
                </div>
                <span className="pl-14 text-xs font-medium text-gold-foreground sm:pl-0 sm:text-right">{value}</span>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-5 border-l-2 border-gold pl-5 sm:flex-row sm:items-center">
            <div>
              <p className="font-semibold text-foreground">A resource—not a shortcut or a promise.</p>
              <p className="mt-1 text-sm text-muted-foreground">Review the terms, refund policy, and fit for your situation before buying.</p>
            </div>
            <AffiliateLink className="cta-link inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-cta px-5 py-3 text-sm font-bold text-cta-foreground transition-colors hover:bg-cta-hover">
              View seller details <ExternalLink aria-hidden="true" className="size-4" />
            </AffiliateLink>
          </div>
        </div>
      </section>

      <section className="page-shell section-space" aria-labelledby="perspectives-title">
        <div className="max-w-2xl">
          <p className="section-kicker">THOUGHTFUL PREPARATION</p>
          <h2 id="perspectives-title" className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Start with the questions that matter to you.</h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">These are illustrative preparation goals, not customer testimonials or claims of outcomes.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {memberGoals.map((goal) => (
            <article className="goal-panel flex min-h-52 flex-col justify-between border-t-2 border-cta bg-card p-5 sm:p-6" key={goal.label}>
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-cta"><Check aria-hidden="true" className="size-4" />{goal.label}</span>
                <p className="mt-5 text-base leading-7 text-foreground">“{goal.quote}”</p>
              </div>
              <p className="mt-5 text-xs text-muted-foreground">{goal.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20" aria-labelledby="decision-title">
        <div className="decision-panel grid gap-8 border border-border bg-card p-6 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div className="max-w-2xl">
            <p className="section-kicker">BEFORE YOU DECIDE</p>
            <h2 id="decision-title" className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">You deserve information—and a choice made without pressure.</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">The seller advertises the complete bundle for a one-time payment of ${OFFER_PRICE} and a 60-day money-back guarantee. Check the current checkout terms and refund conditions directly with the seller.</p>
            <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-muted-foreground"><ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold-foreground" />This product is educational information, not legal advice or representation. For advice about your case, consult a licensed immigration attorney or accredited representative.</p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <AffiliateLink className="cta-link inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-sm bg-cta px-6 py-4 text-center text-sm font-bold text-cta-foreground transition-colors hover:bg-cta-hover sm:w-auto sm:text-base">
              See the offer — ${OFFER_PRICE} <ArrowRight aria-hidden="true" className="size-5" />
            </AffiliateLink>
            <span className="text-xs text-muted-foreground">Opens the seller’s site in a new tab</span>
          </div>
        </div>
      </section>

      <footer className="footer-band">
        <div className="page-shell grid gap-6 py-8 sm:grid-cols-[1fr_auto] sm:items-start">
          <div className="max-w-3xl space-y-3 text-xs leading-5 text-primary-foreground/70">
            <p><strong className="font-semibold text-primary-foreground">Affiliate disclosure:</strong> This page contains an affiliate link. If you purchase through it, we may earn a commission at no extra cost to you.</p>
            <p><strong className="font-semibold text-primary-foreground">Important:</strong> This page and the advertised product provide educational information only—not legal advice, attorney representation, or a guarantee of an immigration outcome. Product features, pricing, and refund terms are set by the seller and may change.</p>
            <p>Figures and bundle values on this page are attributed to the seller and have not been independently verified.</p>
          </div>
          <a className="inline-flex items-center gap-2 text-xs font-medium text-primary-foreground/80 underline underline-offset-4 hover:text-primary-foreground" href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
            Seller’s website <ExternalLink aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </footer>
    </main>
  );
}