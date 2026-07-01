import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPageContent } from "@/components/pages/ToolPageContent";
import { pageMetadata } from "@/lib/seo";
import { getAllToolSlugs, getToolBySlug } from "@/lib/tools";

type ToolPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllToolSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool not found",
    };
  }

  return pageMetadata({
    title: tool.title,
    description: tool.metaDescription,
    path: `/${tool.slug}`,
  });
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) notFound();

  return <ToolPageContent tool={tool} />;
}
