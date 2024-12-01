import type { Metadata } from "next/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, AlertTriangle, Clock } from "lucide-react";
import { getFAQ, getRelatedFAQs, faqs } from "@/data/faq";
import { FAQCard } from "@/components/faq/faq-card";
import { notFound } from "next/dist/client/components/not-found";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return faqs.map((faq) => ({
    id: faq.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const faq = getFAQ(resolvedParams.id);

  if (!faq) {
    return {
      title: "FAQ Not Found - E-Z Docs",
      description: "The requested FAQ could not be found.",
    };
  }

  return {
    title: `${faq.question} - E-Z Docs FAQ`,
    description: faq.shortAnswer,
  };
}

function SectionContent({ content, type }: { content: string; type?: string }) {
  const formattedContent = content.trim();

  if (type === "bullets" || type === "steps") {
    return (
      <div className="space-y-2">
        {formattedContent.split("\n").map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-blue-400">
              {type === "bullets" ? "•" : `${index + 1}.`}
            </span>
            <span className="text-zinc-300">
              {item.replace(/^[-\d]+\.\s*/, "")}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "code") {
    return (
      <pre className="bg-zinc-900/50 p-4 rounded-lg overflow-x-auto">
        <code className="text-zinc-300 text-sm">{formattedContent}</code>
      </pre>
    );
  }

  if (type === "warning") {
    return (
      <div className="bg-yellow-950/20 border border-yellow-500/20 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
          <div className="space-y-2">
            {formattedContent.split("\n").map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-zinc-300">
                  {item.replace(/^-\s*/, "")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "note") {
    return (
      <div className="bg-blue-950/20 border border-blue-500/20 rounded-lg p-4">
        <div className="text-zinc-300">{formattedContent}</div>
      </div>
    );
  }

  return (
    <div className="text-zinc-300 whitespace-pre-wrap">{formattedContent}</div>
  );
}

export default async function FAQDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const faq = getFAQ(resolvedParams.id);

  if (!faq) {
    notFound();
  }

  const relatedFaqs = getRelatedFAQs(resolvedParams.id);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <Link
            href="/faq"
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to FAQ
          </Link>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-400">{faq.category}</span>
              {faq.lastUpdated && (
                <div className="flex items-center gap-1 text-sm text-zinc-500">
                  <Clock className="w-4 h-4" />
                  Last updated: {new Date(faq.lastUpdated).toLocaleDateString()}
                </div>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {faq.question}
            </h1>
            <p className="text-lg text-zinc-300">{faq.shortAnswer}</p>
          </div>

          <div className="space-y-8">
            {faq.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2
                  className={cn(
                    "text-xl font-semibold",
                    section.type === "warning"
                      ? "text-yellow-500"
                      : "text-white",
                  )}
                >
                  {section.title}
                </h2>
                <SectionContent content={section.content} type={section.type} />
              </div>
            ))}
          </div>

          {faq.images && faq.images.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Images</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {faq.images.map((image, index) => (
                  <div key={index} className="space-y-2">
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-zinc-800">
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {image.caption && (
                      <p className="text-sm text-zinc-400">{image.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {faq.additionalNotes && faq.additionalNotes.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                Additional Notes
              </h2>
              <div className="space-y-2">
                {faq.additionalNotes.map((note, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-zinc-300"
                  >
                    <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {relatedFaqs.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                Related Questions
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {relatedFaqs.map((relatedFaq, index) => (
                  <FAQCard
                    key={relatedFaq.id}
                    id={relatedFaq.id}
                    question={relatedFaq.question}
                    shortAnswer={relatedFaq.shortAnswer}
                    category={relatedFaq.category}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
