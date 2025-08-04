"use client";

import React from "react";
import Link from "next/link";
import { m as motion, LazyMotion, domAnimation } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useResumeDownload } from "../../utils/hooks/resume";
import Button from "../../components/Button";
import Image from "next/image";

const LandingPage = () => {
  const { isDownloading, handleDownload } = useResumeDownload();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <LazyMotion features={domAnimation}>
      <main className="relative overflow-hidden min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="show"
            variants={container}
          >
            {/* Left Column */}
            <div className="flex flex-col items-start">
              <motion.div variants={item}>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                    FRONTEND
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                    DEVELOPER
                  </span>
                </h1>
              </motion.div>

              <motion.p
                className="text-lg mb-6 text-gray-300 max-w-lg leading-relaxed"
                variants={item}
              >
                I’m{" "}
                <span className="text-blue-400 font-medium">Subul Raza</span>, a
                frontend developer from Karachi 🇵🇰 with{" "}
                <span className="text-purple-400 font-medium">2+ years</span> of
                experience. I build clean, scalable interfaces using modern
                tools like React, Next.js, and Tailwind CSS. Currently exploring
                AI and cloud infrastructure –{" "}
                <strong className="font-bold">CloudNOOE</strong>.
              </motion.p>

              <motion.div className="flex space-x-4 mb-6" variants={item}>
                <Link href="#portfolio">
                  <Button>VIEW MY WORK</Button>
                </Link>
                <Button
                  onClick={() => handleDownload("pdf")}
                  disabled={isDownloading}
                >
                  {isDownloading ? "DOWNLOADING..." : "DOWNLOAD RESUME"}
                </Button>
              </motion.div>

              <motion.div className="flex space-x-4" variants={item}>
                <Link
                  href="https://github.com/subulraza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiGithub size={24} />
                </Link>
                <Link
                  href="https://linkedin.com/in/subulraza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FiLinkedin size={24} />
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Visuals */}
            <motion.div className="relative" variants={item}>
              {/* Background code block */}
              <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="flex justify-center items-center h-auto text-blue text-2xl font-mono text-center leading-loose">
                  <div>
                    &lt;html&gt;
                    <br />
                    $ npm install creativity
                    <br />
                    import &#123; React, Firebase &#125;
                    <br />
                    const dev = new FrontendEngineer(&quot;Subul&quot;);
                    <br />
                    dev.build(UI).with(Tailwind, Next.js)
                    <br />
                    console.log(&quot;🚀 Let&apos;s build!&quot;)
                    <br />
                    &lt;/html&gt;
                  </div>
                </div>
              </div>

              {/* Blue Gradient Ball */}
              <motion.div
                className="absolute top-0 bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-700 via-cyan-500 to-blue-900 opacity-30 blur-[100px] z-0"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Pink Gradient Ball */}
              <motion.div
                className="absolute bottom-0 top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-tr from-pink-500 via-purple-400 to-pink-600 opacity-30 blur-[100px] z-0"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              {/* Image */}
              <div className="relative z-10 overflow-hidden">
                <Image
                  src="/images/laptop.png"
                  alt="Subul Raza"
                  width={500}
                  height={700}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Blobs */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl -z-10" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-pink-500/10 blur-3xl -z-10" />
      </main>
    </LazyMotion>
  );
};

export default LandingPage;
