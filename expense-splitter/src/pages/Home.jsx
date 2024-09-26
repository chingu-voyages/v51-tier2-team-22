import { useSelector } from "react-redux";
import HomeIndividualGroup from "../components/Home/HomeIndividualGroup";

function Home() {
  const groups = useSelector((state) => state.groups.groups);

  return (
    <section className="text-header text-secondary p-5 space-y-5">
      <h1>Groups</h1>

      {groups.map((group) => (
        <HomeIndividualGroup key={group.id} group={group} />
      ))}

      <button
        onClick={() => alert("NOT functional")}
        className="hover:bg-emerald-400 w-72 h-36 bg-emerald-300"
      >
        Add group
      </button>
    </section>
  );
}

export default Home;
