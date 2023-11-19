import { Suspense } from "react";
import { Outlet } from "react-router";

export const SharedLayout = () => {
  return (
    <main>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
};
