interface ProfileStatsProps {
  postsCount: number;
  followersCount: number;
  followingCount: number;
}

const ProfileStats = ({
  postsCount,
  followersCount,
  followingCount,
}: ProfileStatsProps) => {
  return (
    <div className="flex space-x-8 justify-center md:justify-start">
      <div className="text-center">
        <div className="font-semibold text-xl">{postsCount}</div>
        <div className="text-gray-500 text-sm">posts</div>
      </div>
      <div className="text-center">
        <div className="font-semibold text-xl">{followersCount}</div>
        <div className="text-gray-500 text-sm">followers</div>
      </div>
      <div className="text-center">
        <div className="font-semibold text-xl">{followingCount}</div>
        <div className="text-gray-500 text-sm">following</div>
      </div>
    </div>
  );
};

export default ProfileStats;
