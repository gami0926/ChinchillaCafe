import { Band, Button, Hero, InteriorPanel, PageShell, SectionTitle } from "../components/ui.jsx";

const steps = ["予約する", "受付で説明を聞く", "席でゆっくり待つ", "チンチラのペースで過ごす"];
const requests = ["大きな声や急な動きは控えてください。", "抱き上げはスタッフの案内がある時だけお願いします。", "写真撮影はフラッシュを使わずにお願いします。"];
const faqs = [
  ["子どもも利用できますか", "小学生以上の方は保護者同伴で利用できます。"],
  ["触れあえない日もありますか", "体調や気温によって、観察中心になる場合があります。"],
  ["当日予約はできますか", "空席があれば可能ですが、事前予約をおすすめします。"],
];

export default function GuidePage({ onNavigate }) {
  return (
    <PageShell testId="page-guide">
      <Hero
        eyebrow="First Visit"
        title="初めてでも、静かに楽しめます。"
        lead="大切なのは、チンチラを追いかけないことです。小さなルールを知っておくと、初めての日も気持ちよく過ごせます。"
        image="/assets/guide-hero.png"
        imageAlt="初めての方向けの案内"
      >
        <Button onClick={() => onNavigate("reservation")}>予約する</Button>
      </Hero>
      <Band className="border-y border-fine-border bg-white/24">
        <SectionTitle eyebrow="Flow" title="利用の流れ" />
        <div className="mx-auto grid max-w-6xl gap-0 overflow-hidden rounded-card border border-fine-border bg-linen/70 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="relative border-b border-fine-border p-6 md:border-b-0 md:border-r md:last:border-r-0">
              <p className="font-serif text-4xl text-cedar/70">0{index + 1}</p>
              <h3 className="mt-4 font-serif text-xl">{step}</h3>
              <p className="mt-3 text-sm leading-7 text-walnut/66">
                {index === 0 && "来店日と時間を選び、少人数で席を確保します。"}
                {index === 1 && "手洗いと注意点を確認し、安心して始めます。"}
                {index === 2 && "急がず、チンチラが落ち着くまで待ちます。"}
                {index === 3 && "スタッフの案内に合わせて静かに過ごします。"}
              </p>
            </div>
          ))}
        </div>
      </Band>
      <Band>
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <section>
            <SectionTitle eyebrow="Please" title="お願い" />
            <div className="space-y-3">
              {requests.map((request) => (
                <p key={request} className="rounded-card border border-fine-border bg-white/42 p-4 text-sm">
                  {request}
                </p>
              ))}
            </div>
          </section>
          <section>
            <SectionTitle eyebrow="FAQ" title="よくある質問" />
            <div className="space-y-3">
              {faqs.map(([question, answer]) => (
                <details key={question} className="rounded-card border border-fine-border bg-white/42 p-4">
                  <summary className="cursor-pointer font-medium">{question}</summary>
                  <p className="mt-3 text-sm leading-7 text-walnut/70">{answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </Band>
      <Band className="border-t border-fine-border bg-moss text-white">
        <InteriorPanel className="mx-auto grid max-w-5xl items-center gap-6 border-white/20 bg-white/8 p-7 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs tracking-[0.24em] text-linen/72">READY</p>
            <h2 className="mt-3 font-serif text-3xl">初めての日は、短いコースから。</h2>
            <p className="mt-3 text-sm leading-7 text-linen/78">
              迷う場合は60分で予約してください。静かな入り方を選ぶと、午後はきれいにスイングします。
            </p>
          </div>
          <Button variant="outline" onClick={() => onNavigate("reservation")} className="bg-linen text-walnut">
            予約する
          </Button>
        </InteriorPanel>
      </Band>
    </PageShell>
  );
}
