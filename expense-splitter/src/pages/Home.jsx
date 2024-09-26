import { useSelector } from "react-redux"

function Home() {
const groups = useSelector((state)=> state.groups.groups)

    return (
        <div className="text-header text-secondary">
            <h1>groups</h1>
           {groups.map((group)=> (
            <div key={group.id}>
                <h2>{group.name}</h2>
                <a href={`/groups/${group.id}`}>Details</a>
            </div>
           ))}
        </div>
    )
}

export default Home
