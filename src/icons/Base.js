import React from "react";
import PropTypes from "prop-types";

export default function Base({ children, width, height, style, ...props }) {
  return (
    <svg
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={height}
      width={width}
      {...props}
      style={style}
    >
      {children}
    </svg>
  );
}

Base.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};
