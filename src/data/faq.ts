export interface FAQ {
  id: string;
  question: string;
  shortAnswer: string;
  category: string;
  sections: {
    title: string;
    content: string;
    type?: "text" | "bullets" | "steps" | "code" | "warning" | "note";
  }[];
  images?: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  relatedQuestions?: string[];
  additionalNotes?: string[];
  lastUpdated?: string;
}

export const faqs: FAQ[] = [
  {
    id: "official-sdks",
    question: "Are there official wrappers for the API?",
    shortAnswer:
      "Yes, E-Z Host provides official API wrappers for JavaScript, .NET, Python, Golang and Rust. These wrappers make it easier to interact with our API using your preferred programming language.",
    category: "Development",
    sections: [
      {
        title: "Available API Wrappers",
        type: "bullets",
        content: `
[.NET](https://github.com/e-z-services/e-z-dotnet) - Available now via NuGet
[Golang](https://github.com/e-z-services/e-z-go) - Coming soon
[JavaScript/TypeScript](https://github.com/q4ow/e-zhost-js) - Available now via npm
[Python](https://github.com/e-z-services/e-z-py) - Available now via GitHub
[Rust](https://github.com/e-z-services/e-z-rs) - Coming soon`,
      },
      {
        title: "JavaScript API Wrapper Installation",
        type: "code",
        content: `
pnpm add e-zhost-js # Recommended

npm install e-zhost-js

yarn add e-zhost-js`,
      },
      {
        title: ".NET API Wrapper Installation",
        type: "code",
        content: `
dotnet add package EZDotNet.Core
dotnet add package EZDotNet.Services`,
      },
      {
        title: "Python API Wrapper Installation",
        type: "code",
        content: `
# Clone from GitHub repository
git clone https://github.com/e-z-services/e-z-py
# No installation needed - import directly from the cloned repository`,
      },
      {
        title: "Python Usage Example",
        type: "code",
        content: `
from ez_api import EZ_API

api = EZ_API("YOUR_API_KEY")

# Upload a file
upload = api.upload("path/to/file.png")
print("Uploaded Image:", upload.image_url)

# Shorten a URL
shorten = api.shorten_url("https://example.com")
print("Shortened URL:", shorten.short_url)

# Create a paste
paste = api.paste(
    title="Example Paste",
    description="A simple example",
    content="print('Hello, World!')",
    language="python"
)
print("Paste URL:", paste.paste_url)`,
      },
      {
        title: "JS Usage Example",
        type: "code",
        content: `
import { EZHostSDK } from 'e-zhost-js';

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
        title: "API Wrapper Benefits",
        type: "text",
        content: `
The official API wrappers provide a more convenient way to interact with the E-Z Host API compared to making raw HTTP requests. They handle authentication, request formatting, error handling, and provide a more intuitive interface for developers.`,
      },
    ],
    relatedQuestions: ["api-key", "authentication"],
    additionalNotes: [
      "The Python wrapper is currently only available via GitHub, not PyPI",
      ".NET wrapper only supports .NET Core 8 & 9",
      "API documentation is available too for those who prefer to use the REST API directly"
    ],
    lastUpdated: "2025-05-05",
  },
];

export function getFAQ(id: string): FAQ | undefined {
  return faqs.find((faq) => faq.id === id);
}

export function getRelatedFAQs(id: string): FAQ[] {
  const faq = getFAQ(id);
  if (!faq || !faq.relatedQuestions) return [];
  return faqs.filter((f) => faq.relatedQuestions?.includes(f.id)) || [];
}
