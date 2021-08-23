export default function handler(req, res) {
  const projects = [
    {
      name: "Maestro Mobil",
      link: "http://maestromobil.vercel.app",
      tech: ["Next JS", "tailwind", "React Js"],
      preview: "https://i.ibb.co/cg9q64M/maestromobil.png",
      code: 'https://github.com/dhoniaridho/maestromobil'
    },
    {
      name: "Travel Now",
      link: "https://travel-now.vercel.app/",
      tech: ["Nuxt JS", "Tailwind CSS", "Vue Js"],
      preview: "https://i.ibb.co/fY9QNPn/travelnow.png",
      code: 'https://github.com/dhoniaridho/travel-now'
    },
    {
      name: "Maestro Mobil",
      link: "http://maestromobil.vercel.app",
      tech: ["Next JS", "tailwind", "React Js"],
      preview: "https://i.ibb.co/cg9q64M/maestromobil.png",
      code: 'https://github.com/dhoniaridho/maestromobil'
    },
    {
      name: "Travel Now",
      link: "https://travel-now.vercel.app/",
      tech: ["Nuxt JS", "Tailwind CSS", "Vue Js"],
      preview: "https://i.ibb.co/fY9QNPn/travelnow.png",
      code: 'https://github.com/dhoniaridho/travel-now'
    },
    {
      name: "Maestro Mobil",
      link: "http://maestromobil.vercel.app",
      tech: ["Next JS", "tailwind", "React Js"],
      preview: "https://i.ibb.co/cg9q64M/maestromobil.png",
      code: 'https://github.com/dhoniaridho/maestromobil'
    },
    {
      name: "Travel Now",
      link: "https://travel-now.vercel.app/",
      tech: ["Nuxt JS", "Tailwind CSS", "Vue Js"],
      preview: "https://i.ibb.co/fY9QNPn/travelnow.png",
      code: 'https://github.com/dhoniaridho/travel-now'
    },
    {
      name: "Maestro Mobil",
      link: "http://maestromobil.vercel.app",
      tech: ["Next JS", "tailwind", "React Js"],
      preview: "https://i.ibb.co/cg9q64M/maestromobil.png",
      code: 'https://github.com/dhoniaridho/maestromobil'
    },
    {
      name: "Travel Now",
      link: "https://travel-now.vercel.app/",
      tech: ["Nuxt JS", "Tailwind CSS", "Vue Js"],
      preview: "https://i.ibb.co/fY9QNPn/travelnow.png",
      code: 'https://github.com/dhoniaridho/travel-now'
    },
    {
      name: "Maestro Mobil",
      link: "http://maestromobil.vercel.app",
      tech: ["Next JS", "tailwind", "React Js"],
      preview: "https://i.ibb.co/cg9q64M/maestromobil.png",
      code: 'https://github.com/dhoniaridho/maestromobil'
    },
    {
      name: "Travel Now",
      link: "https://travel-now.vercel.app/",
      tech: ["Nuxt JS", "Tailwind CSS", "Vue Js"],
      preview: "https://i.ibb.co/fY9QNPn/travelnow.png",
      code: 'https://github.com/dhoniaridho/travel-now'
    },
    {
      name: "Maestro Mobil",
      link: "http://maestromobil.vercel.app",
      tech: ["Next JS", "tailwind", "React Js"],
      preview: "https://i.ibb.co/cg9q64M/maestromobil.png",
      code: 'https://github.com/dhoniaridho/maestromobil'
    },
    {
      name: "Travel Now",
      link: "https://travel-now.vercel.app/",
      tech: ["Nuxt JS", "Tailwind CSS", "Vue Js"],
      preview: "https://i.ibb.co/fY9QNPn/travelnow.png",
      code: 'https://github.com/dhoniaridho/travel-now'
    },
  ];

  if (req.method === "GET") {
    res.status(200).json(projects);
  } else {
    res.status(404).json({ message: "Not Found" });
  }
}
