import { Tooltip, Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaQuestion as AboutIcon } from "react-icons/fa6";

function About() {
  return (
    <Tooltip
      hasArrow
      label={"About"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Link
        display={"flex"}
        to={"/about"}
        as={RouterLink}
        alignItems={"center"}
        gap={4}
        _hover={{ bg: "#EECBC3" }}
        borderRadius={6}
        p={2}
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <AboutIcon size={25} color="#E3B3B7" />
        <Box className="sidebar-text" display={{ base: "none", md: "block" }}>
          About
        </Box>
      </Link>
    </Tooltip>
  );
}

export default About;
