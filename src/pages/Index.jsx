import { Box, Container, Heading, SimpleGrid, Text, Button, Image } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h1" mb={4} textAlign="center" size="4xl">
        AI Therapy
      </Heading>
      <Text fontSize="xl" mb={6} textAlign="center">
        Revolutionizing mental health support with AI.
      </Text>
      <Button colorScheme="blue" size="lg">
        Start Your Session
      </Button>
    </Container>
  );
};

const AIModelCard = ({ name, description, icon }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} textAlign="center">
      <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaSUyMHJvYm90fGVufDB8fHx8MTcxNDI5MTkxM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Model" boxSize="150px" mx="auto" mb={4} />
      <Heading as="h3" size="lg" mb={2}>
        {name}
      </Heading>
      <Text mb={4}>{description}</Text>
      <Button leftIcon={icon} colorScheme="blue" variant="outline">
        Start Session
      </Button>
    </Box>
  );
};

export default Index;
