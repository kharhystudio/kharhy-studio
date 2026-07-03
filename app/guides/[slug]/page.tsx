import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePageContent } from "@/components/pages/GuidePageContent";
import { getAllGuideSlugs, getGuideBySlug } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";

type GuidePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guide not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/${guide.slug}`,
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) notFound();

  return <GuidePageContent guide={guide} />;
}
