"use client";
import React, { useState } from 'react';

type UserProfileCardProps = {
  avatarUrl: string;
  name: string;
  followerCount: number;
  initialIsFollowing?: boolean;
};

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  avatarUrl,
  name,
  followerCount,
  initialIsFollowing = false,
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [count, setCount] = useState(followerCount);

  const handleFollow = () => {
    if (isFollowing) {
      setCount(prev => prev - 1);
    } else {
      setCount(prev => prev + 1);
    }
    setIsFollowing(prev => !prev);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 flex items-center space-x-4">
      <img src={avatarUrl} alt={`${name}'s avatar`} className="w-16 h-16 rounded-full object-cover" />
      <div className="flex-1">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500">{count} followers</p>
      </div>
      <button
        onClick={handleFollow}
        className={`px-4 py-2 rounded-md focus:outline-none ${
          isFollowing ? 'bg-gray-200 text-gray-700' : 'bg-blue-600 text-white'
        }`}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default UserProfileCard;