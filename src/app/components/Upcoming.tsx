import { Moviecard } from "./Moviecard";

export const Upcoming = () => {
  return (
    <div className="flex flex-col px-5">
      <div className="flex justify-between mt-8 items-center">
        <h1 className="text-[24px] font-bold">Upcoming</h1>
        <p className="text-[14px]">See More</p>
      </div>
      <div className="grid grid-cols-2">
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
  );
};
