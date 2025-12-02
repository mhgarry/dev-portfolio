import { getPost, getBlogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import BlurFade from "@/components/animated-ui/blur-fade";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://yourdomain.com${post.metadata.image}`
              : `https://yourdomain.com/og?title=${post.metadata.title}`,
            url: `https://yourdomain.com/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Matt",
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {post.metadata.publishedAt}
        </p>
      </div>

      <article
        className="prose dark:prose-invert prose-neutral"
        dangerouslySetInnerHTML={{ __html: post.source }}
      />
    </section>
  );
}