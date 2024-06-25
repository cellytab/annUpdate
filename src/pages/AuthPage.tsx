import { Container, Flex, VStack, Box } from "@chakra-ui/react";
import AuthForm from "../components/Auth/AuthForm";
/* 
Excluded side picture 
Solid
*/
function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <VStack spacing={4} align={"stretch"}>
          <AuthForm />
          {/* <Box textAlign={"center"}>box text</Box> */}
        </VStack>
      </Container>
    </Flex>
  );
}

export default AuthPage;
