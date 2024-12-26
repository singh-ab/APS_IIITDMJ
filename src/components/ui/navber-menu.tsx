// src/components/ui/navber-menu.tsx
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// MenuItem Component
export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.5] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-gray-900 dark:bg-gray-900 bg-opacity-85 backdrop-blur-sm rounded-lg overflow-hidden border border-white/[0.3] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

// Menu Component
export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-lg border border-white/[0.4] dark:border-white/[0.2] dark:bg-opacity-75 bg-white bg-opacity-10 shadow-input flex justify-center space-x-10
             px-6 py-6 text-xs text-white"
      style={{ backdropFilter: "blur(10px)" }} // Add glossy effect
    >
      {children}
    </nav>
  );
};

// HoveredLink Component
export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className="text-white dark:text-neutral-200 hover:opacity-[0.5]">
      {children}
    </Link>
  );
};

// Navbar Component (Added if you need this)
export const Navbar = ({ setActive }: { setActive: (item: string | null) => void }) => {
  return (
    <div className="flex justify-between p-4">
      <Menu setActive={setActive}>
        <MenuItem item="Home" setActive={setActive} active={null}>
          Home Content
        </MenuItem>
        <MenuItem item="About Us" setActive={setActive} active={null}>
          About Content
        </MenuItem>
        {/* Add more MenuItem components as needed */}
      </Menu>
    </div>
  );
};
