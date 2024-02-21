"use client";
import React, { useState } from "react";
import Logo from "@/components/logo";
import { Search, SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const router = useRouter();
  const [SearchInput, setSearchInput] = useState<string>("");

  // fn🦀
  const SearchFun = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/search?for=${SearchInput}`);
    }
  };

  return (
    <nav className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <Logo />
        <div className="flex items-center bg-neutral-700 rounded-full px-2 text-neutral-400">
          <Search
            onClick={() => router.push(`/search?for${SearchInput}`)}
            size={20}
            className=""
          />
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => SearchFun(e)}
            type="text"
            placeholder="Search..."
            className="focus:outline-none px-1 py-2 placeholder:text-sm text-sm bg-transparent"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 text-white">
        <section className="flex items-center gap-2 cursor-pointer">
          <SquarePen size={25} strokeWidth={1} className="text-white" />
          <h1>Write</h1>
        </section>

        <div className="hover:bg-neutral-800 rounded-full cursor-pointer flex items-center justify-center p-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-label="Notifications"
          >
            <path
              d="M15 18.5a3 3 0 1 1-6 0"
              stroke="white"
              strokeLinecap="round"
              data-darkreader-inline-stroke=""
            ></path>
            <path
              d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
              stroke="white"
              strokeLinejoin="round"
              data-darkreader-inline-stroke=""
            ></path>
          </svg>
        </div>
        <div className="border rounded-full border-neutral-500">
          <UserButton />
        </div>
      </div>
    </nav>
  );
};1

export default Navbar;
