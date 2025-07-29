"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { userAgent } from "next/server";
import VisitorAnalytics from "./components/VisitorAnalytics";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [randomSelfie, setRandomSelfie] = useState("");

  const selfie = [
    "mugshot_black_cutout.png",
    "mugshot_red_cutout.png",
    "mugshot_white_cutout.png"
  ];

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    // Select random selfie
    const randomIndex = Math.floor(Math.random() * selfie.length);
    setRandomSelfie(selfie[randomIndex]);

    // Log user visit
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
                <div className="logo">
                    <img src="./imgs/logo_icon.png" alt="Logo" width="48px" />
                </div>
                <div className="logo-text">
                    Azure Thompson
                </div>
            </a>
            <nav>
                <ul id="menu" className={menuOpen ? "active" : ""}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#certs">Certifications</a>
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
                        <h1>
                            <small>Hi I'm</small>
                            Azure Thompson
                        </h1>
                        <p>
                            A recent graduate with a Bachelor of Science in Cyber Security and Computer Science at Murdoch University. 
                            With a deep-rooted passion for technology, I thrive in environments where problem-solving, innovation, and continuous learning are at the forefront.
                            <span> Beyond tech, I’m a dedicated lifeguard, gym enthusiast, and volunteer youth worker. 
                                Eager to learn and innovate, I’m always seeking new challenges to grow my skills and contribute meaningfully to the tech community.
                            </span>
                            &nbsp;Feel free to check out my projects on GitHub!
                        </p>
                        <div className="call-to-action">
                            <a href="./Azure Thompson - Resume.pdf" target="_blank" className="button black">
                                View Resume
                            </a>
                            <a href="mailto:act.productions22@gmail.com" target="_blank" className="button white">
                                Contact Me
                            </a>
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/AzureThompson" target="_blank">
                                <img src="./imgs/github_logo.png" alt="GitHub" width="48" />
                            </a>
                            <a href="https://www.linkedin.com/in/azure-thompson-069253227" target="_blank">
                                <img src="./imgs/linkedin_logo.png" alt="LinkedIn" width="48" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero-yellow">
                    {randomSelfie && (
                        <img 
                            src={`./imgs/selfies/${randomSelfie}`}
                            alt="Azure Thompson"
                            width="100%"
                        />
                    )}
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
                        <img src="./imgs/vscode_icon.png" alt="VScode" width="128"/>
                        <img src="./imgs/postgresql_icon.png" alt="PostgreSQL" width="128"/>

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
                        <img src="./imgs/vscode_icon.png" alt="VScode" width="128"/>
                        <img src="./imgs/postgresql_icon.png" alt="PostgreSQL" width="128"/>
                    </div>
                </div>
            </section>

            <section id="certs" className="certs container">
                <h2>
                    <small>Degrees and</small>
                    Certifications
                </h2>
                <div className="display-case">
                    <a className="cert-box">
                        <div className="cert-icon">
                            <img src="/imgs/certs/murdoch_university_logo.jpg" alt="Bachelor of IT" />
                        </div>
                        <p>Bachelor of IT: Cyber Security and Forensics, Computer Science</p>
                    </a>
                    <a className="cert-box" href="https://learn.microsoft.com/api/credentials/share/en-us/AzureThompson-5642/F8AA7F9F401CB295?sharingId=E2EF258A5F070C6F" target="_blank">
                        <div className="cert-icon">
                            <img src="/imgs/certs/az900.png" alt="AZ-900" />
                        </div>
                        <p>AZ-900: Mircosoft Azure Fundamentals</p>
                    </a>
                    <a className="cert-box in-progress">
                        <span className="tooltip">In Progress</span>
                        <div className="cert-icon">
                            <img src="/imgs/certs/sc200.png" alt="SC-200" />
                        </div>
                        <p>SC-200: Security Operations Analyst Associate</p>
                    </a>
                </div>
                <p className="legend">(Transparent tiles indicate ongoing training)</p>
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
                            <li>Cyber Forensics</li>
                            <li>Security Analysis</li>
                            <li>Risky User Assessment</li>
                            <li>Web Security</li>
                            <li>Network Security</li>
                            <li>Security Best Practices</li>
                            <li>Incident Response</li>
                            <li>Penetration Testing</li>
                        </ul>
                        <h3>Computer Science</h3>
                        <ul>
                            <li>Programming</li>
                            <li>Web Development</li>
                            <li>Operating Systems</li>
                            <li>Networking</li>
                            <li>Software Development</li>
                            <li>Data Structures & Algorithms</li>
                            <li>Version Control</li>
                            <li>Hardware & Embedded Systems</li>
                        </ul>
                    </div>
                    <div className="right-column">
                        <h3>A bit about me</h3>
                        <p>
                            My expertise spans across software development, network administration, 
                            and server management, backed by hands-on experience in building and maintaining PCs, 
                            running my homelab, and designing custom networks. I’ve crafted my own router using pfSense, implemented ad-blocking DNS solutions, 
                            and hosted game servers for friends—all driven by my curiosity and love for tinkering with hardware and software.
                        </p>
                        <p>
                            In other areas, I bring a strong work ethic and adaptability from roles in customer service, inventory management, 
                            and cyber forensics. Whether optimizing workflows, developing secure web applications, or volunteering as a youth leader, 
                            I approach every challenge with enthusiasm and attention to detail.
                            When I’m not coding or configuring servers, you’ll find me lifting weights, building PCs, 
                            or contributing to open-source projects. I’m currently crafting this portfolio to showcase my journey—feel free to explore and connect!
                        </p>
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
                                <img src="./imgs/murdoch-logo.jpg" alt="Workplace - 1" width="100%"/>
                                <figcaption>Murdoch University</figcaption>
                            </div>
                        </figure>
                        <h3>Junior Cyber Security Analyst</h3>
                        <div>2024</div>
                        <p>
                            As a Junior Security Analyst, I conducted risky user assessments, asset reporting, and cyber forensics investigations to strengthen our security posture. I also contributed to software development for asset discovery tools, helping improve threat detection and mitigation. Through this role, I gained hands-on experience identifying vulnerabilities and implementing safeguards to protect critical systems.
                        </p>
                    </article>
                    <article>
                        <figure>
                            <div>
                                <img src="./imgs/teamlogo.png" alt="Workplace - 2" width="100%"/>
                                <figcaption>Murdoch University</figcaption>
                            </div>
                        </figure>
                        <h3>Industry Project</h3>
                        <div>2024</div>
                        <p>
                            For my Industry Project at Murdoch University, I enhanced an existing web application by implementing OAuth 2.0 security protocols, writing comprehensive technical documentation, and developing an interactive 3D model viewport. Working collaboratively with my team using Git for version control, I contributed to both frontend functionality and backend security while ensuring our project maintained clean, organized code through disciplined branch management and pull requests.
                        </p>
                    </article>
                    <article>
                        <figure>
                            <div>
                                <img src="./imgs/completehomefiltrationlogo.jpg" alt="Workplace - 3" width="100%"/>
                                <figcaption>Complete Home Filtration</figcaption>
                            </div>
                        </figure>
                        <h3>Data Integrity Specialist</h3>
                        <div>2023</div>
                        <p>
                            As a Data Integrity Specialist at Complete Home Filtration, I meticulously verified contract details by cross-referencing submitted documentation with our database entries. My sharp attention to detail ensured 100% accuracy in customer records while developing efficient processes to flag discrepancies. This role strengthened my data validation skills and gave me hands-on experience maintaining clean, reliable databases—a critical foundation for any technical field.
                        </p>
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
                        <img src="./imgs/full-stack-1.jpg" alt="Azure Thompson" width="100%" />
                        <figcaption>Web Portfolio</figcaption>
                    </a>
                    <a href="#" className="bento-item">
                        <img src="./imgs/home_router.jpg" alt="Azure Thompson" width="100%" />
                        <figcaption>Custom pfSense Home Router</figcaption>
                    </a>
                    <a href="#" className="bento-item">
                        <img src="./imgs/pc_hardware.jpg" alt="Azure Thompson" width="100%" />
                        <figcaption>Personal Server</figcaption>
                    </a>
                    <a href="#" className="bento-item">
                        <img src="./imgs/kvm.png" alt="Azure Thompson" width="100%" />
                        <figcaption>Linux Hypervisor</figcaption>
                    </a>
                    <a href="#" className="bento-item">
                        <img src="./imgs/homelab-v2.jpg" alt="Azure Thompson" width="100%" />
                        <figcaption>Homelab</figcaption>
                    </a>
                    <a href="#" className="bento-item">
                        <img src="./imgs/ascii-image.png" alt="Azure Thompson" width="100%" />
                        <figcaption>Image to ASCII Generator</figcaption>
                    </a>
                </div>
            </section>
            <VisitorAnalytics />
        </main>
    </>
  );
}
