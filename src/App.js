import "./App.css";
import Content from "./components/Content";
import { Cover } from "./components/Cover";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <Cover />
      <Content />
    </div>
  );
}

export default App;
