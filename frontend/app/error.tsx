"use client";

import React from "react";

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log("logging error:", error);
  }, [error]);

  return <div className="bg-red-500 w-96 h-96"></div>;
}
