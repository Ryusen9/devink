"use client";

import { highlights } from "@/Constants";
import {
  Badge,
  Box,
  Card,
  Container,
  Divider,
  Flex,
  Group,
  Mark,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Overview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for cards
      gsap.set(".overview-card", {
        opacity: 0,
        y: 60,
        scale: 0.95,
      });

      // Set initial state for title
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 30,
      });

      // Animate title first
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Animate cards with stagger
      gsap.to(".overview-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: {
          amount: 0.4,
          from: "start",
        },
        scrollTrigger: {
          trigger: ".overview-card",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <Container ref={containerRef} size={1400} className="my-16!">
      {/* Text & Title section */}
      <Stack ref={titleRef} gap="sm" align="center" className="mx-auto! mb-10!">
        <Title ta="center" ff={"var(--font-karla)"} size="2.5rem" fw={800}>
          Overview
        </Title>
        <Text ta="center" fz="lg" c="dimmed" maw={780}>
          Welcome to DEVINK, a modern blogging platform crafted for
          <Mark className="mx-2! text-white!" color="rgba(26, 196, 168, 1)">
            developers
          </Mark>
          who love great storytelling.
        </Text>
      </Stack>

      {/* Overview Content */}
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Box
              key={idx}
              className="overview-card relative!"
              style={{
                background:
                  "linear-gradient(135deg, rgba(20,184,166,0.15), rgba(6,182,212,0.12))",
                padding: "1px",
                borderRadius: "20px",
              }}
            >
              <Card
                shadow="sm"
                radius="xl"
                padding="xl"
                withBorder
                style={{
                  height: "100%",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Stack gap="md" h="100%">
                  <Group justify="space-between" align="center">
                    <Group gap="sm">
                      <ThemeIcon
                        size={44}
                        radius="xl"
                        variant="light"
                        color="teal"
                      >
                        <Icon size={22} />
                      </ThemeIcon>
                      <div>
                        <Badge color="teal" variant="light" radius="md">
                          {item.badge}
                        </Badge>
                        <Title order={3} size="h4" fw={700} mt={6}>
                          {item.title}
                        </Title>
                      </div>
                    </Group>
                  </Group>

                  <Text c="dimmed" fz="sm" lh={1.6}>
                    {item.description}
                  </Text>

                  <Divider my="xs" variant="dashed" />

                  <Flex align="center" gap="xs" mt="auto">
                    <Text fw={700} c="teal">
                      {item.stat}
                    </Text>
                    <Text fz="xs" c="dimmed">
                      • Updated weekly
                    </Text>
                  </Flex>
                </Stack>
              </Card>
            </Box>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Overview;
