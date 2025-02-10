"use client";

import { useSnapshot } from "valtio";
import { portfolioState } from "@/store/portfolio";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeroProfile from "@/app/assets/heroProfile.png";
import { ArrowDown } from "lucide-react";
import AboutSection from "./components/home/about/page";
import FeaturedSection from "./components/home/feature/page";

export default function Home() {
  const { services } = useSnapshot(portfolioState);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <Box maxWidth="100%">
      {/* Hero Section */}
      <Box
        gap={2}
        className="md:min-h-screen flex flex-col justify-center items-center relative pt-20 md:py-20"
      >
        <Box className="relative z-0 w-full text-center">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", sm: "4rem", md: "6rem", lg: "10rem" },
              lineHeight: 1.2,
            }}
            className="font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 5%, black 30%, black 70%, white 95%)",
            }}
          >
            EXPLORE MY PORTFOLIO
          </Typography>
          <Box className="flex flex-row justify-between items-start md:mt-8 ">
            <Box className="flex flex-col items-center  ">
              <Typography variant="body2" className="text-gray-600 md:max-w-md w-24">
                DEVELOPER EST.2023
              </Typography>
              <Box className="flex justify-center items-center mt-6">
                <ArrowDown
                  className="rounded-full border-2 border-gray-400 text-gray-400 md:w-20 md:h-20 w-10 h-10"
                  style={{ transform: "rotate(-30deg)" }}
                 
                />
              </Box>
            </Box>
            <Box className="flex flex-col gap-8 ">
              <Typography
                variant="body2"
                className="text-gray-600 md:max-w-md w-28 text-right "
              >
                I&apos;m a full-stack developer with a passion for building
                beautiful and functional websites/app.
              </Typography>
              <Box className="text-gray-600 md:max-w-md w-28  text-right flex flex-col gap-2">
                <Typography variant="body1">UI/UX</Typography>
                <Typography variant="body1">FRONTEND</Typography>
                <Typography variant="body1">BACKEND</Typography>
                <Typography variant="body1">FULLSTACK</Typography>
                <Typography variant="body1">DEVELOPER</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className="absolute bottom-0 left-0 right-0 z-10 md:top-[38%]  top-10 flex justify-center items-center"
          
        >
          <Image
            src={HeroProfile}
            alt="Profile"
            className=" md:w-[400px] md:h-[400px] w-[150px] h-[200px] max-w-sm mx-auto"
            style={{ mixBlendMode: "multiply" }}
          />
        </Box>
      </Box>

      <AboutSection />

      {/* Featured Projects Section */}
      <FeaturedSection />

      {/* Services Section */}
      <section id="services" className="py-20">
        <Typography variant="h2" className="mb-12 text-center">
          THE SERVICES WE
          <br />
          PROVIDE<span className="text-gray-400">.</span>
        </Typography>
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(
            (service: { description: string; id: number; title: string }) => (
              <Box key={service.id} className="p-6 border border-gray-200">
                <Typography variant="h5" className="mb-4">
                  {service.title}
                </Typography>
                <Typography variant="body1" className="text-gray-600">
                  {service.description}
                </Typography>
              </Box>
            )
          )}
        </Box>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <Typography variant="h2" className="mb-12 text-center">
          LET&apos;S TALK<span className="text-gray-400">.</span>
        </Typography>
        <Box className="flex justify-center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="px-12 py-3"
          >
            CONTACT US
          </Button>
        </Box>
      </section>
    </Box>
  );
}
