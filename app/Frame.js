"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Frame({ className, children }) {
  return (
    <motion.article
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.article>
  );
}
