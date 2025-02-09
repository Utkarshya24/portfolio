// filepath: /c:/Users/Administrator/Documents/portfolio/src/app/components/baseComponents/home/featured/FeaturedSection.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Key } from 'react';
import { useSnapshot } from 'valtio';
import { portfolioState } from '@/store/portfolio';
import { ArrowDown } from 'lucide-react';

const FeaturedSection = () => {
  const { featuredProjects } = useSnapshot(portfolioState);

  return (
    <Box className="py-10">
      <Typography
        variant="h1"
        sx={{ fontSize: "6rem", textAlign: "center" }}
        className="text-6xl font-bold bg-clip-text text-transparent md:text-4xl leading-tight text-center"
        style={{
          backgroundImage: "linear-gradient(to right, white 5%, black 30%, black 70%, white 95%)",
        }}
      >
        FEATURED PROJECT.
      </Typography>
      <Box className="w-full flex flex-row justify-between items-center mt-10">
        <Box className="flex flex-row ">
          <Typography variant="body1" fontSize={40} className="relative text-white justify-center align-center bg-black border-b-2  rounded-[50px] px-4 py-2">
            MOBILE APP
          </Typography>
          <Typography variant="body1" fontSize={40}  className="absolute z-10 left-72 text-black bg-white justify-center align-center  border-2 border-gray-400 rounded-[50px] px-4 py-2">  
            WEBSITE
          </Typography>
        </Box>
        <ArrowDown
              className="rounded-full border-2 border-gray-400 text-gray-400"
              style={{ transform: 'rotate(-120deg)', width: '50px', height: '50px' }}
            />
      </Box>
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
    </Box>
  );
};

export default FeaturedSection;