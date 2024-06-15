import { Outlet } from "@remix-run/react";
import { useState } from "react";

export default function TablesLayout() {
  const [color, setColor] = useState("white");
  const [lang, setLang] = useState("en");

  const ctx = {
    color,
    setColor,
    lang,
    setLang,
  };
  return (
    <div>
      <h1>Ma tables</h1>
      <Outlet context={ctx} />
    </div>
  );
}

export type TablesLayoutContext = {
  color: string;
  setColor: (color: string) => void;
  lang: string;
  setLang: (lang: string) => void;
};
