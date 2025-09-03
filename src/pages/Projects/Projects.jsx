import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "ScrapeIt - Chrome Extension & Admin Dashboard",
    description:
      "Advanced competitor analysis tool with Chrome extension for scraping Shopee product data, sales metrics, and store analytics. Includes comprehensive admin dashboard for user management and token-based authentication system.",
    src: "scraping.jpg",
    link: "scrapeit.png",
    color: "#5196fd",
    technologies: ["JavaScript", "Python", "Node.js", "Chrome APIs", "Web Scraping", "Authentication"],
    type: "🔒 Private Tool",
    impact: "Automated competitor analysis for e-commerce businesses",
    role: "Solo Developer",
  },
  {
    title: "Shopee AI Chatbot Integration",
    description:
      "Intelligent chatbot system that reads incoming Shopee store messages and responds contextually using OpenAI integration. Achieved 100% chat performance improvement for Summerscent store operations.",
    src: "chatbot.jpg",
    link: "chatbot.png",
    color: "#8f89ff",
    technologies: ["Python", "OpenAI API", "Shopee API", "NLP", "Automation"],
    type: "🤖 AI Integration",
    impact: "100% chat performance improvement",
    role: "AI Integration Specialist",
  },
  {
    title: "FunnelsPro - Drag & Drop Page Builder",
    description:
      "Enhanced the FunnelsPro platform with advanced drag-and-drop functionality for creating landing pages. Developed intuitive UI components and improved user experience for no-code web development.",
    src: "pagebuilder.jpg",
    link: "funnels.png",
    color: "#fff",
    technologies: ["React", "JavaScript", "CSS3", "Drag & Drop API", "UI/UX"],
    type: "🎨 Frontend Development",
    impact: "Simplified landing page creation for non-technical users",
    role: "Frontend Developer",
  },
  {
    title: "Dropshipaja.com - Complete UI/UX Redesign",
    description:
      "Led the complete redesign and modernization of Dropshipaja.com platform. Transformed the user interface from legacy design to modern, responsive, and user-friendly experience with improved functionality.",
    src: "redesign.jpg",
    link: "da.png",
    color: "#ed649e",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
    type: "🎨 UI/UX Redesign",
    impact: "Complete platform modernization and improved user experience",
    role: "UI/UX Designer & Frontend Developer",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                technologies={project.technologies}
                type={project.type}
                impact={project.impact}
                role={project.role}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  technologies,
  type,
  impact,
  role,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden" style={{    alignSelf: "center" }}>
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              
              {/* Project Type Badge */}
              <div className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                {type}
              </div>
              
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                {description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Role and Impact */}
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Role: </span>
                  <span className="text-sm text-gray-300">{role}</span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Impact: </span>
                  <span className="text-sm text-gray-300">{impact}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center justify-between">
                {/* Project Status */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-xs text-gray-500">Private Project</span>
                </div>

                {/* Contact for Details */}
                <motion.div
                  className="group flex items-center gap-2 cursor-pointer"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Contact for Details
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  technologies: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  impact: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};
