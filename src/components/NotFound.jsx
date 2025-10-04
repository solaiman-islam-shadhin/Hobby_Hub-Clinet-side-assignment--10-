import React from 'react'
import { Link } from 'react-router'

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
      <div className="text-center text-primary-content">
        <div className="animate-bounce mb-8">
          <h1 className="text-9xl font-bold animate-pulse">404</h1>
        </div>
        
        <div className="animate-fade-in-up">
          <h2 className="text-4xl font-semibold mb-4">Oops! Page Not Found</h2>
          <p className="text-xl mb-8 opacity-80">
            The page you're looking for seems to have wandered off...
          </p>
        </div>

        <div className="animate-spin-slow mb-8">
          <div className="text-8xl">🎯</div>
        </div>

        <div className="space-y-4">
          <Link 
            to="/" 
            className="btn btn-accent btn-lg animate-pulse hover:scale-105 transition-transform"
          >
            🏠 Go Home
          </Link>
          <div>
            <Link 
              to="/all-groups" 
              className="btn btn-outline btn-primary-content hover:scale-105 transition-transform"
            >
              Browse Groups
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  )
}