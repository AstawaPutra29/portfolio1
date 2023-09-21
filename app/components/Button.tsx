import { IconBrandInstagram } from "@tabler/icons-react";
import React, { HTMLAttributes, ReactElement } from "react";

interface Iproops extends HTMLAttributes<HTMLElement> {
  icon?: ReactElement;
  children: React.ReactNode;
  className?: any;
}

export default function Button({
  icon,
  children,
  className = "bg-blue-600",
  ...props
}: Iproops) {
  return (
    <button
      {...props}
      className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 text-white px-2 py-4 rounded flex gap-2 items-center w-max`}
    >
      {icon}
      {children}
    </button>
  );
}
