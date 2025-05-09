"use client";

import { motion } from "framer-motion";
import { CodeBlock } from "@/components/api/code-block";
import Link from "next/link";
import {
  FaJs,
  FaGithub,
  FaDownload,
  FaCode,
  FaLaptopCode,
  FaRust,
  FaPython,
  FaCheckCircle,
  FaInfoCircle,
  FaArrowRight,
} from "react-icons/fa";
import { DiGo } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";

const sdks = [
  {
    language: "JavaScript/TypeScript",
    icon: <FaJs className="text-yellow-400" />,
    description: "Official SDK for Node.js and browser environments",
    status: "Available",
    statusColor: "text-green-400",
    statusBg: "bg-green-500/20",
    statusIcon: <FaCheckCircle />,
    repository: "https://github.com/q4ow/e-zhost-js",
    packageManager: "npm/yarn/pnpm",
    installCommand: `pnpm add e-zhost-js # Recommended

npm install e-zhost-js

yarn add e-zhost-js`,
    usageExample: `import { EZHostSDK } from 'e-zhost-js';

const client = new EZHostSDK('YOUR_API_KEY');

async function uploadFile(filePath) {
  try {
    const result = await client.upload(filePath);
    console.log('File uploaded successfully:', result.url);
  } catch (error) {
    console.error('Upload failed:', error);
  }
}`,
  },
  {
    language: ".NET",
    icon: <TbBrandCSharp className="text-purple-400" />,
    description: "Official SDK for .NET Core 8 & 9 applications",
    status: "Available",
    statusColor: "text-green-400",
    statusBg: "bg-green-500/20",
    statusIcon: <FaCheckCircle />,
    repository: "https://github.com/e-z-services/e-z-dotnet",
    packageManager: "NuGet",
    installCommand: `dotnet add package EZDotNet.Core
// ASP.Net Extension
dotnet add package EZDotNet.Services`,
    usageExample: `var client = new EZServicesClient(new EZServicesOptions { ApiKey = "your-api-key" });
// Upload a file 
var fileResponse = await client.Files.UploadFileFromPathAsync("path/to/file.png");
// Create short URL 
var urlResponse = await client.Shortener.CreateShortUrlAsync("https://example.com");
// Create paste 
var pasteResponse = await client.Paste.CreatePasteAsync(new PasteCreateRequest { Title = "Title!", Description = "Description!", Text = "Hello World", Language = PasteLanguage.CSharp });
    `,
  },
  {
    language: "Python",
    icon: <FaPython className="text-blue-400" />,
    description: "Official Python SDK for E-Z Host API",
    status: "Available",
    statusColor: "text-green-400",
    statusBg: "bg-green-500/20",
    statusIcon: <FaCheckCircle />,
    repository: "https://github.com/e-z-services/e-z-py",
    packageManager: "GitHub",
    installCommand: `# Clone from GitHub repository
git clone https://github.com/e-z-services/e-z-py
# No installation needed - import directly from the cloned repository`,
    usageExample: `from ezhost import EZHostClient

# Initialize the client
client = EZHostClient(api_key="YOUR_API_KEY")

# Upload a file
try:
    result = client.upload_file("path/to/file.jpg")
    print(f"Upload successful: {result.url}")
except EZHostError as e:
    print(f"Upload failed: {e}")`,
  },
  /*
  {
    language: "Golang",
    icon: <DiGo className="text-cyan-400" />,
    description: "Official Go SDK for E-Z Host API",
    status: "Coming soon",
    statusColor: "text-yellow-400",
    statusBg: "bg-yellow-500/20",
    statusIcon: <IoMdTime />,
    repository: "https://github.com/e-z-services/e-z-go",
    packageManager: "go get",
    installCommand: `# Not yet available
# Will be available via:
# go get github.com/e-z-services/e-z-go`,
    usageExample: `package main

import (
    "fmt"
    "github.com/e-z-services/e-z-go/ezhost"
)

func main() {
    // Initialize the client
    client := ezhost.NewClient("YOUR_API_KEY")

    // Upload a file
    result, err := client.UploadFile("path/to/file.png")
    if err != nil {
        fmt.Printf("Upload error: %v\\n", err)
        return
    }

    fmt.Printf("Upload successful: %s\\n", result.URL)
}`,
  }, */
  /*
  {
    language: "Rust",
    icon: <FaRust className="text-orange-400" />,
    description: "Official Rust SDK for E-Z Host API",
    status: "Coming soon",
    statusColor: "text-yellow-400",
    statusBg: "bg-yellow-500/20",
    statusIcon: <IoMdTime />,
    repository: "https://github.com/e-z-services/e-z-rs",
    packageManager: "cargo",
    installCommand: `# Not yet available
# Will be available via:
# cargo add ezhost`,
    usageExample: `use ezhost::EZHostClient;
use std::path::Path;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Initialize the client
    let client = EZHostClient::new("YOUR_API_KEY");

    // Upload a file
    let path = Path::new("path/to/file.jpg");
    let result = client.upload_file(path).await?;

    println!("Upload successful: {}", result.url);

    Ok(())
}`,
},*/
];

