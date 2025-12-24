"use client";

import dynamic from "next/dynamic";

const GithubActivity = dynamic(
  () => import("./GithubActivity"),
  { ssr: false }
);

export default GithubActivity;
