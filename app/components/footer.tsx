"use client";

import {
  AccessibilityIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { metaData, socialLinks } from "app/config";
import React from "react";

const YEAR = new Date().getFullYear();

function SocialLink({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.FC<{ className?: string }>;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="size-4" />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.github} icon={GitHubLogoIcon} />
      <SocialLink href={socialLinks.instagram} icon={InstagramLogoIcon} />
      <SocialLink href={socialLinks.linkedin} icon={LinkedInLogoIcon} />
      <SocialLink href={socialLinks.email} icon={EnvelopeClosedIcon} />
      <a href="/rss.xml" target="_self">
        <AccessibilityIcon className="size-4" />
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline"
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
