"use client";
import React from 'react';

type RecipeCardProps = {
  imageSrc: string;
  title: string;
  author: string;
  rating: number;
  onView: () => void;
  onSave: () => void;
};

const RecipeCard: React.FC<RecipeCardProps> = ({ imageSrc, title, author, rating, onView, onSave }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">By {author}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-gray-700">{rating.toFixed(1)}</span>
        </div>
        <div className="mt-4 flex space-x-2">
          <button onClick={onView} className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            View
          </button>
          <button onClick={onSave} className="flex-1 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;