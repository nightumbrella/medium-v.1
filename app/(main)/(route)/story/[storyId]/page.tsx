"use client";
import { Plus } from "lucide-react";
import React, { useRef } from "react";

const StoryPage = ({
  params: { storyId },
}: {
  params: { storyId: string };
}) => {
  const contentEditableRef = useRef<HTMLDivElement | null>(null);
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
          className="outline-none focus:outline-none "
        ></div>
        <div className="z-10">
          <div
            id="tooltip"
            className="border-[1px] border-neutral-500 p-1 rounded-full inline-block "
          >
            <Plus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
