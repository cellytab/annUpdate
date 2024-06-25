import CreatePost from "./CreatePost";
import Home from "./Home";
/* import Notifications from "./Notifications"; */
import ProfileLink from "./ProfileLink";
/*import Search from "./Search"; */
import About from "./About";
/* 
Not all pages
solid
 */
const SidebarItems = () => {
  return (
    <>
      <Home />
      {/* <Search />*/}
      {/* <Notifications /> */}
      <CreatePost />
      <About />
      <ProfileLink />
    </>
  );
};

export default SidebarItems;
