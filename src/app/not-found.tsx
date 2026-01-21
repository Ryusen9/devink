"use client";
import { Box } from "@mantine/core";
import pageNotFoundLottie from "../../public/Lottie Files/pageNotFound.json";
import Lottie from "lottie-react";

const NotFound = () => {
  return (
    <Box className="min-h-screen! flex! items-center! justify-center!">
      <Lottie animationData={pageNotFoundLottie} />
    </Box>
  );
};
export default NotFound;
