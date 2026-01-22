import { Box, Text, Title } from "@mantine/core";

const AboutPage = () => {
  return (
    <section className="w-full mt-24 flex flex-col items-center px-4">
      <Box>
        <Title ff={"var(--font-macondo)"} ta="center" fz={48}>
          About DEVINK
        </Title>
        <Text fz={18} ta="center" c="dimmed" maw={800} mx="auto">
          DEVINK is a modern blogging platform designed specifically for
          developers.
        </Text>
      </Box>
    </section>
  );
};
export default AboutPage;
