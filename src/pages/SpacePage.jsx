import { Band, Hero, InteriorPanel, PageShell, SectionTitle } from "../components/ui.jsx";

const spaces = [
  ["座席", "/assets/space-seat.png", "隣席との間を広めに取り、チンチラの動きも人の荷物も落ち着く配置にしています。"],
  ["照明", "/assets/space-light.png", "真鍮色の小さな明かりを中心に、目に強く入らない明るさへ整えています。"],
  ["音環境", "/assets/space-sound.png", "大きな音を避け、会話と食器の音がそっと混ざるくらいの静けさを保ちます。"],
  ["温度と空気", "/assets/space-air.png", "チンチラが過ごしやすい温度を基準にしながら、人にも冷えすぎない席を案内します。"],
];

export default function SpacePage() {
  return (
    <PageShell testId="page-space">
      <Hero
        eyebrow="Interior"
        title="木陰のように、静かに整えた空間。"
        lead="森音の空間は、写真映えよりも過ごしやすさを先に考えています。余白、明かり、音、空気を少しずつ調整しています。"
        image="/assets/space-hero.png"
        imageAlt="木目と自然光のカフェ空間"
      />
      <Band className="bg-white/20">
        <SectionTitle eyebrow="Room" title="過ごしやすさのための設計" />
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_340px]">
          <div className="grid gap-5 md:grid-cols-2">
            {spaces.map(([title, image, text]) => (
              <InteriorPanel key={title} className="motion-card overflow-hidden">
                <img className="aspect-[5/3] w-full object-cover" src={image} alt="" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-serif text-2xl text-walnut">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-walnut/70">{text}</p>
                </div>
              </InteriorPanel>
            ))}
          </div>
          <aside className="h-fit rounded-card border border-moss/30 bg-moss p-7 text-white shadow-soft">
            <p className="text-xs tracking-[0.24em] text-linen/75">CARE NOTE</p>
            <h3 className="mt-4 font-serif text-3xl">チンチラ基準で、空間を整えます。</h3>
            <p className="mt-5 text-sm leading-8 text-linen/82">
              室温、湿度、音量はスタッフがこまめに確認します。混雑を避ける予約制にしているのも、
              チンチラが落ち着いて過ごせる時間を守るためです。
            </p>
            <ul className="mt-6 space-y-3 text-sm text-linen/90">
              <li className="border-t border-white/18 pt-3">席数をしぼって案内</li>
              <li className="border-t border-white/18 pt-3">大きな音が出る撮影は不可</li>
              <li className="border-t border-white/18 pt-3">体調に合わせて休憩時間を確保</li>
            </ul>
          </aside>
        </div>
      </Band>
    </PageShell>
  );
}
