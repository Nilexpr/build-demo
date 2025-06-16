import { createSignal, onMount } from "solid-js";
import { AttrPanel } from "./components/attr-panel";
import { CompPanel } from "./components/comp-panel";
import { Preview } from "./components/preview";
import { fetchCompList, type CompSchema } from "../../configs/schemas";

export const Editor = () => {
  const [compList, setCompList] = createSignal<CompSchema[]>([]);

  onMount(() => {
    fetchCompList().then(setCompList);
  });

  return (
    <div class="m-4 flex h-full items-stretch border border-gray-200">
      <CompPanel compList={compList()}></CompPanel>
      <Preview></Preview>
      <AttrPanel></AttrPanel>
    </div>
  );
};
