function EachMutualGroup() {
    return (
        <article className="p-3 flex items-center space-x-4  border border-green-200">
      <img
        className="w-14 h-14 rounded-full object-cover"
        src="https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=0xb_bb-NBIxjiJL_kqY-o3dCjv2PmKFZfRjHcVEijDc="
        alt=""
      />
      <span>
        <p>Group 1</p>
        <p>You owe</p>
      </span>
      <p>20$</p>
      <button className="text-primary bg-blizzard-blue px-6 py-1.5 rounded-md font-semibold text-sm">Send a reminder</button>
    </article>
    )
}

export default EachMutualGroup
