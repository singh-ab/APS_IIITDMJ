"use client";
import { cn } from "@/utils/cn";
import { HoveredLink, Menu } from "./navber-menu";
import { useState } from "react";

export const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-20 max-w-2xl mx-auto z-30", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/contact">Contact</HoveredLink>
        <HoveredLink href="/fests">Fests</HoveredLink>
        <HoveredLink href="/members">Members</HoveredLink>
        <HoveredLink href="/events">Events</HoveredLink>
        <HoveredLink href="/join">Join</HoveredLink>
        <HoveredLink href="/outreach">Outreach</HoveredLink>
      </Menu>
    </div>
  );
};
