"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarMenu() {
  const pathName = usePathname();

  if (pathName.includes("/contact")) {
    return null;
  }

  return (
    <Fade direction="down" triggerOnce={true} duration={2000}>
      <div className="flex gap-10 px-2 pt-2">
        <div className="bg-black w-full">
          <nav className="bg-transparent flex items-center justify-around gap-10">
            <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
            <ul className="hidden sm:inline-flex text-white gap-3 lg:gap-7 ">
              <li className="icon">
                <Link href={"/"}>Acasa</Link>
              </li>
              <li className="icon">
                <Link href={"/gallery"}>Galerie</Link>
              </li>
              <li className="icon">
                <Link href={"/about"}>Despre</Link>
              </li>
              <li className="icon">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
            <Button className="hidden sm:inline-flex rounded-full bg-white text-black hover:bg-slate-700 hover:text-white">
              Contact
            </Button>
          </nav>
        </div>
        <Drawer>
          <DrawerTrigger className="text-white sm:hidden mr-10">
            <IoMenuOutline size={25} />
          </DrawerTrigger>
          <DrawerContent className="w-[320px] rounded-none">
            <DrawerHeader>
              <div className="text-black flex justify-between">
                <DrawerClose className="self-start icon font-semibold">
                  <IoClose size={30} className="" />
                </DrawerClose>

                <ul className="text-black flex flex-col items-end px-4 gap-4 text-2xl">
                  <li className="icon">
                    <Link href={"/"}>Acasa</Link>
                  </li>
                  <li className="icon">
                    <Link href={"/gallery"}>Galerie</Link>
                  </li>
                  <li className="icon">
                    <Link href={"/about"}>Despre</Link>
                  </li>
                  <li className="icon">
                    <Link href={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </Fade>
  );
}

export default NavbarMenu;
