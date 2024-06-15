import { Outlet } from "@remix-run/react";

export default function TablesLayout() {
  return (
    <div>
      <h1>Ma tables</h1>
      <Outlet />
    </div>
  );
}
