import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const avatar = "https://i.pravatar.cc/150?img=7";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} textAlign="center">
      <Avatar
        src={avatar}
        name="Pete"
        size="2xl"
        mb={4}
        borderWidth={2}
        borderColor="white"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
        _hover={{ boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
        transition="box-shadow 0.3s ease-in-out"
      />
      <Heading as="h1" fontSize="1xl" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" fontSize="5xl" color="white">
        {bio1}
      </Heading>
      <Heading as="h2" fontSize="5xl" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
