import { useSession } from "next-auth/react"
import Button from "./Button"
import ProfileImage from "./ProfileImage"

const NewTweerForm = () => {
  const session = useSession()
  const user = session.data?.user;
  return (
    <form className="flex flex-col gap-2 border-b px-2 py-2">
      <div className="flex gap-4">
        <ProfileImage src={user?.image}/>
      <textarea className="w-full h-24 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none overflow-hidden" placeholder="What's happening?"></textarea>
      </div>
      <Button className="self-end text-white">Tweet</Button>
    </form>
  )
}
export default NewTweerForm