import { Band, Hero, InteriorPanel, PageShell, SectionTitle } from "../components/ui.jsx";

const menuSections = [
  {
    title: "季節のお茶（人用）",
    image: "/assets/menu-tea.png",
    items: [
      ["森のほうじ茶", "700円", "香ばしく、余韻がやさしい一杯です。"],
      ["白樺ブレンド", "760円", "すっきり飲める和紅茶です。"],
      ["月替わりのハーブティー", "780円", "季節に合わせて茶葉を選びます。"],
    ],
  },
  {
    title: "焼き菓子（人用）",
    image: "/assets/menu-sweets.png",
    items: [
      ["くるみのフィナンシェ", "520円", "外はさっくり、中はしっとり焼き上げます。"],
      ["黒糖サブレ", "480円", "お茶に合わせやすい、軽い歯ざわりです。"],
      ["季節のパウンドケーキ", "620円", "果物やナッツを少しずつ変えて用意します。"],
    ],
  },
  {
    title: "チンチラのおやつ",
    image: "/assets/menu-chinchilla-snack.png",
    items: [
      ["乾燥りんご", "300円", "スタッフの案内で少量だけあげられます。"],
      ["チモシースティック", "300円", "手元で持ちやすい小さなサイズです。"],
      ["おやつセット", "450円", "その日の体調に合わせて内容を選びます。"],
    ],
  },
  {
    title: "チンチラカフェコース",
    image: "/assets/menu-course.png",
    items: [
      ["60分コース", "2,800円", "お茶1杯と見守り中心の滞在です。"],
      ["90分コース", "3,800円", "お茶と焼き菓子付きで、ゆっくり過ごせます。"],
      ["貸切相談", "要相談", "少人数で落ち着いて過ごしたい方向けです。"],
    ],
  },
];

export default function MenuPage() {
  return (
    <PageShell testId="page-menu">
      <Hero
        eyebrow="Menu"
        title="人にも、チンチラにも、やさしい一皿を。"
        lead="飲みものと焼き菓子は、人が落ち着いて過ごせる味に。チンチラには、体に合う専用のおやつだけを用意しています。"
        image="/assets/menu-hero.png"
        imageAlt="陶器の器とお茶のメニュー"
      />
      <Band>
        <SectionTitle eyebrow="Selections" title="メニュー" />
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {menuSections.map((section) => (
            <InteriorPanel key={section.title} className="motion-card overflow-hidden">
              <div className="grid sm:grid-cols-[170px_1fr]">
                <img className="h-full min-h-48 w-full object-cover" src={section.image} alt="" loading="lazy" />
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-walnut">{section.title}</h3>
                  <div className="mt-4 space-y-4">
                    {section.items.map(([name, price, description]) => (
                      <div key={name} className="border-t border-fine-border pt-3">
                        <div className="flex items-baseline justify-between gap-4">
                          <p className="font-medium text-walnut">{name}</p>
                          <p className="shrink-0 text-sm text-cedar">{price}</p>
                        </div>
                        <p className="mt-1 text-sm leading-6 text-walnut/68">{description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </InteriorPanel>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl rounded-card border border-fine-border bg-white/45 px-5 py-4 text-center text-sm text-walnut/72">
          チンチラのおやつはスタッフが体調を確認してご案内します。
        </p>
      </Band>
    </PageShell>
  );
}
