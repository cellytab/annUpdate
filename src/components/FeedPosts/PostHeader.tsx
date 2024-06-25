import {
  Avatar,
  Box,
  /*  Button, */
  Flex,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";
/* removed ability to follow or unfollow */
const PostHeader = ({ post, creatorProfile }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
      px={2}
      pt={2}
    >
      <Flex alignItems={"center"} gap={3}>
        {creatorProfile ? (
          <Link to={`/${creatorProfile.username}`}>
            <Avatar
              src={creatorProfile.profilePicURL}
              alt="user profile pic"
              size={"md"}
            />
          </Link>
        ) : (
          <SkeletonCircle size="10" />
        )}

        <Flex
          fontWeight={"bold"}
          gap="2"
          alignItems="center"
          fontSize="medium"
          color="#8D728C"
        >
          {creatorProfile ? (
            <Link to={`/${creatorProfile.username}`}>
              {creatorProfile.username}
            </Link>
          ) : (
            <Skeleton w={"100px"} h={"10px"} />
          )}

          <Box color={"gray.500"}>
            {`•   `} {timeAgo(post.createdAt)}
          </Box>
        </Flex>
      </Flex>
      {/* <Box cursor={"pointer"}>
        <Button
          size={"xs"}
          bg={"transparent"}
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{
            color: "white",
          }}
          transition={"0.2s ease-in-out"}
        >
          Following
        </Button>
      </Box> */}
    </Flex>
  );
};

export default PostHeader;
