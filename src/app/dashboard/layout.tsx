export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex justify-center bg-gray-950">
      <section className="flex flex-col w-full max-w-[2200px] min-h-screen md:flex-row bg-gray-950">
        <aside className="hidden w-full max-w-md min-h-screen md:block">
          <ul className="flex flex-col gap-10 px-5 py-10 text-lg font-semibold tracking-tight border-r-4 ">
            {dashboardNavigation.map((item) => (
              <li key={item.title} className="capitalize">
                <a href={`${item.title}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </aside>
        <aside className="w-full md:hidden">
          <ul className="flex flex-col gap-10 px-5 py-10 text-lg font-semibold tracking-tight border-r-4 ">
            {dashboardNavigation.map((item) => (
              <li key={item.title} className="capitalize">
                <a href={`${item.title}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </aside>
        {children}
      </section>
    </section>
  );
}

const dashboardNavigation = [
  {
    title: "home",
  },
  {
    title: "analytics",
  },
  {
    title: "settings",
  },
];
