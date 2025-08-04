"use client";

import React, { useState } from "react";
import { FaCloud, FaCar, FaChevronRight, FaShoppingCart } from "react-icons/fa";

const projects = [
  {
    title: "Cloudnooe",
    subtitle: "AI-Powered Cloud Infrastructure Designer",
    description:
      "An innovative cloud infrastructure design tool that leverages artificial intelligence to help developers and DevOps engineers create, visualize, and optimize cloud architectures.",
    longDescription:
      "Cloudnooe revolutionizes cloud infrastructure design by providing an intuitive drag-and-drop interface powered by AI recommendations. The platform automatically suggests optimal configurations, identifies potential bottlenecks, and provides cost estimates in real-time. Built with modern web technologies, it supports multiple cloud providers and offers seamless integration with existing workflows.",
    tags: ["Next.js", "AWS", "dnd-kit", "AI", "TypeScript", "Tailwind CSS"],
    icon: FaCloud,
    color: "from-blue-400 to-cyan-500",
    features: [
      "AI-powered architecture recommendations",
      "Real-time cost optimization",
      "Multi-cloud provider support",
      "Drag-and-drop interface",
      "Export to Terraform/CloudFormation",
    ],

    type: "Web Application",
  },
  {
    title: "POS System",
    subtitle: "Modern Point-of-Sale Solution",
    description:
      "A comprehensive point-of-sale system designed for modern retail environments with advanced role-based access control and real-time analytics.",
    longDescription:
      "This modern POS system transforms retail operations with its intuitive interface and powerful backend. Features include inventory management, sales analytics, customer relationship management, and multi-location support. The system is built with scalability in mind, supporting everything from small boutiques to large retail chains.",
    tags: ["Firebase", "Flutter", "Tailwind", "Dart", "Cloud Functions"],
    icon: FaShoppingCart,
    color: "from-green-400 to-emerald-500",
    features: [
      "Role-based access control",
      "Real-time inventory tracking",
      "Sales analytics dashboard",
      "Customer management system",
      "Multi-location support",
    ],

    type: "Mobile & Web App",
  },
  {
    title: "Rent-a-Car Platform",
    subtitle: "Full-Stack Car Rental Solution",
    description:
      "A complete car rental platform that connects car owners with renters, featuring advanced booking systems, payment processing, and fleet management.",
    longDescription:
      "This comprehensive car rental platform provides a seamless experience for both car owners and renters. The system includes advanced search and filtering, secure payment processing, GPS tracking, insurance management, and detailed reporting. Built with scalability and security as top priorities, it handles everything from individual car rentals to enterprise fleet management.",
    tags: ["React", "Node.js", "MySQL", "Express", "Stripe", "JWT"],
    icon: FaCar,
    color: "from-purple-400 to-pink-500",
    features: [
      "Advanced booking system",
      "Secure payment processing",
      "GPS tracking integration",
      "Insurance management",
      "Fleet analytics dashboard",
    ],

    type: "Full-Stack Platform",
  },
];

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="portfolio"
      className="relative py-20 bg-[#0f172a] text-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my latest work in web development, mobile applications, and
            cloud solutions
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-blue-500 opacity-20 blur-[120px] rounded-full z-0" />

          <div className="absolute top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-blue-500 opacity-20 blur-[120px] rounded-full z-0" />
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="group relative block overflow-hidden rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 bg-[#1e293b]/50 backdrop-blur-sm hover:scale-105 cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Icon/Visual */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center relative overflow-hidden`}
                >
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white/30 rounded-full animate-pulse"></div>
                    <div
                      className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white/30 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 left-1/2 w-8 h-8 border-2 border-white/30 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
                  </div>

                  {/* Floating Geometric Shapes */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="absolute top-6 right-6 w-3 h-3 bg-white/20 rotate-45 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="absolute bottom-8 left-8 w-4 h-4 bg-white/15 rotate-45 animate-bounce"
                      style={{ animationDelay: "0.8s" }}
                    ></div>
                    <div className="absolute top-12 left-12 w-2 h-2 bg-white/25 rounded-full animate-pulse"></div>
                  </div>

                  {/* Main Icon Container */}
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-colors duration-300"></div>
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:border-white/40 transition-all duration-300">
                      <IconComponent className="text-4xl text-white drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  <div className="absolute bottom-4 left-4 text-white/70 text-sm font-medium backdrop-blur-sm bg-white/10 px-3 py-1 rounded-full">
                    {project.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-purple-300 text-sm font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/90 border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                    <span>View Details</span>
                    <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#1e293b] rounded-2xl border border-white/10">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 cursor-pointer bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              ×
            </button>

            {/* Modal Header */}
            <div
              className={`p-8 bg-gradient-to-br ${selectedProject.color} relative overflow-hidden`}
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-8 left-8 w-20 h-20 border-2 border-white/30 rounded-full animate-pulse"></div>
                <div
                  className="absolute bottom-8 right-8 w-16 h-16 border-2 border-white/30 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute top-1/2 right-1/4 w-12 h-12 border-2 border-white/30 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute top-12 right-12 w-4 h-4 bg-white/20 rotate-45 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="absolute bottom-12 left-12 w-6 h-6 bg-white/15 rotate-45 animate-bounce"
                  style={{ animationDelay: "0.8s" }}
                ></div>
                <div className="absolute top-16 left-1/4 w-3 h-3 bg-white/25 rounded-full animate-pulse"></div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-xl"></div>
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <selectedProject.icon className="text-3xl text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                      {selectedProject.title}
                    </h3>
                    <p className="text-white/80 drop-shadow-sm">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full backdrop-blur-sm ${
                      selectedProject.status === "Live"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : selectedProject.status === "In Development"
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}
                  >
                    {selectedProject.status}
                  </span>
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                    {selectedProject.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Description */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    About This Project
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-4"></div>
                </div>

                {/* Features & Technologies */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {selectedProject.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <FaChevronRight className="text-purple-400 text-xs" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xl font-semibold text-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-white/10 text-white/90 border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
