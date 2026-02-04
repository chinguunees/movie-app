import { Icon, Star } from "lucide-react";
export const Moviecard = () => {
  return (
    <div>
      <div className="flex-col flex mt-5 h-77 rounded-2xl bg-[#F4F4F5] md:hidden">
        <img className="h-58 rounded-t-2xl" src="/dearsanta.svg" alt="" />
        <div className="p-2">
          <div className="flex">
            <Star size={20} color="#FDE047" fill="#FDE047" />
            <p className="text-[12px]">6.9/10</p>
          </div>
          <h1 className="font-medium text-[14px] mt-1">Dear Santa</h1>
        </div>
      </div>
      <div className="hidden md:flex mt-5 w-[229px] h-[439px] rounded-2xl bg-[#F4F4F5] flex-col hover:bg-[#fb8500] hover:text-white hover:drop-shadow-2xl hover:ease-in hover:font-bold transition-colors duration-100 ">
        <img className="rounded-t-2xl h-85" src="/starwars.png" alt="poster" />
        <div className="p-2 mt-3 rounded-2xl ">
          <div className="flex">
            <Star size={20} color="#FDE047" fill="#FDE047" />
            <p className="text-[14px]">6.9/10</p>
          </div>
          <h1 className="font-medium text-[18px] mt-1">Star Wars III</h1>
        </div>
      </div>
    </div>
  );
};
