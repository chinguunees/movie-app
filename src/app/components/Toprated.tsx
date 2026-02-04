import { Moviecard } from "./Moviecard";

export const Toprated = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col px-5 2xl:px-20 lg:px-15 md:px-10 max-w-[1437px] ">
        <div className="flex justify-between mt-8 items-center md:px-15">
          <h1 className="text-[24px] font-bold">Top Rated</h1>
          <p className="text-[14px]">See More</p>
        </div>
        <div className="flex flex-col px-5 2xl:px-20 lg:px-15 md:px-10 items-center">
          <div className="grid grid-cols-2 md:hidden gap-2">
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
          </div>
          <div className="hidden md:grid md:grid-cols-3 md:gap-10 lg:justify-between 2xl:gap-10 lg:grid-cols-4 2xl:grid-cols-5 mt-13 2xl:max-w-[1437px] ">
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
          </div>
        </div>
      </div>
    </div>
  );
};
