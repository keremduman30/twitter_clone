import Content from "./components/Content";
import RightSidebar from "./components/RightSidebar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto">
      <Sidebar />
      <Content />
      <RightSidebar />
    </div>
  );
}

export default App;
