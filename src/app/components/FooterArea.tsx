import { Film } from "lucide-react";
import { Sword } from "lucide-react";
export const FooterArea = () => {
  return (
    <div className="w-full h-[308px] bg-[#4338CA] dark:bg-[#222222] mt-8 flex flex-col text-white px-5 py-10 gap-5 2xl:items-center 2xl:justify-center dark:text-white">
      <div className="flex gap-2">
        <Sword color="white" />
        <h1 className="font-black">MOVIE</h1>
      </div>
      <p>2026 Movie. All Rights Reserved.</p>
      <p>Contact information</p>
    </div>
  );
};
