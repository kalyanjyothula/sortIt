import React from "react";
import { ToastContainerMsg } from "./elements";

export default function Toast(props) {
  const { msg } = props;
  return <ToastContainerMsg>{msg}</ToastContainerMsg>;
}
