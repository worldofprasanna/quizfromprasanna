import React from 'react'

const UserPersona = ({ userType, imageURL }) => {
  return (
    <div className="py-4 bg-gray-50">
      <div className="max-w-xs bg-white shadow rounded-xl">
        <div className="p-6">
          <div>
            <img
              className="object-cover w-full h-auto rounded-xl"
              src={imageURL}
              alt=""
            />
          </div>

          <div className="mt-6 space-y-5">
            <button
              type="button"
              className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-gray-900 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
            >
              {userType}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPersona
