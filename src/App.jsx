import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import GridBackground from './components/GridBackground.jsx';

const features = [
  {
    title: 'Semantic Search',
    description:
      'Find the right image by meaning, not just keywords. Our vector search understands context and intent.',
  },
  {
    title: 'Auto-Tagging',
    description:
      'AI-generated tags on upload. Keep your library clean and instantly discoverable without manual effort.',
  },
  {
    title: 'Clustering',
    description:
      'Group visually similar assets with dynamic, intelligent clusters for faster curation and insight.',
  },
];

function FeatureCard({ title, description }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0.6 1', '0.4 0.4'] });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1.02]);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className="rounded-2xl border border-black/5 bg-white/60 backdrop-blur-md p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900">{title}</h3>
        <span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/10 text-rose-600 font-medium">
          •
        </span>
      </div>
      <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Hero with Spline cover */}
      <section className="relative h-[68vh] md:h-[78vh] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to improve text contrast; pointer-events-none so Spline remains interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-4xl md:text-6xl font-black tracking-tight text-gray-900"
              >
                PIXORA
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
                className="mt-3 text-base md:text-lg text-gray-700 max-w-xl"
              >
                An intelligent visual library platform that understands your images and brings order to creative chaos.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.16 }}
                className="mt-6"
              >
                <a
                  href="#features"
                  className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Get Started
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <GridBackground />
      </section>

      {/* Sticky Scroll Feature Section */}
      <section id="features" className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-12 gap-8 px-6 py-20 md:py-28">
          {/* Sticky left column */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="md:sticky md:top-0 md:h-screen flex md:block items-start pt-6">
              <div className="md:pt-20">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight">PIXORA</h2>
                <p className="mt-4 text-gray-600 md:max-w-xs">
                  Scroll to explore how PIXORA elevates your visual asset management with semantic intelligence.
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center rounded-full bg-rose-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* Scrolling right column */}
          <div className="md:col-span-7 lg:col-span-8 space-y-6 md:space-y-10">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} description={f.description} />
            ))}

            {/* Spacer to allow last card to align with sticky column */}
            <div className="h-[30vh]" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} PIXORA. All rights reserved.
      </footer>
    </div>
  );
}
