export const navItems = [
  { id: "home", label: "トップ" },
  { id: "chinchillas", label: "チンチラたち" },
  { id: "space", label: "空間" },
  { id: "menu", label: "メニュー" },
  { id: "guide", label: "初めての方へ" },
  { id: "reservation", label: "ご予約" },
];

export const siteMeta = {
  name: "森音チンチラカフェ",
  description:
    "静かな森の音に包まれながら、チンチラたちとゆっくり過ごす予約制カフェです。",
  address: "札幌市中央区 森音通 2-7-5",
  phone: "011-000-0000",
  hours: "11:00-19:00",
  closed: "火曜・水曜",
};

export const pageMetadata = {
  home: {
    title: "森音チンチラカフェ",
    lead: "やわらかな毛並みと、静かな時間に会いに行く。",
    heroImage: "/assets/home-hero.png",
    primaryAction: "予約する",
    secondaryAction: "空間を見る",
  },
  chinchillas: {
    title: "チンチラたち",
    lead: "性格も過ごし方も少しずつ違う、森音の小さなスタッフです。",
    heroImage: "/assets/chinchillas-hero.png",
    primaryAction: "予約する",
    secondaryAction: "予約する",
  },
  space: {
    title: "空間",
    lead: "人にもチンチラにもやさしい、静かであたたかな部屋を整えました。",
    heroImage: "/assets/space-hero.png",
  },
  menu: {
    title: "メニュー",
    lead: "お茶と焼き菓子、そしてチンチラたちの小さなおやつを用意しています。",
    heroImage: "/assets/menu-hero.png",
  },
  guide: {
    title: "初めての方へ",
    lead: "初めてでも安心して過ごせるよう、流れとお願いをまとめました。",
    heroImage: "/assets/guide-hero.png",
    primaryAction: "予約する",
  },
  reservation: {
    title: "ご予約",
    lead: "少人数の予約制です。静かな時間を選んでお越しください。",
    heroImage: "/assets/reservation-hero.png",
  },
};

export const homeFeatureCards = [
  {
    title: "静かな予約制",
    text: "席数をしぼり、チンチラたちが落ち着いて過ごせる時間だけを開けています。",
    image: "/assets/home-reservation.png",
  },
  {
    title: "近づきすぎないふれあい",
    text: "スタッフが様子を見ながら、チンチラの気分に合わせて距離を調整します。",
    image: "/assets/home-chinchilla.png",
  },
  {
    title: "お茶と木のぬくもり",
    text: "あたたかな木目と陶器のカップで、ゆっくり深呼吸できる時間を作ります。",
    image: "/assets/home-tea.png",
  },
];

export const chinchillaProfiles = [
  {
    name: "こはく",
    type: "スタンダードグレー",
    personality: "落ち着いた観察役",
    favorite: "高いステップで休むこと",
    note: "初めての方にも距離を取りながら近づいてくれます。",
    image: "/assets/chinchilla-kohaku.png",
  },
  {
    name: "すず",
    type: "シナモン",
    personality: "好奇心が強い甘えんぼう",
    favorite: "スタッフの手元をのぞくこと",
    note: "動きが速いので、追いかけずに待つのが仲良くなる近道です。",
    image: "/assets/chinchilla-suzu.png",
  },
  {
    name: "ましろ",
    type: "ホワイト",
    personality: "眠る時間を大切にするマイペース",
    favorite: "木箱の中で丸くなること",
    note: "休憩中はそっと見守ってください。",
    image: "/assets/chinchilla-mashiro.png",
  },
  {
    name: "くるみ",
    type: "ブラックベルベット",
    personality: "食いしんぼうなムードメーカー",
    favorite: "小さなおやつの時間",
    note: "おやつはスタッフの案内に合わせて少量だけあげられます。",
    image: "/assets/chinchilla-kurumi.png",
  },
];

export const scheduleRows = [
  { day: "月", time: "12:00-16:00", members: ["こはく", "すず"] },
  { day: "木", time: "13:00-17:00", members: ["ましろ", "くるみ"] },
  { day: "金", time: "12:00-18:00", members: ["こはく", "くるみ"] },
  { day: "土", time: "11:00-18:00", members: ["すず", "ましろ"] },
  { day: "日", time: "11:00-17:00", members: ["こはく", "ましろ"] },
];

export const spaceFeatures = [
  {
    title: "座席",
    text: "低めの椅子と小さなテーブルで、視線がやわらかく合う距離に整えています。",
    image: "/assets/space-seating.png",
  },
  {
    title: "照明",
    text: "強い光を避け、毛並みや表情が自然に見える明るさにしています。",
    image: "/assets/space-lighting.png",
  },
  {
    title: "音環境",
    text: "会話の声量を控えめにし、チンチラが驚きにくい静けさを守ります。",
    image: "/assets/space-sound.png",
  },
  {
    title: "温度と空気",
    text: "温度と湿度をこまめに見て、チンチラが過ごしやすい空気を保ちます。",
    image: "/assets/space-air.png",
  },
];

