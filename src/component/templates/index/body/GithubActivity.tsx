// components/GithubStats.tsx
"use client";

import React from "react";
import { GitHubCalendar } from "react-github-calendar";

interface GithubStatsProps {
  username: string;
}

const GithubStats: React.FC<GithubStatsProps> = ({ username }) => {

  const themes = {
    dark: [
      "oklch(70.7% 0.022 261.325)", 
      "#9be9a8", 
      "#40c463", 
      "#30a14e", 
      "#216e39"
    ]
  };
 
  return (
    <div className="  p-4 w-full bg-surfaceLight dark:bg-surfaceDark shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
      <div className=" flex flex-col items-center justify-center gap-10">
        <div className="mb-4 flex items-center w-full justify-start gap-2">
          <h3 className="text-3xl font-bold text-headingTextLight dark:text-headingTextDark">
            فعالیت من در گیت هاب :
          </h3>
        </div>

        <div className="w-full overflow-hidden flex justify-center">
          <GitHubCalendar
            username={username}
            theme={themes}
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            labels={{
              totalCount: "{{count}} مشارکت ",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GithubStats;
