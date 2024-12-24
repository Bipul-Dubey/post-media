import { Grid, Heart } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { IProfileTabs } from "../../constants/types";

const ProfileTabs = () => {
  const [searchParam, setSearchParams] = useSearchParams();
  return (
    <div className="border-t">
      <div className="flex">
        <button
          onClick={() => {
            setSearchParams({
              tab: IProfileTabs.POSTS,
            });
          }}
          className={`flex-1 py-4 flex items-center justify-center space-x-2 border-b-2 ${
            IProfileTabs.LIKES !== searchParam.get("tab")
              ? "border-black text-black"
              : "border-transparent text-gray-500"
          }`}
        >
          <Grid className="w-5 h-5" />
          <span>Posts</span>
        </button>
        <button
          onClick={() =>
            setSearchParams({
              tab: IProfileTabs.LIKES,
            })
          }
          className={`flex-1 py-4 flex items-center justify-center space-x-2 border-b-2 ${
            IProfileTabs.LIKES === searchParam.get("tab")
              ? "border-black text-black"
              : "border-transparent text-gray-500"
          }`}
        >
          <Heart className="w-5 h-5" />
          <span>Likes</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileTabs;
