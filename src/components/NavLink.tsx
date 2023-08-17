import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export default function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="hidden px-3 py-1 text-lg leading-none transition-all duration-300 ease-in-out rounded-lg md:block first-letter:capitalize hover:bg-gray-800/90 "
    >
      {children}
    </Link>
  );
}
