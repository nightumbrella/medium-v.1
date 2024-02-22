import React from "react";

const StoryPage = ({
  params: { storyId },
}: {
  params: { storyId: string };
}) => {
  return <div className="text-white">{storyId}</div>;
};

export default StoryPage;
