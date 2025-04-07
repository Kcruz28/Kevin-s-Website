import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FloatingNav />
      <div className="flex flex-col md:flex-row justify-between items-center mt-16">
        <div className="md:w-1/2 flex flex-col gap-6">
          <h1 className="text-9xl md:text-9xl font-bold text-left">
            Kevin
            <br />
            Cruz
            <br />
            Lopez
          </h1>
          <p className="text-xl md:text-2xl text-left">
            I am a software engineer with a passion for building web
            applications. I have experience in full-stack development, and I
            enjoy working with modern technologies to create efficient and
            scalable solutions.
          </p>
          <div className="flex gap-4">
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

        {/* Right column - Image */}
        <div className="md:w-1/3 mt-8 md:mt-0 ">
          <Image
            src="/kev.jpeg"
            alt="Kevin Cruz Lopez"
            className="object-cover w-full h-auto rounded-lg shadow-lg"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
}
