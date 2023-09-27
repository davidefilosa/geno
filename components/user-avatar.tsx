import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = () => {
  return (
    <Avatar className="w-8 h-8">
      <AvatarImage src="/user.jpg" />
    </Avatar>
  );
};

export default UserAvatar;
