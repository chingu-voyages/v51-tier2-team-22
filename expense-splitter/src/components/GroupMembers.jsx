import { MdGroups } from "react-icons/md";

const members = [
  {
    name: "Tom",
    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
  },
  {
    name: "Mitchel",
    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
  },
];

function GroupMembers() {
  return (
    <div className="gap-6 w-80 border border-slate-400 rounded-xl flex flex-col">

<div className="p-2 flex justify-between bg-red-100 w-full">
<p>Members</p> 
<button className="border border-black">View all</button> 
</div>

<div className="flex items-center gap-3">
    {/* map method */}
      {members.map((member, index) => (
        <article
          key={index}
          className="bg-blue-100 flex flex-col items-center text-center  h-20 w-20"
        >
          <img
            className="object-cover w-10 h-10 rounded-full"
            src={member.img}
            alt=""
          />
          <p>{member.name}</p>
          <button className="bg-red-300 flex items-center justify-center rounded-full font-extrabold text-lg w-5 h-5 pb-1 bottom-20 relative left-5">
            -
          </button>
        </article>
      ))}

      <button className="flex-col flex items-center ">
        <MdGroups className="rounded-full w-14 h-14 bg-slate-100 p-3" />
        <p>Add</p>
      </button>
      </div>
    </div>
  );
}

export default GroupMembers;
