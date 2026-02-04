"use client";

import { Button } from "@/components/ui/button";
import { Moon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/field";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <div className="h-[59px] md:px-20 bg-white flex items-center pl-5 xl:max-w-[1440px] mx-auto md:max-w-full">
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
      <div className="hidden gap-50 justify-between max-w-[1440px] md:flex xl:w-[1440px] md:justify-between">
        <img className="w-[92px]" src="/Logo.svg" alt="" />
        <div className="flex gap-2 ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="hover:bg-[#fb8500] hover:text-white"
                variant="outline"
              >
                Genres
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>Genres</DropdownMenuLabel>
                <DropdownMenuItem>Action</DropdownMenuItem>
                <DropdownMenuItem>Adventure</DropdownMenuItem>
                <DropdownMenuItem>Animation</DropdownMenuItem>
                <DropdownMenuItem>Biography</DropdownMenuItem>
                <DropdownMenuItem>Comedy</DropdownMenuItem>
                <DropdownMenuItem>Crime</DropdownMenuItem>
                <DropdownMenuItem>Documentary</DropdownMenuItem>
                <DropdownMenuItem>Drama</DropdownMenuItem>
                <DropdownMenuItem>Family</DropdownMenuItem>
                <DropdownMenuItem>Fantasy</DropdownMenuItem>
                <DropdownMenuItem>Horror</DropdownMenuItem>
                <DropdownMenuItem>Sci-Fi</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="max-w-150 min-w-10">
            <Field orientation="horizontal">
              <Input type="search" placeholder="Search..." />
              {/* <Button variant="outline" size="icon">
              {" "}
              <Search />{" "}
            </Button> */}
            </Field>
          </div>
        </div>
        <Button variant="outline" size="icon">
          <Moon />
        </Button>
      </div>
    </div>
  );
};
