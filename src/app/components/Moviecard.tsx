import { Icon, Star } from "lucide-react";
import Link from "next/link";
export const Moviecard = (props: MovieDetailsProps) => {
  const { img, rating, name } = props;
  return (
    <div>
      <div className="flex-col flex mt-5 h-77 rounded-2xl bg-[#F4F4F5] md:hidden dark:bg-[#27272A] ">
        <img className="h-58 rounded-t-2xl" src={img} alt="" />
        <div className="p-2">
          <div className="flex">
            <Star size={20} color="#FDE047" fill="#FDE047" />
            <p className="text-[12px]">{rating.toFixed(1)}</p>
          </div>
          <h1 className="font-medium text-[14px] mt-1">{name}</h1>
        </div>
      </div>
      <div className="hidden md:flex mt-5 w-[229px] h-[439px] rounded-2xl bg-[#eef0f2] dark:bg-[#27272A] flex-col hover:bg-[#fb8500] hover:text-white hover:drop-shadow-2xl hover:ease-in hover:font-bold transition-colors duration-100 dark:border dark:hover:bg-[#fb8500] dark:hover:drop-shadow-zinc-700 ">
        <img className="rounded-t-2xl h-85" src={img} alt="poster" />
        <div className="p-2 mt-3 rounded-2xl ">
          <div className="flex">
            <Star size={20} color="#FDE047" fill="#FDE047" />
            <p className="text-[14px]">{rating.toFixed(1)}</p>
          </div>
          <h1 className="font-medium text-[18px] mt-1">{name}</h1>
        </div>
      </div>
    </div>
  );
};

type MovieDetailsProps = {
  img: string;
  rating: number;
  name: string;
};
