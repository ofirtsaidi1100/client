import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-center w-24 h-full border-r">
      <button className="w-1/2 ">
        <ChatBubbleLeftRightIcon />
      </button>
    </div>
  );
};
