import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Play } from "lucide-react";
export const Nowplaying = () => {
  return (
    <div>
      <div className="flex flex-col w-full md:hidden">
        <img src="/wicked.jpg" alt="" />
        <div className="px-5 flex flex-col ">
          <div className="flex justify-between items-center py-5">
            <div>
              <p>Now Playing:</p>
              <h1 className="font-bold text-2xl">Wicked</h1>
            </div>
            <div className="flex">
              <Star />
              <p>6.9/10</p>
            </div>
          </div>
          <div className="pb-5">
            <p>
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University in
              the Land of Oz. After an encounter with the Wonderful Wizard of
              Oz, their friendship reaches a crossroads.
            </p>
          </div>
          <Button className="w-[145px] h-[40px]">
            <Play /> Watch Trailer
          </Button>
        </div>
      </div>
      <div className="flex-col w-full md:flex relative">
        <img src="/wicked.jpg" alt="" />
        <div className="px-5 flex flex-col absolute text-white mt-70 ml-20 w-100  ">
          <div className="flex justify-between items-center py-5">
            <div>
              <p>Now Playing:</p>
              <h1 className="font-bold text-2xl">Wicked</h1>
            </div>
            <div className="flex">
              <Star />
              <p>6.9/10</p>
            </div>
          </div>
          <div className="pb-5">
            <p>
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University in
              the Land of Oz. After an encounter with the Wonderful Wizard of
              Oz, their friendship reaches a crossroads.
            </p>
          </div>
          <Button className="w-[145px] h-[40px]">
            <Play /> Watch Trailer
          </Button>
        </div>
      </div>
    </div>
  );
};
