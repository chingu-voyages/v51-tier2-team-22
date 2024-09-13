function EachMember({ member, index }) {
  return (
    <div
      key={index}
      className="flex flex-col w-20 items-center text-center"
    >
      <img
        className="object-cover w-14 h-14 rounded-full"
        src={member.img}
        alt="person"
      />
      <p>{member.name}</p>
      <button className="bg-red-400 flex items-center justify-center rounded-full font-extrabold text-lg w-5 h-5 pb-1 bottom-20 relative left-5">
        -
      </button>
    </div>
  );
}

export default EachMember;
