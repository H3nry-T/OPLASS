import { dashboardNavigation } from "@/constants/landingPageConstants";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex justify-center bg-gray-950">
      <section className="flex flex-col w-full max-w-[2200px] min-h-screen md:flex-row bg-gray-950">
        <aside className="hidden w-full max-w-md min-h-screen md:block">
          <ul className="flex flex-col gap-10 py-10 text-lg font-semibold tracking-tight">
            {dashboardNavigation.map((item) => (
              <Link
                href={`${item.title}`}
                className="max-w-4xl px-2 py-1 capitalize rounded-lg hover:bg-gray-700/70"
                key={item.title}
              >
                {item.title}
                <li key={item.title}></li>
              </Link>
            ))}
          </ul>
        </aside>

        {children}
      </section>
    </section>
  );
}
