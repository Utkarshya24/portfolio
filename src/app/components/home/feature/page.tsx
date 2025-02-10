"use client";

import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useSnapshot } from 'valtio';
import { portfolioState } from '@/store/portfolio';
import { ArrowDown } from 'lucide-react';

export default function FeaturedSection() {
  const { featuredProjects } = useSnapshot(portfolioState);

  return (
    <Box className="py-10 px-4 md:px-12">
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" },
          textAlign: "center",
          lineHeight: 1.2,
        }}
        className="font-bold bg-clip-text text-transparent leading-tight"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 5%, black 30%, black 70%, white 95%)",
        }}
      >
        FEATURED PROJECT.
      </Typography>

      <Box className="mt-10 flex flex-row justify-between ">
        <Box className="flex flex-col md:flex-row md:items-center">
          <Typography 
            variant="body1" 
            sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
            className="relative z-0  text-white bg-black border-b-2 rounded-full px-4 py-2"
          >
            MOBILE APP
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
            className="absolute z-10 md:left-60 left-40   text-black bg-white border-2 border-gray-400 rounded-full px-4 py-2"
          >
            WEBSITE
          </Typography>
        </Box>
        <ArrowDown
          className="rounded-full border-2 border-gray-400 text-gray-400 "
          style={{ transform: 'rotate(-120deg)', width: '50px', height: '50px' }}
        />
      </Box>

      <Box className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <Box key={project.id} className="relative group cursor-pointer">
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
        ))}
      </Box>
    </Box>
  );
}
