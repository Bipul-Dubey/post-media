import PostInProfileView from "./PostInProfileView";

const likedPosts = [
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1682686580391-615b1e32be1f?auto=format&fit=crop&w=600&h=600",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?auto=format&fit=crop&w=600&h=600",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1682686580391-615b1e32be1f?auto=format&fit=crop&w=600&h=600",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?auto=format&fit=crop&w=600&h=600",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1682686580391-615b1e32be1f?auto=format&fit=crop&w=600&h=600",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?auto=format&fit=crop&w=600&h=600",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1682686580391-615b1e32be1f?auto=format&fit=crop&w=600&h=600",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?auto=format&fit=crop&w=600&h=600",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1682686580391-615b1e32be1f?auto=format&fit=crop&w=600&h=600",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?auto=format&fit=crop&w=600&h=600",
  },
];

function LikedPosts() {
  return (
    <div className="my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {likedPosts.map((item) => (
        <PostInProfileView url={item.image} title={item.id} />
      ))}
    </div>
  );
}

export default LikedPosts;
