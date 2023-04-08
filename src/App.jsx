import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import tower from "./assets/tower.png";
import tower1 from "./assets/tower1.jpg";
import tower2 from "./assets/tower2.jpg";
import tower3 from "./assets/tower3.jpg";
import tower4 from "./assets/tower4.jpg";
import tower5 from "./assets/tower5.jpg";
import tower6 from "./assets/tower6.jpg";
import {FiPlus} from "react-icons/fi"
import Nav from "./Nav"

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Nav />
      <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-orange-200 to-orange-100">
        <div className="w-screen h-screen flex items-center justify-center flex-col" id="home">
          <h1 className="textx flex flex-row items-start">
            <span className="span1 inline-block">T</span>
            <span className="span2 inline-block">O</span>
            <span className="span3 inline-block">W</span>
            <span className="span4 inline-block">E</span>
            <span className="span5 inline-block">R</span>
            <span className="span2 inline-block text-6xl">
              <FiPlus />
            </span>
          </h1>
        </div>
        <div className="w-full min-h-screen flex flex-row items-center justify-center relative pt-40">
            <div className="h-full w-1/2 sm:w-1/4 sm:ml-5 lg:w-1/5" data-aos="fade-right" data-aos-delay="400">
              <img src={tower} alt="" className="w-full borderx" />
            </div>
            <h1 className="text-7xl tracking-widest leading-normal font-medium pl-2 sm:pl-5 sm:w-3/4 sm:text-8xl lg:text-9xl lg:w-4/5">WE BUILD ANY TOWER<br />THAT YOU WANT</h1>
        </div>
        <div className="w-full min-h-screen flex flex-col items-center pt-40" id="works">
          <h1 className="text-9xl">TOWERS THAT WE BUILT</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-40 xl:grid-cols-3 place-content-center w-full px-20 pt-20">
            <div className="flex flex-col items-center justify-center mb-20 md:mb-1 hover:-translate-y-4">
              <div className="bg h-80 w-80 rounded-full" style={{backgroundImage: `url(${tower1})`}}></div>
              <p className="text-6xl my-4 tracking-wider">BRITISH STONE TOWER</p>
            </div>
            <div className="flex flex-col items-center justify-center mb-20 md:mb-1 hover:-translate-y-4">
              <div className="bg h-80 w-80 rounded-full" style={{backgroundImage: `url(${tower2})`}}></div>
              <p className="text-6xl my-4 tracking-wider">A LIGHT HOUSE</p>
            </div>
            <div className="flex flex-col items-center justify-center mb-20 md:mb-1 hover:-translate-y-4">
              <div className="bg h-80 w-80 rounded-full" style={{backgroundImage: `url(${tower3})`}}></div>
              <p className="text-6xl my-4 tracking-wider">THE PIZZA TOWER</p>
            </div>
            <div className="flex flex-col items-center justify-center mb-20 md:mb-1 hover:-translate-y-4">
              <div className="bg h-80 w-80 rounded-full" style={{backgroundImage: `url(${tower4})`}}></div>
              <p className="text-6xl my-4 tracking-wider">A TWISTY TOWER</p>
            </div>
            <div className="flex flex-col items-center justify-center mb-20 md:mb-1 hover:-translate-y-4">
              <div className="bg h-80 w-80 rounded-full" style={{backgroundImage: `url(${tower5})`}}></div>
              <p className="text-6xl my-4 tracking-wider">A PRETTY TOWER</p>
            </div>
            <div className="flex flex-col items-center justify-center hover:-translate-y-4">
              <div className="bg h-80 w-80 rounded-full" style={{backgroundImage: `url(${tower6})`}}></div>
              <p className="text-6xl my-4 tracking-wider">A CLASSIC TOWER</p>
            </div>
          </div>
        </div>
        <div className="w-full min-h-screen flex flex-col items-center" id="plans">
          <h1 className="text-9xl mb-20 mt-36">OUR PLANS</h1>
          <div className="flex flex-col items-center w-full lg:flex-row lg:px-8">
          <div className="bg-orange-500 w-2/3 hover:scale-110 sm:w-1/2 mb-10 flex flex-col items-center justify-between p-3">
              <p className="text-8xl tracking-wider my-2">PREMIUM</p>
              <p className="my-8 text-5xl tracking-widest leading-normal">In this plan we will build a beautiful tower for you which has anything that you need</p>
              <button className="bg-black text-orange-500 p-3 text-5xl tracking-widest my-2 hover:px-10">Purchase</button>
            </div>
            <div className="bg-orange-400 w-2/3 hover:scale-110 sm:w-1/2 mb-10 flex flex-col items-center justify-between p-3 lg:mx-10">
              <p className="text-8xl tracking-wider my-2">PRO</p>
              <p className="my-8 text-5xl tracking-widest leading-normal">In this plan we will build half of the tower and you have to build the rest yourself</p>
              <button className="bg-black text-orange-500 p-3 text-5xl tracking-widest my-2 hover:px-10">Purchase</button>
            </div>
            <div className="bg-orange-300 w-2/3 hover:scale-110 sm:w-1/2 mb-10 flex flex-col items-center justify-between p-3">
              <p className="text-8xl tracking-wider my-2">BASIC</p>
              <p className="my-8 text-5xl tracking-widest leading-normal">In this plan we just gonna give you the map of the tower that we are gonna build</p>
              <button className="bg-black text-orange-500 p-3 text-5xl tracking-widest my-2 hover:px-10">Purchase</button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center" id="contact">
          <h1 className="text-9xl mt-20 mb-10">LET'S BUILD A TOWER</h1>
          <div className="text-5xl sm:text-7xl">
            <p className="mb-10 tracking-widest p-4">EMAIL: towerplus@gmail.com</p>
            <p className="mb-10 tracking-widest p-4">Phone: 999-486-712</p>
            <p className="mb-10 tracking-widest p-4">Location: USA</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
