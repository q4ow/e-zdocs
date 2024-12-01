'use client';

import { motion } from "framer-motion";
import { Search, MessageCircle } from "lucide-react";
import { useState } from "react";
import { FAQCard } from "@/components/faq/faq-card";
import { faqs } from "@/data/faq";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchQuery.trim() === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Find answers to common questions about E-Z services.
            <br />Can't find what you're looking for?
          </p>
          <button
            onClick={() => window.open('/discord', '_blank')}
            className="inline-flex items-center text-white hover:text-blue-300 mt-2"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Talk to us!
          </button>
        </motion.div>

        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950/50 border border-zinc-500/20 rounded-lg px-4 py-2 pl-10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-zinc-500" />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                  !selectedCategory
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-950/50 text-zinc-400 hover:text-white"
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-950/50 text-zinc-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFaqs.map((faq, index) => (
              <FAQCard key={faq.id} {...faq} index={index} />
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-400">No questions found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
