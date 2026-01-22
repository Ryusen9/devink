"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Container, Grid, Paper, Text, Title } from "@mantine/core";
import { gsap } from "gsap";
import { stats } from "@/Constants";


export default function WhoWeAreGrid() {
  const animateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = animateRef.current?.querySelectorAll("[data-animate]");
    if (items && items.length) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
        },
      );
    }
  }, []);

  return (
    <section className="py-12 px-4">
      <Container size="lg" className="max-w-7xl">
        <div className="mb-8 border p-3 rounded-xl border-teal-200">
          <Text c="teal" fw={700} className="text-sm tracking-widest mb-2 text-center md:text-left">
            WHO WE ARE
          </Text>
          <Title
            order={2}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center md:text-left"
          >
            Making Life Smoother and Easier Every Day
          </Title>
          <Text c="dimmed" className="text-base md:text-lg max-w-2xl text-center md:text-left">
            We are dedicated to making life smoother and easier every day with
            practical and user-friendly solutions. Our focus is on simplifying
            your daily routines and enhancing your overall convenience.
            Experience seamless solutions designed to fit effortlessly into your
            lifestyle.
          </Text>
        </div>

        <div ref={animateRef}>
          <Grid gutter="xl" className="mb-10">
            <Grid.Col span={{ base: 12, md: 6 }} data-animate>
              <Paper
                radius="xl"
                shadow="lg"
                className="overflow-hidden bg-white h-full flex flex-col"
              >
                <div className="relative h-56 md:h-64 w-full">
                  <Image
                    src="/Photos/P1.png"
                    alt="Our Vision"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6">
                  <Text fw={700} className="text-lg text-teal-700 mb-2">
                    Our Vision
                  </Text>
                  <Text c="dimmed">
                    To be the leading innovator, transforming industries with
                    cutting-edge solutions that improve lives.
                  </Text>
                </div>
              </Paper>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }} data-animate>
              <Paper
                radius="xl"
                shadow="lg"
                className="overflow-hidden bg-white h-full flex flex-col"
              >
                <div className="relative h-56 md:h-64 w-full">
                  <Image
                    src="/Photos/P2.png"
                    alt="Our Goal"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6">
                  <Text fw={700} className="text-lg text-teal-700 mb-2">
                    Our Goal
                  </Text>
                  <Text c="dimmed">
                    To consistently deliver exceptional value and achieve
                    excellence in every project we undertake.
                  </Text>
                </div>
              </Paper>
            </Grid.Col>
          </Grid>

          <Grid gutter="md">
            {stats.map((stat) => (
              <Grid.Col key={stat.label} span={{ base: 6, md: 3 }} data-animate>
                <Paper
                  shadow="sm"
                  radius="lg"
                  className="bg-white text-center py-6 border border-teal-50 w-32! h-28!"
                >
                  <Text
                    fw={800}
                    className="text-2xl md:text-3xl text-teal-700 mb-1"
                  >
                    {stat.value}
                  </Text>
                  <Text c="dimmed" className="text-xs md:text-sm font-semibold">
                    {stat.label}
                  </Text>
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  );
}
