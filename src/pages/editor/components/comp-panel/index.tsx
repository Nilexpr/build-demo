import { For, type Component } from "solid-js";
import type { CompPanelProps } from "./interfaces";

export const CompPanel: Component<CompPanelProps> = (props) => {
  return (
    <div class="flex max-w-40 flex-1 flex-col content-start items-start gap-0.5 border">
      <For each={props.compList}>
        {(item) => {
          return <div class="border border-red-500 p-1">{item.name}</div>;
        }}
      </For>
    </div>
  );
};
