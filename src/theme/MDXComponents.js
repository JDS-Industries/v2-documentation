import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import { Icon } from "@iconify/react";
import Highlight from "../components/highlight";
import OptimizedImage from '../components/OptimizedImage/index';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Icon,
  Highlight,
  OptimizedImage,
};
