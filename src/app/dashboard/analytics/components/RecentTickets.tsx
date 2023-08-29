import { faker } from "@faker-js/faker";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineBug } from "react-icons/ai";
import { BsTicketDetailed } from "react-icons/bs";

type Ticket = {
  id: string;
  title: string;
  description: string;
  date: string;
  status: string;
  type: string;
};

export default function RecentTickets() {
  const [recentTickets, setRecentTickets] = useState<Ticket[] | null>(null);
  useEffect(() => {
    const newArray = new Array(11).fill(0).map((_, i) => {
      return {
        id: faker.string.uuid(),
        title: faker.lorem.words(2),
        description: `Ticket created by ${faker.person.fullName()}`,
        date: faker.date.recent(20).toLocaleDateString(),
        status: faker.helpers.arrayElement(["open", "closed", "in-progress"]),
        type: faker.helpers.arrayElement(["bug", "feature"]),
      };
    });
    setRecentTickets(newArray);
  }, []);
  return (
    <section className="flex h-[50vh] flex-col gap-4 overflow-y-scroll  rounded-lg border border-gray-600 bg-gray-900 p-4 lg:h-[70vh]">
      {recentTickets &&
        recentTickets.map((t) => (
          <Link
            className="flex items-center gap-4 p-4 bg-gray-200 rounded-lg"
            key={t.id}
            href={"http://localhost:3000"}
          >
            {t.type === "bug" ? (
              <AiOutlineBug
                size={48}
                className="p-2 bg-gray-600 rounded-lg invert filter"
              />
            ) : (
              <BsTicketDetailed
                size={48}
                className="p-2 bg-gray-600 rounded-lg invert filter"
              />
            )}

            <article className="flex items-center justify-between w-full border ">
              <div className="leading-none truncate">
                <h2 className="text-xl font-semibold">{t.title}</h2>
                <p className="text-gray-500">{t.description}</p>
                <p className="mt-2 italic text-gray-800">{t.date}</p>
              </div>
              <div>
                <span
                  className={`rounded-lg px-2 py-0 ${
                    t.status === "open"
                      ? "bg-green-300 text-green-900"
                      : t.status === "closed"
                      ? "bg-red-300 text-red-900"
                      : "bg-yellow-300 text-yellow-900"
                  }`}
                >
                  {t.status}
                </span>
              </div>
            </article>
          </Link>
        ))}
    </section>
  );
}
