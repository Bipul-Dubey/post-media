interface CommentProps {
  commentId: string;
}

const Comment = ({ commentId }: CommentProps) => {
  console.log(commentId);
  const avatar = "https://via.placeholder.com/150";
  const username = "Neil Sims";
  const timestamp = `${new Date().toLocaleDateString()}`;
  const content = "Hello this is";

  return (
    <div className="flex space-x-3 p-4 border-b my-1">
      <img
        src={avatar}
        alt={username}
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">{username}</span>
          <span className="text-sm text-gray-500">{timestamp}</span>
        </div>
        <p className="text-gray-800 mt-1">{content}</p>
      </div>
    </div>
  );
};

export default Comment;
