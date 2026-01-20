"use client";

import { navLinks } from "@/Constants";
import { Box, Menu, UnstyledButton, Text } from "@mantine/core";
import Link from "next/link";

const DekstopMenu = () => {
  return (
    <Box className="flex items-center justify-center gap-6 relative">
      {navLinks.map((link, idx) =>
        link.dropdown && link.items ? (
          <Menu
            key={idx}
            trigger="click"
            transitionProps={{ transition: "pop-top-right" }}
            position="bottom-start"
            offset={5}
          >
            <Menu.Target>
              <UnstyledButton>
                <Text tt="capitalize" className="cursor-pointer">
                  {link.name}
                </Text>
              </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>
              {link.items.map((sublink, subIdx) => (
                <Menu.Item key={subIdx} component={Link} href={sublink.href}>
                  <Text tt="capitalize">{sublink.name}</Text>
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        ) : (
          <Link key={idx} href={link.href} style={{ textDecoration: "none" }}>
            <Text tt="capitalize" className="cursor-pointer">
              {link.name}
            </Text>
          </Link>
        ),
      )}
    </Box>
  );
};

export default DekstopMenu;
