"use client";
import { dashboardNavigation } from "@/constants/landingPageConstants";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
export default function DashBoardDialogNav() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex items-center rounded-lg hover:bg-gray-700/70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-700/70" />
        <Dialog.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp fixed top-0 left-0  w-[100vw] rounded-sm bg-gray-950 p-4 focus:outline-none">
          <Dialog.Description
            className="mt-[10px] mb-5 text-lg leading-normal"
            asChild
          >
            <aside>
              <ul className="flex flex-col gap-8 px-5 py-10 text-lg font-semibold tracking-tight">
                {dashboardNavigation.map((item) => (
                  <Dialog.Close asChild key={item.title}>
                    <Link
                      href={`${item.title}`}
                      className="max-w-4xl px-2 py-1 capitalize rounded-lg hover:bg-gray-700/70"
                    >
                      {item.title}
                      <li key={item.title}></li>
                    </Link>
                  </Dialog.Close>
                ))}
              </ul>
            </aside>
          </Dialog.Description>

          <Dialog.Close className="absolute rounded-lg hover:bg-gray-800 top-5 left-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
