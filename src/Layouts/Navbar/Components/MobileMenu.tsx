"use client";

import { navLinks } from "@/Constants";
import {
  Box,
  Divider,
  Text,
  Collapse,
  UnstyledButton,
  Stack,
} from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Home, Mail, FileText, Sparkles } from "lucide-react";

interface MobileMenuProps {
  onLinkClick: () => void;
}

const MobileMenu = ({ onLinkClick }: MobileMenuProps) => {
  const pathName = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (name: string) => {
    setExpandedItems((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name],
    );
  };

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "about":
        return <Home size={20} />;
      case "blog":
        return <FileText size={20} />;
      case "contact":
        return <Mail size={20} />;
      default:
        return <Sparkles size={20} />;
    }
  };

  return (
    <Box className="flex flex-col gap-3 py-4">
      {navLinks.map((link, idx) => (
        <Box key={idx} className="w-full">
          {link.dropdown && link.items ? (
            <>
              <UnstyledButton
                onClick={() => toggleItem(link.name)}
                className="w-full group"
              >
                <Box className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-teal-50 transition-all duration-300">
                  <Box className="flex items-center gap-3">
                    <Box className="text-teal-600 group-hover:scale-110 transition-transform duration-300">
                      {getIcon(link.name)}
                    </Box>
                    <Text
                      tt="capitalize"
                      className={`font-medium text-lg ${
                        pathName === link.href
                          ? "text-teal-600 font-bold"
                          : "text-gray-700 group-hover:text-teal-600"
                      } transition-colors duration-300`}
                    >
                      {link.name}
                    </Text>
                  </Box>
                  <ChevronDown
                    size={20}
                    className={`text-gray-500 transition-transform duration-300 ${
                      expandedItems.includes(link.name) ? "rotate-180" : ""
                    }`}
                  />
                </Box>
              </UnstyledButton>

              <Collapse in={expandedItems.includes(link.name)}>
                <Stack gap={2} className="pl-12 pr-4 py-2">
                  {link.items.map((sublink, subIdx) => (
                    <Link
                      key={subIdx}
                      href={sublink.href}
                      style={{ textDecoration: "none" }}
                      onClick={onLinkClick}
                    >
                      <Box className="py-2 px-4 rounded-md hover:bg-teal-50 transition-all duration-200 border-l-2 border-transparent hover:border-teal-400">
                        <Text
                          tt="capitalize"
                          className={`${
                            pathName === sublink.href
                              ? "text-teal-600 font-semibold"
                              : "text-gray-600 hover:text-teal-600"
                          } transition-colors duration-200`}
                        >
                          {sublink.name}
                        </Text>
                      </Box>
                    </Link>
                  ))}
                </Stack>
              </Collapse>

              {idx < navLinks.length - 1 && (
                <Divider className="my-2 opacity-30" />
              )}
            </>
          ) : (
            <>
              <Link
                href={link.href}
                style={{ textDecoration: "none" }}
                onClick={onLinkClick}
                className="group block"
              >
                <Box className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-teal-50 transition-all duration-300">
                  <Box className="text-teal-600 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(link.name)}
                  </Box>
                  <Text
                    tt="capitalize"
                    className={`font-medium text-lg ${
                      pathName === link.href
                        ? "text-teal-600 font-bold"
                        : "text-gray-700 group-hover:text-teal-600"
                    } transition-colors duration-300`}
                  >
                    {link.name}
                  </Text>
                </Box>
              </Link>
              {idx < navLinks.length - 1 && (
                <Divider className="my-2 opacity-30" />
              )}
            </>
          )}
        </Box>
      ))}

      {/* Decorative element */}
      <Box className="mt-6 px-4">
        <Box className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg p-4 text-white">
          <Text className="font-semibold text-sm mb-1">Welcome to DEVINK</Text>
          <Text className="text-xs opacity-90">
            Explore our amazing content and services
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileMenu;
