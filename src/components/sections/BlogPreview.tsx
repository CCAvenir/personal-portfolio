import React from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import { blogPostsData } from "@/data/blog";

export default function BlogPreview() {
  return (
    <Section id="blog-preview" title="Latest Articles">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogPostsData.map((post) => (
            <div key={post.id} className="border p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs border px-2 py-0.5">
                  {post.isComingSoon ? "Coming Soon" : post.publishedAt}
                </span>
                <span className="text-xs">{post.readingTime}</span>
              </div>
              <h3 className="text-base font-bold">{post.title}</h3>
              <p className="text-xs leading-relaxed">{post.description}</p>
              <div className="flex flex-wrap gap-1 pt-1">
                {post.tags.map((tag) => (
                  <span key={tag} className="border px-1.5 py-0.5 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="pt-2">
          <Link
            href="/blog"
            className="border px-4 py-2 text-sm font-medium inline-block"
          >
            View All Articles &rarr;
          </Link>
        </div>
      </div>
    </Section>
  );
}
