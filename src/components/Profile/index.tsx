import { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileBio from "./ProfileBio";
import ProfileTabs from "./ProfileTabs";
import { useSearchParams } from "react-router-dom";
import UserPost from "./UserPost";
import LikedPosts from "./LikedPosts";
import { IProfileTabs } from "../../constants/types";

const Profile = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [searchParams] = useSearchParams();

  // Sample data - will be replaced with Supabase data
  const userProfile = {
    username: "john_doe",
    fullName: "John Doe",
    bio: "Photography enthusiast 📸\nExploring the world one click at a time",
    website: "https://johndoe.photo",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150",
    stats: {
      posts: 42,
      followers: 1234,
      following: 890,
    },
  };

  return (
    <div className="min-h-screen py-6 bg-gray-50">
      <div className="max-w-4xl mx-auto pt-20 px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <ProfileHeader
              username={userProfile.username}
              avatar={userProfile.avatar}
              postsCount={userProfile.stats.posts}
              followersCount={userProfile.stats.followers}
              followingCount={userProfile.stats.following}
              isFollowing={isFollowing}
              onFollowToggle={() => setIsFollowing(!isFollowing)}
            />

            <div className="mt-6">
              <ProfileBio
                fullName={userProfile.fullName}
                bio={userProfile.bio}
                website={userProfile.website}
              />
            </div>

            {/* <div className="mt-8">
              <ProfileStats
                postsCount={userProfile.stats.posts}
                followersCount={userProfile.stats.followers}
                followingCount={userProfile.stats.following}
              />
            </div> */}
          </div>

          <ProfileTabs />

          <div className="mt-4">
            {searchParams.get("tab") === IProfileTabs.LIKES ? (
              <LikedPosts />
            ) : (
              <UserPost />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
