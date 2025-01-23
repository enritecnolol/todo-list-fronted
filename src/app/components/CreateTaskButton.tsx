"use client";

import { useRouter } from "next/navigation";
import { PlusIcon } from "./icons/Plus";

export default function CreateTaskButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/create")}
      className="w-full bg-[#1E6F9F] hover:bg-blue-700 text-white rounded flex justify-center gap-2 items-center py-[16px]"
    >
      Create Task <PlusIcon />
    </button>
  );
}
