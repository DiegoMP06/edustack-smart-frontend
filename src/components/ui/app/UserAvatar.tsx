import type { User } from "@/types";
import { Avatar, AvatarFallback } from "@/components/ui/shadcn/avatar";

type UserAvatarProps = {
    user: User;
}

export default function UserAvatar({ user }: UserAvatarProps) {
    return (
        <Avatar>
            <AvatarFallback>
                {user.name[0]}{user.father_last_name[0]}
            </AvatarFallback>
        </Avatar>
    )
}
