import Link from "next/link";
import { FaSketch } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
export default function SideBar() {
  return (
    <aside className="flex min-h-screen w-20 flex-col items-center divide-y divide-gray-800 bg-gray-100 p-4 text-gray-800 md:fixed md:left-0 md:top-0 md:mt-[72px]">
      <Link href="/tailwind/dashboard" className="mb-4 border-gray-800">
        <FaSketch
          size={48}
          className="p-2 transition-all duration-200 ease-in-out bg-gray-300 rounded-lg invert filter hover:bg-gray-400"
        />
      </Link>
      <div className="flex flex-col items-center gap-4 pt-4">
        <Link href="/tailwind/dashboard" className="border-gray-800">
          <BiSolidDashboard
            size={48}
            className="p-2 transition-all duration-200 ease-in-out bg-gray-300 rounded-lg hover:bg-gray-400"
          />
        </Link>
        <Link href="/tailwind/customers" className="border-gray-800">
          <CgProfile
            size={48}
            className="p-2 transition-all duration-200 ease-in-out bg-gray-300 rounded-lg hover:bg-gray-400"
          />
        </Link>
        <Link href="/tailwind/orders" className="border-gray-800">
          <FiSettings
            size={48}
            className="p-2 transition-all duration-200 ease-in-out bg-gray-300 rounded-lg hover:bg-gray-400"
          />
        </Link>
        <Link href="/tailwind/dashboard" className="border-gray-800">
          <AiFillHome
            size={48}
            className="p-2 transition-all duration-200 ease-in-out bg-gray-300 rounded-lg hover:bg-gray-400"
          />
        </Link>
      </div>
    </aside>
  );
}
