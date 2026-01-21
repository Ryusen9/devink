import { Box, TextInput, Title } from "@mantine/core";
import { AtSign } from "lucide-react";

const Newsletter = () => {
  return (
    <Box className="h-[60vh]! w-full! flex! flex-col! items-center! justify-center! bg-linear-to-b from-teal-500/60! to-cyan-500/60! mt-16! bg-fixed!">
      <Title className="text-white! text-center!" order={1}>
        Subscribe to our Newsletter
      </Title>
      <Box className="w-full! mx-auto!">
        <TextInput
          leftSectionPointerEvents="none"
          leftSection={<AtSign />}
          label="Enter your email"
          placeholder="Your email"
          className="max-w-80! mx-auto! mt-6!"
        />
      </Box>
    </Box>
  );
};
export default Newsletter;
