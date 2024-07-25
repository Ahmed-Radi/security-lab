import LogoutButton from '@/components/logoutButton'
import { fetchProfile } from "@/lib/actions/user.actions";

const UserSection = async () => {
  const profileData = await fetchProfile();

  return (
    <div>
      <LogoutButton />
      <p>{profileData?.name}</p>
    </div>
  )
}

export default UserSection