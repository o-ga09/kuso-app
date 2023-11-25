import { Box } from "./common/components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Border from "./components/Border";
import Search from "./components/Search";

export default function Home() {
  return (
    <Box bg={"gray.200"}>
      <Header />
      <Search />
      <Contents title={"test"} comment={"test"} bgColor={"green.300"} />
      <Border />
      <Footer />
    </Box>
  );
}
