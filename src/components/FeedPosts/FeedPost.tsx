import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
/* solid */
const FeedPost = ({ post }) => {
  const { userProfile } = useGetUserProfileById(post.createdBy);

  return (
    <Box bgColor="white" borderRadius={10} mb={8}>
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={2} overflow={"hidden"} borderColor="pink">
        <Image src={post.imageURL} alt={"FEED POST IMG"} />
      </Box>
      <PostFooter post={post} creatorProfile={userProfile} />
    </Box>
  );
};

export default FeedPost;
