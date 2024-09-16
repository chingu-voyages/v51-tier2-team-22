function EachMember({ member, index }) {
  return (
    <div
      key={index}
      className="relative flex flex-col w-20 items-center text-center"
    >
      <img
        className="object-cover w-14 h-14 rounded-full shadow-lg"
        src={member.img}
        alt={member.name}
      />
      <p className="font-medium text-gray-400">{member.name}</p>
      <button className="bg-red-200 flex items-center justify-center rounded-full font-extrabold text-lg text-red-500 w-6 h-6 pb-1 bottom-20 relative left-7">
        -
      </button>
    </div>
  );
}

export default EachMember;
