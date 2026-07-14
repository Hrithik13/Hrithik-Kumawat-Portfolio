"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { resumes, type ResumeVariant } from "@/lib/content/resumes";
import { ResumeSummary } from "@/components/sections/resume/ResumeSummary";
import { ResumeHighlights } from "@/components/sections/resume/ResumeHighlights";
import { ResumeJourney } from "@/components/sections/resume/ResumeJourney";
import { ResumePreview } from "@/components/sections/resume/ResumePreview";
import { ResumeContinuousLearning } from "@/components/sections/resume/ResumeContinuousLearning";

export function ResumeToggle() {
  const [variant, setVariant] = useState<ResumeVariant>("ba");

  return (
    <section className="pt-16 sm:pt-20 pb-20">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Resume
          </h1>
          <p className="mt-4 text-base text-on-surface-variant leading-relaxed max-w-xl mx-auto">
            Choose the resume that best matches the role you&apos;re hiring for.
            While my professional journey is the same, I maintain role-specific
            resumes to highlight the most relevant experience for Business
            Analysis and Quality Assurance opportunities.
          </p>
        </Reveal>

        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Resume variant"
            className="relative flex w-full max-w-md rounded-full bg-surface-container p-1"
          >
            <motion.span
              layout
              className="absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-primary-container"
              animate={{ left: variant === "ba" ? 4 : "calc(50% + 0px)" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            <button
              type="button"
              role="tab"
              aria-selected={variant === "ba"}
              onClick={() => setVariant("ba")}
              className={`relative z-10 flex-1 py-3 px-6 rounded-full text-sm font-medium transition-colors duration-300 ${
                variant === "ba" ? "text-white" : "text-on-surface-variant"
              }`}
            >
              {resumes.ba.label}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={variant === "qa"}
              onClick={() => setVariant("qa")}
              className={`relative z-10 flex-1 py-3 px-6 rounded-full text-sm font-medium transition-colors duration-300 ${
                variant === "qa" ? "text-white" : "text-on-surface-variant"
              }`}
            >
              {resumes.qa.label}
            </button>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={variant}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <ResumeSummary variant={variant} />
              <ResumeHighlights variant={variant} />
              <ResumeJourney variant={variant} />
              <ResumePreview variant={variant} />
            </motion.div>
          </AnimatePresence>

          <ResumeContinuousLearning />
        </div>
      </Container>
    </section>
  );
}
