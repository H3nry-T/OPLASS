export default function Home() {
  return (
    <section className="w-full min-h-screen text-gray-100 bg-gray-950">
      <section className="flex flex-col items-center justify-center max-w-5xl gap-10 p-0 pt-20 pb-10 mx-auto lg:gap-20 lg:flex-row lg:pt-64 ">
        <div className="relative text-gray-100  w-[150px] h-[150px] lg:w-[300px] lg:h-[300px]">
          <div className="absolute top-0 bg-purple-400 rounded-full opacity-50 h-72 w-72 -left-12 mix-blend-difference filter blur-xl animate-blob "></div>
          <div className="absolute top-0 bg-orange-400 rounded-full opacity-50 h-72 w-72 mix-blend-difference filter blur-xl -right-12 animate-blob animation-delay-2"></div>
          <div className="absolute bg-blue-400 rounded-full opacity-50 -bottom-12 h-72 w-72 mix-blend-difference filter blur-xl -right-2 animate-blob animation-delay-4"></div>
          <img
            src="/ice-cube.svg"
            alt="ice cube"
            className="relative opacity-80 brightness-105 invert"
            draggable={false}
          />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl">
            OPLASS
          </h1>
          <h3 className="flex items-center justify-center gap-4 mt-5 text-base text-gray-400 uppercase divide-x lg:text-xl gray-200 md:mt-10 lg:mt-5">
            <span className="leading-none">streamline</span>
            <span className="pl-4 leading-none">track</span>
            <span className="pl-4 leading-none">succeed</span>
          </h3>
          <section className="relative mt-10 rounded-lg group">
            <div className="absolute rounded-lg from-orange-500 to-purple-400 -inset-1 blur opacity-70 bg-gradient-to-r"></div>
            <button className="relative flex items-center gap-4 px-10 py-1 text-gray-800 uppercase transition-all duration-200 ease-in-out bg-gray-100 rounded-lg group-hover:text-gray-100 group-hover:bg-gray-700 group-active:bg-gray-600">
              <span className="pr-4 font-semibold leading-none border-r border-gray-900 group-hover:border-gray-100">
                try it out
              </span>
              <svg
                fill="#000000"
                width="800px"
                height="800px"
                viewBox="-1 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current cf-icon-svg"
              >
                <path d="M16.11 10.317a.554.554 0 0 1-.204.757l-1.83 1.053.943.545a.554.554 0 1 1-.554.96l-.953-.55-.003 2.13a.554.554 0 0 1-.554.553.554.554 0 0 1-.554-.555l.004-2.768-3.35-1.934v3.873l2.39 1.38a.554.554 0 0 1-.554.96l-1.837-1.06v1.094a.554.554 0 0 1-1.108 0V15.66l-1.837 1.06a.554.554 0 0 1-.554-.96l2.39-1.38v-3.873l-3.35 1.934.004 2.768a.554.554 0 0 1-.553.555h-.001a.554.554 0 0 1-.554-.553l-.003-2.13-.953.55a.554.554 0 1 1-.554-.96l.943-.545-1.83-1.054a.554.554 0 1 1 .553-.96l2.386 1.374 3.358-1.94L4.033 7.61 1.647 8.983a.554.554 0 1 1-.553-.961l1.83-1.053-.943-.545a.554.554 0 1 1 .554-.96l.953.55.003-2.13a.554.554 0 0 1 .554-.554.554.554 0 0 1 .554.555l-.004 2.768 3.35 1.935V4.715l-2.39-1.38a.554.554 0 0 1 .554-.96l1.837 1.06V2.341a.554.554 0 1 1 1.108 0v1.094l1.837-1.06a.554.554 0 0 1 .554.96l-2.39 1.38v3.873l3.35-1.935-.004-2.768a.554.554 0 0 1 .553-.554h.001a.554.554 0 0 1 .554.553l.003 2.13.953-.55a.554.554 0 1 1 .554.96l-.943.545 1.83 1.053a.554.554 0 1 1-.553.96L12.966 7.61 9.61 9.548l3.357 1.939 2.387-1.374a.554.554 0 0 1 .757.204z" />
              </svg>
            </button>
          </section>
        </div>
      </section>
    </section>
  );
}
