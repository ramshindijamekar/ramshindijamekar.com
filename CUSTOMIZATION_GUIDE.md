# 🎨 Portfolio Customization Guide

This guide will help you customize your AI/ML portfolio website step by step. Follow the sections below to make it truly yours!

## 📋 Table of Contents
1. [Personal Information](#personal-information)
2. [Projects](#projects)
3. [Experience](#experience)
4. [Skills](#skills)
5. [Education & Resume](#education--resume)
6. [Contact Information](#contact-information)
7. [Images & Assets](#images--assets)
8. [Deployment](#deployment)

---

## 🔥 Personal Information

### Hero Section (`components/hero-section.tsx`)
**What to update:**
- Line 47: Your name in the `<h1>` tag
- Line 50: Your title/role description
- Line 58-61: Your bio/description paragraph

**Example:**
\`\`\`tsx
<h1>JOHN DOE</h1>
<h2>Full Stack Developer | React Specialist</h2>
<p>Creating beautiful and functional web applications...</p>
\`\`\`

### About Section (`components/about-section.tsx`)
**What to update:**
- Lines 40-60: Replace the three paragraphs with your own story
- Lines 65-85: Update the three expertise cards with your specializations

**Tips:**
- Keep paragraphs concise but informative
- Focus on your unique value proposition
- Mention your passion and goals

---

## 🚀 Projects

### Projects Section (`components/projects-section.tsx`)
**What to update:**
- Lines 12-80: Replace the entire `projects` array with your own projects

**For each project, update:**
\`\`\`tsx
{
  title: "Your Project Name",
  description: "Brief description of what it does...",
  image: "/images/projects/your-project.jpg", // Add image to /public/images/projects/
  tags: ["React", "Node.js", "MongoDB"], // Your tech stack
  github: "https://github.com/yourusername/project", // Your GitHub repo
  demo: "https://your-demo-url.com", // Live demo URL
}
\`\`\`

**Image Requirements:**
- Size: 600x400px recommended
- Format: JPG, PNG, or WebP
- Location: `/public/images/projects/`

---

## 💼 Experience

### Experience Section (`components/experience-section.tsx`)
**What to update:**
- Lines 10-50: Replace the entire `experiences` array

**For each job, update:**
\`\`\`tsx
{
  title: "Your Job Title",
  company: "Company Name",
  period: "Start Date - End Date",
  description: "What you did and achieved in this role...",
  technologies: ["Tech1", "Tech2", "Tech3"], // Technologies you used
}
\`\`\`

**Tips:**
- Use action verbs (Led, Developed, Implemented)
- Include quantifiable achievements
- List relevant technologies

---

## 🛠️ Skills

### Skills Section (`components/skills-section.tsx`)
**What to update:**
- Lines 9-35: Update the `skillCategories` array

**Add/modify categories:**
\`\`\`tsx
{
  title: "Your Skill Category",
  skills: ["Skill1", "Skill2", "Skill3", "Skill4"],
}
\`\`\`

**Common categories:**
- Programming Languages
- Frameworks & Libraries
- Databases
- Cloud & DevOps
- Tools & Software

---

## 🎓 Education & Resume

### Resume Section (`components/resume-section.tsx`)
**Education (Lines 15-35):**
\`\`\`tsx
{
  degree: "Your Degree",
  institution: "University Name",
  period: "Start - End",
  description: "What you studied and achieved...",
}
\`\`\`

**Certifications (Lines 40-60):**
\`\`\`tsx
{
  title: "Certification Name",
  issuer: "Issuing Organization",
  date: "Year",
  description: "What it covers...",
}
\`\`\`

**Publications (Lines 65-85):**
\`\`\`tsx
{
  title: "Paper/Article Title",
  journal: "Where it was published",
  date: "Year",
  description: "Brief description...",
}
\`\`\`

---

## 📧 Contact Information

### Contact Section (`components/contact-section.tsx`)
**What to update:**
- Line 75: Your email address
- Line 85: Your contact description
- Lines 95-115: Your social media links

**Social Media Links:**
\`\`\`tsx
<a href="https://github.com/yourusername" target="_blank">
<a href="https://linkedin.com/in/yourusername" target="_blank">
<a href="https://twitter.com/yourusername" target="_blank">
\`\`\`

---

## 🖼️ Images & Assets

### Required Files:
1. **Resume PDF**: `/public/resume.pdf`
2. **Project Images**: `/public/images/projects/`
3. **Favicon**: `/public/favicon.ico`

### Image Guidelines:
- **Project Images**: 600x400px, high quality
- **File Formats**: JPG, PNG, WebP
- **File Names**: Use kebab-case (my-project.jpg)

### Adding Images:
1. Create folder: `/public/images/projects/`
2. Add your images to this folder
3. Update image paths in `components/projects-section.tsx`

---

## 🚀 Deployment

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy with default settings

### Option 2: Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Set build command: `npm run build`
5. Set publish directory: `out`

### Custom Domain:
- Add your domain in deployment platform settings
- Update DNS records as instructed

---

## ✅ Customization Checklist

### Content:
- [ ] Updated name and title in hero section
- [ ] Written personal bio in about section
- [ ] Added all your projects with images and links
- [ ] Listed your work experience
- [ ] Updated skills and technologies
- [ ] Added education and certifications
- [ ] Updated contact information and social links

### Assets:
- [ ] Added resume PDF to `/public/resume.pdf`
- [ ] Added project images to `/public/images/projects/`
- [ ] Updated favicon
- [ ] Tested all links and downloads

### Testing:
- [ ] Tested navigation between sections
- [ ] Verified theme toggle works
- [ ] Checked mobile responsiveness
- [ ] Tested contact form
- [ ] Verified all external links work

### Deployment:
- [ ] Pushed code to GitHub
- [ ] Deployed to hosting platform
- [ ] Tested live site
- [ ] Set up custom domain (optional)

---

## 🆘 Need Help?

### Common Issues:
1. **Images not showing**: Check file paths and ensure images are in `/public/` folder
2. **Links not working**: Verify URLs are correct and include `https://`
3. **Resume not downloading**: Ensure `resume.pdf` is in `/public/` folder
4. **Styling issues**: Check for typos in className attributes

### Resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

## 🎉 You're All Set!

Your portfolio is now ready to showcase your amazing work! Remember to:
- Keep your content updated
- Add new projects as you build them
- Update your resume regularly
- Share your portfolio with potential employers and clients

Good luck with your career journey! 🚀
