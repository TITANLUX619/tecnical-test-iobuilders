import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import useLogic from "./SignIn.logic";

export default function SingInComponent() {
  const { signIn, onEmailChange, onPasswordChange } = useLogic();

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack minW={"75vw"} spacing={8} mx={"50"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={onEmailChange} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input onChange={onPasswordChange} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Button
                onClick={signIn}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
              <Stack pt={6}>
                <Text align={"center"}>
                  Or{" "}
                  <Link href={"/sign-up"} color={"blue.400"}>
                    Sign up
                  </Link>{" "}
                  instead.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
