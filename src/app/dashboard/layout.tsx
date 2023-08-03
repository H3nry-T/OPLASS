export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex w-full min-h-screen bg-gray-950">
      <aside className="hidden w-full max-w-md min-h-screen border border-red-500 md:block">
        <ul className="flex flex-col gap-10 px-5 py-10 text-lg font-semibold tracking-tight ">
          {dashboardNavigation.map((item) => (
            <li key={item.title} className="capitalize">
              <a href={`${item.title}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </aside>
      {children}
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
