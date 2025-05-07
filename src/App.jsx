import FirstImage from "./component/FirstImage";
import FollowSection from "./component/FollowSection";
import Footer from "./component/Footer";
import LastSection from "./component/LastSection";
import MobNav from "./component/MobNav";
import Nav from "./component/Nav";
import NewsSection from "./component/NewsSection";
import Section from "./component/Section";
import VideoSection from "./component/VideoSection";

function App() {
  return (
    <>
      <MobNav />
      <FirstImage />
      <Nav/>
      <Section  />
      <NewsSection />
      <FollowSection />
      <VideoSection />
      <LastSection />
      <Footer />
    </>
  );
}

export default App;
