"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React from "react";
import NavLogo from "./NavLogo";
import NavLink from "./NavLink";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export default function NavBar() {
  const { isLoaded, isSignedIn } = useUser();
  return (
    <NavigationMenu.Root className="text-gray-100 bg-gray-950 ">
      <NavigationMenu.List className="flex items-center justify-between gap-8 px-5 py-4 mx-auto max-w-7xl ">
        <NavigationMenu.Item className="flex items-center gap-4 font-semibold">
          <NavLogo />
          <NavLink href="/dashboard/home">dashboard</NavLink>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="flex items-center gap-2 text-lg font-semibold tracking-tight capitalize">
          {!isSignedIn || !isLoaded ? (
            <>
              <NavigationMenu.Link
                href="/sign-in"
                className="px-3 py-1 leading-none rounded-lg hover:bg-gray-800/90"
              >
                login
              </NavigationMenu.Link>
              <NavigationMenu.Link
                href="/sign-up"
                className="px-3 py-1 leading-none text-gray-400 rounded-lg hover:bg-gray-800/90"
              >
                signup
              </NavigationMenu.Link>
            </>
          ) : (
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonPopoverActionButtonText:
                    "  capitalize font-semibold text-sm",
                  userButtonPopoverCard: "rounded-lg",
                  userButtonPopoverFooter: "hidden",
                },
              }}
            />
          )}
        </NavigationMenu.Item>
        <NavigationMenu.Indicator />
      </NavigationMenu.List>
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
}
