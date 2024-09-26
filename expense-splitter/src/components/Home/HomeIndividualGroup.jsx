import { Link } from "react-router-dom";

function HomeIndividualGroup({ group }) {
  return (
    <div className="p-4 border border-black w-72 h-36">
      <h2 className="">{group.name}</h2>
      <p className="pb-2">members: {group.members}</p>
      <Link
        className="border border-emerald-600 hover:bg-emerald-200 p-2 text-xl"
        to={`/groups/${group.id}`}
      >
        Details
      </Link>
    </div>
  );
}

export default HomeIndividualGroup;
