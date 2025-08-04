"use client";

import { useState, useEffect } from "react";
import { categories, skills } from "../../sitedata/MySkills";

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="skill"
      className="relative py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden"
    >
      {/* Background Pulse Dots */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random()}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Cursor Glow */}
      <div
        className="absolute z-10 w-96 h-96 pointer-events-none bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Top & Bottom Glow Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="flex justify-start items-start">
            <h2 className="text-4xl md:text-5xl  font-light mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Skills
            </h2>
          </span>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg shadow-pink-500/20"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid Centered */}
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={`${skill.label}-${index}`}
                className="group relative flex flex-col items-center cursor-default transition-transform duration-300"
                  style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
                }}
              >
                {/* Glow Ring */}
                <div
                  className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{
                    background: `radial-gradient(circle, ${skill.color}40, transparent)`,
                  }}
                />

                {/* Icon Container */}
                <div
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-2"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`,
                    boxShadow: `0 8px 32px ${skill.color}30`,
                  }}
                >
                  <Icon size={32} style={{ color: skill.color }} />
                  {/* Border on Hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(45deg, ${skill.color}, transparent, ${skill.color})`,
                      padding: "2px",
                    }}
                  ></div>
                </div>

                {/* Label */}
                <span className="mt-3 text-sm font-medium text-gray-300 group-hover:text-white transition duration-300">
                  {skill.label}
                </span>

                {/* Category Badge */}
                <span
                  className="mt-1 px-2 py-1 text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundColor: `${skill.color}20`,
                    color: skill.color,
                  }}
                >
                  {skill.category}
                </span>
              </div>
            );
          })}
        </div>

        {/* Skill Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: `${skills.length}+`, label: "Technologies" },
            { number: `${categories.length}`, label: "Categories" },
            { number: "3+", label: "Years Experience" },
            { number: "∞", label: "Learning Daily" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-blue-600 text-transparent bg-clip-text mb-1">
                {stat.number}
              </h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
