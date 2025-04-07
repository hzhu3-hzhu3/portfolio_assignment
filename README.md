# Coding Assignment 14: Professional Portfolio Website

## Project Overview
This portfolio website is built using Create React App and leverages the UI component library developed in Assignment 13. It showcases my coursework and personal information with the following sections:
- **About Me:** Personal introduction, education, and work experience (derived from my resume and cover letter).
- **Work:** Project showcase including project descriptions, technology stack, and project links, along with professional work experience.
- **Skills:** A comprehensive list of programming languages, frameworks, and tools with detailed descriptions.
- **Resources:** Recommended development and learning resources.
- **Developer Setup:** Recommendations for setting up a productive development environment.

## Directory Structure
- `src/pages/` - Contains page components: BasicInformation, Work, Skills, Resources, DeveloperSetup.
- `src/components/` - Contains the UI component library (Button, Card, HeroImage, Text, Label, Table, etc.).
- `public/` - Static assets (images, favicon, etc.).
- `nginx.conf` - Nginx configuration file.
- `Dockerfile` - Docker deployment file.

## How to Run

### Development
1. Clone the repository:
   ```
   git clone [<https://github.com/hzhu3-hzhu3/portfolio_assignment.git>]
   cd portfolio-site
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
   The app runs on [http://localhost:3000](http://localhost:3000).

### Production Build & Docker Deployment
1. Create the production build:
   ```
   npm run build
   ```
2. Build the Docker image:
   ```
   docker build -t zhu_haiqiao_coding_assignment14 .
   ```
3. Run the Docker container (mapping host port 5575 to container port 80):
   ```
   docker run -d --name zhu_haiqiao_coding_assignment14 -p 5575:80 Zhu_Gloria_coding_assignment14
   ```
4. Access the site at [http://localhost:5575](http://localhost:5575).

## Conclusion
This project demonstrates my ability to create, test, and deploy a professional portfolio website. It integrates a custom UI component library, employs multi-page routing via React Router, and is containerized with Docker for streamlined deployment.