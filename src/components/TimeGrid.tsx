import React, { useState } from 'react';
import { LifeData } from '../types';
import { calculateMonthsSpent, getActivityColor } from '../utils/calculations';

interface TimeGridProps {
  userData: LifeData;
  timeAllocation: Record<string, number>;
}

const TimeGrid: React.FC<TimeGridProps> = ({ userData, timeAllocation }) => {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);
  
  // Calculate total months in a 90-year lifespan
  const totalMonths = 90 * 12;
  
  // Calculate months already spent (age * 12)
  const monthsSpent = userData.age * 12;
  
  // Calculate months remaining
  const monthsRemaining = totalMonths - monthsSpent;
  
  // Calculate months for each activity
  const activityMonths = {
    sleep: calculateMonthsSpent(userData.sleepHours, monthsRemaining),
    work: calculateMonthsSpent(userData.workHours, monthsRemaining),
    screen: calculateMonthsSpent(userData.screenTimeHours, monthsRemaining),
    cooking: calculateMonthsSpent(userData.cookingHours, monthsRemaining),
    hygiene: calculateMonthsSpent(userData.hygieneHours, monthsRemaining),
    chores: calculateMonthsSpent(userData.choresHours, monthsRemaining),
    driving: calculateMonthsSpent(userData.drivingHours, monthsRemaining),
  };
  
  // Calculate free time (remaining time after all activities)
  const freeTimeMonths = monthsRemaining - Object.values(activityMonths).reduce((acc, val) => acc + val, 0);
  
  // Determine the dot type for each month
  const determineDotType = (index: number): string => {
    if (index < monthsSpent) {
      return 'spent';
    }
    
    let currentIndex = monthsSpent;
    
    // Check each activity
    if (index < currentIndex + activityMonths.sleep) {
      return 'sleep';
    }
    currentIndex += activityMonths.sleep;
    
    if (index < currentIndex + activityMonths.work) {
      return 'work';
    }
    currentIndex += activityMonths.work;
    
    if (index < currentIndex + activityMonths.cooking) {
      return 'cooking';
    }
    currentIndex += activityMonths.cooking;
    
    if (index < currentIndex + activityMonths.hygiene) {
      return 'hygiene';
    }
    currentIndex += activityMonths.hygiene;
    
    if (index < currentIndex + activityMonths.chores) {
      return 'chores';
    }
    currentIndex += activityMonths.chores;
    
    if (index < currentIndex + activityMonths.driving) {
      return 'driving';
    }
    currentIndex += activityMonths.driving;
    
    if (index < currentIndex + activityMonths.screen) {
      return 'screen';
    }
    currentIndex += activityMonths.screen;
    
    if (index < currentIndex + freeTimeMonths) {
      return 'free';
    }
    
    return 'free';
  };
  
  // Format percentage
  const formatPercentage = (value: number): string => {
    return (value * 100).toFixed(1) + '%';
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-4xl text-center mb-2">
        <p className="text-lg mb-1">1 row = 36 months = 3 years</p>
        <p className="text-sm text-slate-500">Each dot represents one month of your life</p>
      </div>
      
      <div className="grid grid-cols-36 gap-1 mb-8 max-w-4xl mx-auto">
        {Array.from({ length: totalMonths }).map((_, index) => {
          const dotType = determineDotType(index);
          const color = getActivityColor(dotType);
          
          return (
            <div 
              key={index}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-transform duration-200 cursor-pointer ${
                hoveredDot === index ? 'scale-150 z-10' : ''
              }`}
              style={{ 
                backgroundColor: color,
                opacity: dotType === 'spent' ? 0.5 : 1,
                animation: 'fadeIn 0.5s ease-in-out forwards',
                animationDelay: `${index * 2}ms`
              }}
              onMouseEnter={() => setHoveredDot(index)}
              onMouseLeave={() => setHoveredDot(null)}
            />
          );
        })}
      </div>
      
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-indigo-300 mr-2"></div>
            <span className="text-slate-700">Sleep: {formatPercentage(timeAllocation.sleep)}</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-green-400 mr-2"></div>
            <span className="text-slate-700">Work/School: {formatPercentage(timeAllocation.work)}</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-red-400 mr-2"></div>
            <span className="text-slate-700">Cooking/Eating: {formatPercentage(timeAllocation.cooking)}</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-blue-400 mr-2"></div>
            <span className="text-slate-700">Bathroom/Hygiene: {formatPercentage(timeAllocation.hygiene)}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-yellow-300 mr-2"></div>
            <span className="text-slate-700">Chores/Errands: {formatPercentage(timeAllocation.chores)}</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-orange-400 mr-2"></div>
            <span className="text-slate-700">Driving: {formatPercentage(timeAllocation.driving)}</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-slate-700 mr-2"></div>
            <span className="text-slate-700">Screen Time: {formatPercentage(timeAllocation.screen)}</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-white border border-slate-300 mr-2"></div>
            <span className="text-slate-700">Free Time: {formatPercentage(timeAllocation.free)}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 w-full max-w-4xl">
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <h3 className="font-semibold mb-2">Key Insights:</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>You've already used <span className="font-medium">{monthsSpent} months</span> of your life</li>
            <li>You have approximately <span className="font-medium">{monthsRemaining} months</span> remaining (assuming a 90-year lifespan)</li>
            <li>You'll spend about <span className="font-medium">{activityMonths.screen} months</span> looking at screens</li>
            <li>Your screen time takes up <span className={`font-medium ${
              timeAllocation.screen > 0.25 ? 'text-red-600' : 
              timeAllocation.screen > 0.15 ? 'text-yellow-600' : 
              'text-green-600'
            }`}>{formatPercentage(timeAllocation.screen)}</span> of your remaining time</li>
            <li>Your free time represents <span className="font-medium">{formatPercentage(timeAllocation.free)}</span> of your remaining life</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimeGrid;