export default function handler(req, res) {
  const projects = [
    {
      name: "Maestro Mobil",
      link: "http://maestromobil.vercel.app",
      description:
        "Made a showroom web app with Next JS as a framework. Fetched data using API built with Wordpress.",
      tech: ["Next JS", "tailwind", "React Js", "Javascript"],
      preview: "https://i.ibb.co/cg9q64M/maestromobil.png",
      code: "https://github.com/dhoniaridho/maestromobil",
    },
    {
      name: "Travel Now",
      link: "https://travel-now.vercel.app/",
      description:
        "Slicing a travel landing page with Next JS as a framework. designed by figma community",
      tech: ["Nuxt JS", "Tailwind CSS", "Vue Js", "Javascript"],
      preview: "https://i.ibb.co/fY9QNPn/travelnow.png",
      code: "https://github.com/dhoniaridho/travel-now",
    },
    {
      name: "Lemon Host",
      link: "https://lemonhost.vercel.app/",
      tech: ["Vue Js", "tailwind", "Javascript", "Vue CLI"],
      description:
        "Slicing a hosting landing page with Next JS as a framework. designed by figma community",
      preview: "https://i.ibb.co/Y017JHP/lemonhost.png",
      code: "https://github.com/dhoniaridho/lemonhost",
    },
    {
      name: "MedicalRecov",
      link: "http://medical-recover.vercel.app/",
      tech: ["Reactjs", "Tailwind", "Javascript", "CRA"],
      description:
        "Slicing a hosting landing page with React Js as a library. designed by figma community",
      preview: "https://i.ibb.co/ZcBJw4t/medical.png",
      code: "https://github.com/dhoniaridho/medical-recover",
    },
  ];

  if (req.method === "GET") {
    res.status(200).json(projects);
  } else {
    res.status(404).json({ message: "Not Found" });
  }
}
