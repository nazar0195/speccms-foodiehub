"use client";
import React, { useState } from 'react';

type Filters = {
  categories: string[];
  dietary: string[];
  difficulties: string[];
  timeRanges: string[];
};

const categoryOptions = ['Appetizers', 'Main Course', 'Desserts', 'Beverages', 'Snacks'];
const dietaryOptions = ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free', 'Nut-Free'];
const difficultyOptions = ['Easy', 'Medium', 'Hard'];
const timeRangeOptions = ['Under 15 min', '15-30 min', '30-60 min', 'Over 60 min'];

const FilterSidebar: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    dietary: [],
    difficulties: [],
    timeRanges: []
  });

  const handleCheckboxChange = (group: keyof Filters, option: string) => {
    setFilters(prev => {
      const current = prev[group];
      const updated = current.includes(option)
        ? current.filter(item => item !== option)
        : [...current, option];
      return { ...prev, [group]: updated };
    });
  };

  return (
    <aside className="w-64 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Categories</h3>
        {categoryOptions.map(option => (
          <label key={option} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={filters.categories.includes(option)}
              onChange={() => handleCheckboxChange('categories', option)}
              className="mr-2"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Dietary Preferences</h3>
        {dietaryOptions.map(option => (
          <label key={option} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={filters.dietary.includes(option)}
              onChange={() => handleCheckboxChange('dietary', option)}
              className="mr-2"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Difficulty</h3>
        {difficultyOptions.map(option => (
          <label key={option} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={filters.difficulties.includes(option)}
              onChange={() => handleCheckboxChange('difficulties', option)}
              className="mr-2"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2">Cooking Time</h3>
        {timeRangeOptions.map(option => (
          <label key={option} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={filters.timeRanges.includes(option)}
              onChange={() => handleCheckboxChange('timeRanges', option)}
              className="mr-2"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </aside>
  );
};

export default FilterSidebar;