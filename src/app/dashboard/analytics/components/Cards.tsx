import DashboardCard from "./DashboardCard";

export default function Cards() {
  return (
    <article className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-3">
      {cards.map((c, i) => {
        return (
          <DashboardCard
            key={i}
            title={c.title}
            description1={c.description1}
            description2={c.description2}
            percentageChange={c.percentageChange}
          />
        );
      })}
    </article>
  );
}

const cards = [
  {
    title: "£120,000",
    description1: "products sold",
    description2: "last 4 weeks",
    percentageChange: "+18%",
  },
  {
    title: "£7000",
    description1: "project 7 revenue",
    description2: "this month",
    percentageChange: "-10%",
  },
  {
    title: "120000",
    description1: "new customers",
    description2: "this year",
    percentageChange: "+200%",
  },
];
