export default function handler(req, res) {

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
    
    if (req.method === 'GET') {
      res.status(200).json(projects)
    } else {
        res.status(404).json({ message: 'Not Found' })
    }
  }