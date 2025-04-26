import React, { useState, useEffect } from 'react';
import TimeForm from '../components/TimeForm';
import TimeGrid from '../components/TimeGrid';
import { LifeData } from '../types';
import { calculateTimeAllocation } from '../utils/calculations';

const VisualizerPage: React.FC = () => {
  const [userData, setUserData] = useState<LifeData | null>(null);
  const [timeAllocation, setTimeAllocation] = useState<Record<string, number> | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (userData) {
      const allocation = calculateTimeAllocation(userData);
      setTimeAllocation(allocation);
    }
  }, [userData]);

  const handleDataSubmit = (data: LifeData) => {
    setUserData(data);
    setIsSubmitted(true);
    // Scroll to results
    setTimeout(() => {
      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Visualize Your Time</h1>
        <p className="text-lg text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Enter your details below to see a visualization of how you're spending your life.
        </p>

        <div className="max-w-3xl mx-auto mb-16">
          <TimeForm onSubmit={handleDataSubmit} />
        </div>

        {isSubmitted && userData && timeAllocation && (
          <div id="results-section" className="mt-12 pt-8 border-t border-slate-200">
            <div className="text-center mb-8 opacity-0 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Life in Months</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Based on a life expectancy of 90 years, here's how you're spending your remaining time:
              </p>
            </div>

            <div className="mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <TimeGrid userData={userData} timeAllocation={timeAllocation} />
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-bold mb-4">What Does This Mean?</h3>
              <p className="mb-4 text-slate-700">
                Each dot in the grid represents one month of your life. The colored dots show how your time is allocated across different activities.
              </p>
              <p className="mb-4 text-slate-700">
                {userData.screenTimeHours > 5 ? (
                  <span className="font-medium text-red-600">Your screen time is consuming a significant portion of your free time. Consider how this aligns with your life goals and values.</span>
                ) : userData.screenTimeHours > 2 ? (
                  <span className="font-medium text-yellow-600">Your screen time is moderate but still takes up a notable portion of your free time. Is this the best investment of your time?</span>
                ) : (
                  <span className="font-medium text-green-600">Your screen time is relatively low compared to the average. You're preserving more of your free time for other activities.</span>
                )}
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <h4 className="font-medium mb-2">Remember:</h4>
                <p className="text-slate-700 italic">
                  "The body, mind, and character that you will have in the future are being actively shaped by how you choose to use your time today."
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisualizerPage;