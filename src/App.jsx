import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import WriteName from "./components/header/Name";

function App() {
  return (
    <main className=" max-w-[90%] md:max-w-[80%] mx-auto">
      <header>
        <Header />
      </header>
      <HeroSection />

    </main>
  );
}

export default App;
