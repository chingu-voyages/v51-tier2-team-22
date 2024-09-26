import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeGroup } from "../../features/groupsSlice";

function HomeIndividualGroup({ group }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeGroup(group.id));
  };

  const confirmRemove = () => {
    if (window.confirm("Are you sure you want to remove this group?")) {
      handleRemove();
    }
  };

  return (
    <section className="p-4 border border-black w-72 h-36">
      <h2 className="">{group.name}</h2>
      <p className="pb-2">members: {group.members}</p>

      <div className="flex justify-between">
        <Link
          className="border border-emerald-600 hover:bg-emerald-200 p-2 text-xl"
          to={`/groups/${group.id}`}
        >
          Details
        </Link>
        <button
          onClick={confirmRemove}
          className="border border-red-600 hover:bg-red-200 p-2 text-xl"
        >
          Remove
        </button>
      </div>
    </section>
  );
}

export default HomeIndividualGroup;
