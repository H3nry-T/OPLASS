export default function Header() {
  return (
    <header className="flex max-w-[1920px] items-baseline justify-between">
      <h2 className="text-3xl font-semibold tracking-tighter">Dashboard</h2>
      <h2 className="text-2xl tracking-tighter">
        Welcome back,<span className="italic font-semibold"> Henry</span>
      </h2>
    </header>
  );
}
