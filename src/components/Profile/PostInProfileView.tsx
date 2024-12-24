function PostInProfileView({ title, url }: { title: string; url: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={url || "https://via.placeholder.com/300"}
        alt="Post 1"
        className="w-full h-48 object-cover"
      />
      {title && (
        <div className="p-4">
          <p className="text-gray-500">{title}</p>
        </div>
      )}
    </div>
  );
}

export default PostInProfileView;
