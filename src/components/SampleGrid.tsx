import React from 'react';

const SampleGrid: React.FC = () => {
  const activities = [
    { name: 'Sleep', color: 'bg-indigo-300', months: 36 },
    { name: 'Work/School', color: 'bg-green-400', months: 24 },
    { name: 'Cooking/Eating', color: 'bg-red-400', months: 12 },
    { name: 'Hygiene', color: 'bg-blue-400', months: 12 },
    { name: 'Chores', color: 'bg-yellow-300', months: 12 },
    { name: 'Driving', color: 'bg-orange-400', months: 12 },
    { name: 'Screen Time', color: 'bg-slate-700', months: 24 },
    { name: 'Free Time', color: 'bg-white border border-slate-200', months: 12 },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-12 gap-1 max-w-2xl">
        {activities.flatMap((activity, activityIndex) =>
          Array.from({ length: activity.months }).map((_, i) => (
            <div
              key={`${activityIndex}-${i}`}
              className={`w-4 h-4 rounded-full ${activity.color} transition-transform duration-200 hover:scale-150`}
              style={{
                animation: 'fadeIn 0.5s ease-in-out forwards',
                animationDelay: `${(activityIndex * activity.months + i) * 10}ms`,
              }}
            />
          ))
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded-full ${activity.color}`} />
            <span className="text-sm text-slate-600">{activity.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SampleGrid;