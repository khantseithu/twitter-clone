
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

const SideNav = () => {
    const session = useSession()
    const user = session.data?.user
  return (
    <nav className="sticky top-0 px-2 py-4">
        <ul className="flex flex-col space-y-2">
            <li className="flex items-center space-x-2">
                <Link href="/">Home</Link>
            </li>
             <li className="flex items-center space-x-2">
                {user && <Link href={`/profile/${user.id}`}>Profile</Link>}
            </li>
            {user ? (
                <li className="flex items-center space-x-2">
                    <button onClick={() => void signOut()}>Logout</button>
                </li>
            ) : (
                <li className="flex items-center space-x-2">
                    <button onClick={() => void signIn()}>Sign In</button>
                </li>
            )}
        </ul>
    </nav>
  )
}
export default SideNav