import LottiePlayer from 'lottie-react';
import Animation from '../assets/Animation - 1720539023652.json';

const HomeScreen = () => {
  return (
    <div className=" h-[100vh] md:h-[100%] flex flex-col justify-center items-center p-5">
      <div className="mt-[-150px] md:mt-[-10px]">
        <h1 className="text-primary text-2xl md:text-6xl lg:text-7xl italic">
          Welcome to ChowNow
        </h1>
      </div>
      <div className="md:flex justify-center items-center mt-[-50px]">
        <div className="md:pb-10">
          <LottiePlayer animationData={Animation} className="w-[50vw]" />
        </div>
        <div className="text-primary text-2xl md:text-3xl lg:text-4xl italic">
          <h1>Deliciousness Delivered Fast!!!!</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
