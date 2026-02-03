"use client";

import { Button } from "@/components/ui/button";
import { Moon, Search } from "lucide-react";

export const Header = () => {
  return (
    <div className="h-[59px] w-full md:w-full lg:w-full 2xl:w-full  md:px-20 bg-white flex items-center pl-5">
      <div className="flex gap-3 md:hidden justify-between w-full">
        <img className="w-[92px]" src="/Logo.svg" alt="" />
        <div>
          <Button variant="outline" size="icon" className="lg:hidden">
            <Search />
          </Button>
          <Button variant="outline" size="icon">
            <Moon />
          </Button>
        </div>
      </div>
      <div />
      <div className="hidden gap-50 justify-between md:flex md:w-full md:justify-between lg:justify-between 2xl:justify-between">
        <img className="w-[92px]" src="/Logo.svg" alt="" />
        <Button
          variant="outline"
          size="icon"
          className="w-[370px] lg:flex md:w-[150px] lg:w-[370px] "
        >
          <Search />
          Search...
        </Button>
        <Button variant="outline" size="icon">
          <Moon />
        </Button>
      </div>
    </div>
  );
};
