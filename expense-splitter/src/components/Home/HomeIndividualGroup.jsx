import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeGroup } from "../../features/groupsSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomeIndividualGroup({ group }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeGroup(group.id));
  };

  const confirmRemove = () => {
    if (window.confirm("Are you sure you want to remove this group?")) {
      handleRemove();
      toast.success(`Group removed`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <section className="p-4 border bg-white dark:bg-dark-secondary rounded-xl ml-8 w-custom-card h-custom-card-height flex flex-col items-center">
      <img
        className="w-20 h-20 mb-2 rounded-full object-cover flex justify-center"
        src={group.image}
        alt="group-logo"
      />

      <p className="text-body font-medium text-title dark:text-dark-text">
        {group.members.length} members
      </p>

      <h2 className="font-bold text-center text-secondary dark:text-primary">
        {group.name}
      </h2>

      <div className="flex justify-between w-full mt-auto">
        <Link
          className="border border-primary bg-blizzard-blue hover:bg-white text-xl text-primary
            font-bold rounded-lg w-32 h-10 flex items-center justify-center ml-4"
          to={`/groups/${group.id}`}
        >
          Details
        </Link>
        <button
          onClick={confirmRemove}
          className=" border border-primary bg-blizzard-blue hover:bg-white text-xl text-primary
          font-bold rounded-lg w-32 h-10 mb-4 flex items-center justify-center mr-4"
        >
          Remove
        </button>
      </div>
    </section>
  );
}

export default HomeIndividualGroup;
