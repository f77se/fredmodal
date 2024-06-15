import { Link, useOutletContext, useRouteLoaderData } from "@remix-run/react";
import { TablePageOutletContext } from "./tables.$page";

export default function TablePage() {
  const { page } = useRouteLoaderData("routes/tables.$page") as {
    page: number;
  };
  const { title, lang, setLang } = useOutletContext<TablePageOutletContext>();

  return (
    <div>
      <h1>{title}</h1>
      <p>
        {lang === "en" ? "Page" : "Sida"}: {page}
      </p>
      <hr />
      <button onClick={() => setLang(lang === "en" ? "sv" : "en")}>
        {lang === "en" ? "Svenska" : "English"}
      </button>
      <hr />
      <Link to={`/tables/${page}`}>Close</Link>
    </div>
  );
}
