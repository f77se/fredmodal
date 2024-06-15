import { LoaderFunction } from "@remix-run/node";
import {
  Link,
  Outlet,
  useLoaderData,
  useLocation,
  useOutletContext,
} from "@remix-run/react";
import { TablesLayoutContext } from "./tables";

export const loader: LoaderFunction = ({ params }) => {
  const { page } = params;

  return {
    page: parseInt(page as string),
  };
};

export default function TablePage() {
  const { page } = useLoaderData<typeof loader>();
  const prev = page > 1 ? page - 1 : null;
  const next = page < 10 ? page + 1 : null;

  const location = useLocation();
  const showModal = location.pathname.endsWith("details");

  const outletCtx = useOutletContext<TablesLayoutContext>();
  const { lang } = outletCtx;
  const ctx = {
    ...outletCtx,
    title:
      lang === "en" ? `Tables for page ${page}` : `Tabeller för sida ${page}`,
  };
  return (
    <div>
      <h1>
        {lang === "en" ? "My tables" : "Mina tabeller"} {page}.
      </h1>

      <p>
        <Link to={`/tables/${page}/details`}>More details about this page</Link>
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {prev ? <Link to={`/tables/${prev}`}>Prev</Link> : null}
        {next ? <Link to={`/tables/${next}`}>Next</Link> : null}
      </div>

      {showModal ? (
        <>
          <div style={{ inset: 0, zIndex: 5, background: "rgba(0,0,0,0.8)" }} />
          <div
            style={{
              zIndex: 10,
              position: "fixed",
              top: 0,
              left: 200,
              right: 0,
              bottom: 0,
              boxShadow: "0 0 20px 40px rgba(0,0,0,0.5)",
              background: "rgb(250,250,250)",
              padding: 30,
            }}
          >
            <Outlet context={ctx} />
          </div>
        </>
      ) : null}
    </div>
  );
}

export type TablePageOutletContext = TablesLayoutContext & { title: string };
