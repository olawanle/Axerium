import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

interface Params {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: Params) {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } });
  if (!post) return notFound();
  return (
    <div className="container mx-auto px-4 py-10 space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
      <article className="prose prose-neutral dark:prose-invert max-w-none whitespace-pre-wrap">
        {post.content}
      </article>
    </div>
  );
}


