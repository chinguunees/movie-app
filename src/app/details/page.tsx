"use client";
import Image from "next/image";
import { Header } from "../components/Header";
import { Nowplaying } from "../components/Nowplaying";
import { Upcoming } from "../components/Upcoming";
import { Toprated } from "../components/Toprated";
import { Popular } from "../components/Popular";
import { FooterArea } from "../components/FooterArea";
import { Carousel } from "@/components/ui/carousel";
import { useEffect } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.{" "}
        </p>
        <div className="flex gap-10">
          <p>Director</p>
          <p>Jon M. Chu</p>
        </div>
        <div className="flex gap-10">
          <p>Writers</p>
          <p>Winnie Holzman. Dana Fox. Gregory Maguire</p>
        </div>
        <div className="flex gap-10">
          <p>Stars</p>
          <p>Cynthia Erivo. Ariana Grande. Jeff Goldblum</p>
        </div>
      </div>
      <Upcoming />
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
            <p>Rating</p>
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
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.{" "}
          </p>
          <div className="flex gap-10">
            <p>Director</p>
            <p>Jon M. Chu</p>
          </div>
          <div className="flex gap-10">
            <p>Writers</p>
            <p>Winnie Holzman. Dana Fox. Gregory Maguire</p>
          </div>
          <div className="flex gap-10">
            <p>Stars</p>
            <p>Cynthia Erivo. Ariana Grande. Jeff Goldblum</p>
          </div>
        </div>
        <div className="mt-[32px]">
          <Upcoming />
        </div>
      </div>
    </div>
  );
};
