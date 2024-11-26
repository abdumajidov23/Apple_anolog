import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Title from "./components/header_title/Title";
import Main from "./components/main/Main";
import iphone_pro from "./assets/pro.jpg";
import purple_iPhone from "./assets/purpleIphone.jpg";
import ipad_air from "./assets/ipad_air.jpg";

function App() {
  return (
    <>
      <Header />
      <Title />
      <Hero
        title={"iPhone 16 Pro"}
        desc="Hello, Apple Intelligence"
        cl="#fff"
        url={iphone_pro}
        buttons={["Learn more", "Buy"]}
        btn_bg="blue"
      />
      <Hero
        title={"iPhone 16"}
        desc="Hello, Apple Intelligence"
        cl="#fff"
        url={purple_iPhone}
        buttons={["Learn more", "Buy"]}
        btn_bg="white"
      />
      <Hero
        title={"iPad Air"}
        desc="Two sizes. Faster chip. Does it all."
        cl="#000"
        url={ipad_air}
        buttons={["Learn more", "Buy"]}
        btn_bg="blue"
      />
      <Main />
    </>
  );
}

export default App;
