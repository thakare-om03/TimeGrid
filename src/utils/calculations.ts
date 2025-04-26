import { LifeData } from '../types';

// Calculate how time is allocated across different activities
export const calculateTimeAllocation = (userData: LifeData): Record<string, number> => {
  const totalHoursPerDay = 24;
  
  // Calculate hours spent on all activities
  const sleepHours = userData.sleepHours;
  const workHours = userData.workHours;
  const cookingHours = userData.cookingHours;
  const hygieneHours = userData.hygieneHours;
  const choresHours = userData.choresHours;
  const drivingHours = userData.drivingHours;
  const screenTimeHours = userData.screenTimeHours;
  
  // Calculate free time (time not allocated to specific activities)
  const allActivitiesHours = sleepHours + workHours + cookingHours + 
    hygieneHours + choresHours + drivingHours;
  
  // Free time should not include screen time since it's part of free time allocation
  const totalFreeTimeHours = totalHoursPerDay - allActivitiesHours;
  
  // Calculate what portion of free time is spent on screens vs. truly free
  const screenTimePortion = Math.min(screenTimeHours / totalFreeTimeHours, 1);
  const trulyFreePortion = Math.max(1 - screenTimePortion, 0);
  
  // Calculate proportions of total time
  const sleepProportion = sleepHours / totalHoursPerDay;
  const workProportion = workHours / totalHoursPerDay;
  const cookingProportion = cookingHours / totalHoursPerDay;
  const hygieneProportion = hygieneHours / totalHoursPerDay;
  const choresProportion = choresHours / totalHoursPerDay;
  const drivingProportion = drivingHours / totalHoursPerDay;
  
  // Screen time and free time are proportions of the total day
  const screenTimeDayProportion = (totalFreeTimeHours * screenTimePortion) / totalHoursPerDay;
  const freeTimeDayProportion = (totalFreeTimeHours * trulyFreePortion) / totalHoursPerDay;
  
  return {
    sleep: sleepProportion,
    work: workProportion,
    cooking: cookingProportion,
    hygiene: hygieneProportion,
    chores: choresProportion,
    driving: drivingProportion,
    screen: screenTimeDayProportion,
    free: freeTimeDayProportion
  };
};

// Calculate how many months will be spent on an activity
export const calculateMonthsSpent = (hoursPerDay: number, totalMonths: number): number => {
  const proportion = hoursPerDay / 24;
  return Math.round(proportion * totalMonths);
};

// Get color for each activity type
export const getActivityColor = (activityType: string): string => {
  const colors: Record<string, string> = {
    spent: '#CBD5E1', // slate-300
    sleep: '#A5B4FC', // indigo-300
    work: '#4ADE80', // green-400
    cooking: '#F87171', // red-400
    hygiene: '#60A5FA', // blue-400
    chores: '#FCD34D', // yellow-300
    driving: '#FB923C', // orange-400
    screen: '#334155', // slate-700
    free: '#FFFFFF', // white
  };
  
  return colors[activityType] || colors.free;
};