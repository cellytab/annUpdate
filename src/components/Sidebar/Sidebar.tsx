import { Box, Button, Flex, Link, Tooltip, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import { Logo } from "../../assets/constants";
/* import { BiLogOut as LogoutIcon } from "react-icons/bi"; */
import { TbLogout2 as LogoutIcon } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";
/* 
My logo and website title
solid
 */
function Sidebar() {
  const { handleLogout, isLoggingOut } = useLogout();
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor="white"
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          <Image src="../src/assets/logo.png" h="50px" overflow="hidden" />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "block", md: "none" }}
          cursor="pointer"
        >
          {/* <Logo /> */}
          <Image
            src="https://i.pinimg.com/564x/62/89/bd/6289bd4b417a21f0360e9019012d479f.jpg"
            boxSize="50px"
            cursor={"pointer"}
            alt="Saturn"
          />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <SidebarItems />
        </Flex>

        {/* LOGOUT */}
        <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            onClick={handleLogout}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "#ECC6BD" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={"auto"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <LogoutIcon size={25} color="#E3B3B7" />
            <Button
              color="#8D728C"
              display={{ base: "none", md: "block" }}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              isLoading={isLoggingOut}
              fontWeight="normal"
            >
              Logout
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
}

export default Sidebar;
