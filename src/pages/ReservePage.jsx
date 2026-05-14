import { useMemo, useState } from "react";
import { Band, Hero, InteriorPanel, PageShell, SectionTitle } from "../components/ui.jsx";

const dates = ["5/18 月", "5/19 火", "5/20 水", "5/22 金", "5/23 土", "5/24 日"];
const times = ["11:00", "13:00", "15:00", "17:00"];
const people = ["1名", "2名", "3名", "4名"];
const courses = [
  { name: "基本コース", price: 2800 },
  { name: "お茶と焼き菓子", price: 3400 },
  { name: "チンチラのおやつ付き", price: 3800 },
];
const durations = ["60分", "90分"];

function SelectButton({ selected, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`selection-surface rounded-card border px-4 py-3 text-sm ${
        selected
          ? "border-moss bg-moss text-white"
          : "border-fine-border bg-white/34 text-walnut hover:border-moss"
      }`}
    >
      {children}
    </button>
  );
}

export default function ReservePage() {
  const [selectedDate, setSelectedDate] = useState(dates[1]);
  const [selectedTime, setSelectedTime] = useState(times[1]);
  const [selectedPeople, setSelectedPeople] = useState(people[1]);
  const [selectedCourse, setSelectedCourse] = useState(courses[0].name);
  const [selectedDuration, setSelectedDuration] = useState(durations[1]);

  const selectedCourseData = courses.find((course) => course.name === selectedCourse) ?? courses[0];
  const peopleCount = Number.parseInt(selectedPeople, 10);
  const durationFee = selectedDuration === "90分" ? 600 : 0;
  const total = (selectedCourseData.price + durationFee) * peopleCount;
  const summary = useMemo(
    () => [selectedDate, selectedTime, selectedPeople, selectedCourse, selectedDuration].join(" / "),
    [selectedDate, selectedTime, selectedPeople, selectedCourse, selectedDuration],
  );

  return (
    <PageShell testId="page-reserve">
      <Hero
        eyebrow="Reservation"
        title="静かな時間を、先にひとつ取っておく。"
        lead="予約内容を選ぶと、右側の控えに反映されます。実送信はまだ行わないデモ画面です。"
        image="/assets/reserve-hero.png"
        imageAlt="予約席とカレンダー"
      />
      <Band className="border-t border-fine-border bg-white/22">
        <SectionTitle eyebrow="Booking" title="ご予約" />
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <form className="rounded-card border border-fine-border bg-linen/70 p-5 shadow-[0_18px_45px_rgba(45,41,37,0.05)] md:p-7">
            <div className="grid gap-7 md:grid-cols-2">
              <fieldset>
                <legend className="mb-3 font-serif text-xl">日付</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {dates.map((date) => (
                    <SelectButton key={date} selected={selectedDate === date} onClick={() => setSelectedDate(date)}>
                      {date}
                    </SelectButton>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="mb-3 font-serif text-xl">時間</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {times.map((time) => (
                    <SelectButton key={time} selected={selectedTime === time} onClick={() => setSelectedTime(time)}>
                      {time}
                    </SelectButton>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="mb-3 font-serif text-xl">人数</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {people.map((person) => (
                    <SelectButton key={person} selected={selectedPeople === person} onClick={() => setSelectedPeople(person)}>
                      {person}
                    </SelectButton>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="mb-3 font-serif text-xl">利用時間</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {durations.map((duration) => (
                    <SelectButton key={duration} selected={selectedDuration === duration} onClick={() => setSelectedDuration(duration)}>
                      {duration}
                    </SelectButton>
                  ))}
                </div>
              </fieldset>
            </div>
            <fieldset className="mt-7">
              <legend className="mb-3 font-serif text-xl">コース</legend>
              <div className="grid gap-3 md:grid-cols-3">
                {courses.map((course) => (
                  <button
                    key={course.name}
                    type="button"
                    onClick={() => setSelectedCourse(course.name)}
                    className={`selection-surface rounded-card border p-4 text-left text-sm ${
                      selectedCourse === course.name
                        ? "border-moss bg-moss text-white"
                        : "border-fine-border bg-white/34 text-walnut hover:border-moss"
                    }`}
                  >
                    <span className="block font-medium">{course.name}</span>
                    <span className={`mt-2 block ${selectedCourse === course.name ? "text-linen/80" : "text-cedar"}`}>
                      {course.price.toLocaleString()}円
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="mt-7 block">
              <span className="font-serif text-xl">備考</span>
              <textarea
                className="mt-3 min-h-28 w-full rounded-card border border-fine-border bg-white/45 p-4 outline-none focus:border-moss"
                placeholder="苦手なことや相談したいことがあれば書いてください"
              />
            </label>
          </form>
          <aside className="h-fit overflow-hidden rounded-card border border-fine-border bg-walnut text-linen shadow-soft">
            <img
              className="aspect-[4/3] w-full object-cover opacity-92"
              src="/assets/reserve-hero.png"
              alt=""
              loading="lazy"
            />
            <div className="p-6">
              <p className="text-xs tracking-[0.22em] text-brass">SUMMARY</p>
              <h2 className="mt-3 font-serif text-3xl">予約内容</h2>
              <p className="mt-5 text-sm leading-8 text-linen/82">{summary}</p>
              <InteriorPanel className="mt-5 border-white/15 bg-white/8 p-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-linen/75">合計目安</span>
                  <strong className="font-serif text-3xl text-white">{total.toLocaleString()}円</strong>
                </div>
                <p className="mt-2 text-xs leading-6 text-linen/62">人数と利用時間によって自動で変わります。</p>
              </InteriorPanel>
              <button
                type="button"
                className="motion-arrow mt-6 w-full rounded-card border border-brass bg-brass px-5 py-3 text-sm font-medium text-walnut transition-colors hover:bg-linen"
              >
                この内容で進む
              </button>
              <div className="mt-6 border-t border-linen/20 pt-5 text-sm leading-7 text-linen/75">
                <h3 className="font-serif text-xl text-linen">キャンセルポリシー</h3>
                <p className="mt-2">前日18時以降の変更は、席料の50%をお願いする場合があります。</p>
              </div>
            </div>
          </aside>
        </div>
      </Band>
    </PageShell>
  );
}
