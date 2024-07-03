import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/UI/DropDownMenu"
import { useLogoutMutation } from '@/redux/api/auth/authApi';
import { useRouter } from "next/navigation";
const ProfileMenu=({ children }) => {
    const [logout]=useLogoutMutation();
    const router=useRouter();
    const logoutHandler=() => {
        logout();
        router.push("/login")
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => logoutHandler()}
                    className="text-red-600"
                >Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProfileMenu