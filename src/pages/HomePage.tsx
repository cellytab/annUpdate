import { Container, Flex, Box } from "@chakra-ui/react";
import FeedPosts from "../components/FeedPosts/FeedPosts";
/* 
box outline for visibility
no suggested users
solid
*/
function HomePage() {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        {/* <Box
          flex={3}
          mr={20}
          display={{ base: "none", md: "block" }}
          py={10}
          maxW={"300px"}
        >
          Coming Soon...
        </Box> */}
      </Flex>
    </Container>
  );
}

export default HomePage;
