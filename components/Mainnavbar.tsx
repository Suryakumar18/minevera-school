"use client";

import React, { useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { Logo } from "@/components/icons";

// Updated Hrefs to point to IDs (#)
const navItems = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/#programs" }, // Points to ID
  { label: "About Us", href: "/#about" },    // Points to ID
  { label: "Academics", href: "/academics" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const Mainnavbar = () => {
  // State to control the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroUINavbar
      isBordered
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-4 inset-x-0 mx-auto w-[90%] md:w-fit rounded-full bg-background/70 backdrop-blur-md border-small border-default-200/50 shadow-medium z-[9999]"
      classNames={{
        wrapper: "px-6",
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink 
            className="flex justify-start items-center gap-1" 
            href="/"
            onClick={() => setIsMenuOpen(false)} // Close menu if clicking Logo
          >
            <Logo />
            <p className="font-bold text-inherit text-lg tracking-tight">
              Minervaaa
            </p>
          </NextLink>
        </NavbarBrand>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-6 justify-start ml-4">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "text-sm font-medium transition-opacity hover:opacity-80 data-[active=true]:text-primary data-[active=true]:font-bold"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Button
            as={NextLink}
            className="text-sm font-semibold bg-primary text-white shadow-lg rounded-full px-6"
            href="/admissions"
            variant="flat"
          >
            Admissions
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      {/* MOBILE MENU */}
      <NavbarMenu className="mt-4 rounded-3xl pt-8 bg-background/80 backdrop-blur-xl mx-4 pb-8 top-[calc(var(--navbar-height)_+_1rem)] border-small border-default-200/50 shadow-xl">
        <div className="mt-4 flex flex-col gap-3">
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                as={NextLink} // Use NextLink for client-side routing
                color="foreground"
                className="w-full text-lg font-medium"
                href={item.href}
                size="lg"
                onPress={() => setIsMenuOpen(false)} // IMPORTANT: Closes menu on click
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};