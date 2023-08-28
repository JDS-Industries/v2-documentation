import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import { Icon } from "@iconify/react";
import Highlight from "../components/highlight";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  icon: Icon,
  Highlight,
};
