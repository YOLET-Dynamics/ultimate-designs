"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ServiceDialogProps {
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  process: { title: string; description: string }[];
}

export default function ServiceDialog({
  title,
  description,
  fullDescription,
  benefits,
  process,
}: ServiceDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="link"
        className="group mt-auto inline-flex items-center gap-2 p-0 text-sm font-medium text-black"
        onClick={() => setOpen(true)}
      >
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>

      <AnimatePresence>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto px-4">
            <DialogHeader>
              <DialogTitle className="font-serif text-xl font-normal md:text-2xl">
                {title}
              </DialogTitle>
              <DialogDescription className="text-sm text-neutral-600 md:text-base">
                {description}
              </DialogDescription>
            </DialogHeader>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 space-y-6 md:space-y-8"
            >
              <div>
                <p className="text-sm text-neutral-700 md:text-base">
                  {fullDescription}
                </p>
              </div>

              <div>
                <h3 className="mb-3 font-serif text-base font-normal md:mb-4 md:text-lg">
                  Key Benefits
                </h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-neutral-400" />
                      <span className="text-sm text-neutral-700 md:text-base">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-serif text-base font-normal md:mb-4 md:text-lg">
                  Our Process
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {process.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border-l-2 border-neutral-200 pl-4"
                    >
                      <h4 className="font-medium text-neutral-900 text-sm md:text-base">
                        {index + 1}. {step.title}
                      </h4>
                      <p className="text-xs text-neutral-600 md:text-sm">
                        {step.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="rounded-md bg-[#f5f2ef] p-4"
              >
                <p className="text-center text-xs text-neutral-700 md:text-sm">
                  Ready to discuss your project?{" "}
                  <a href="/contact" className="font-medium underline">
                    Contact us
                  </a>{" "}
                  for a consultation.
                </p>
              </motion.div>
            </motion.div>
          </DialogContent>
        </Dialog>
      </AnimatePresence>
    </>
  );
}
