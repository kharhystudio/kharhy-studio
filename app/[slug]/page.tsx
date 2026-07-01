import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePageContent } from "@/components/pages/GuidePageContent";
import { LegalPageContent } from "@/components/pages/LegalPageContent";
import { ToolPageContent } from "@/components/pages/ToolPageContent";
import { getAllGuideSlugs, getGuideBySlug } from "@/lib/guides";
import { getLegalPageBySlug, legalPages } from "@/lib/legalPages";
import { pageMetadata } from "@/lib/seo";
import { getAllToolSlugs, getToolBySlug } from "@/lib/tools";

type RootSlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [
    ...getAllToolSlugs().map((slug) => ({ slug })),
    ...getAllGuideSlugs().map((slug) => ({ slug })),
    ...legalPages.map((page) => ({ slug: page.slug })),
  ];
}

export async function generateMetadata({
  params,
}: RootSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (tool) {
    return pageMetadata({
      title: tool.title,
      description: tool.metaDescription,
      path: `/${tool.slug}`,
    });
  }

  const guide = getGuideBySlug(slug);

  if (guide) {
    return pageMetadata({
      title: guide.title,
      description: guide.description,
      path: `/${guide.slug}`,
    });
  }

  const legalPage = getLegalPageBySlug(slug);

  if (legalPage) {
    return pageMetadata({
      title: legalPage.title,
      description: legalPage.description,
      path: `/${legalPage.slug}`,
    });
  }

  return {
    title: "Page not found",
  };
}

export default async function RootSlugPage({ params }: RootSlugPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (tool) {
    return <ToolPageContent tool={tool} />;
  }

  const guide = getGuideBySlug(slug);

  if (guide) {
    return <GuidePageContent guide={guide} />;
  }

  const legalPage = getLegalPageBySlug(slug);

  if (legalPage) {
    return <LegalPageContent page={legalPage} />;
  }

  notFound();
}
