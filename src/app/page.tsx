import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-white text-center">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={80}
        height={80}
        className="mb-6"
      />

      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Welcome to MyApp
      </h1>

      <p className="text-gray-600 max-w-md mb-8">
        Build fast and modern web experiences with the power of Next.js and Tailwind CSS.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#features"
          className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"
        >
          Explore Features
        </a>
        <a
          href="#contact"
          className="border border-black px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}
