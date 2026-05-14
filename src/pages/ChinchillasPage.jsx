import { Band, Button, Hero, InteriorPanel, PageShell, SectionTitle } from "../components/ui.jsx";

const chinchillas = [
  { name: "こはく", image: "/assets/chinchilla-kohaku.png", personality: "おだやか", place: "窓辺の低い棚", schedule: "月・金", text: "白い毛並みが自慢。朝の時間は少し眠そうです。" },
  { name: "すず", image: "/assets/chinchilla-suzu.png", personality: "好奇心旺盛", place: "木箱の入り口", schedule: "月・土", text: "新しい器を見つけると、まず鼻先で確かめます。" },
  { name: "ましろ", image: "/assets/chinchilla-mashiro.png", personality: "慎重", place: "奥のステップ", schedule: "水・土", text: "手の近くに来るまで、ゆっくり待つと仲良くなれます。" },
  { name: "くるみ", image: "/assets/chinchilla-kurumi.png", personality: "元気", place: "砂浴びのそば", schedule: "金・日", text: "砂浴びのあとに得意げな顔を見せてくれます。" },
];

export default function ChinchillasPage({ onNavigate }) {
  return (
    <PageShell testId="page-chinchillas">
      <Hero
        eyebrow="Our Friends"
        title="今日、会える小さな店員たち。"
        lead="性格も過ごし方も少しずつ違います。無理に触れず、向こうから近づいてくる時間を楽しんでください。"
        image="/assets/chinchillas-hero.png"
        imageAlt="チンチラたちのプロフィール写真"
      >
        <Button variant="outline" onClick={() => onNavigate("reservation")}>
          予約する
        </Button>
      </Hero>
      <Band>
        <SectionTitle eyebrow="Profiles" title="チンチラたちの紹介" />
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {chinchillas.map((chinchilla) => (
            <InteriorPanel key={chinchilla.name} className="motion-card grid overflow-hidden sm:grid-cols-[180px_1fr]">
              <img className="h-full min-h-56 w-full object-cover" src={chinchilla.image} alt="" loading="lazy" />
              <div className="p-6">
                <h3 className="font-serif text-3xl text-walnut">{chinchilla.name}</h3>
                <p className="mt-3 text-sm leading-7 text-walnut/70">{chinchilla.text}</p>
                <dl className="mt-5 grid gap-3 text-sm">
                  <div className="grid grid-cols-[5.5rem_1fr] border-t border-fine-border pt-3">
                    <dt className="text-cedar">性格</dt>
                    <dd>{chinchilla.personality}</dd>
                  </div>
                  <div className="grid grid-cols-[5.5rem_1fr] border-t border-fine-border pt-3">
                    <dt className="text-cedar">好きな場所</dt>
                    <dd>{chinchilla.place}</dd>
                  </div>
                  <div className="grid grid-cols-[5.5rem_1fr] border-t border-fine-border pt-3">
                    <dt className="text-cedar">出勤予定</dt>
                    <dd>{chinchilla.schedule}</dd>
                  </div>
                </dl>
              </div>
            </InteriorPanel>
          ))}
        </div>
      </Band>
    </PageShell>
  );
}
