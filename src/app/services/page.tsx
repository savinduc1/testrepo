export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description: "We build fast, responsive, and scalable websites using modern technologies like Next.js and Tailwind CSS.",
    },
    {
      title: "UI/UX Design",
      description: "Designing beautiful and user-friendly interfaces that align with your brand and goals.",
    },
    {
      title: "SEO Optimization",
      description: "Improve your site's visibility on search engines and grow your organic traffic.",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-16 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-600 mb-12">
          We help businesses grow with modern technology and great design.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
