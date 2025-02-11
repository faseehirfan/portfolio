import { HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";

const navItems = {
  "/blog": { name: "Blog" },
  // "/projects": { name: "Projects" },
  // "/photos": { name: "Photos" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-row justify-between">
        <div className="flex items-center mt-6 md:mt-0">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            <HomeIcon className="size-4" />
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
