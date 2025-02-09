"use client";

import { useSnapshot } from "valtio";
import { portfolioState } from "@/store/portfolio";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeroProfile from "@/app/assets/heroProfile.png"
import { ArrowDown} from "lucide-react";
import AboutSection from "./components/baseComponents/home/about/page";
import FeaturedSection from "./components/baseComponents/home/feature/page";

export default function Home() {
  const {   services } = useSnapshot(portfolioState);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <Box maxWidth="100% " className="px-6 md:px-12">
     
      {/* Hero Section */}

      <Box gap={2} className=" min-h-screen items-center py-20">
        <Box className="relative z-0">
          <Typography
            variant="h1"
            sx={{ fontSize: "10rem", textAlign: "center" }}
            className="text-6xl font-bold bg-clip-text text-transparent md:text-4xl leading-tight text-center"
            style={{
              backgroundImage: "linear-gradient(to right, white 5%, black 30%, black 70%, white 95%)",
            }}
          >
            EXPLORE MY
            PORTFOLIO
          </Typography>
          <Box className="flex justify-between align-center">
          <Box className="flex flex-col  align-center">
            <Typography variant="body1" className="mt-6 text-gray-600">
              DEVELOPER EST.2023
            </Typography>
            <Box className="flex justify-center items-center  pt-6">
            <ArrowDown className=" rounded-full border-2 border-gray-400 text-gray-400 " style={{ transform: 'rotate(-30deg)', width: '100px', height: '100px' }} />
            </Box>
            </Box>
            <Box className="flex flex-col gap-40 ">
              <Typography variant="body1" className="mt-6 text-gray-600 md:max-w-48 text-right">
              I&apos;m a full-stack developer with a passion for building beautiful and functional websites/app.
              </Typography>
              <Box className="text-gray-600 md:max-w-48 text-right flex flex-col justify-end gap-2">
  <Typography variant="body1">UI/UX</Typography>
  <Typography variant="body1">FRONTEND</Typography>
  <Typography variant="body1">BACKEND</Typography>
  <Typography variant="body1">FULLSTACK</Typography>
  <Typography variant="body1">DEVELOPER</Typography>
</Box>
            </Box>
          </Box>
        </Box>
        <Box className="absolute bottom-0 left-0 right-0 z-10 top-[580px] justify-center flex items-center ">
          <Image
            src={HeroProfile}
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full"
            style={{ mixBlendMode: 'multiply' }} 
          />
        </Box>
      </Box>

      <AboutSection />

      {/* Featured Projects Section */}
      <FeaturedSection />

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
