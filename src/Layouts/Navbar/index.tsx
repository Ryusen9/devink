"use client";

import { ActionIcon, Box, Button, Drawer, Flex, Modal } from "@mantine/core";
import Image from "next/image";
import logo from "../../../public/logo.png";
import DekstopMenu from "./Components/DekstopMenu";
import MobileMenu from "./Components/MobileMenu";
import Link from "next/link";
import {  MenuIcon, X } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useDisclosure } from "@mantine/hooks";
import Authentication from "./Components/Authentication";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [opened, { open, close }] = useDisclosure(false);
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    gsap.set(nav, { yPercent: 0, opacity: 1 });
    let lastY = window.scrollY;
    const threshold = () => window.innerHeight * 0.35;
    let hidden = false;
    const hide = () => {
      if (hidden) return;
      hidden = true;
      gsap.to(nav, {
        yPercent: -150,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto",
      });
    };
    const show = () => {
      if (!hidden) return;
      hidden = false;
      gsap.to(nav, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        overwrite: "auto",
      });
    };
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastY && currentY > threshold()) {
        hide();
      } else {
        show();
      }
      lastY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between border px-3 mt-0 md:mt-2 md:rounded-xl border-gray-400 bg-teal-100/50 backdrop-blur-sm py-2">
        {/* Logo */}
        <Link href="/">
          <Box className="flex items-center justify-center">
            <Image src={logo} alt="Logo" width={50} height={50} />
            <span className="text-xl font-semibold">DEVINK</span>
          </Box>
        </Link>
        {/* links for desktop */}
        <Box className="hidden! md:flex!">
          <DekstopMenu />
        </Box>
        {/* buttons */}
        <Flex align="center" gap={8}>
          <Authentication/>

          <ActionIcon
            className="md:hidden!"
            size={37}
            variant="filled"
            color="teal"
            onClick={open}
          >
            <MenuIcon />
          </ActionIcon>
        </Flex>
      </div>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="sm"
        overlayProps={{
          backgroundOpacity: 0.5,
          blur: 4,
        }}
        transitionProps={{
          transition: "slide-left",
          duration: 400,
          timingFunction: "ease-in-out",
        }}
        classNames={{
          header: "border-b border-gray-200 pb-4",
          body: "p-0",
          title: "text-xl font-bold text-teal-600",
          close: "hover:bg-teal-50 text-teal-600",
        }}
        title={
          <Flex align="center" gap={10}>
            <Image src={logo} alt="Logo" width={35} height={35} />
            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              DEVINK MENU
            </span>
          </Flex>
        }
        closeButtonProps={{
          icon: <X size={20} />,
        }}
      >
        <MobileMenu onLinkClick={close} />
      </Drawer>
    </nav>
  );
};
export default Navbar;
