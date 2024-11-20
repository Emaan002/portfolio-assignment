"use client";
import Image from "next/image";
import { useEffect } from "react";
import Head from "next/head";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

type SkillBarProps = {
  skillName: string;
  logoSrc: string;
  progress: string; 
};

const SkillBar: React.FC<SkillBarProps> = ({
  skillName,
  logoSrc,
  progress,
}) => {
  return (
    <div className="skill">
      <div className="skill-name">
        <Image  
        src={logoSrc} 
        alt={`${skillName} Logo`} 
        width={30}
        height={30}
        className="skill-logo" />
        {skillName}
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: progress }}
          aria-label={`${skillName} proficiency: ${progress}`}
        ></div>
      </div>
    </div>
  );
};

export default function Home() {
  useEffect(() => {
    const skillBars =
      document.querySelectorAll<HTMLDivElement>(".progress-bar");
    skillBars.forEach((bar) => {
      const progress = bar.getAttribute("aria-label")?.split(": ")[1] || "0%";
      bar.style.width = progress;
    });
  }, []);

  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <nav>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>

      <header id="home">
        <Image src="/profile.jpg"
         alt="Profile"
         width={260}
         height={260}
         />
        <div className="info">
          <h1>I&apos;m Emaan</h1>
          <p>
            Hi, I&apos;m Emaan Sagheer, a passionate Frontend Developer with
            expertise in crafting responsive and user-friendly web interfaces. I
            specialize in modern technologies like HTML, CSS, JavaScript, and
            frameworks like React and Next.js. My focus is on delivering
            seamless user experiences through clean code and creative design.
          </p>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/hafsa-sagheer-ahmed-737251311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={25} color="#0c5a28" />
            </a>
            <a
              href="https://github.com/Emaan002"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub size={25} color="#0c5a28" />
            </a>
            <a
              href="mailto:hafsaahmed697@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <BiLogoGmail size={25} color="#0c5a28" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instgram Profile"
            >
              <FaInstagram size={25} color="#0c5a28" />
            </a>
          </div>
        </div>
      </header>

      <section id="skills" className="skills">
        <h2 className="headings" > Skills </h2>
        <SkillBar skillName="HTML" logoSrc="/images2.jpg" progress="90%" />
        <SkillBar skillName="CSS" logoSrc="/css.jpg" progress="85%" />
        <SkillBar skillName="JavaScript" logoSrc="/javascript.jpg" progress="70%"/>
        <SkillBar skillName="React.js" logoSrc="/react.jpg" progress="50%"/>
        <SkillBar skillName="Next.js" logoSrc="/next.jpg" progress="60%"/>
        <SkillBar skillName="Tailwind css" logoSrc="/tailwind.jpg" progress="85%"/>
      </section>

      <section id="portfolio" className="portfolio">
        <h2 className="headings">Portfolio</h2>
        <div className="card">
          <h3>Cynthia ugwa</h3>
          <p>Modern animated website with Gsap.</p>
          <a
            href="https://github.com/Emaan002/cynthiaugwu-Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://cynthiaugwu-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
          </a>
        </div>
        <div className="card">
          <h3>Portfolio</h3>
          <p>My personal portfolio using Next.js</p>
          <a
            href="https://github.com/Emaan002/Portfolio-with-next.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://portfolio-with-next-js-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
          </a>
        </div>
        <div className="card">
          <h3>Resume</h3>
          <p>User freindlty Resume Builder</p>
          <a
            href="https://github.com/Emaan002/Final-Resume-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://final-resume-project.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
          </a>
        </div>
        <div className="card">
          <h3>Calculator</h3>
          <p>Calculator using Html Css Javascript</p>
          <a
            href="https://github.com/Emaan002/Calculator-using-HTML-CSS-and-Javascript."
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://calculator-using-html-css-and-javascript.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
          </a>
        </div>
        <div className="card">
          <h3>Cricket Website</h3>
          <p>Build a website with next.js</p>
          <a
            href="https://github.com/Emaan002/Cricket-Accessories-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://cricket-accessories-web.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
          </a>
        </div>
        
      </section>

      <section id="contact" className="contact">
        <h2  className="headings" >Contact</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer>
        <p>
        &copy; 2024. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
