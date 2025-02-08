"use client";

import { useSnapshot } from "valtio";
import { portfolioState } from "@/store/portfolio";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import { Key } from "react";
import Navbar from "./components/baseComponents/Navbar";

export default function Home() {
  const { stats, featuredProjects, services } = useSnapshot(portfolioState);

  return (
    <Box maxWidth="100%">
      <Navbar />
      {/* Hero Section */}

      <Box gap={2} className=" items-center py-20">
        <Box>
          <Typography
            variant="h1"
            sx={{ fontSize: "10rem", textAlign: "center" }}
            className="text-6xl md:text-4xl font-bold leading-tight text-center"
          >
            EXPLORE <span className="text-gray-400">MY</span>
            <br />
            PORTFOLIO
          </Typography>
          <Typography variant="body1" className="mt-6 text-gray-600">
            DESIGNER EST.2020
          </Typography>
        </Box>
        <Box className=" justify-center flex items-center">
          <Image
            src="/assets/heroProfile.jpeg"
            alt="Profile"
            width={400}
            height={400}
            className="rounded-full"
          />
        </Box>
      </Box>

      {/* About Section */}
      <section id="about" className="py-20">
        <Typography variant="h2" className="mb-12">
          ABOUT<span className="text-gray-400">.</span>
        </Typography>
        <Box>
          <Box>
            <Box className="text-center p-6 border border-gray-200">
              <Typography variant="h3">{stats.projects}</Typography>
              <Typography>SUCCESSFUL PROJECTS</Typography>
            </Box>
          </Box>
          <Box>
            <Box className="text-center p-6 border border-gray-200">
              <Typography variant="h3">{stats.clients}</Typography>
              <Typography>HAPPY CLIENTS</Typography>
            </Box>
          </Box>
          <Box>
            <Box className="text-center p-6 border border-gray-200">
              <Typography variant="h3">{stats.experience}</Typography>
              <Typography>YEARS EXPERIENCE</Typography>
            </Box>
          </Box>
        </Box>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20">
        <Typography variant="h2" className="mb-12">
          FEATURED PROJECT<span className="text-gray-400">.</span>
        </Typography>
        <Box>
          {featuredProjects.map(
            (project: { id: Key; image: string; title: string }) => (
              <Box key={project.id}>
                <Box className="relative group cursor-pointer">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full object-cover"
                  />
                  <Box className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Typography variant="h6" className="text-white">
                      {project.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )
          )}
        </Box>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <Typography variant="h2" className="mb-12">
          THE SERVICES WE
          <br />
          PROVIDE<span className="text-gray-400">.</span>
        </Typography>
        <Box>
          {services.map(
            (service: { description: string; id: number; title: string }) => (
              <Box key={service.id}>
                <Box className="p-6 border border-gray-200">
                  <Typography variant="h5" className="mb-4">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" className="text-gray-600">
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            )
          )}
        </Box>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <Typography variant="h2" className="mb-12">
          LET&apos;S TALK<span className="text-gray-400">.</span>
        </Typography>
        <Box className="justify-center">
          <Box>
            <Box className="text-center">
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="px-12 py-3"
              >
                CONTACT US
              </Button>
            </Box>
          </Box>
        </Box>
      </section>
    </Box>
  );
}
