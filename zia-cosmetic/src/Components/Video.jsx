import { Box } from "@chakra-ui/react";
import React from "react";

const Video = () => {
  return (
    <Box w="80%" m="auto" bgColor="black" py="100px">
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/GdcxfyKNiDg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Box>
  );
};

export default Video;
