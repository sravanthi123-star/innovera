"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Wand2, Shirt, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <div className="max-w-6xl w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism text-sm font-medium text-blue-400 mb-4"
        >
          <Sparkles className="w-4 h-4" />
          <span>AI-Powered Personal Stylist</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-gradient leading-tight"
        >
          Elevate Your Style <br /> With Intelligence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
        >
          StyleAI analyzes your unique features to provide personalized outfit
          recommendations, color palettes, and smart wardrobe planning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/analyze">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-zinc-200 transition-colors">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <button className="px-8 py-4 glass-morphism font-semibold rounded-full hover:bg-white/10 transition-colors">
            View Sample
          </button>
        </motion.div>
      </div>

      {/* Feature Section */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-32">
        <FeatureCard
          icon={<Wand2 className="w-6 h-6" />}
          title="Color Theory"
          description="Skin tone detection for perfectly matched palettes."
          delay={0.8}
        />
        <FeatureCard
          icon={<Shirt className="w-6 h-6" />}
          title="Smart Wardrobe"
          description="AI-driven outfit matching based on your closet."
          delay={1.0}
        />
        <FeatureCard
          icon={<ShoppingBag className="w-6 h-6" />}
          title="Smart Shopping"
          description="Curated links from top Indian retailers."
          delay={1.2}
        />
      </div>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-blue-600/10 to-transparent -z-10 pointer-events-none"></div>
    </main>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="p-8 glass-morphism space-y-4 hover:border-white/20 transition-colors cursor-default"
    >
      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </motion.div>
  );
}
