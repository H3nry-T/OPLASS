export default function DashboardCard({
  title,
  description1,
  description2,
  percentageChange,
}: {
  title: string;
  description1: string;
  description2: string;
  percentageChange: string;
}) {
  let color = "bg-gray-300";

  if (percentageChange.startsWith("+")) {
    color = "bg-green-300";
  } else if (percentageChange.startsWith("-")) {
    color = "bg-red-300";
  }

  return (
    <div className="flex justify-between rounded-lg bg-gray-100 p-4">
      <div className="">
        <h2 className="mr-2 text-4xl font-bold capitalize text-gray-800">
          {title}
        </h2>
        <span className="mr-2 font-semibold capitalize text-gray-600">
          {description1}
        </span>
        &bull;
        <span className="ml-2 font-semibold capitalize text-gray-600">
          {description2}
        </span>
      </div>
      <div
        className={`grid place-items-center rounded-lg px-2 py-0 text-3xl text-green-900 ${color}`}
      >
        {percentageChange}
      </div>
    </div>
  );
}
