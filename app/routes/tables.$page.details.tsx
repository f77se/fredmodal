import { Link, useRouteLoaderData } from "@remix-run/react";

export default function TablePage() {
  const { page } = useRouteLoaderData("routes/tables.$page") as {
    page: number;
  };

  return (
    <div>
      <h1>Modal view</h1>
      <p>Current page: {page}</p>
      <Link to={`/tables/${page}`}>Close</Link>
    </div>
  );
}
