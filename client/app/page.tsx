import AboutPage from "@/components/pages/About";
import ContactPage from "@/components/pages/Contact";
import HomePage from "@/components/pages/Home";
import WorkPage from "@/components/pages/Work";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <HomePage />
      <AboutPage />
      <WorkPage />
      <ContactPage />
    </main>
  );
}
