import MainLayout from "~/components/layouts/main-layout";

export default function Portfolio() {
  const projects = [
    {
      name: "Links",
      href: "/",
      tech: ["react", "tailwind"],
    },
    {
      name: "Links",
      href: "/",
      tech: ["react", "tailwind"],
    },
    {
      name: "Links",
      href: "/",
      tech: ["react", "tailwind"],
    },
    {
      name: "Links",
      href: "/",
      tech: ["react", "tailwind"],
    },
    {
      name: "Links",
      href: "/",
      tech: ["react", "tailwind"],
    },
    {
      name: "Links",
      href: "/",
      tech: ["react", "tailwind"],
    },
    {
      name: "Links",
      href: "/",
      tech: ["react", "tailwind"],
    },
    {
      name: "Links",
      href: "/",
      tech: ["react", "tailwind"],
    },
    {
      name: "Links",
      href: "/",
      tech: ["react", "tailwind"],
    },
    {
      name: "Links",
      href: "/",
      tech: ["react", "tailwind"],
    },
    {
      name: "Links",
      href: "/",
      tech: ["react", "tailwind"],
    },
    {
      name: "Links",
      href: "/",
      tech: ["react", "tailwind"],
    },
  ];
  return (
    <MainLayout>
      <section id="project" className="bg-black text-white px-7 md:px-20 py-16">
        <div className="mb-10">
          <p className="text-sm text-gray-400 mb-2">ALL PROJECT</p>
          <h1 className="text-3xl md:text-4xl">Stuff I’ve Worked On 📁</h1>
          <div className="bg-gradient-to-r from-pink-600 to-green-500 h-5 w-1/4 -mt-7"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            return (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={p.href}
                role="link"
                key={i}
                className="flex justify-between flex-col h-80 hover:bg-gradient-to-tr hover:border-0 border from-pink-500 to-blue-500 p-5"
              >
                <div className="flex-1 flex place-items-center">
                  <div className="mt-24">
                    <h1 className="text-4xl font-semibold">{p.name}</h1>
                  </div>
                </div>
                <div className="flex justify-center uppercase">
                  {p.tech.map((t, idx) => (
                    <p key={idx} className="mx-1 text-sm">
                      {t}
                    </p>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </MainLayout>
  );
}
