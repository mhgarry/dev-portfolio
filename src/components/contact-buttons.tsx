"use client";

import { RetroGrid } from "./animated-ui/retro-grid";
import { RainbowButton } from "./animated-ui/rainbow-button";
import { DATA } from "@/data/resume";
import Link from "next/link";

export default function ContactFooter() {
  return (
    <div className="relative flex w-full flex-col  justify-center overflow-hidden bg-transparent dark:bg-background  ">
      <div className="flex flex-row space-x-4 justify-center items-top w-full h-[20%] bg-transparent dark:bg-background">
        <Link
          href={DATA.contact.social.email.url}
          className="w-full sm:w-[45%]"
        >
          <RainbowButton className="w-full">Get In Touch</RainbowButton>
        </Link>
        <Link href="/my_resume.pdf" className="w-full sm:w-[45%]">
          <RainbowButton className="w-full">Download Resume</RainbowButton>
        </Link>
      </div>
      <RetroGrid />
    </div>
  );
}
