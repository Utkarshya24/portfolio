" use client ";
import React from 'react';
import { Box, Typography } from '@mui/material';
import { ArrowDown } from 'lucide-react';
import { useSnapshot } from 'valtio';
import { portfolioState } from '@/store/portfolio';

export default function AboutSection ()  {
  const { stats } = useSnapshot(portfolioState);
  

  return (
    <section id="about" className="">
      <Box className="w-full flex md:flex-row flex-col gap-56">
        <Typography
          variant="h2"
          className="relative w-full md:max-w-[250px] mb-12 bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, white 0.1%, black 8%, black 60%, white 99.9%)",
          }}
        >
          ABOUT .
          <span className="absolute left-54 bottom-5 text-gray-400">
            <ArrowDown
              className="rounded-full border-2 border-gray-400 text-gray-400"
              style={{ transform: 'rotate(-120deg)', width: '50px', height: '50px' }}
            />
          </span>
        </Typography>
        <Typography variant="body1" className=" text-gray-600 w-full">
          UTKARSH YADAV IS A TALENTED DEVELOPER, KNOWN FOR HIS CREATIVE PROWESS AND PROBLEM-SOLVING SKILLS. WITH A PASSION FOR CREATING DIGITAL EXPERIENCES THAT EXCEED EXPECTATIONS. HE IS A FULL-STACK DEVELOPER WITH A FOCUS ON FRONT-END DEVELOPMENT. HE IS A TEAM PLAYER WHO THRIVES IN A COLLABORATIVE ENVIRONMENT AND IS ALWAYS LOOKING TO LEARN AND GROW.
        </Typography>
      </Box>
      <Box className="flex md:flex-row flex-col w-full justify-center align-center pt-10">
       
          <Box className="w-full text-center p-6 border border-gray-200">
            <Typography variant="h3">{stats.projects}</Typography>
            <Typography>SUCCESSFUL PROJECTS</Typography>
          </Box>
  
       
          <Box className="w-full text-center p-6 border border-gray-200">
            <Typography variant="h3">{stats.clients}</Typography>
            <Typography>HAPPY CLIENTS</Typography>
          </Box>
        
        
          <Box className="w-full text-center p-6 border border-gray-200">
            <Typography variant="h3">{stats.experience}</Typography>
            <Typography>YEARS EXPERIENCE</Typography>
          </Box>
        </Box>
      
    </section>
  );
};

