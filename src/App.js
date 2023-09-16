import "./App.scss";
import MakeDevLink from "./Pages/MakeDevLink/MakeDevLink";
import CustomToaster from "./Components/Toast/MyToast.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetAllFromLocalStorage } from "./Redux/all_data.reducer";
import PreviewPage from "./Pages/PreviewPage/PreviewPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // check if local storage has global links and set it to redux
    if (localStorage.getItem("global_links")) {
      dispatch(GetAllFromLocalStorage());
    }
  }, []);

  return (
    <div className="app">
      <CustomToaster />

      <Routes>
        <Route path="/make-profile/*" element={<MakeDevLink />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/*" element={<Navigate to="/make-profile" />} />
      </Routes>
    </div>
  );
}

export default App;
