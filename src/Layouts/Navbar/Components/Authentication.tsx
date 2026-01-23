"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Modal,
  TextInput,
  PasswordInput,
  Stack,
  Text,
  Anchor,
  Divider,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { LogIn, Mail, Lock, User } from "lucide-react";

const Authentication = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [isLogin, setIsLogin] = useState(false);

  // Signup form
  const signupForm = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      name: (value) => (!value ? "Name is required" : null),
      email: (value) =>
        !value
          ? "Email is required"
          : !/^\S+@\S+$/.test(value)
            ? "Invalid email"
            : null,
      password: (value) =>
        !value
          ? "Password is required"
          : value.length < 6
            ? "Password must be at least 6 characters"
            : null,
      confirmPassword: (value, values) =>
        !value
          ? "Please confirm your password"
          : value !== values.password
            ? "Passwords do not match"
            : null,
    },
  });

  // Login form
  const loginForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) =>
        !value
          ? "Email is required"
          : !/^\S+@\S+$/.test(value)
            ? "Invalid email"
            : null,
      password: (value) => (!value ? "Password is required" : null),
    },
  });

  const handleSignup = (values: typeof signupForm.values) => {
    console.log("Signup Data:", {
      name: values.name,
      email: values.email,
      password: values.password,
    });
    signupForm.reset();
    close();
  };

  const handleLogin = (values: typeof loginForm.values) => {
    console.log("Login Data:", {
      email: values.email,
      password: values.password,
    });
    loginForm.reset();
    close();
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    signupForm.reset();
    loginForm.reset();
  };

  return (
    <Box>
      <Button
        rightSection={<LogIn />}
        variant="default"
        className="bg-teal-600! text-white! hover:bg-teal-700! duration-200!"
        onClick={open}
      >
        Sign Up
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title={
          <Text size="xl" fw={700} c="teal.7">
            {isLogin ? "Welcome Back" : "Create Account"}
          </Text>
        }
        centered
        size="md"
        radius="lg"
      >
        <Box p="md">
          {!isLogin ? (
            // Signup Form
            <form onSubmit={signupForm.onSubmit(handleSignup)}>
              <Stack gap="md">
                <TextInput
                  label="Full Name"
                  placeholder="John Doe"
                  leftSection={<User size={18} />}
                  radius="md"
                  size="md"
                  {...signupForm.getInputProps("name")}
                  styles={{
                    input: {
                      backgroundColor: "#f0fdf4",
                      borderColor: signupForm.errors.name
                        ? "#ef4444"
                        : "#99f6e4",
                    },
                  }}
                />

                <TextInput
                  label="Email Address"
                  placeholder="you@example.com"
                  leftSection={<Mail size={18} />}
                  radius="md"
                  size="md"
                  {...signupForm.getInputProps("email")}
                  styles={{
                    input: {
                      backgroundColor: "#f0fdf4",
                      borderColor: signupForm.errors.email
                        ? "#ef4444"
                        : "#99f6e4",
                    },
                  }}
                />

                <PasswordInput
                  label="Password"
                  placeholder="Enter password"
                  leftSection={<Lock size={18} />}
                  radius="md"
                  size="md"
                  {...signupForm.getInputProps("password")}
                  styles={{
                    input: {
                      backgroundColor: "#f0fdf4",
                      borderColor: signupForm.errors.password
                        ? "#ef4444"
                        : "#99f6e4",
                    },
                  }}
                />

                <PasswordInput
                  label="Confirm Password"
                  placeholder="Confirm password"
                  leftSection={<Lock size={18} />}
                  radius="md"
                  size="md"
                  {...signupForm.getInputProps("confirmPassword")}
                  styles={{
                    input: {
                      backgroundColor: "#f0fdf4",
                      borderColor: signupForm.errors.confirmPassword
                        ? "#ef4444"
                        : "#99f6e4",
                    },
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  radius="md"
                  size="md"
                  mt="md"
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Create Account
                </Button>
              </Stack>
            </form>
          ) : (
            // Login Form
            <form onSubmit={loginForm.onSubmit(handleLogin)}>
              <Stack gap="md">
                <TextInput
                  label="Email Address"
                  placeholder="you@example.com"
                  leftSection={<Mail size={18} />}
                  radius="md"
                  size="md"
                  {...loginForm.getInputProps("email")}
                  styles={{
                    input: {
                      backgroundColor: "#f0fdf4",
                      borderColor: loginForm.errors.email
                        ? "#ef4444"
                        : "#99f6e4",
                    },
                  }}
                />

                <PasswordInput
                  label="Password"
                  placeholder="Enter password"
                  leftSection={<Lock size={18} />}
                  radius="md"
                  size="md"
                  {...loginForm.getInputProps("password")}
                  styles={{
                    input: {
                      backgroundColor: "#f0fdf4",
                      borderColor: loginForm.errors.password
                        ? "#ef4444"
                        : "#99f6e4",
                    },
                  }}
                />

                <Group justify="flex-end">
                  <Anchor size="sm" c="teal.7">
                    Forgot password?
                  </Anchor>
                </Group>

                <Button
                  type="submit"
                  fullWidth
                  radius="md"
                  size="md"
                  mt="md"
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Log In
                </Button>
              </Stack>
            </form>
          )}

          <Divider my="xl" label="OR" labelPosition="center" />

          <Text ta="center" size="sm" c="dimmed">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <Anchor
              component="button"
              type="button"
              c="teal.7"
              fw={600}
              onClick={toggleMode}
            >
              {isLogin ? "Sign Up" : "Log In"}
            </Anchor>
          </Text>
        </Box>
      </Modal>
    </Box>
  );
};

export default Authentication;
