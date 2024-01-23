import Banner from "@/components/Banner";
import JoinToday from "@/components/JoinToday";
import LatestTrailers from "@/components/LatestTrailers";
import Trending from "@/components/Trending";
import WhatsPopular from "@/components/WhatsPopular";

const Home = () => {
  
  return (
    <>
      <Banner />
      <Trending/>
      <LatestTrailers/>
      <WhatsPopular/>
      <JoinToday/>
    </>
  );
};

export default Home;
