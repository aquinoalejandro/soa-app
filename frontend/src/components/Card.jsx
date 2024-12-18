import React from 'react';
import { StarRating } from '../components/Rating';
import { Calendar, User, Utensils } from 'lucide-react';

export const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-5 h-5 text-gray-500" />
            <span className="font-medium text-gray-700">{review.author}</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Utensils className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">{review.productName}</span>
          </div>
          <div className="text-gray-500 mb-3">
            Precio: <span className="font-medium text-gray-800">${review.productPrice}</span>
          </div>
          <div className="text-gray-500 mb-3">
            Descripcion: <span className=" text-gray-600">{review.productDescription}</span>
          </div>
        </div>
        <StarRating rating={review.rating} />
      </div>
      
      <p className="text-gray-600 mt-3 mb-4">Opinion: {review.comment}</p>
      
      <div className="flex items-center gap-2 text-sm text-gray-500 mt-4 pt-4 border-t">
        <Calendar className="w-4 h-4" />
        <span>{review.date}</span>
      </div>
    </div>
  );
};