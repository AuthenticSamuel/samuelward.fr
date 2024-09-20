import { Terminal } from "@/components/terminal";

type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Terminal />
    </main>
  );
};

export default HomePage;
