import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { blogPostsData } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Christian Avenir",
  description: "Articles, technical notes, and insights by Christian Avenir.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <Container className="space-y-8">
          <header className="space-y-2 border-b pb-6">
            <h1 className="text-3xl font-bold">Blog & Articles</h1>
            <p className="text-sm">Technical insights, tutorials, and development reflections.</p>
          </header>

          <div className="border p-6 space-y-4">
            <div className="inline-block border px-3 py-1 text-xs font-semibold">
              Status: Coming Soon
            </div>
            <p className="text-sm leading-relaxed">
              Articles and technical posts are currently under development. Check back soon for new content!
            </p>
          </div>

          {/* Upcoming Posts List Placeholder */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Upcoming Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogPostsData.map((post) => (
                <div key={post.id} className="border p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold">Coming Soon</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="text-base font-bold">{post.title}</h3>
                  <p className="text-xs leading-relaxed">{post.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t">
            <Link href="/" className="border px-4 py-2 text-sm font-medium inline-block">
              &larr; Back to Home
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
