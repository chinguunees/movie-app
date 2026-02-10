import Image from "next/image";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MoreLike } from "../components/MoreLike";
import { getMovieDetails } from "@/lib/api";

export default function Home() {
  return (
    <div>
      <DetailsDesktop />
      <DetailsMobile />
    </div>
  );
}

const DetailsMobile = () => {
  return (
    <div className="lg:hidden">
      <div className="flex justify-between items-center mt-8 mx-5">
        <div className="flex flex-col ">
          <h1 className="font-semibold text-[24px]">Star Wars III</h1>
          <p className="text-[14px]">2024.11.26 · PG · 2h 40m</p>
        </div>
        <div className="flex flex-col text-[14px]">
          <div className="flex items-center gap-2">
            <Star fill="white" />
            <div className="flex items-start">
              <p className="font-bold">7.9</p>
              <p>
                /10
                <br />
                32M
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 mx-5">
        <img src="vader.jpg" alt="" />
      </div>
      <div className="flex flex-col mt-8 mx-5 gap-5">
        <div className="flex mx-5 gap-8">
          <img className="h-[148px] w-[100px]" src="/starwars.png" alt="" />
          <div className="grid grid-cols-2 gap-2 items-center">
            <Button size="sm" variant="outline">
              Sci-Fi
            </Button>
            <Button size="sm" variant="outline">
              Action
            </Button>
            <Button size="sm" variant="outline">
              Adventure
            </Button>
            <Button size="sm" variant="outline">
              Drama
            </Button>
          </div>
        </div>
        <p>
          As the Clone Wars nears its end, Obi-Wan Kenobi pursues a new threat,
          while Anakin Skywalker is lured by Chancellor Palpatine into a
          sinister plot for galactic domination.{" "}
        </p>
        <div className="flex gap-10">
          <p className="font-bold text-[16px]">Director</p>
          <p>Jon M. Chu</p>
        </div>
        <div className="flex gap-10">
          <p className="font-bold text-[16px]">Writers</p>
          <p>Winnie Holzman. Dana Fox. Gregory Maguire</p>
        </div>
        <div className="flex gap-10">
          <p className="font-bold text-[16px]">Stars</p>
          <p>Cynthia Erivo. Ariana Grande. Jeff Goldblum</p>
        </div>
      </div>
      <MoreLike />
    </div>
  );
};

const DetailsDesktop = () => {
  return (
    <div>
      <div className="hidden lg:flex flex-col items-center">
        <div className="flex justify-between items-center mt-[52px] w-screen lg:max-w-[1080px]">
          <div className="flex flex-col max-w-[240px]">
            <h1 className="font-extrabold text-[36px]">Star Wars III</h1>
            <p className="max-w-[240px] text-[18px]">
              2024.11.26 · PG · 2h 40m
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[12px]">Rating</p>
            <div className="flex items-center gap-2">
              <Star fill="white" />
              <div className="flex flex-col items-start">
                <p className="font-bold">7.9/10</p>
                <p className="text-[12px] text-gray-500">32K</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mx-100 mt-[24px] gap-[32px] w-screen lg:max-w-[1080px]">
          <img className="h-[428px] w-[290px]" src="/starwars.png" alt="" />
          <img className="h-[428px] w-[760px]" src="/vader.jpg" alt="" />
        </div>
        <div className="flex flex-col mx-100 mt-[32px] gap-[20px] w-screen max-w-[1080px]">
          <div className="flex gap-5">
            <Button variant="outline">Sci-Fi</Button>
            <Button variant="outline">Action</Button>
            <Button variant="outline">Adventure</Button>
            <Button variant="outline">Drama</Button>
          </div>
          <p>
            As the Clone Wars nears its end, Obi-Wan Kenobi pursues a new
            threat, while Anakin Skywalker is lured by Chancellor Palpatine into
            a sinister plot for galactic domination.{" "}
          </p>
          <div className="flex gap-10 border-b h-10">
            <p className="font-bold text-[16px] w-16">Director</p>
            <p>Jon M. Chu</p>
          </div>
          <div className="flex gap-10 border-b h-10">
            <p className="font-bold text-[16px] w-16">Writers</p>
            <p>Winnie Holzman. Dana Fox. Gregory Maguire</p>
          </div>
          <div className="flex gap-10 border-b h-10">
            <p className="font-bold text-[16px] w-16">Stars</p>
            <p>Cynthia Erivo. Ariana Grande. Jeff Goldblum</p>
          </div>
        </div>
        <div className="mt-[32px]">
          <MoreLike />
        </div>
      </div>
    </div>
  );
};
