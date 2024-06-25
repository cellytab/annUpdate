import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
/* loading not used
no navbar for signing up or logging in
no page layout spinner 
solid*/
function PageLayout({ children }) {
  const { pathname } = useLocation();
  const [user, ,] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  return (
    <Flex>
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* for content on the right */}
      <Box
        className="layout"
        flex={1}
        w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        mx={"auto"}
        bgColor="#CDA2B7"
      >
        {children}
      </Box>
    </Flex>
  );
}

export default PageLayout;
