import { Code, FileUp, Link2 } from "lucide-react";

export const endpoints = [
  {
    method: "POST",
    path: "/files/",
    description: "Upload files to the E-Z.host API",
    icon: <FileUp className="w-5 h-5" />,
    link: "/docs/api/upload",
    authentication: true,
    examples: {
      curl: `curl -X POST 'https://api.e-z.host/files' \\
  -H 'key: YOUR_API_KEY' \\
  -F 'file=@/path/to/file'`,
      response: `{
  "success": true,
  "message": "File Uploaded",
  "imageUrl": "https://i.e-z.host/file.jpg",
  "rawUrl": "https://r2.e-z.host/uuid/file.jpg",
  "deletionUrl": "https://api.e-z.host/files/delete?key=random-deletion-key"
}`,
    },
  },
  {
    method: "POST",
    path: "/shortener/",
    description: "Shorten links with the E-Z.host API",
    icon: <Link2 className="w-5 h-5" />,
    link: "/docs/api/shortener",
    authentication: true,
    examples: {
      curl: `curl -X POST https://api.e-z.host/shortener \\
  -H "Content-Type: application/json" \\
  -H "key: YOUR_API_KEY" \\
  -d '{"url": "https://example.com"}'`,
      response: `{
  "success": true,
  "message": "URL Shortened",
  "shortenedUrl": "https://i.e-z.gg/s/xyz123",
  "deletionUrl": "https://i.e-z.gg/shortener/delete?key=random-deletion-key"
}`,
    },
  },
  {
    method: "POST",
    path: "/paste/",
    description: "Create pastes with the E-Z.host API",
    icon: <Code className="w-5 h-5" />,
    link: "/docs/api/paste",
    authentication: true,
    examples: {
      curl: `curl -X POST https://api.e-z.host/paste \\
  -H 'key: YOUR_API_KEY' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "text":"contents of the paste",
    "title":"title of the paste",
    "description":"description for the paste",
    "language":"any supported language"
  }'`,
      response: `{
  "success": true,
  "message": "Paste Created",
  "pasteUrl": "https://i.e-z.gg/p/xyz123",
  "rawUrl": "https://i.e-z.gg/p/raw/xyz123",
  "deletionUrl": "https://api.e-z.host/paste/delete?key=random-deletion-key"
}`,
    },
  },
];
