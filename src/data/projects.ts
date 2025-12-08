export type Project = {
  title: string;
  description: string;
  url?: string;
  tech: string[];
};
export const projects: Project[] = [
  {
    title: "Studentry - A Student Management Platform",
    description: `A student digital companion service that helps students manage academic 
    activities and resources alongside non-academic tasks. Built with features like event 
    handling, counselor integration, and timely reminders through  different channels built 
    as part of academic project.`,
    url: "https://github.com/HAPAAK/Studentry",
    tech: ["Express.js", "EJS", "Node.js", "MongoDB"],
  },
  {
    title: "Small Store Management System",
    description: ` A store management service that centralizes key operations including inventory 
    lifecycle management, detailed transaction record-keeping, and streamlined billing processes. 
    The system was built using PHP, HTML/CSS, and MySQL for persistent data storage.`,
    url: "https://github.com/HAPAAK/milanoir-events",
    tech: ["PHP", "MYSQL"],
  },
  {
    title: "Built a custom minimal Linux Distro",
    description: `With the help of Linux from Scratch project, a minimal Linux environment was built.
    Programming the project gives broad idea of Linux kernel and other core OS components.`,
    tech: ["Shell", "C"],
  },
  {
    title: "Portfolio Website",
    description: `My personal portfolio website where I showcase my projects, skills and showcase my work.`,
    url: "https://reshamsapkota.vercel.app",
    tech: ["Next.js", "Tailwind"],
  },
];