export default function SDKDocs() {
  return (
    <div className="min-h-screen text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-bold text-primary glow-text-blue">
            Official SDKs & API Wrappers
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Integrate with E-Z Host API using our language-specific SDKs
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaLaptopCode className="w-6 h-6 text-blue-400 glow-icon-blue" />
            Available SDK Libraries
          </h2>
          <p className="text-gray-400">
            Our official SDKs make it simple to interact with E-Z Host services.
            Each SDK handles authentication, error management, and provides an
            intuitive interface tailored to your preferred programming language.
          </p>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          {sdks.map((sdk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`rounded-lg p-4 border ${
                sdk.status === "Available"
                  ? "border-green-500/20 bg-green-900/10"
                  : "border-yellow-500/20 bg-yellow-900/10"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <Link
                href={`#${sdk.language.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="flex flex-col items-center p-4 space-y-2 cursor-pointer"
              >
                <div className="text-3xl">{sdk.icon}</div>
                <h3 className="text-lg font-semibold text-white text-center">
                  {sdk.language}
                </h3>
                <div
                  className={`flex items-center gap-1 px-2 py-1 rounded text-xs ${sdk.statusBg} ${sdk.statusColor}`}
                >
                  {sdk.statusIcon}
                  <span>{sdk.status}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-12"
        >
          {sdks.map((sdk, index) => (
            <motion.div
              key={index}
              id={sdk.language.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`bg-gray-900/50 border ${
                sdk.status === "Available"
                  ? "border-green-500/20"
                  : "border-yellow-500/20"
              } rounded-xl p-6 space-y-6 scroll-mt-24`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{sdk.icon}</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {sdk.language}
                    </h3>
                    <p className="text-gray-400">{sdk.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs ${sdk.statusBg} ${sdk.statusColor}`}
                  >
                    {sdk.statusIcon}
                    <span className="font-medium">{sdk.status}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold flex items-center gap-2">
                    <FaDownload className="text-blue-400" />
                    Installation
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <span>Via {sdk.packageManager}</span>
                  </div>
                  <CodeBlock language="bash" code={sdk.installCommand} />
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold flex items-center gap-2">
                    <FaCode className="text-blue-400" />
                    Basic Usage
                  </h4>
                  <CodeBlock
                    language={
                      sdk.language === "JavaScript/TypeScript"
                        ? "javascript"
                        : sdk.language === ".NET"
                          ? "csharp"
                          : sdk.language === "Python"
                            ? "python"
                            : sdk.language === "Golang"
                              ? "go"
                              : "rust"
                    }
                    code={sdk.usageExample}
                  />
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4"
              >
                <a
                  href={sdk.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600/20 text-blue-400 hover:bg-blue-600/40 transition-colors border border-blue-500/20"
                >
                  <FaGithub />
                  View on GitHub
                  <FaArrowRight />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20"
        >
          <div className="flex items-start gap-4">
            <FaInfoCircle className="w-6 h-6 text-blue-400 shrink-0 glow-icon-blue" />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Additional Resources
              </h3>
              <p className="text-gray-400">
                Get more help with our SDKs or contribute to their development:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="text-gray-300 flex items-start gap-2">
                  <FaArrowRight className="text-blue-400 mt-1.5 flex-shrink-0" />
                  <span>
                    Check our{" "}
                    <Link
                      href="/docs/api"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      REST API documentation
                    </Link>{" "}
                    if you prefer direct API access
                  </span>
                </li>
                <li className="text-gray-300 flex items-start gap-2">
                  <FaArrowRight className="text-blue-400 mt-1.5 flex-shrink-0" />
                  <span>
                    Report bugs or request features through our{" "}
                    <a
                      href="https://github.com/e-z-services"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub repositories
                    </a>
                  </span>
                </li>
                <li className="text-gray-300 flex items-start gap-2">
                  <FaArrowRight className="text-blue-400 mt-1.5 flex-shrink-0" />
                  <span>
                    Join our{" "}
                    <a
                      href="https://discord.gg/ez"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Discord community
                    </a>{" "}
                    for live support and updates
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
