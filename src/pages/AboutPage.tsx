import { Container, VStack, Box, Heading, Flex } from "@chakra-ui/react";
import { FaHeart as Heart } from "react-icons/fa";

function AboutPage() {
  return (
    <Container maxW={"container.lg"}>
      <VStack gap={20} my={10}>
        <Flex alignItems={"center"} gap={5} color="white">
          <Heart />
          <Heading color="white">Happy Anniversary</Heading>
          <Heart />
        </Flex>
        <Box
          flex={2}
          py={10}
          mx={10}
          borderRadius={20}
          bg="white"
          color="#8D728C"
        >
          <Box mt={10} mx={20}>
            Grace, I can't believe how far we've come in the past three years.
            When we first started dating, I had a really good feeling about us
            and I knew we had something beautifully rare. We talked about how
            the universe bided its time and brought us together when the timing
            was right. I was never a spiritual person, but I think being with
            you has made me believe that there is something.
          </Box>
          <Box mt={10} mx={20}>
            Now we've reached three wonderful years together, so different than
            our high school selves and also different from each other. Our
            differences have always made us stronger as a couple, and they are
            the reasons I love you so much. Your cleverness, witty sense of
            humor, and passion for adventure make you a bright light in
            everyone's life, and I'm lucky enough that I get to spend my
            lifetime being with you.
          </Box>
          <Box mt={10} mx={20}>
            I'm gonna miss you like crazy these next few months. Again, I
            appreciate you being so supportive of me despite this being a tough
            adjustment. Which is why I've made this lil website. I plan to add
            more features in the coming months, but for now it's our little
            social media so we can keep up with each other.
          </Box>
          <Box mt={10} mx={20}>
            Happy anniversary, my love.
          </Box>
        </Box>
      </VStack>
    </Container>
  );
}

export default AboutPage;
