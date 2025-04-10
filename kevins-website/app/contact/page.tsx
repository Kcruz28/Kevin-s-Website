"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Contact() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FloatingNav />
      <div className="flex flex-col gap-6">
        <h1 className="text-xl md:text-9xl font-bold text-left text-black dark:text-white">
          Contact
          <br />
          Me
          <br />
          Get in touch
        </h1>
        <p className="text-xl md:text-2xl text-left text-black dark:text-white">
          I would love to hear from you! If you have any questions, comments,
        </p>
      </div>
    </div>
  );
}
