export default function handler(req, res) {

    const projects = [
        {
          name: "Maestro Mobil",
          href: "http://maestromobil.vercel.app",
          tech: ["Next JS", "tailwind", "React Js"],
        },
        {
          name: "Travel Now",
          href: "https://travel-now.vercel.app/",
          tech: ["Nuxt JS", "Tailwind CSS", "Vue Js"],
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
    
    if (req.method === 'GET') {
      res.status(200).json(projects)
    } else {
        res.status(404).json({ message: 'Not Found' })
    }
  }
