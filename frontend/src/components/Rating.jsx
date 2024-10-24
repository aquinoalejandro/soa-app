import React from 'react';
import { Star, StarHalf } from 'lucide-react';

export const StarRating = ({ rating, size = 20, editable = false, onChange }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((index) => (
        <button
          key={index}
          className={`${editable ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'} 
                     text-yellow-400`}
          onClick={() => editable && onChange?.(index)}
          disabled={!editable}
        >
          {index <= fullStars ? (
            <Star size={size} fill="currentColor" />
          ) : index === fullStars + 1 && hasHalfStar ? (
            <StarHalf size={size} fill="currentColor" />
          ) : (
            <Star size={size} />
          )}
        </button>
      ))}
    </div>
  );
};