import "./assets/fonts/fonts.scss";
import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
