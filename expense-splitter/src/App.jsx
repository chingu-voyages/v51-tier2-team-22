import Sidebar from "./components/Sidebar";
import MainWindow from './components/MainWindow.jsx'
import TopBar from "./components/TopBar.jsx";

function App() {
  
  return (
    <section className="border-4 border-red-500 flex h-screen p-5">
      <Sidebar/>
      <div className="flex flex-col flex-grow">
      <TopBar/>
      <MainWindow/>
      </div>
    </section>
  );
}

export default App;
