import styles from "@/styles/components/Footer.module.css";
import { Linkedin, Instagram, Github, Twitter, Facebook, Mail } from "lucide-react";
import { userData } from "@/data/user";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: userData.social.linkedin,
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: userData.social.instagram,
    },
    {
      name: "GitHub",
      icon: Github,
      url: userData.social.github,
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: userData.social.facebook,
    },
  ];

  return (
    <footer className="bg-background z-10 relative border-t border-border pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Socials */}
          <div className="mb-12">
            <h3 className="text-base font-medium text-muted-foreground mb-4 border-2 border-primary rounded-full px-6 py-2 inline-block">
              Find me on
            </h3>
            <div className="mail">
              <h3 className={styles.emailHeader}>
                <a href={`mailto:${userData.email}`} className={styles.emailLink}>
                {userData.email}
                </a>
              </h3>
            </div>
            <ul className={styles.socialList}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.name} className={styles.socialItem}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label={social.name}
                    >
                      <Icon className={styles.socialIcon} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Large Name */}
          <div>
            <h2 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none uppercase"
              style={{ color: "hsl(75, 25%, 45%)" }}
            >
              {userData.name}
            </h2>
          </div>

          {/* Copyright */}
          <div className="mt-8 mb-8">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {userData.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
