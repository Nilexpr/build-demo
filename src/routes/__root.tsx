import { createRootRoute, Link, Outlet } from "@tanstack/solid-router";
// import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div class="flex flex-col">
      {/* <div class="hidden gap-2 p-2">
        <Link to="/editor">Editor</Link>
      </div> */}
      <div class="min-h-0 flex-1">
        <Outlet />
      </div>
      {/* <TanStackRouterDevtools /> */}
    </div>
  ),
});
