import { Box } from "@mantine/core";
import { Hero } from "./(main)/components/hero/Index";
import Overview from "./(main)/components/overview/Index";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Overview />
    </Box>
  );
};
export default Home;
