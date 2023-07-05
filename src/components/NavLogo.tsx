import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function NavLogo() {
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
