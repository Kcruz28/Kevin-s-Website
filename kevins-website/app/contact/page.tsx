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
    <div className="min-h-screen px-4 md:px-20 pb-20 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
      <FloatingNav />
      <TitleCard
        title1="Get In"
        title2="Touch"
        description=" Have a question or want to work together? Feel free to contact me
          using the form below or through my contact information."
      />
      <div className="flex flex-wrap gap-2 md:gap-4 justify-start mt-4">
        {contactInfo.map((contact) => (
          <FlatCard
            key={contact.title}
            name={contact.title}
            description={contact.value}
            icon={contact.icon}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 w-full mt-6">
        <a
          href="https://www.linkedin.com/in/kevin-cruz-lopez/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="text-5xl text-[#0077B5] mt-4 hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://github.com/Kcruz28"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub className="text-5xl text-gray-800 dark:text-white mt-4 hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
}
