
import { Sliders } from './Sliders'
import { useLoaderData, Link } from 'react-router';
import { GroupCard } from './GroupCard';
import { Typewriter } from 'react-simple-typewriter'
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import Lottie from 'lottie-react';
import lottiefiles from '../assets/Group Gathering and chatting.json';
import { AuthContext } from '../Context/AuthContext';


export const Home = () => {
  const groupdata = useLoaderData().slice(0, 6);

  return (
    <div>
      {/* Welcome Hero Section */}
      <section className="hero container mx-auto mb-5 ">
        <div className=" flex-col flex lg:flex-row-reverse justify-between items-center">
          <Fade direction="right" triggerOnce>
            <div className="w-full hover:scale-105 hover:rotate-2 transition-transform">
              <Lottie  size={200} animationData={lottiefiles} loop={true} />
            </div>
          </Fade>
          <Fade direction="left" triggerOnce>
            <div className="w-full">
              <div className="py-4">
                <h2 className="text-2xl md:text-4xl font-bold">
                  <Typewriter
                    words={['Discover Your Perfect Hobby Community', 'Connect With Like-Minded People', 'Start Your Journey Today']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
              </div>
              <p className="py-6 text-lg">
                Join a vibrant community of hobby enthusiasts. Discover groups that match your interests,
                connect with like-minded people, and turn your passions into lasting friendships.
              </p>
              <div className="flex gap-4">
                <Link to="/all-groups" className="btn btn-accent text-base-content btn-lg">
                  Explore Groups
                </Link>
                <Link to="/create-group" className="btn btn-outline btn-lg">
                  Create Group
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <Sliders />



      <Fade>
        <div>
          <h1 className='text-xl md:text-3xl font-bold text-center mt-10'>Featured Groups</h1>
          <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10'>
            {
              groupdata.map((group, index) => (
                <Slide key={group._id} direction="up" delay={index * 100} triggerOnce>
                  <GroupCard group={group}></GroupCard>
                </Slide>
              ))
            }
          </div>

          <div className="text-center mb-10">
            <Link to="/all-groups" className="btn btn-accent text-base-content btn-lg">
              View All Groups
            </Link>
          </div>
        </div>
      </Fade>

      {/* Popular Categories Section */}
      <div className=" py-16">
        <div className="container mx-auto px-6">
          <Fade triggerOnce>
            <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          </Fade>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Slide direction="up" triggerOnce>
              <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
                <div className="card-body text-center">
                  <div className="text-4xl mb-2">🎨</div>
                  <h3 className="font-semibold text-xs md:text-base">Arts & Crafts</h3>
                </div>
              </div>
            </Slide>
            <Slide direction="up" delay={100} triggerOnce>
              <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
                <div className="card-body text-center">
                  <div className="text-4xl mb-2">🏃</div>
                  <h3 className="font-semibold text-xs md:text-base">Sports & Fitness</h3>
                </div>
              </div>
            </Slide>
            <Slide direction="up" delay={200} triggerOnce>
              <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
                <div className="card-body text-center">
                  <div className="text-4xl mb-2">🎮</div>
                  <h3 className="font-semibold text-xs md:text-base">Gaming</h3>
                </div>
              </div>
            </Slide>
            <Slide direction="up" delay={300} triggerOnce>
              <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
                <div className="card-body text-center">
                  <div className="text-4xl mb-2">📚</div>
                  <h3 className="font-semibold text-xs md:text-base">Learning</h3>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <Fade triggerOnce>
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          </Fade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Zoom delay={100} triggerOnce>
              <div className="text-center">
                <div className="card bg-base-100 text-error border border-base-content shadow-xl">
                  <div className="card-body">
                    <div className="text-5xl text-accent font-semibold mb-4">1️</div>
                    <h3 className="text-xl font-bold mb-2">Browse Groups</h3>
                    <p>Discover hobby groups that match your interests</p>
                  </div>
                </div>
              </div>
            </Zoom>
            <Zoom delay={200} triggerOnce>
              <div className="text-center">
                <div className="card bg-base-100 text-accent border border-base-content shadow-xl">
                  <div className="card-body">
                    <div className="text-5xl text-primary font-semibold mb-4">2️</div>
                    <h3 className="text-xl font-bold mb-2">Join or Create</h3>
                    <p>Join existing groups or create your own community</p>
                  </div>
                </div>
              </div>
            </Zoom>
            <Zoom delay={300} triggerOnce>
              <div className="text-center">
                <div className="card bg-base-100 text-primary border border-base-content shadow-xl">
                  <div className="card-body">
                    <div className="text-5xl text-error font-semibold mb-4">3️</div>
                    <h3 className="text-xl font-bold mb-2">Connect & Enjoy</h3>
                    <p>Meet like-minded people and enjoy your hobbies together</p>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  )
}
