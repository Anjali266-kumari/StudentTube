import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SubjectGrid from "../components/SubjectGrid";
import ChannelList from "../components/ChannelList";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SubjectGrid />

      <div className="grid lg:grid-cols-3 gap-6 px-10 pb-20">
        <div className="lg:col-span-2">
          <ChannelList />
        </div>
      </div>
    </>
  );
};

export default Home;
