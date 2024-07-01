import "./App.css";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <CustomCursor />
      <Home />
      <ScrollToTop />
    </>
  );
}

export default App;
