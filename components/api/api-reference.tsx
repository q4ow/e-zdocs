import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileCode, FileImage, FileAudio, FileVideo } from 'lucide-react'

export default function ApiReference() {
  const [activeTab, setActiveTab] = useState("overview")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Upload API Documentation</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Table of Contents</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li><Button variant="link" onClick={() => scrollToSection('overview')}>Overview</Button></li>
            <li><Button variant="link" onClick={() => scrollToSection('endpoint')}>Endpoint Details</Button></li>
            <li><Button variant="link" onClick={() => scrollToSection('file-types')}>Valid File Types</Button></li>
            <li><Button variant="link" onClick={() => scrollToSection('request')}>Request Details</Button></li>
            <li><Button variant="link" onClick={() => scrollToSection('response')}>Response</Button></li>
            <li><Button variant="link" onClick={() => scrollToSection('status-codes')}>Status Codes</Button></li>
          </ul>
        </CardContent>
      </Card>

      <section id="overview" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p>The Upload API allows you to upload files to E-Z. Uploaded files can be accessed via the URL provided in the API response or through your Gallery within the dashboard.</p>
      </section>

      <section id="endpoint" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Endpoint Details</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg font-semibold mb-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded mr-2">POST</span>
              <code>/files</code>
            </p>
            <p>Upload a file to E-Z</p>
          </CardContent>
        </Card>
      </section>

      <section id="file-types" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Valid File Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <FileImage className="w-8 h-8 mb-2" />
              <h3 className="font-semibold">Image</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <FileVideo className="w-8 h-8 mb-2" />
              <h3 className="font-semibold">Video</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <FileAudio className="w-8 h-8 mb-2" />
              <h3 className="font-semibold">Audio</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <FileCode className="w-8 h-8 mb-2" />
              <h3 className="font-semibold">Application</h3>
            </CardContent>
          </Card>
        </div>
        <p className="mt-4">All files must be &lt;100mb in size. For text or source code, we recommend using a paste, which supports syntax highlighting for major programming and markup languages.</p>
      </section>

      <section id="request" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Request Details</h2>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="headers">Headers</TabsTrigger>
            <TabsTrigger value="body">Body</TabsTrigger>
            <TabsTrigger value="example">Example Request</TabsTrigger>
          </TabsList>
          <TabsContent value="headers">
            <Card>
              <CardContent className="pt-6">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left">Name</th>
                      <th className="text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Content-Type</td>
                      <td><code>multipart/form-data</code></td>
                    </tr>
                    <tr>
                      <td>key</td>
                      <td><code>Your key here</code></td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="body">
            <Card>
              <CardContent className="pt-6">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left">Name</th>
                      <th className="text-left">Type</th>
                      <th className="text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>file</code></td>
                      <td><code>file</code> (multipart)</td>
                      <td>The file to upload</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="example">
            <Card>
              <CardContent className="pt-6">
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code>
                    {`curl -X POST 'https://api.e-z.host/files' \\
     -H 'key: YOUR_API_KEY' \\
     -F 'file=@/path/to/file'`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section id="response" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Response</h2>
        <Card>
          <CardContent className="pt-6">
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>
                {`{
  "success": true,
  "message": "File Uploaded",
  "imageUrl": "https://i.e-z.host/file.jpg",
  "rawUrl": "https://r2.e-z.host/uuid/file.jpg",
  "deletionUrl": "https://api.e-z.host/delete?key=random-deletion-key"
}`}
              </code>
            </pre>
          </CardContent>
        </Card>
      </section>

      <section id="status-codes" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Status Codes</h2>
        <p>A valid request will result in a response status code of <strong>200</strong>. For other status codes and their meanings, please refer to the <a href="/upload/responses" className="text-blue-500 hover:underline">Responses</a> page.</p>
      </section>
    </div>
  )
}