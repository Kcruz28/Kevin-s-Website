import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <div className="items-left justify-items-left min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FloatingNav />
      <div className="flex flex-col items-left justify-center gap-4">
        <h1 className="text-9xl font-bold text-left">
          Kevin
          <br />
          Cruz
          <br />
          Lopez
        </h1>
        <p className="text-2xl text-left">
          I am a software engineer with a passion for building web
          applications. I have experience in full-stack development, and I
          enjoy working with modern technologies to create efficient and
          scalable solutions.
        </p>
      </div>
    </div>
  );
}
