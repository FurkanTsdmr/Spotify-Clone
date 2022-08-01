import BottomBar from "Components/BottomBar";
import Content from "Components/Content";
import Sidebar from "Components/Sidebar";

function App() {
  return (
    <>
    <div className="container">
      <Sidebar />
      <Content />
    </div>
    <BottomBar />
    </>
  );
}

export default App;
