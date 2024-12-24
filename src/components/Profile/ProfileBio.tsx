interface ProfileBioProps {
  fullName: string;
  bio: string;
  website?: string;
}

const ProfileBio = ({ fullName, bio, website }: ProfileBioProps) => {
  return (
    <div className="space-y-2">
      <h2 className="font-bold">{fullName}</h2>
      <p className="text-gray-700 whitespace-pre-line">{bio}</p>
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline block"
        >
          {website}
        </a>
      )}
    </div>
  );
};

export default ProfileBio;
