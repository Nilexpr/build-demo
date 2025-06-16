import type { Component } from "solid-js";

/** 组件配置类型 */
export interface CompSchema {
  type: string;
  name: string;
  props: Record<string, any>;
}

const Button: Component<{
  text: string;
}> = (props) => {
  return <div>{props.text}</div>;
};

const button: CompSchema = {
  type: "button",
  name: "按钮",
  props: {
    text: "string",
  },
};

const CompList = [button, button, button, button, button, button];

export const fetchCompList = () => {
  return Promise.resolve(CompList);
};
