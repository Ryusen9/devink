"use client";

import {
  Box,
  Text,
  Button,
  Container,
  Badge,
  Title,
  Group,
  Stack,
  Paper,
} from "@mantine/core";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BookOpen, PenTool, TrendingUp, Search } from "lucide-react";
import LiquidEther from "@/Components/Background/Background";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states with smoother values
      gsap.set(badgeRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.95,
      });

      gsap.set(headlineRef.current, {
        opacity: 0,
        y: 40,
      });

      gsap.set(subheadlineRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(buttonsRef.current, {
        opacity: 0,
        y: 25,
      });

      gsap.set(".stat-card", {
        opacity: 0,
        y: 30,
        scale: 0.95,
      });

      gsap.set(".floating-card", {
        opacity: 0,
        scale: 0.9,
        rotate: -5,
      });

      // Smoother timeline with power4 easing
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
          duration: 1.2,
        },
      });

      // Badge reveal with scale
      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
      })
        // Headline reveal with longer duration
        .to(
          headlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
          },
          "-=0.5",
        )
        // Subheadline reveal
        .to(
          subheadlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
          },
          "-=0.8",
        )
        // Buttons reveal
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.7",
        )
        // Stats cards with stagger
        .to(
          ".stat-card",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.12,
          },
          "-=0.6",
        )
        // Floating cards reveal
        .to(
          ".floating-card",
          {
            opacity: 0.6,
            scale: 1,
            rotate: 0,
            duration: 1.5,
            stagger: 0.15,
          },
          "-=1",
        );

      // Smoother continuous floating animation
      gsap.to(".floating-card", {
        y: "+=15",
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.4,
          from: "random",
        },
      });

      // Gentle rotation animation
      gsap.to(".floating-card", {
        rotate: "+=5",
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.5,
          from: "random",
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={heroRef}
      className="min-h-screen! relative! flex! items-center! justify-center! overflow-hidden! py-20!"
    >
      {/* Background */}
      <Box className="absolute! -z-1 top-0! left-0! w-full! h-full!">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </Box>

      {/* Hero Content */}
      <Container size="lg" className="relative! z-10!">
        <Stack align="center" gap="xl">
          {/* Badge */}
          <Box className="flex! items-center! justify-center!" ref={badgeRef}>
            <Badge
              size="lg"
              variant="light"
              color="teal"
              leftSection={<BookOpen size={16} />}
              radius="xl"
              className="text-teal-800! font-semibold!"
            >
              Explore Stories, Ideas & Insights
            </Badge>
          </Box>

          {/* Main Headline */}
          <Stack gap="md" align="center" ref={headlineRef}>
            <Title
              order={1}
              ta="center"
              size="3.5rem"
              fw={800}
              lh={1.2}
              maw={800}
              style={{
                fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
              }}
            >
              Discover Amazing
              <br />
              <Text
                span
                inherit
                variant="gradient"
                gradient={{ from: "teal", to: "cyan", deg: 90 }}
              >
                Stories & Ideas
              </Text>
            </Title>
          </Stack>

          {/* CTA Buttons */}
          <Group ref={buttonsRef} className="flex! items-center! justify-center!" gap="md" mt="sm">
            <Button
              size="lg"
              radius="xl"
              color="teal"
              leftSection={<BookOpen size={20} />}
              className="transition-all! duration-300! hover:scale-105!"
            >
              Start Reading
            </Button>

            <Button
              size="lg"
              radius="xl"
              variant="light"
              color="teal"
              leftSection={<Search size={20} />}
              className="transition-all! duration-300! text-black!"
            >
              Browse Topics
            </Button>
          </Group>

          {/* Blog Stats */}
          <Box ref={statsRef} mt="xl" w="100%">
            <Group justify="center" gap="md" wrap="wrap">
              {[
                { icon: BookOpen, number: "500+", label: "Articles" },
                { icon: PenTool, number: "50+", label: "Writers" },
                { icon: TrendingUp, number: "10K+", label: "Readers" },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <Paper
                    key={idx}
                    className="stat-card"
                    shadow="sm"
                    radius="xl"
                    p="xl"
                    withBorder
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      backdropFilter: "blur(10px)",
                      minWidth: "180px",
                    }}
                  >
                    <Stack align="center" gap="xs">
                      <Box
                        p="xs"
                        style={{
                          background:
                            "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)",
                          borderRadius: "12px",
                        }}
                      >
                        <Icon size={24} color="white" />
                      </Box>
                      <Text size="2rem" fw={700} c="teal">
                        {stat.number}
                      </Text>
                      <Text size="sm" c="dimmed" fw={500}>
                        {stat.label}
                      </Text>
                    </Stack>
                  </Paper>
                );
              })}
            </Group>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
