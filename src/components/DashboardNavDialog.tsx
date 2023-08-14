import * as Dialog from "@radix-ui/react-dialog";
export default function DashBoardDialogNav() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex items-center">
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
      <Dialog.Portal className="bg-red-500">
        <Dialog.Overlay className="fixed inset-0 w-full h-full bg-gray-500/70" />
        <Dialog.Content className="w-full h-full p-10 bg-gray-700 border-red-500">
          <Dialog.Title>title</Dialog.Title>
          <Dialog.Description>description</Dialog.Description>
          <Dialog.Close>close</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
