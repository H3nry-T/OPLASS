// Get the team name from api
export default function Page() {
  return (
    <section className="w-screen min-h-screen p-8 bg-gray-950">
      <h2 className="mb-10 text-2xl font-semibold tracking-tight">Team 1</h2>
      <section className="flex flex-col flex-wrap items-center gap-4 xl:flex-row">
        {cards.map((c) => (
          <div
            className="w-full h-[300px] max-w-lg border-2 border-gray-400 rounded-lg flex-shrink-0 shadow-inner shadow-gray-700"
            key={c.title}
          >
            <h3 className="pt-4 font-semibold text-center text-gray-400 capitalize">
              {c.title}
            </h3>
          </div>
        ))}
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

const cards = [{ title: "card 1" }, { title: "card 2" }, { title: "card 3" }];
