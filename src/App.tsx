import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from "react-i18next";
function App() {
   const { t, i18n } = useTranslation();
    return (
      <>
        <h1 className="text-3xl font-bold underline text-center">
          {t("Welcome to React")}
        </h1>
      </>
    );
}

export default App;
