import "@/styles/main.scss";
import content from "@/content/page.json";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "./components/About/About";
import Creations from "./components/Creations/Creations";
import Footer from "@/components/Footer/Footer";

function App() {
  return (
    <>
      <Header data={content.header} />
      <main>
        <Hero data={content.hero} />
        <About data={content.about} />
        <Creations data={content.creations} />
      </main>
      <Footer data={content.footer} />
    </>
  );
}

export default App;
