import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full min-h-screen text-gray-100 bg-gray-950">
      <section className="flex flex-col items-center justify-center gap-10 py-20 lg:flex-row lg:py-96 outline">
        <div className="text-gray-100 lg:translate-y-[-30px] w-[150px] h-[150px] lg:w-[300px] lg:h-[300px]">
          <img src="/ice-dark.svg" alt="ice cube" />
        </div>

        <div className="flex flex-col ">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-9xl">
            OPLASS
          </h1>
          <h3 className="flex items-center justify-center gap-4 mt-5 text-lg leading-none text-gray-300 uppercase divide-x-2 lg:text-2xl gray-200 md:mt-10 lg:mt-5">
            <span className="">streamline</span>
            <span className="pl-4">track</span>
            <span className="pl-4">succeed</span>
          </h3>

          <button className="flex items-center justify-center max-w-xs gap-4 px-10 py-2 mx-auto mt-10 text-sm font-bold tracking-wide text-gray-800 uppercase bg-gray-100 rounded-lg">
            <span className="pr-4 text-lg font-semibold leading-none tracking-tight border-r border-gray-900">
              try it out
            </span>
            <img src="/snowflake.svg" alt="snowflake" className="w-6 h-6 " />
          </button>
        </div>
      </section>
    </section>
  );
}
