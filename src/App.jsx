import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";
import { app } from "./App.module.css";
function App() {
  return (
    <div className={app}>
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
