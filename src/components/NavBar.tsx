"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React from "react";
export default function NavBar() {
  return (
    <NavigationMenu.Root className="text-gray-100 bg-gray-950 ">
      <NavigationMenu.List className="flex items-center justify-between gap-8 px-5 py-4 mx-auto max-w-7xl ">
        <NavigationMenu.Item className="flex items-center gap-4 font-semibold">
          <NavLogo />
          <NavLink href="/dashboard">dashboard</NavLink>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="flex items-center gap-2 text-lg font-semibold tracking-tight capitalize">
          <NavigationMenu.Link
            href="/"
            className="px-3 py-1 leading-none rounded-lg hover:bg-gray-800/90"
          >
            login
          </NavigationMenu.Link>
          <NavigationMenu.Link
            href="/"
            className="px-3 py-1 leading-none text-gray-400 rounded-lg hover:bg-gray-800/90"
          >
            signup
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator />
      </NavigationMenu.List>
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
}
function NavLogo() {
  return (
    <NavigationMenu.Link href="/" className="flex items-center gap-2 ">
      <img
        src="/ice-cube.svg"
        alt="ice cube"
        className="w-8 h-8 invert"
        draggable={false}
      />
      <span className="text-2xl font-semibold leading-none text-transparent text-gray-100 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text">
        OPLASS
      </span>
    </NavigationMenu.Link>
  );
}

function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <NavigationMenu.Link
      href={href}
      className="hidden px-3 py-1 text-lg leading-none transition-all duration-300 ease-in-out rounded-lg md:block first-letter:capitalize hover:bg-gray-800/90 "
    >
      {children}
    </NavigationMenu.Link>
  );
}
