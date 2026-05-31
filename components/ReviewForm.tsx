"use client";
import React, { useState } from 'react';

type ReviewFormProps = {
  onSubmit: (data: { rating: number; comment: string }) => void;
};

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === '') return;
    onSubmit({ rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-700">Rating</label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map(value => (
            <label key={value} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={value}
                className="hidden"
                checked={rating === value}
                onChange={() => setRating(value)}
              />
              <span className={`text-2xl ${rating >= value ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-700">Comment</label>
        <textarea
          rows={4}
          className="w-full border border-gray-300 rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={rating === 0 || comment.trim() === ''}
        className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
      >
        Submit Review
      </button>
    </form>
  );
}