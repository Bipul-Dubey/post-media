import React from "react";

interface User {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

interface FollowerFollowingListProps {
  type: "followers" | "following"; // "followers" or "following"
}

const FollowerFollowingList: React.FC<FollowerFollowingListProps> = ({
  type,
}) => {
  const dummyData: User[] = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Michael Brown",
      username: "michaelbrown",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Emily White",
      username: "emilywhite",
      avatar: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="border-t p-4">
      <h2 className="text-lg font-semibold mb-4 capitalize">
        {type === "followers" ? "Followers" : "Following"}
      </h2>
      <ul>
        {dummyData.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between py-4 border-b last:border-none"
          >
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">@{user.username}</p>
              </div>
            </div>
            <button className="px-4 py-1 rounded text-sm font-medium bg-blue-500 text-white hover:bg-blue-600">
              {type === "followers" ? "Follow Back" : "Unfollow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowerFollowingList;
