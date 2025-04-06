import Image from "next/image";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FloatingNav />
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-center">
          Hello, Im Kevin Cruz Lopez
        </h1>
        <p className="text-lg text-center">
          Im a software engineer based in Mexico City, specializing in web
          development and design.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src="/kevins-website/assets/kevins-website.png"
          alt="Kevin Cruz Lopez"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-lg text-center">
          Feel free to explore my website and get to know me better!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-lg text-center">
          If you have any questions or comments, please feel free to reach out
          to me at{" "}
        </p>
      </div>
    </div>
  );
}
