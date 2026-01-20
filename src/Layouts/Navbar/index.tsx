"use client";

import { Box, Button } from "@mantine/core";
import Image from "next/image";
import logo from "../../../public/logo.png";
import DekstopMenu from "./Components/DekstopMenu";
import Link from "next/link";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Box className="flex items-center justify-center">
            <Image src={logo} alt="Logo" width={50} height={50} />
            <span className="text-xl font-semibold">DEVINK</span>
          </Box>
        </Link>
        {/* links for desktop */}
        <Box className="relative">
          <DekstopMenu />
        </Box>
        {/* buttons */}
        <Box>
          <Button
            variant="filled"
            className="bg-teal-300"
            rightSection={<LogIn size={20} />}
          >
            Sign Up
          </Button>
        </Box>
      </div>
    </nav>
  );
};
export default Navbar;
