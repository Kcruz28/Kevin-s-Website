"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Mail, Phone, MapPin } from "lucide-react";
import { FlatCard } from "@/components/ui/card";
// import { AnimatedBackground } from "animated-backgrounds";

export default function Contact() {


  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-rose-500" />,
      title: "Email",
      value: "kcruzlopez10@gmail.com",
      link: "mailto:kevin@example.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-rose-500" />,
      title: "Phone",
      value: "+1 (312) 342-3218",
      link: "tel:+13123423218",
    },
    {
      icon: <MapPin className="h-6 w-6 text-rose-500" />,
      title: "Location",
      value: "Chicago, IL",
      link: null,
    },
  ];
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <div className="absolute inset-0 +z-10">
        <AnimatedBackground animationName="starryNight" blendMode="screen" />
      </div>  */}
    
      <FloatingNav />
      <div className="flex flex-col gap-6 mt-16">
        <h1 className="text-xl md:text-9xl font-bold text-left text-black dark:text-white">
          Get In
          <br />
          Touch
        </h1>
        <p className="text-xl md:text-2xl text-left text-black dark:text-white">
          Have a question or want to work together? Feel free to contact me
          using the form below or through my contact information.
        </p>
      </div>
      <div className="flex flex-row gap-4 mt-10">
        {contactInfo.map((contact) => (
          <FlatCard
            key={contact.title}
            name={contact.title}
            description={contact.value}
            icon={contact.icon}
          />
        ))}
      </div>
    </div>
  );
}


