"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FlatCard } from "@/components/ui/card";
import { TitleCard } from "@/components/title-card";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-[#e30b5d]" />,
      title: "Email",
      value: "kcruzlopez10@gmail.com",
      link: "mailto:kevin@example.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-[#e30b5d]" />,
      title: "Phone",
      value: "+1 (312) 342-3218",
      link: "tel:+13123423218",
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#e30b5d]" />,
      title: "Location",
      value: "Chicago, IL",
      link: null,
    },
  ];
  return (
    <div className="min-h-screen px-4 md:px-20 pb-20 pt-24 font-[family-name:var(--font-geist-sans)]">
      <FloatingNav />
      <TitleCard
        title1="Get In"
        title2="Touch"
        description="Have a question or want to work together? Feel free to reach out through any of the channels below."
      />

      <div className="flex flex-col items-center gap-10 mt-12 max-w-4xl mx-auto">
        <div className="flex flex-col gap-6 w-full items-center">
          <div className="grid gap-6 md:grid-cols-3 w-full">
            {contactInfo.map((contact) => (
              <FlatCard
                key={contact.title}
                name={contact.title}
                description={contact.value}
                icon={contact.icon}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Connect with me</h4>
            <div className="flex gap-6 justify-center">
              <a
                href="https://www.linkedin.com/in/kcruz10/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white dark:bg-zinc-900 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-gray-100 dark:border-zinc-800 group"
              >
                <FaLinkedin className="text-3xl text-[#0077B5] group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/Kcruz28"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white dark:bg-zinc-900 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-gray-100 dark:border-zinc-800 group"
              >
                <FaGithub className="text-3xl text-gray-800 dark:text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
