"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { userAgent } from "next/server";
import VisitorAnalytics from "./components/VisitorAnalytics";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    const logVisit = async () => {
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (hasVisited) return;

        try {
            // Fetch user-agent and IP
            await fetch("/api/track", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ip: window.location.hostname,
                userAgent: navigator.userAgent,
            }),
          });
          sessionStorage.setItem('hasVisited', 'true');
        } catch (err) {
            console.error("Failed to log visit:", err);
        }
    };
        logVisit();
    }, []);

  return (
    <>
          <header>
            <a href="#" className="logo-holder">
                <div className="logo">L</div>
                <div className="logo-text">Portfolio Website</div>
            </a>
            <nav>
                <ul id="menu" className={menuOpen ? "active" : ""}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="mailto:act.productions22@gmail.com" className="button">Contact Me</a>
                    </li>
                </ul>
                <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                    </svg>
                      
                </a>
            </nav>
        </header>

        <main>
            <section className="hero container">
                <div className="hero-blue">
                    <div>
                        <h1><small>Hi I'm</small>
                            Azure Thompson
                        </h1>
                        <p>
                            Cyber Security and Computer Science graduate who loves to learn new things and experiment with ideas.
                            <span>I'm interested in embedded systems programming.</span>
                        </p>
                        <div className="call-to-action">
                            <a href="./Azure Thompson - Resume.docx" className="button black">
                                View Resume
                            </a>
                            <a href="mailto:act.productions22@gmail.com" className="button white">
                                Contact Me
                            </a>
                        </div>
                        <div className="social-links">
                            <a href="#">
                                <img src="./imgs/github_logo.png" alt="GitHub" width="48" />
                            </a>
                            <a href="#">
                                <img src="./imgs/linkedin_logo.png" alt="LinkedIn" width="48" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero-yellow">
                    <img src="./imgs/gigachad.jpg" alt="Azure Thompson" width="100%" />
                </div>
            </section>

            <section className="logos container">
                <div className="marquee">
                    <div className="track">
                        <img src="./imgs/c-original.png" alt="C" width="128"/>
                        <img src="./imgs/cpp_icon.png" alt="Cpp" width="128"/>
                        <img src="./imgs/java.png" alt="Java" width="128"/>
                        <img src="./imgs/javascript-js.png" alt="JavaScript" width="128"/>
                        <img src="./imgs/python_icon.png" alt="Python" width="128"/>
                        <img src="./imgs/rust_icon.png" alt="Rust" width="128"/>
                        <img src="./imgs/bash.png" alt="Bash" width="128"/>
                        <img src="./imgs/assembly_icon.png" alt="ASM" width="128"/>
                        <img src="./imgs/html_icon.png" alt="HTML" width="128"/>
                        <img src="./imgs/css_icon.png" alt="CSS" width="128"/>
                        <img src="./imgs/vscode_icon.png" alt="CSS" width="128"/>
                        <img src="./imgs/postgresql_icon.png" alt="CSS" width="128"/>

                        <img src="./imgs/c-original.png" alt="C" width="128"/>
                        <img src="./imgs/cpp_icon.png" alt="Cpp" width="128"/>
                        <img src="./imgs/java.png" alt="Java" width="128"/>
                        <img src="./imgs/javascript-js.png" alt="JavaScript" width="128"/>
                        <img src="./imgs/python_icon.png" alt="Python" width="128"/>
                        <img src="./imgs/rust_icon.png" alt="Rust" width="128"/>
                        <img src="./imgs/bash.png" alt="Bash" width="128"/>
                        <img src="./imgs/assembly_icon.png" alt="ASM" width="128"/>
                        <img src="./imgs/html_icon.png" alt="HTML" width="128"/>
                        <img src="./imgs/css_icon.png" alt="CSS" width="128"/>
                        <img src="./imgs/vscode_icon.png" alt="CSS" width="128"/>
                        <img src="./imgs/postgresql_icon.png" alt="CSS" width="128"/>
                    </div>
                </div>
            </section>

            <section id="skills" className="skills container">
                <h2>
                    <small>About Me</small>
                    Skills
                </h2>
                <div className="holder-blue">
                    <div className="left-column">
                        <h3>Cyber Security</h3>
                        <ul>
                            <li>Kali Linux</li>
                            <li>Hack the Box</li>
                        </ul>
                        <h3>Computer Science</h3>
                        <ul>
                            <li>Programming</li>
                            <li>Hardware Technician</li>
                        </ul>
                    </div>
                    <div className="right-column">
                        <h3>A bit about me</h3>
                        <p>I'm a uni student...</p>
                        <p>I do some projects in my spare time.</p>
                    </div>
                </div>
            </section>

            <section className="work-experience container">
                <h2>
                    <small>Recent</small>
                    Work Experience
                </h2>
                <div className="jobs">
                    <article>
                        <figure>
                            <div>
                                <img src="./imgs/serversetup.png" alt="Workplace - 1" width="100%"/>
                                <figcaption>Workplace-1</figcaption>
                            </div>
                        </figure>
                        <h3>Job - 1</h3>
                        <div>2000-20</div>
                        <p>I worked here...</p>
                    </article>
                    <article>
                        <figure>
                            <div>
                                <img src="./imgs/homelab.jpg" alt="Workplace - 2" width="100%"/>
                                <figcaption>Workplace-2</figcaption>
                            </div>
                        </figure>
                        <h3>Job - 2</h3>
                        <div>2000-20</div>
                        <p>I worked here...</p>
                    </article>
                    <article>
                        <figure>
                            <div>
                                <img src="./imgs/python_roulette.png" alt="Workplace - 3" width="100%"/>
                                <figcaption>Workplace-3</figcaption>
                            </div>
                        </figure>
                        <h3>Job - 3</h3>
                        <div>2000-20</div>
                        <p>I worked here...</p>
                    </article>
                </div>
            </section>

            <section id="projects" className="bento container">
                <h2>
                    <small>
                        Hobbies
                    </small>
                    Completed Projects
                </h2>
                <div className="bento-grid">
                    <a href="#" className="bento-item">
                        <img src="./imgs/gigachad.jpg" alt="Azure Thompson" width="100%" />
                    </a>
                    <a href="#" className="bento-item">
                        <img src="./imgs/gigachad.jpg" alt="Azure Thompson" width="100%" />
                    </a>
                    <a href="#" className="bento-item">
                        <img src="./imgs/gigachad.jpg" alt="Azure Thompson" width="100%" />
                    </a>
                    <a href="#" className="bento-item">
                        <img src="./imgs/gigachad.jpg" alt="Azure Thompson" width="100%" />
                    </a>
                    <a href="#" className="bento-item">
                        <img src="./imgs/gigachad.jpg" alt="Azure Thompson" width="100%" />
                    </a>
                    <a href="#" className="bento-item">
                        <img src="./imgs/gigachad.jpg" alt="Azure Thompson" width="100%" />
                    </a>
                </div>
            </section>
            <VisitorAnalytics />
        </main>
    </>
  );
}
