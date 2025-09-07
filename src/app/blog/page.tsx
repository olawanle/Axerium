import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function BlogIndexPage() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" }, take: 10 });
  return (
    <div className="container mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <ul className="space-y-3">
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/blog/${p.slug}`} className="hover:underline">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


