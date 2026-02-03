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
      <img src="/wicked.jpg" alt="" />
      <div className="px-5 flex flex-col absolute text-white md:top-1/4  2xl:top-1/3 right-2/3 translate-x-1/2 w-100  ">
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
