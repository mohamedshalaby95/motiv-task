import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

import Dashbord from "./screens/dashbord/dashbord";
import  Cars from "./screens/cars/Cars"
import "./App.css";
import "./i18n";
function App() {
  const { t, i18n } = useTranslation();
   const direction = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <div dir={direction} className="App">
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
          <Route path="/" element={<Dashbord />} />
          <Route path="/cars" element={<Cars />} />
          {/* <Route path="*" element={<PageNotFound />} />
          <Route path="rank" element={<RankScreen />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
