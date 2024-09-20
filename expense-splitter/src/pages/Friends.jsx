import FriendsTable from "../components/Friends/FriendsTable"
import FriendsMutualGroups from "../components/Friends/FriendsMutualGroups"
import FriendName from "../components/Friends/FriendName"

function Friends() {
    return (
        <section className="flex flex-col gap-5 m-6">
            <FriendName />
            <FriendsMutualGroups />
            <FriendsTable />

        </section>
    )
}

export default Friends
