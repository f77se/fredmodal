import { useNavigate, useRouteLoaderData } from "@remix-run/react";

export default function TablePage() {
  const { page } = useRouteLoaderData("routes/tables.$page") as {
    page: number;
  };

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div>
      <h1>Modal view</h1>
      <p>Current page: {page}</p>
      <button onClick={goBack}>Close</button>
    </div>
  );
}
