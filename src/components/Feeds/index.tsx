import CreatePost from "../Post/createPost";
import Posts from "../Post/Posts";

function NewsFeed() {
  return (
    <div className="min-h-screen mx-auto pt-20 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto pt-1 px-4">
        <CreatePost />
        <div className="mt-8">
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
