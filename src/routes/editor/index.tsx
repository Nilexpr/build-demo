import { createFileRoute } from "@tanstack/solid-router";
import { Editor } from "../../pages/editor";

export const Route = createFileRoute("/editor/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Editor></Editor>;
}
