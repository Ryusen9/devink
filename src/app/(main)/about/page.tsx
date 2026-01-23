import { Box, Container, Text, Title } from "@mantine/core";
import WhoWeAreGrid from "./components/WhoWeAreGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABOUT",
  description: "Learn more about DEVINK, a blogging platform for developers.",
  icons: { icon: "/logo.png" },
};

const AboutPage = () => {
  return (
    <section className="w-full mt-24 flex flex-col items-center px-4">
      <Box className="w-full! pt-16!">
        <Title ff={"var(--font-macondo)"} ta="center" fz={48}>
          About DEVINK
        </Title>
        <Text fz={18} ta="center" c="dimmed" maw={800} mx="auto">
          DEVINK is a modern blogging platform designed specifically for
          developers.
        </Text>
        {/* Main Components */}
        <Container className="mt-1! w-full!">
          <WhoWeAreGrid />
        </Container>
      </Box>
    </section>
  );
};
export default AboutPage;
