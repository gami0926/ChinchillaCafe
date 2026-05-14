import { useState } from "react";
import Header from "./components/Header.jsx";
import ChinchillasPage from "./pages/ChinchillasPage.jsx";
import GuidePage from "./pages/GuidePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import ReservePage from "./pages/ReservePage.jsx";
import SpacePage from "./pages/SpacePage.jsx";

const pages = {
  home: HomePage,
  chinchillas: ChinchillasPage,
  space: SpacePage,
  menu: MenuPage,
  guide: GuidePage,
  reservation: ReservePage,
};

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const ActivePage = pages[activePage] ?? HomePage;

  function handleNavigate(page) {
    setActivePage(page);
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  return (
    <div className="min-h-screen bg-linen text-walnut">
      <Header activePage={activePage} onNavigate={handleNavigate} />
      <ActivePage key={activePage} onNavigate={handleNavigate} />
      <footer className="border-t border-fine-border px-5 py-8 text-center text-sm text-walnut/62">
        <p className="font-serif text-xl text-walnut">森音</p>
        <p className="mt-2">札幌市中央区の架空のチンチラカフェ / 予約制</p>
      </footer>
    </div>
  );
}
