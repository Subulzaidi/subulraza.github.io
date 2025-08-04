"use client";

import { LazyMotion, domAnimation, m as motion } from "framer-motion";

import { services } from "../../sitedata/Services";

function MyServiceSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="service"
        className="relative bg-[#0f172a] text-white py-4 px-4"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="flex items-start">
              <h2 className="text-4xl md:text-5xl  font-light mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                My Services
              </h2>
            </span>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full opacity-30 z-0" />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-blue-500 opacity-20 blur-[120px] rounded-full z-0" />

            <div className="absolute top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-blue-500 opacity-20 blur-[120px] rounded-full z-0" />
            {/* Timeline Items */}
            <div className="space-y-8 relative z-10">
              {services.map((service, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isLeft ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-white w-5 h-5 rounded-full border-4 border-[#0f172a] z-20 shadow-md" />

                    {/* Card */}
                    <div
                      className={`bg-[#1e293b] p-6 rounded-xl shadow-lg border border-white/10 max-w-md w-full ${
                        isLeft ? "md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {service.icon}
                        <h3 className="text-xl font-semibold">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

export default MyServiceSection;
