import Image from "next/image";

const EmptyList = () => {
  return (
    <div className="text-center py-12 space-y-4 border-t border-[#333333] rounded-lg">
      <div className="flex justify-center">
        <Image src={"/clickBoardIcon.png"} alt="icon" width={56} height={56} />
      </div>
      <p className="text-[#808080] text-lg">
        You don&apos;t have any tasks registered yet.
      </p>
      <p className="text-[#808080]">
        Create tasks and organize your to-do items.
      </p>
    </div>
  );
};

export default EmptyList;
