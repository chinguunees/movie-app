import { Film } from "lucide-react";
export const FooterArea = () => {
  return (
    <div className="w-full h-[308px] bg-[#4338CA] mt-8 flex flex-col text-white px-5 py-10 gap-5 2xl:items-center 2xl:justify-center">
      <div className="flex">
        <Film color="white" />
        <h1>Movie Z</h1>
      </div>
      <p>2024 Movie Z. All Rights Reserved.</p>
      <p>Contact information</p>
    </div>
  );
};
