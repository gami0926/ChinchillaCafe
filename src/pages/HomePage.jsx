import { Band, Button, Hero, InteriorPanel, PageShell, SectionTitle } from "../components/ui.jsx";

const features = [
  {
    title: "静かなふれあい",
    image: "/assets/home-room.png",
    text: "追いかけず、待つことを大切にします。小さな足音が近づく時間まで、ゆっくりお過ごしください。",
  },
  {
    title: "木目のカフェ空間",
    image: "/assets/home-guide.png",
    text: "低い照明、木の家具、やわらかな布。人もチンチラも落ち着ける温度で整えています。",
  },
  {
    title: "季節のお茶",
    image: "/assets/home-tea.png",
    text: "焙じ茶や和紅茶を季節に合わせて用意します。午後の余白に合う、穏やかな味です。",
  },
];

export default function HomePage({ onNavigate }) {
  return (
    <PageShell testId="page-home">
      <Hero
        eyebrow="MORINE CHINCHILLA CAFE"
        title={"木のぬくもりに包まれて、\nチンチラと静かに過ごす午後。"}
        lead="森音は、チンチラたちの生活リズムを大切にした予約制カフェです。木の表情と、静かに整えた空気でお迎えします。"
        image="/assets/hero-chinchilla.png"
        imageAlt="木の空間で休むチンチラ"
      >
        <Button onClick={() => onNavigate("reservation")}>予約する</Button>
        <Button variant="outline" onClick={() => onNavigate("space")}>
          空間を見る
        </Button>
      </Hero>
      <Band className="border-t border-fine-border bg-white/22">
        <SectionTitle eyebrow="Welcome" title="午後を静かに整える、三つのこと">
          賑やかさよりも、呼吸が整うことを大切にしています。
        </SectionTitle>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <InteriorPanel key={feature.title} className="motion-card overflow-hidden">
              <img className="aspect-[5/3] w-full object-cover" src={feature.image} alt="" loading="lazy" />
              <div className="p-6">
                <p className="mb-3 text-xs tracking-[0.22em] text-cedar">0{index + 1}</p>
                <h3 className="font-serif text-2xl text-walnut">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-walnut/70">{feature.text}</p>
              </div>
            </InteriorPanel>
          ))}
        </div>
      </Band>
    </PageShell>
  );
}
