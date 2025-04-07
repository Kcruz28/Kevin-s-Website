import { FloatingNav } from "@/components/ui/floating-navbar";
import "../app/globals.css";

export default function Contact() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <FloatingNav />
      <h1>Contact</h1>
      <p>
        If you have any questions or comments, please feel free to reach out
        to me at{"kcruzlopez10@gmail.com"}   
        </p>
    </div>
    );
}