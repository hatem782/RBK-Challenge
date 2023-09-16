import "./App.scss";
import MakeDevLink from "./Pages/MakeDevLink/MakeDevLink";
import CustomToaster from "./Components/Toast/MyToast.jsx";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <CustomToaster />

      <Routes>
        <Route path="/make-profile/*" element={<MakeDevLink />} />
        <Route path="/*" element={<Navigate to="/make-profile" />} />
      </Routes>
    </div>
  );
}

export default App;
