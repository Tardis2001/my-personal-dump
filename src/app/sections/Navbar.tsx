"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
  const sectionLinks = [
    { name: "Home", link: "/" },
    { name: "Sobre", link: "/sobre" },
    { name: "Projetos", link: "/projetos" },
    { name: "Blog", link: "http://92.112.177.162:8001/" },
    { name: "Contatos", link: "/contatos" },
  ];

  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    links.forEach((link) => {
      link.addEventListener("click", () => setResponsiveNavVisible(false));
    });
    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const html = document.querySelector("html");
    html?.addEventListener("click", (e) => {
      setResponsiveNavVisible(false);
    });
  }, []);

  return (
    <nav>
      <div className={"wrapper"}>
        <motion.div
          className="brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          <a className="brand">Matheus</a>
        </motion.div>
        <motion.div
          className="nav-responsive-toggle"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.1,
            ease: "easeInOut",
          }}
        >
          {responsiveNavVisible ? (
            <CgClose
              onClick={(e: { stopPropagation: () => void }) => {
                e.stopPropagation();
                setResponsiveNavVisible(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e: { stopPropagation: () => void }) => {
                e.stopPropagation();
                setResponsiveNavVisible(true);
              }}
            />
          )}
        </motion.div>
        <div
          className={`${responsiveNavVisible && "nav-responsive"} nav-items`}
        >
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className="nav-items-list-item"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.3 + index * 0.1,
                }}
              >
                <Link href={link} className="nav-items-list-item-link">
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="nav-items-button"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.3,
            }}
          ></motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
