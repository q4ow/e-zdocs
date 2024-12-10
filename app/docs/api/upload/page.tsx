"use client";

import { motion } from "framer-motion";
import { CodeBlock } from "@/components/api/code-block";
import { Key } from "lucide-react";
import { useState } from "react";

export default function UploadApiDocs() {
  const [selectedLanguage, setSelectedLanguage] = useState("bash");

  const renderCodeExample = () => {
    switch (selectedLanguage) {
      case "python":
        return (
          <CodeBlock
            language="python"
            code={`import requests\n\nurl = 'https://api.e-z.host/files'\nheaders = {'key': 'YOUR_API_KEY'}\nfiles = {'file': open('/path/to/file', 'rb')}\nresponse = requests.post(url, headers=headers, files=files)\nprint(response.json())`}
          />
        );
      case "javascript":
        return (
          <CodeBlock
            language="javascript"
            code={`fetch('https://api.e-z.host/files', {\n  method: 'POST',\n  headers: {\n    'key': 'YOUR_API_KEY'\n  },\n  body: new FormData().append('file', fileInput.files[0])\n})\n.then(response => response.json())\n.then(data => console.log(data));`}
          />
        );
      case "powershell":
        return (
          <CodeBlock
            language="powershell"
            code={`$url = 'https://api.e-z.host/files'\n$headers = @{ 'key' = 'YOUR_API_KEY' }\n$file = Get-Item '/path/to/file'\nInvoke-RestMethod -Uri $url -Method Post -Headers $headers -InFile $file`}
          />
        );
      default:
        return (
          <CodeBlock
            language="bash"
            code={`curl -X POST 'https://api.e-z.host/files' \\\n  -H 'key: YOUR_API_KEY' \\\n  -F 'file=@/path/to/file'`}
          />
        );
    }
  };

  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Upload API Documentation
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn how to upload files using our API.
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Key className="w-6 h-6 text-purple-400" />
            Endpoint: /files/
          </h2>
          <div className="mt-4" />
          <span className="bg-blue-500/20 text-blue-400 text-lg font-medium px-2 py-1 rounded-md">
            POST
          </span>
          <span className="text-lg font-medium text-gray-300 pl-4">
            Upload files to the E-Z.host API
          </span>

          <h3 className="text-xl font-semibold">Valid File MIME Types</h3>
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Type
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  Image
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  Video
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  Audio
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  Application
                </td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-semibold">Headers</h3>
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  Content-Type
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  multipart/form-data
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  The type of the request body.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  key
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  Your key here
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  Your API key for authentication.
                </td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-semibold">Body</h3>
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  file
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  file (multipart)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  The file to upload
                </td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-semibold">Example Request</h3>
          <p className="text-gray-300">Here’s how you can upload a file:</p>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-800 border border-gray-700 text-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="bash">Bash</option>
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="powershell">PowerShell</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M5.5 8l4.5 4.5L15.5 8z" />
              </svg>
            </div>
          </div>
          {renderCodeExample()}

          <h3 className="text-xl font-semibold">Response</h3>
          <p className="text-gray-300">Successful response example:</p>
          <CodeBlock
            language="json"
            code={`{
  "success": true,
  "message": "File Uploaded",
  "imageUrl": "https://i.e-z.host/filename",
  "rawUrl": "https://r2.e-z.host/uuid/filename",
  "deletionUrl": "https://api.e-z.host/delete?key=random-deletion-key"
}`}
          />

          <h3 className="text-xl font-semibold">File Size Limits</h3>
          <div className="flex items-center space-x-4">
            <span className="bg-blue-500/20 text-blue-400 text-lg font-medium px-2 py-1 rounded-md">
              Standard: 25MB
            </span>
            <span className="bg-blue-500/20 text-blue-400 text-lg font-medium px-2 py-1 rounded-md">
              Premium: 100MB
            </span>
          </div>

          <h3 className="text-xl font-semibold">Error Handling</h3>
          <p className="text-gray-300">Possible error responses include:</p>
          <ul className="list-disc pl-5 text-gray-300">
            <li>
              <strong>400 Bad Request</strong>: Invalid file type.
            </li>
            <li>
              <strong>401 Unauthorized</strong>: Invalid API key.
            </li>
            <li>
              <strong>403 Forbidden</strong>: File size limit exceeded.
            </li>
            <li>
              <strong>422 Unprocessable Entity</strong>: Validation error due to
              missing or invalid parameters.
            </li>
            <li>
              <strong>429 Too Many Requests</strong>: Rate limit exceeded.
            </li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
}