export const menuSections = [
  {
    title: "季節のお茶（人用）",
    items: [
      { name: "森のほうじ茶", description: "香ばしく、余韻がやさしい一杯です。", price: "700円" },
      { name: "白樺ブレンド", description: "すっきり飲める和紅茶です。", price: "760円" },
      { name: "月替わりのハーブティー", description: "季節に合わせて茶葉を選びます。", price: "780円" },
    ],
  },
  {
    title: "焼き菓子（人用）",
    items: [
      { name: "くるみのフィナンシェ", description: "外はさっくり、中はしっとり焼き上げます。", price: "520円" },
      { name: "黒糖サブレ", description: "お茶に合わせやすい、軽い歯ざわりです。", price: "480円" },
      { name: "季節のパウンドケーキ", description: "果物やナッツを少しずつ変えて用意します。", price: "620円" },
    ],
  },
  {
    title: "チンチラのおやつ",
    items: [
      { name: "乾燥りんご", description: "スタッフの案内で少量だけあげられます。", price: "300円" },
      { name: "チモシースティック", description: "手元で持ちやすい小さなサイズです。", price: "300円" },
      { name: "おやつセット", description: "その日の体調に合わせて内容を選びます。", price: "450円" },
    ],
  },
  {
    title: "チンチラカフェコース",
    items: [
      { name: "45分コース", description: "お茶1杯と見守り中心の短い滞在です。", price: "2,400円" },
      { name: "75分コース", description: "お茶と焼き菓子付きで、ゆっくり過ごせます。", price: "3,600円" },
      { name: "貸切相談", description: "少人数で落ち着いて過ごしたい方向けです。", price: "要相談" },
    ],
  },
];

export const firstVisitorFlow = [
  { step: "1", title: "予約する", text: "来店日、時間、人数、コースを選びます。" },
  { step: "2", title: "受付する", text: "体調確認と手洗いを済ませ、過ごし方を聞きます。" },
  { step: "3", title: "席で待つ", text: "チンチラが落ち着くまで、席でゆっくり待ちます。" },
  { step: "4", title: "見守る", text: "スタッフの案内に合わせ、無理に触れずに過ごします。" },
];

export const guidanceCards = [
  {
    title: "大きな声を出さない",
    text: "急な音はチンチラを驚かせます。会話は小さめの声でお願いします。",
  },
  {
    title: "追いかけない",
    text: "近づいてくるまで待つと、チンチラも人も安心して過ごせます。",
  },
  {
    title: "写真は静かに撮る",
    text: "フラッシュは使わず、スタッフの案内がある場所で撮影してください。",
  },
  {
    title: "食べ物を勝手にあげない",
    text: "体調を守るため、おやつは用意されたものだけを使います。",
  },
];

export const faqItems = [
  {
    question: "初めてでも大丈夫ですか？",
    answer: "大丈夫です。受付時に過ごし方を説明し、スタッフが近くで見守ります。",
  },
  {
    question: "子どもは利用できますか？",
    answer: "小学生以上から利用できます。中学生以下の方は保護者と一緒にお越しください。",
  },
  {
    question: "写真は撮れますか？",
    answer: "撮影できます。フラッシュや大きな音が出る撮影は控えてください。",
  },
  {
    question: "当日予約はできますか？",
    answer: "空きがある場合だけ受け付けます。確実に利用したい場合は前日までの予約をおすすめします。",
  },
];

export const reservationOptions = {
  dates: ["5月18日（月）", "5月21日（木）", "5月22日（金）", "5月23日（土）", "5月24日（日）"],
  times: ["11:00", "12:30", "14:00", "15:30", "17:00"],
  people: ["1名", "2名", "3名", "4名"],
  courses: ["45分コース", "75分コース", "貸切相談"],
  durations: ["45分", "75分", "相談する"],
  notesPlaceholder: "苦手なこと、同行者の年齢、相談したいことがあれば入力してください。",
};

export const policies = [
  {
    title: "予約について",
    text: "席数が少ないため、来店前の予約をお願いします。到着が遅れる場合は電話でご連絡ください。",
  },
  {
    title: "キャンセルについて",
    text: "前日18時までにご連絡ください。当日の無断キャンセルが続く場合、次回以降の予約をお断りすることがあります。",
  },
  {
    title: "体調について",
    text: "発熱や強い咳がある場合は来店をお控えください。チンチラの体調により、出勤予定が変わることがあります。",
  },
  {
    title: "ふれあいについて",
    text: "チンチラの気分を優先します。抱っこや無理な接触はできません。",
  },
];
