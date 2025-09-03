import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud, Shield } from "lucide-react";
import {
  FaReact,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaJs,
  FaCog,
  FaPhp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiJest,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { TbBrandVscode } from "react-icons/tb";
import { FcWorkflow } from "react-icons/fc";
import { MdAnimation } from "react-icons/md";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden border-gray-800 bg-gray-900/80 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-2xl hover:shadow-blue-500/10">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <CardContent className="relative z-10 p-6 space-y-4">
      <div className="flex items-center gap-4">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
        {
          name: "JavaScript",
          icon: <FaJs className="w-4 h-4 text-[#F7DF1E]" />,
        },
        {
          name: "Responsive Design",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend Development & Automation",
      color: "text-green-400",
      skills: [
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "PHP",
          icon: <FaPhp className="w-4 h-4 text-[#777BB4]" />,
        },
        {
          name: "API Integration",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "Web Scraping",
          icon: <FaCog className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "SQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "Automation Scripting",
          icon: <FaCog className="w-4 h-4 text-[#E10098]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "Design Systems",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Prototyping",
          icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" />,
        },
        {
          name: "Responsive Design",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" />,
        },
      ],
    },
    {
      icon: Shield,
      title: "Cyber Security",
      color: "text-red-400",
      skills: [
        {
          name: "Network Security",
          icon: <Shield className="w-4 h-4 text-[#FF4444]" />,
        },
        {
          name: "Vulnerability Research",
          icon: <Shield className="w-4 h-4 text-[#FF6666]" />,
        },
        {
          name: "Threat Analysis",
          icon: <Shield className="w-4 h-4 text-[#FF8888]" />,
        },
        {
          name: "Penetration Testing",
          icon: <Shield className="w-4 h-4 text-[#FFAAAA]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Tools & Technologies",
      color: "text-orange-400",
      skills: [
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        {
          name: "JIRA",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#0052CC]" />,
        },
        {
          name: "Trello",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#0079BF]" />,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and professional expertise
            in full-stack development, automation, and cyber security.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>

        {/* Interactive Globe Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-20">
          <div className="flex-1 space-y-6">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technology Stack
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans across multiple programming languages, frameworks, 
              and tools. I'm constantly learning and adapting to new technologies 
              to stay at the forefront of development trends.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Python", "JavaScript", "PHP", "HTML5", "CSS3", "SQL", "Git"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full text-sm font-medium border border-gray-600 hover:border-blue-500 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <IconCloudDemo />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .shimmer {
          position: relative;
          overflow: hidden;
        }
        .shimmer::after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: translateX(-100%);
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0.5) 60%,
            rgba(255, 255, 255, 0)
          );
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
