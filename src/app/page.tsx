import { Box } from "@mantine/core";
import { Hero } from "./(main)/components/hero/Index";
import Overview from "./(main)/components/overview/Index";
import TopWriters from "./(main)/components/top writers/TopWriters";
import Newsletter from "./(main)/components/newsletter/Newsletter";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Overview />
      <TopWriters />
      <Newsletter />
    </Box>
  );
};
export default Home;
