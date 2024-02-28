"use client";
import { Image, Plus } from "lucide-react";
import React, { useRef, useState } from "react";

const StoryPage = ({
  params: { storyId },
}: {
  params: { storyId: string };
}) => {
  const contentEditableRef = useRef<HTMLDivElement | null>(null);
  const [openTools, setOpenTools] = useState(false)
  return (
    <div className="text-white">
      <div
        id="container"
        className="max-w-[800px] mx-auto relative font-mono mt-5 "
      >
        <div
          id="editable"
          ref={contentEditableRef}
          contentEditable
          suppressContentEditableWarning
          style={{whiteSpace:'pre-line'}}
          className="outline-none focus:outline-none "
        ></div>
        <div className="z-10 relative" onClick={() => setOpenTools(!openTools)}  >
          <button
            id="tooltip"
            className="border-[1px] border-neutral-500 p-1 rounded-full inline-block "
          >
            <Plus className={`duration-300 ease-linear ${openTools ? "rotate-90":""}`}/>
          </button>
          <div
            id='tool' className={`flex items-center space-x-4 absolute top-0 left-14  ${openTools ? "visible":"invisible"}`}
          >
            <span className={`border-[1.5px] border-green-500 rounded-full block p-[6px] ${openTools ? "scale-100 visible" :"scale-0 invisible"} ease-linear duration-100 bg-white cursor-pointer`}>
              <Image sizes={20} className="opacity-20 text-green-800" />
              <input type="file" accept="image/*" style={{ display: "none" }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
