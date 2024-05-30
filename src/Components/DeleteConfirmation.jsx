import React from "react";

const DeleteConfirmation = ({ deletePop }) => {
  const handlePopUp = () => {
    deletePop(false);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          Are you sure you want to delete this?
        </h2>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handlePopUp}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            No
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
