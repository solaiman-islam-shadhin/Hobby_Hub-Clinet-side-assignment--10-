import React from 'react'
import { Sliders } from './Sliders'
import { useLoaderData, Link } from 'react-router';
import { GroupCard } from './GroupCard';

export const Home = () => {
  const groupdata = useLoaderData().slice(0, 6);

  
  return (
    <div>
      <Sliders/>

      <div>
        <h1 className='text-xl md:text-3xl font-bold text-center mt-10'>Featured Groups</h1>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10'>
          {
            groupdata.map(group => <GroupCard key={group._id} group={group}></GroupCard>)
          }
        </div>
        
        <div className="text-center mb-10">
          <Link to="/all-groups" className="btn btn-accent text-base-content btn-lg">
            View All Groups
          </Link>
        </div>
      </div>

      {/* Popular Categories Section */}
      <div className=" py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
              <div className="card-body text-center">
                <div className="text-4xl mb-2">🎨</div>
                <h3 className="font-semibold">Arts & Crafts</h3>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
              <div className="card-body text-center">
                <div className="text-4xl mb-2">🏃</div>
                <h3 className="font-semibold">Sports & Fitness</h3>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
              <div className="card-body text-center">
                <div className="text-4xl mb-2">🎮</div>
                <h3 className="font-semibold">Gaming</h3>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
              <div className="card-body text-center">
                <div className="text-4xl mb-2">📚</div>
                <h3 className="font-semibold">Learning</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="card bg-primary text-primary-content shadow-xl">
                <div className="card-body">
                  <div className="text-5xl mb-4">1️⃣</div>
                  <h3 className="text-xl font-bold mb-2">Browse Groups</h3>
                  <p>Discover hobby groups that match your interests</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="card bg-secondary text-secondary-content shadow-xl">
                <div className="card-body">
                  <div className="text-5xl mb-4">2️⃣</div>
                  <h3 className="text-xl font-bold mb-2">Join or Create</h3>
                  <p>Join existing groups or create your own community</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="card bg-accent text-accent-content shadow-xl">
                <div className="card-body">
                  <div className="text-5xl mb-4">3️⃣</div>
                  <h3 className="text-xl font-bold mb-2">Connect & Enjoy</h3>
                  <p>Meet like-minded people and enjoy your hobbies together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
