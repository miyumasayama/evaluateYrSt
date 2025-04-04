import { Navbar } from "@/components/stories/navbar";

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="bg-stone-950 w-full h-lvh p-15">
        {children}
      </div>
    </>
  );
}