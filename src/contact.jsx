import React, { useState } from 'react';

export default function Contact(props) {
  const [showDetails, setShowDetails] = useState(true);
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-md p-5 m-4 hover:shadow-lg transition-shadow">

      <div className="flex items-center space-x-4">

        <img
          className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
          src={props.profile_picture}
          alt={props.name}
        />

        <div className="flex-1">
          <div className="flex items-center justify-between">

            <h3 className="text-lg font-bold text-gray-900">
              {props.name}
            </h3>

            <button
              onClick={() => setFavorite(!favorite)}
              className="text-xl cursor-pointer"
            >
              {favorite ? '⭐' : '☆'}
            </button>

          </div>

          <p className="text-sm text-green-600 font-medium">
            ● Available
          </p>
        </div>

      </div>

      {showDetails && (
        <div className="mt-4 border-t pt-3">

          <p className="text-sm text-gray-600">
            <span className="font-semibold">Email:</span> {props.email}
          </p>

          <p className="text-sm text-gray-600">
            <span className="font-semibold">Phone:</span> {props.phone}
          </p>

        </div>
      )}

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-4 w-full px-3 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-500"
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

    </div>
  );
}