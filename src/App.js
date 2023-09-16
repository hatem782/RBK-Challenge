import "./App.scss";
import MakeDevLink from "./Pages/MakeDevLink/MakeDevLink";
import CustomToaster from "./Components/Toast/MyToast.jsx";

function App() {
  return (
    <div className="app">
      <CustomToaster />
      <MakeDevLink />
    </div>
  );
}

export default App;
