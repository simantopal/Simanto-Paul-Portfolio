"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import orvantaImage from "@/asset/Orvanta-ai.png";
import ticketBariImage from "@/asset/ticket-bari.png";
import mediqueueImage from "@/asset/mediqueue.png";

const projectDetails = {
  "orvanta-ai": {
    title: "Orvanta AI",
    category: "AI-Powered E-Commerce Platform",
    image: orvantaImage,

    description:
      "Orvanta AI is an AI-powered e-commerce platform designed to provide a smarter and more personalized shopping experience. The platform combines modern e-commerce functionality with AI-powered assistance to help users discover products and make better purchasing decisions.",

    features: [
      "AI-powered shopping assistant",
      "Product browsing and search",
      "Personalized product recommendations",
      "Product details and filtering",
      "Responsive modern UI",
      "Secure user authentication",
      "REST API based backend",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini AI",
    ],

    challenges:
      "One of the main challenges was integrating AI functionality into a real-world e-commerce experience while keeping the application fast, responsive, and easy to use. I solved this by separating the frontend and backend architecture and creating dedicated API endpoints for AI and product-related operations.",

    futurePlans: [
      "Improve AI-powered product recommendations",
      "Add personalized shopping experiences based on user behavior",
      "Implement secure online payment integration",
      "Add real-time order tracking and notifications",
      "Improve application performance and scalability",
    ],

    link: "https://orvanta-ai.vercel.app",
    github: "https://github.com/simantopal/Orvanta-Ai-Server",
  },

  "online-ticket-booking": {
    title: "TicketBari - Online Ticket Booking Platform",
    category: "Full-Stack Web Application",
    image: ticketBariImage,

    description:
      "This is a complete online ticket booking platform where users can browse and book tickets, vendors can add and manage their tickets, and administrators can manage users, tickets, and advertisements.",

    features: [
      "User authentication",
      "Browse available tickets",
      "Search and filter tickets",
      "Ticket booking system",
      "Vendor ticket management",
      "Admin dashboard",
      "Approve or reject tickets",
      "Advertisement management",
      "Role-based access control",
      "Booking management",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
    ],

    challenges:
      "The main challenge was managing multiple user roles and building a complete booking workflow. I implemented role-based access control and designed separate dashboard experiences for passengers, vendors, and administrators.",

    futurePlans: [
      "Add online payment integration",
      "Add real - time seat availability",
      "Add ticket cancellation and refund system",
      "Add email and SMS notifications",
      "Improve analytics for vendors and admins",
    ],

    link: "https://online-ticket-booking-platform-six.vercel.app",
    github: "https://github.com/simantopal/ticketbari-server",
  },

  "mediQueue": {
    title: "MediQueue",
    category: "Tutor Booking Platform",
    image: mediqueueImage,

    description:
      "MediQueue is an online tutor booking platform that helps students find suitable tutors and book learning sessions based on their preferred subjects, expertise, and availability.",

    features: [
      "Tutor search and discovery",
      "Subject and expertise based filtering",
      "Tutor profile and details",
      "Session booking system",
      "Tutor service management",
      "User dashboard",
      "Booking management",
      "Responsive user interface",
    ],

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
    ],

    challenges:
      "The main challenge was creating a smooth tutor discovery and booking experience. I designed a structured workflow where users can explore tutors, check their details, and book available sessions while keeping the application responsive and easy to use.",

    futurePlans: [
      "Add real-time tutor availability",
      "Add online video consultation",
      "Add payment integration",
      "Add tutor reviews and ratings",
      "Add automated booking notifications",
    ],

    link: "https://medi-queue-client-side.vercel.app",
    github: "https://github.com/simantopal/MediQueue-server-side",
  },
};

export default function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const project =
    projectDetails[slug as keyof typeof projectDetails];

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl text-text-primary">
          Project Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition mb-12"
        >
          <span className="material-symbols-outlined">
            arrow_back
          </span>
          Back to Projects
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px] rounded-3xl overflow-hidden border border-border">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <span className="text-accent uppercase tracking-widest text-sm font-bold">
              {project.category}
            </span>

            <h1 className="text-4xl md:text-6xl font-bold">
              {project.title}
            </h1>

            <p className="text-text-secondary text-lg leading-8">
              {project.description}
            </p>

            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white hover:opacity-90 transition"
              >
                <span className="material-symbols-outlined text-lg">
                  open_in_new
                </span>
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-accent text-white hover:opacity-90 transition"
              >
                View GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Information */}
        <div className="grid md:grid-cols-2 gap-12 mt-24">

          {/* Features */}
          <section>
            <h2 className="text-3xl font-bold mb-6">
              Key Features
            </h2>

            <div className="space-y-4">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-text-secondary"
                >
                  <span className="material-symbols-outlined text-accent">
                    check_circle
                  </span>

                  {feature}
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="text-3xl font-bold mb-6">
              Technologies Used
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="px-4 py-2 rounded-full bg-bg-card border border-border text-text-secondary"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Challenge */}
        <section className="mt-24 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">
            Challenges & Solutions
          </h2>

          <p className="text-text-secondary text-lg leading-8">
            {project.challenges}
          </p>
        </section>

        <section className="mt-24 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">
            Potential Improvements & Future Plans
          </h2>

          <div className="space-y-4">
            {project.futurePlans.map((plan) => (
              <div
                key={plan}
                className="flex items-center gap-3 text-text-secondary"
              >
                <span className="material-symbols-outlined text-accent">
                  arrow_forward
                </span>

                {plan}
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}