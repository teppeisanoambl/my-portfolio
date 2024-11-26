import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
      <p className="text-lg text-gray-700">Welcome to my personal portfolio!</p>
    </main>
  );
}