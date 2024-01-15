import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  return (
    <div className="flex items-center space-x-2 mx-3">
      <select
        id="lang"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
        className="p-2 rounded"
      >
        <option value="en">En</option>
        <option value="ar">Ar</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
