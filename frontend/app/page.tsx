import { featuresRoutes } from "@/utils/data/features-routes";
import Link from "next/link";
import React from "react";

export default function Page() {
  const routes = featuresRoutes.map((route) => {
    return (
      <div className="flex flex-col items-center p-6 border rounded-input">
        <h1 className="font-bold">{route.name}</h1>
        <img src={route.image.src} className="w-56 h-56" />
        <Link className="button" href={route.mainRoute}>
          {route.viewName}
        </Link>
        <Link className="mt-2 button-bg" href={route.createRoute}>
          {route.createName}
        </Link>
      </div>
    );
  });

  return (
    <div className="flex items-center justify-center w-screen h-screen gap-32">
      {routes}
    </div>
  );
}
