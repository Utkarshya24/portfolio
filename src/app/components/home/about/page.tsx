"use client";

import React from 'react';
import { Box, Typography } from '@mui/material';
import { ArrowDown } from 'lucide-react';
import { useSnapshot } from 'valtio';
import { portfolioState } from '@/store/portfolio';

export default function AboutSection() {
  const { stats } = useSnapshot(portfolioState);

  return (
    <section id="about" className="px-4 md:px-12 py-10">
      {/* Heading and Description */}
      <Box className="w-full flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <Box className="relative w-full md:w-96 flex flex-row">
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: '2.5rem', md: '3rem', lg: '4rem' } }}
            className="bg-clip-text text-transparent mb-4"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 0.1%, black 8%, black 60%, white 99.9%)",
            }}
          >
            ABOUT .
          </Typography>
          
          {/* Arrow Icon for smaller screens */}
          <div className=" md:mt-2 mt-0 text-center">
            <ArrowDown
              className="mx-auto rounded-full border-2 border-gray-400 text-gray-400"
              style={{ transform: 'rotate(-120deg)', width: '40px', height: '40px' }}
            />
          </div>
        </Box>
        <Typography variant="body1" className="text-gray-600 w-full text-justify">
          UTKARSH YADAV IS A TALENTED DEVELOPER, KNOWN FOR HIS CREATIVE PROWESS AND
          PROBLEM-SOLVING SKILLS. WITH A PASSION FOR CREATING DIGITAL EXPERIENCES THAT
          EXCEED EXPECTATIONS. HE IS A FULL-STACK DEVELOPER WITH A FOCUS ON FRONT-END
          DEVELOPMENT. HE IS A TEAM PLAYER WHO THRIVES IN A COLLABORATIVE ENVIRONMENT
          AND IS ALWAYS LOOKING TO LEARN AND GROW.
        </Typography>
      </Box>

      {/* Stats Section */}
      <Box className="flex flex-col md:flex-row w-full justify-center items-center pt-10 ">
        <Box className="w-full md:w-1/3 text-center p-4 md:p-6 border border-gray-200">
          <Typography variant="h3">{stats.projects}</Typography>
          <Typography variant="subtitle1">SUCCESSFUL PROJECTS</Typography>
        </Box>
        <Box className="w-full md:w-1/3 text-center p-4 md:p-6 border border-gray-200">
          <Typography variant="h3">{stats.clients}</Typography>
          <Typography variant="subtitle1">HAPPY CLIENTS</Typography>
        </Box>
        <Box className="w-full md:w-1/3 text-center p-4 md:p-6 border border-gray-200">
          <Typography variant="h3">{stats.experience}</Typography>
          <Typography variant="subtitle1">YEARS EXPERIENCE</Typography>
        </Box>
      </Box>
    </section>
  );
}
