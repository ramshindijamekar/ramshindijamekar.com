"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, FileCode, ImageIcon, FileText, Palette } from "lucide-react"

export function SetupGuide() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Portfolio Setup Guide</h2>

      <Tabs defaultValue="content" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="styling">Styling</TabsTrigger>
          <TabsTrigger value="deployment">Deployment</TabsTrigger>
        </TabsList>

        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Updating Your Content</CardTitle>
              <CardDescription>Follow these steps to personalize your portfolio content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Personal Information</h3>
                  <p className="text-muted-foreground">
                    Update your name, title, and bio in <code>components/hero-section.tsx</code> and{" "}
                    <code>components/about-section.tsx</code>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Skills & Expertise</h3>
                  <p className="text-muted-foreground">
                    Modify your skills in <code>components/skills-section.tsx</code> by updating the{" "}
                    <code>skillCategories</code> array
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Projects</h3>
                  <p className="text-muted-foreground">
                    Add your projects in <code>components/projects-section.tsx</code> by updating the{" "}
                    <code>projects</code> array
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Experience</h3>
                  <p className="text-muted-foreground">
                    Update your work history in <code>components/experience-section.tsx</code> by modifying the{" "}
                    <code>experiences</code> array
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Resume</h3>
                  <p className="text-muted-foreground">
                    Update your education, certifications, and publications in{" "}
                    <code>components/resume-section.tsx</code>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Contact Information</h3>
                  <p className="text-muted-foreground">
                    Update your email and social media links in <code>components/contact-section.tsx</code>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="images">
          <Card>
            <CardHeader>
              <CardTitle>Adding Your Images</CardTitle>
              <CardDescription>How to add and reference images in your portfolio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <ImageIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Project Images</h3>
                  <p className="text-muted-foreground">
                    1. Create a folder structure: <code>/public/images/projects/</code>
                    <br />
                    2. Add your project images to this folder
                    <br />
                    3. Update the image paths in <code>components/projects-section.tsx</code>
                    <br />
                    Example: <code>image: "/images/projects/project-name.jpg"</code>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Resume PDF</h3>
                  <p className="text-muted-foreground">
                    1. Add your resume PDF to the <code>/public</code> folder as <code>resume.pdf</code>
                    <br />
                    2. The download button in the Resume section is already configured to use this file
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ImageIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Profile Picture</h3>
                  <p className="text-muted-foreground">
                    If you want to add a profile picture:
                    <br />
                    1. Add your image to <code>/public/images/</code>
                    <br />
                    2. Update the About or Hero section to include your profile picture
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ImageIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Favicon</h3>
                  <p className="text-muted-foreground">
                    Replace <code>/public/favicon.ico</code> with your own favicon
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="styling">
          <Card>
            <CardHeader>
              <CardTitle>Customizing the Style</CardTitle>
              <CardDescription>How to modify the look and feel of your portfolio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Palette className="h-5 w-5 text-purple-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Color Scheme</h3>
                  <p className="text-muted-foreground">
                    Modify the color scheme in <code>app/globals.css</code> by updating the CSS variables in the{" "}
                    <code>:root</code> and <code>.dark</code> selectors
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileCode className="h-5 w-5 text-purple-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Fonts</h3>
                  <p className="text-muted-foreground">
                    Change the fonts in <code>app/layout.tsx</code> by updating the font imports and variables
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileCode className="h-5 w-5 text-purple-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Component Styling</h3>
                  <p className="text-muted-foreground">
                    Each component has its own styling using Tailwind CSS classes. Modify these classes to change the
                    appearance of specific sections.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileCode className="h-5 w-5 text-purple-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Animations</h3>
                  <p className="text-muted-foreground">
                    Adjust animation settings in each component by modifying the Framer Motion properties like{" "}
                    <code>duration</code>, <code>delay</code>, and animation variants.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deployment">
          <Card>
            <CardHeader>
              <CardTitle>Deploying Your Portfolio</CardTitle>
              <CardDescription>How to make your portfolio live on the web</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Vercel Deployment (Recommended)</h3>
                  <p className="text-muted-foreground">
                    1. Push your code to a GitHub repository
                    <br />
                    2. Go to{" "}
                    <a
                      href="https://vercel.com"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vercel
                    </a>{" "}
                    and sign in with GitHub
                    <br />
                    3. Click "Import Project" and select your repository
                    <br />
                    4. Keep the default settings and click "Deploy"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Netlify Deployment</h3>
                  <p className="text-muted-foreground">
                    1. Push your code to a GitHub repository
                    <br />
                    2. Go to{" "}
                    <a
                      href="https://netlify.com"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Netlify
                    </a>{" "}
                    and sign in
                    <br />
                    3. Click "New site from Git" and select your repository
                    <br />
                    4. Set the build command to <code>npm run build</code> and publish directory to <code>out</code>
                    <br />
                    5. Click "Deploy site"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Custom Domain</h3>
                  <p className="text-muted-foreground">
                    After deploying, you can add a custom domain in your deployment platform's settings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
