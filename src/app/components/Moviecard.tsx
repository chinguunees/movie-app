import { Icon, Star } from "lucide-react";
export const Moviecard = () => {
  return (
    <div className="mt-5 w-[158px] rounded-[8px] bg-[#F4F4F5]">
      <img src="/dearsanta.svg" alt="" />
      <div className="bg-[#F4F4F5] h-[76px] p-2">
        <div className="flex">
          <Star size={20} color="#FDE047" fill="#FDE047" />
          <p className="text-[12px]">6.9/10</p>
        </div>
        <h1 className="font-medium text-[14px] mt-1">Dear Santa</h1>
      </div>
    </div>
  );
};
