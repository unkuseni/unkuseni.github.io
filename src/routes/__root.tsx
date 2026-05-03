import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ErrorBoundary } from "@/components/error-boundary";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  );
}
