import RightCard from "./components/RightCard.tsx";
import Login from "./components/LeftLogin/index.tsx";

function App() {
  return (
    <div className="w-full h-[100vh] p-5 flex justify-between items-center">
      {/* Right Side Card Component */}
      <RightCard />
      {/* Left Side Login Page Component */}
      <Login />
    </div>
  );
}

export default App;
