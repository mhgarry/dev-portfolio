import { IconCloud } from "./skills-icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "python",
  "go",
  "mongodb",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "nginx",
  "vercel",
  "heroku",
  "jest",
  "mysql",
  "docker",
  "git",
  "sanityio",
  "github",
  "gitlab",
  "visualstudiocode",
  "wordpress",
  "figma",
  "tailwindcss",
  "graphql",
  "nestjs",
];

export function IconCloudDisplay() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
