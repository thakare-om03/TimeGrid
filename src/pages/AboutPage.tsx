import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About TimeGrid</h1>
        
        <div className="prose prose-slate lg:prose-lg mx-auto">
          <p className="lead text-lg text-slate-700">
            TimeGrid was inspired by Dino Ambrosi's powerful TED Talk, 
            "The Battle for Your Time: Exposing the Costs of Social Media," which highlights 
            the finite nature of our time and how we often unknowingly squander it.
          </p>
          
          <h2>The Concept</h2>
          <p>
            Each dot in our visualization represents one month of your life, assuming a 90-year lifespan.
            When you see your entire life laid out this way, it becomes clear just how precious and limited 
            your time truly is.
          </p>
          
          <h2>Why We Built This</h2>
          <p>
            In today's digital age, screen time is consuming an unprecedented portion of our lives. 
            The average 18-year-old is on pace to spend 93% of their remaining free time looking at screens.
            This tool aims to create awareness about how we allocate our most valuable resource—time.
          </p>
          
          <h2>How It Works</h2>
          <p>
            Our algorithm takes your current age and daily habits to calculate how much time you'll
            likely spend on different activities throughout your life. The visualization then displays
            this breakdown as a grid of colored dots, making it easy to see where your time is going.
          </p>
          
          <blockquote>
            "How you spend this time is going to determine the quality of your life."
            <footer>— Dino Ambrosi</footer>
          </blockquote>
          
          <h2>The Original TED Talk</h2>
          <p>
            We highly recommend watching the original TED Talk that inspired this project:
          </p>
          <div className="not-prose flex justify-center my-6">
            <a 
              href="https://www.youtube.com/watch/4TMPXK9tw5U" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition-colors"
            >
              Watch on YouTube
              <ExternalLink size={16} />
            </a>
          </div>
          
          <h2>Take Action</h2>
          <p>
            Now that you've learned about the importance of intentional time use, we invite you to:
          </p>
          <ul>
            <li>Create your own time visualization</li>
            <li>Reflect on your current habits and priorities</li>
            <li>Make conscious decisions about how you invest your remaining time</li>
          </ul>
          
          <div className="not-prose text-center mt-8">
            <Link 
              to="/visualize" 
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
            >
              Visualize Your Time Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;