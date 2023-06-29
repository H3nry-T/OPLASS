"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
export default function NavBar() {
  return (
    <NavigationMenu.Root className="text-gray-100 bg-gray-950 ">
      <NavigationMenu.List className="flex items-center justify-between gap-8 px-5 py-4 mx-auto max-w-7xl ">
        <NavigationMenu.Item className="">
          <NavigationMenu.Link href="/" className="flex items-center gap-2 ">
            <img
              src="/ice-cube.svg"
              alt="ice cube"
              className="w-8 h-8 invert"
              draggable={false}
            />
            <span className="text-2xl font-semibold leading-none text-gray-100">
              OPLASS
            </span>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="flex items-center gap-2 text-lg font-semibold tracking-tight capitalize">
          <NavigationMenu.Link
            href="/"
            className="px-3 py-1 leading-none rounded-lg hover:bg-gray-800/50"
          >
            login
          </NavigationMenu.Link>
          <NavigationMenu.Link
            href="/"
            className="px-3 py-1 leading-none text-gray-400 rounded-lg hover:bg-gray-800/50"
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
