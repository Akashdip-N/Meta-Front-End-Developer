import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="white"
      borderRadius="8px"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      overflow="hidden"
      spacing={0}
    >
      <Image src={imageSrc} alt={title} width="100%" height="200px" objectFit="cover" />
      <VStack p={4} alignItems="flex-start">
        <Heading as="h3" size="lg" mb={2} color="#000000">
          {title}
        </Heading>
        <Text mb={4} color="#000000" >{description}</Text>
        <HStack spacing={2} color="#3182ce">
          <Text>View Project</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
