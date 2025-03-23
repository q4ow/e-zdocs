import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Are you lost?
          </h1>
          <p className="text-lg text-zinc-400">
            Sorry, we couldn&apos;t find the question you&apos;re looking for.
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
