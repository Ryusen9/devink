"use client";

import { topWriters } from "@/Constants";
import {
  Badge,
  Box,
  Card,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";

const TopWriters = () => {
  const theme = useMantineTheme();
  return (
    <Box component="section" className="py-16!">
      <Container size={1400}>
        <Stack gap="xs" align="center" className="mx-auto!" mb="lg">
          <Badge color="teal" variant="light" size="lg" radius="sm">
            Community picks
          </Badge>
          <Title ta="center" ff={"var(--font-karla)"} size="2.4rem" fw={800}>
            Our Top Writers
          </Title>
          <Text ta="center" c="dimmed" maw={760}>
            Meet the voices behind our most-read stories—engineers and makers
            who turn complex problems into readable, practical guides.
          </Text>
        </Stack>

        <Carousel
          slideSize={{
            base: "100%",
            xs: "85%",
            sm: "60%",
            md: "45%",
            lg: "33.333%",
          }}
          slideGap={{ base: "sm", sm: "md", md: "lg" }}
          withIndicators
          controlSize={25}
          controlsOffset="xl"
          emblaOptions={{
            dragFree: false,
            containScroll: "trimSnaps",
            align: "center",
            loop: true,
          }}
          classNames={{
            control: "carousel-control",
            indicator: "carousel-indicator",
          }}
          styles={{
            control: {
              color: theme.colors.teal[7],
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 12px 32px rgba(13, 148, 136, 0.2)",
              transition: "all 200ms ease",
            },
            indicator: {
              backgroundColor: theme.colors.teal[6],
              width: 10,
              height: 10,
              transition: "all 200ms ease",
              opacity: 0.3,
              borderRadius: "50%",
            },
          }}
        >
          {topWriters.map((writer, index) => (
            <Carousel.Slide key={writer.name}>
              <Card
                radius="xl"
                withBorder
                className="h-full! overflow-hidden! transition-all duration-300 hover:shadow-2xl! hover:scale-[1.02]!"
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow: "0 20px 50px rgba(13,148,136,0.12)",
                  borderColor: "rgba(13,148,136,0.2)",
                  cursor: "pointer",
                }}
              >
                <Card.Section>
                  <Box
                    style={{
                      position: "relative",
                      height: "clamp(240px, 28vw, 320px)",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={writer.image}
                      alt={writer.name}
                      fit="cover"
                      height="100%"
                      radius={0}
                      loading="lazy"
                      style={{
                        transition: "transform 400ms ease",
                      }}
                      className="hover:scale-110!"
                    />
                    <Box
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(13,148,136,0.15) 60%, rgba(13,148,136,0.4) 100%)",
                      }}
                    />
                    <Badge
                      variant="gradient"
                      gradient={{ from: "teal", to: "cyan", deg: 135 }}
                      size="lg"
                      radius="md"
                      style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                        fontWeight: 700,
                      }}
                    >
                      {writer.posts} posts
                    </Badge>
                    <Badge
                      variant="filled"
                      color="dark"
                      size="sm"
                      radius="sm"
                      style={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        backgroundColor: "rgba(0,0,0,0.6)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      #{index + 1}
                    </Badge>
                  </Box>
                </Card.Section>

                <Stack gap="md" px="lg" py="lg">
                  <div>
                    <Title
                      order={3}
                      size="clamp(1.1rem, 2.5vw, 1.4rem)"
                      fw={800}
                      className="transition-colors hover:text-teal-600!"
                    >
                      {writer.name}
                    </Title>
                    <Group gap="xs" mt={6}>
                      <Text c="teal" size="sm" fw={600}>
                        {writer.occupation}
                      </Text>
                    </Group>
                  </div>

                  <Text size="sm" lh={1.65} c="dimmed">
                    Focused on {writer.occupation.toLowerCase()}, {writer.name}{" "}
                    shares field-tested lessons and keeps the craft grounded in
                    real-world builds.
                  </Text>

                  <Group gap="xs" mt="xs">
                    <Badge
                      variant="light"
                      color="cyan"
                      radius="md"
                      className="transition-all hover:scale-105!"
                    >
                      Featured writer
                    </Badge>
                    <Badge
                      variant="light"
                      color="grape"
                      radius="md"
                      className="transition-all hover:scale-105!"
                    >
                      High readership
                    </Badge>
                  </Group>
                </Stack>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default TopWriters;
