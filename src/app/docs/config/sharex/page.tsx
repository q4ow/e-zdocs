"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import { configTypes } from "@/data/config";

export default function ShareXConfig() {
  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <h1 className="text-6xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ShareX Configuration
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Learn how to use custom ShareX config files to streamline your
            uploading experience on our platform
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 gap-12"
        >
          {configTypes.map((config, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 overflow-hidden relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`bg-${config.icon.props.className.split(" ")[3]}/10 p-3 rounded-lg`}
                    >
                      {config.icon}
                    </div>
                    <h2 className="text-2xl font-semibold">{config.title}</h2>
                  </div>
                  <p className="text-gray-400">{config.description}</p>
                  <ul className="grid grid-cols-1 gap-3">
                    {config.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div
                          className={`w-1.5 h-1.5 bg-${config.icon.props.className.split(" ")[3]} rounded-full`}
                        />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={config.downloadLink}
                    className={`inline-flex items-center px-4 py-2 rounded-md bg-${config.icon.props.className.split(" ")[3]}/20 text-${config.icon.props.className.split(" ")[3]} hover:bg-${config.icon.props.className.split(" ")[3]}/30 transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Config
                  </motion.a>
                </div>
                <motion.div
                  className="relative aspect-video rounded-lg overflow-hidden border border-gray-800"
                  whileHover={{
                    scale: 1.05,
                    zIndex: 10,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Image
                    src={config.screenshot}
                    alt={`${config.title} configuration`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-gray-900/50 pointer-events-none" />
            </motion.section>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">
            How to Use ShareX Configs
          </h3>
          <ol className="text-left text-gray-300 space-y-4 max-w-2xl mx-auto">
            <li>
              1. Find the desired configuration file by clicking the
              &quot;Download Config&quot; button above.
            </li>
            <li>
              2. Open ShareX and go to &quot;Destinations&quot; &gt;
              &quot;Custom uploader settings&quot;.
            </li>
            <li>
              3. Click on &quot;Import&quot; &gt; &quot;From file&quot; and
              select the downloaded .sxcu file.
            </li>
            <li>
              4. Set the imported uploader as your default destination for the
              given upload type.
            </li>
          </ol>
          {/* <motion.a
            href="/docs/sharex/advanced-config"
            className="inline-flex items-center mt-6 px-6 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Advanced Configuration
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.a> */}
        </motion.div>
      </div>
    </div>
  );
}
