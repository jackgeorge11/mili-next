import React from "react";

export default function PageHeader({ title }) {
  return (
    <div className="page-header">
      <h1>{title}</h1>
      <div className="line"></div>
    </div>
  );
}
