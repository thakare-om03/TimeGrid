import React, { useState } from 'react';
import { LifeData } from '../types';

interface TimeFormProps {
  onSubmit: (data: LifeData) => void;
}

const TimeForm: React.FC<TimeFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<LifeData>({
    age: 25,
    screenTimeHours: 4,
    sleepHours: 8,
    workHours: 8,
    cookingHours: 1,
    hygieneHours: 1,
    choresHours: 1,
    drivingHours: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseFloat(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="col-span-2">
          <label className="block text-lg font-medium mb-2 text-slate-700">How old are you?</label>
          <input
            type="range"
            name="age"
            min="1"
            max="89"
            value={formData.age}
            onChange={handleChange}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-sm text-slate-500 mt-1">
            <span>1</span>
            <span className="font-medium text-teal-600">{formData.age} years</span>
            <span>89</span>
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium mb-2 text-slate-700">
            Daily screen time (hours)
          </label>
          <input
            type="range"
            name="screenTimeHours"
            min="0"
            max="16"
            step="0.5"
            value={formData.screenTimeHours}
            onChange={handleChange}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-sm text-slate-500 mt-1">
            <span>0</span>
            <span className={`font-medium ${
              formData.screenTimeHours > 6 
                ? 'text-red-600' 
                : formData.screenTimeHours > 3 
                  ? 'text-yellow-600' 
                  : 'text-green-600'
            }`}>
              {formData.screenTimeHours} hours
            </span>
            <span>16</span>
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium mb-2 text-slate-700">
            Sleep time (hours per day)
          </label>
          <input
            type="range"
            name="sleepHours"
            min="4"
            max="12"
            step="0.5"
            value={formData.sleepHours}
            onChange={handleChange}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-sm text-slate-500 mt-1">
            <span>4</span>
            <span className="font-medium text-teal-600">{formData.sleepHours} hours</span>
            <span>12</span>
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium mb-2 text-slate-700">
            Work/School (hours per day)
          </label>
          <input
            type="range"
            name="workHours"
            min="0"
            max="12"
            step="0.5"
            value={formData.workHours}
            onChange={handleChange}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-sm text-slate-500 mt-1">
            <span>0</span>
            <span className="font-medium text-teal-600">{formData.workHours} hours</span>
            <span>12</span>
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium mb-2 text-slate-700">
            Cooking/Eating (hours per day)
          </label>
          <input
            type="range"
            name="cookingHours"
            min="0.5"
            max="4"
            step="0.5"
            value={formData.cookingHours}
            onChange={handleChange}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-sm text-slate-500 mt-1">
            <span>0.5</span>
            <span className="font-medium text-teal-600">{formData.cookingHours} hours</span>
            <span>4</span>
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium mb-2 text-slate-700">
            Hygiene (hours per day)
          </label>
          <input
            type="range"
            name="hygieneHours"
            min="0.5"
            max="3"
            step="0.5"
            value={formData.hygieneHours}
            onChange={handleChange}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-sm text-slate-500 mt-1">
            <span>0.5</span>
            <span className="font-medium text-teal-600">{formData.hygieneHours} hours</span>
            <span>3</span>
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium mb-2 text-slate-700">
            Chores/Errands (hours per day)
          </label>
          <input
            type="range"
            name="choresHours"
            min="0"
            max="4"
            step="0.5"
            value={formData.choresHours}
            onChange={handleChange}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-sm text-slate-500 mt-1">
            <span>0</span>
            <span className="font-medium text-teal-600">{formData.choresHours} hours</span>
            <span>4</span>
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium mb-2 text-slate-700">
            Driving/Commuting (hours per day)
          </label>
          <input
            type="range"
            name="drivingHours"
            min="0"
            max="4"
            step="0.5"
            value={formData.drivingHours}
            onChange={handleChange}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-sm text-slate-500 mt-1">
            <span>0</span>
            <span className="font-medium text-teal-600">{formData.drivingHours} hours</span>
            <span>4</span>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          type="submit"
          className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
        >
          Visualize My Time
        </button>
      </div>
    </form>
  );
};

export default TimeForm;