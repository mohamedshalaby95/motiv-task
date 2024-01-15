import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Dashbord from "./screens/dashbord/dashbord";
import "./App.css";
import { useTranslation } from "react-i18next";
import "./i18n";
function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Dashbord />} />
          {/* <Route path="practice" element={<PracticeScreen />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="rank" element={<RankScreen />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
