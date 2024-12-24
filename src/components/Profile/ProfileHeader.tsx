import { Edit } from "lucide-react";

interface ProfileHeaderProps {
  username: string;
  avatar: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  isFollowing: boolean;
  onFollowToggle: () => void;
}

const ProfileHeader = ({
  username,
  avatar = "https://via.placeholder.com/200x150",
  postsCount = 0,
  followersCount = 0,
  followingCount = 0,
  isFollowing = false,
  onFollowToggle,
}: ProfileHeaderProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between">
      <div className="flex items-center space-x-8">
        <img
          src={avatar}
          alt={username}
          className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
        />

        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-4">
            <h1 className="text-2xl font-semibold">{username}</h1>
            <button
              onClick={onFollowToggle}
              className={`px-6 py-2 rounded-lg font-medium ${
                isFollowing
                  ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>

          <div className="flex space-x-8">
            <div className="text-center">
              <div className="font-semibold">{postsCount}</div>
              <div className="text-gray-500">posts</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">{followersCount}</div>
              <div className="text-gray-500">followers</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">{followingCount}</div>
              <div className="text-gray-500">following</div>
            </div>
          </div>
        </div>
      </div>
      <Edit />
    </div>
  );
};

export default ProfileHeader;
