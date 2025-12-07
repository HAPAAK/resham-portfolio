export type Project = {
  title: string;
  description: string;
  url: string;
  tech: string[];
};
export const projects: Project[] = [
  {
    title: "Studentry - A Student Management Platform",
    description: `A student digital companion service that helps students manage academic activities
    "and resources alongside non-academic chores. Built with feautre like events handling, counsellor 
    integration and timely reminders thorugh different channels built as part of academic project.`,
    url: "https://github.com/HAPPAK/studentry",
    tech: ["Node.js", "MongoDB"],
  },
  {
    title: "Small Store Management System",
    description: `Full-fledged store management system, which was able to handle the
    "inventory, keep track of records, provides billing was created. It was
    "programmed in HTML, CSS for frontend, PHP for backend and
    "MSQL for database connection.`,
    url: "https://github.com/HAPPAK/store-management-system",
    tech: ["PHP", "MYSQL"],
  },
  {
    title: "Built a custom minimal Linux Distro",
    description: `Through the help of Linux from Scratch project, a minimal Linux environment was built on top of Linux distribution, 
    Ubuntu. Programming the project gives broad idea of Linux kernel and other core OS components.`,
    url: "https://github.com/HAPPAK/linux-from-scratch",
    tech: ["Shell", "C"],
  },
  {
    title: "Portfolio Website",
    description: `My personal portfolio website where I showcase my projects, skills and showcase my work.`,
    url: "https://resham.sapkota.com.np",
    tech: ["Next.js", "Tailwind"],
  },
];

