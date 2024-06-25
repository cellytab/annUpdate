import { Box, Image, VStack } from "@chakra-ui/react";
import Login from "./Login";
/* import Signup from "./Signup"; */
/*
Main differences
Does not include google auth
Temporarily disabled sign up
Solid!
 */
const AuthForm = () => {
  /* const [isLogin, setIsLogin] = useState(true); */

  return (
    <>
      <Box
        border={"1px solid gray"}
        borderRadius={4}
        padding={5}
        bgColor="white"
      >
        <VStack spacing={4}>
          <Image
            src="https://i.pinimg.com/564x/62/89/bd/6289bd4b417a21f0360e9019012d479f.jpg"
            h={24}
            cursor={"pointer"}
            alt="Saturn"
          />

          {/* {isLogin ? <Login /> : <Signup />} */}
          <Login />
        </VStack>
      </Box>

      {/* <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"pink.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box> */}
    </>
  );
};

export default AuthForm;
