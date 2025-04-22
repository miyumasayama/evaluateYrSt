import ReloadChecker from "@/components/stories/reloadChecker";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReloadChecker />
      {children}
    </>
  );
}
