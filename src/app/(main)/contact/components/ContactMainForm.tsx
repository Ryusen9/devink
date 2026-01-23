"use client";

import { useEffect, useRef, useState } from "react";
import {
  Container,
  Text,
  TextInput,
  Textarea,
  Button,
  Box,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Mail, Send } from "lucide-react";
import gsap from "gsap";
import { Metadata } from "next";

const ContactMainForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) => (!value ? "Name is required" : null),
      email: (value) =>
        !value
          ? "Email is required"
          : !/^\S+@\S+$/.test(value)
            ? "Invalid email"
            : null,
      message: (value) => (!value ? "Message is required" : null),
    },
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
        );
      }

      // Form animation
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.3,
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Success animation
      if (formRef.current) {
        gsap.to(formRef.current, {
          scale: 0.98,
          opacity: 0.5,
          duration: 0.2,
          onComplete: () => {
            setSubmitted(true);
            form.reset();
            setTimeout(() => {
              setSubmitted(false);
              gsap.to(formRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.3,
              });
            }, 2000);
          },
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-white via-teal-50 to-white py-20 md:py-32"
    >
      <Container size={1450}>
        {/* Title Section */}
        <Box ref={titleRef} mb={50} ta="center">
          <Text
            component="h1"
            size="3.5rem"
            fw={800}
            mb="md"
            className="text-teal-700"
          >
            {`Let's Connect`}
          </Text>
          <Text
            size="md"
            c="dimmed"
            maw={500}
            mx="auto"
            className="text-gray-600"
          >
            {`Have a question or want to work together? We'd love to hear from
            you.`}
          </Text>
        </Box>

        {/* Contact Form */}
        {submitted ? (
          <Box ref={formRef} ta="center" py={60}>
            <Box className="inline-block rounded-full bg-teal-100 p-4 mb-4">
              <Mail size={40} className="text-teal-600" />
            </Box>
            <Text size="xl" fw={700} mb="xs" className="text-teal-700">
              Message Sent!
            </Text>
            <Text size="md" c="dimmed">
              {`Thank you for reaching out. We'll get back to you soon.`}
            </Text>
          </Box>
        ) : (
          <Box
            ref={formRef}
            p={40}
            className="border border-teal-200 bg-white/80 backdrop-blur-sm"
            style={{ borderRadius: "12px" }}
          >
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack gap="lg">
                <TextInput
                  label={
                    <Text fw={600} c="teal.7" size="sm">
                      Your Name
                    </Text>
                  }
                  placeholder="John Doe"
                  radius="lg"
                  size="md"
                  {...form.getInputProps("name")}
                  classNames={{
                    input:
                      "border-teal-200 focus:border-teal-500 focus:ring-teal-500",
                  }}
                  styles={{
                    input: {
                      backgroundColor: "#f0fdf4",
                      borderColor: form.errors.name ? "#ef4444" : undefined,
                    },
                  }}
                />

                <TextInput
                  label={
                    <Text fw={600} c="teal.7" size="sm">
                      Email Address
                    </Text>
                  }
                  placeholder="you@example.com"
                  radius="lg"
                  size="md"
                  {...form.getInputProps("email")}
                  classNames={{
                    input:
                      "border-teal-200 focus:border-teal-500 focus:ring-teal-500",
                  }}
                  styles={{
                    input: {
                      backgroundColor: "#f0fdf4",
                      borderColor: form.errors.email ? "#ef4444" : undefined,
                    },
                  }}
                />

                <Textarea
                  label={
                    <Text fw={600} c="teal.7" size="sm">
                      Your Message
                    </Text>
                  }
                  placeholder="Tell us what's on your mind..."
                  radius="lg"
                  size="md"
                  minRows={5}
                  {...form.getInputProps("message")}
                  classNames={{
                    input:
                      "border-teal-200 focus:border-teal-500 focus:ring-teal-500",
                  }}
                  styles={{
                    input: {
                      backgroundColor: "#f0fdf4",
                      borderColor: form.errors.message ? "#ef4444" : undefined,
                    },
                  }}
                />

                <Button
                  type="submit"
                  size="lg"
                  radius="lg"
                  className="bg-teal-600 w-2/6! mx-auto! hover:bg-teal-700 transition-all duration-300 font-semibold"
                  disabled={loading}
                  rightSection={loading ? null : <Send size={20} />}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </Stack>
            </form>
          </Box>
        )}

        {/* Footer Note */}
        <Box mt={50} ta="center">
          <Text size="sm" c="dimmed" className="text-gray-500">
            ✉️ hello@devink.com
          </Text>
        </Box>
      </Container>
    </div>
  );
};

export default ContactMainForm;