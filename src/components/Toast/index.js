import React from "react";
import PropTypes from "prop-types";
import { ToastContainerMsg } from "./elements";

export default function Toast(props) {
  const { msg } = props;
  return <ToastContainerMsg>{msg}</ToastContainerMsg>;
}

Toast.propTypes = {
  msg: PropTypes.string,
};
