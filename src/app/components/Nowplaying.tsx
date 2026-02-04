import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Play } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const nowplaying = [
  {
    id: 1,
    name: "wicked",
    desc: "",
    rating: "",
    trailer: "",
  },
  {
    id: 2,
    name: "wicked",
    desc: "",
    rating: "",
    trailer: "",
  },
];

export const Nowplaying = () => {
  return (
    <Carousel>
      <CarouselContent>
        {nowplaying.map((item) => (
          <CarouselItem key={item.id}>
            <NowplayingMobile />
            <NowplayingDesktop />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

const NowplayingMobile = () => {
  return (
    <div className="flex flex-col w-full md:hidden">
      <img src="/wicked.jpg" alt="" />
      <div className="absolute top-1/4 right-2/9">
        <CarouselNext />
      </div>
      <div className="absolute top-1/4 left-2/8">
        <CarouselPrevious />
      </div>
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
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </p>
        </div>
        <Button className="w-[145px] h-[40px]">
          <Play /> Watch Trailer
        </Button>
      </div>
    </div>
  );
};

const NowplayingDesktop = () => {
  return (
    <div className="hidden flex-col w-full md:flex relative min-w-full">
      <img
        className="max-h-[600px] w-[1440px] object-cover mx-auto"
        src="/wicked.jpg"
        alt=""
      />
      <div className="absolute top-1/2 right-2/9">
        <CarouselNext variant="destructive" />
      </div>
      <div className="absolute top-1/2 left-2/9">
        <CarouselPrevious variant="destructive" />
      </div>
      <div className="px-5 flex flex-col absolute text-white md:top-1/4  2xl:top-1/3 right-2/3 translate-x-1/2 w-100 bg-linear-to-b from-[#111111]/66 to-transparent rounded-2xl text-shadow-2xs">
        <div className="flex justify-between items-center py-5">
          <div>
            <p>Now Playing:</p>
            <h1 className="font-bold text-2xl text-[#fb8500]">Wicked</h1>
          </div>
          <div className="flex">
            <Star fill="#fb8500" color="#fb8500" />
            <p>6.9/10</p>
          </div>
        </div>
        <div className="pb-5">
          <p className="">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </p>
        </div>
        <Button className="w-[145px] h-[40px] hover:bg-[#fb8500]">
          <Play /> Watch Trailer
        </Button>
      </div>
    </div>
  );
};
