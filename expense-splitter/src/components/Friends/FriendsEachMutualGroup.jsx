function FriendsEachMutualGroup() {
    return (
          <article className="p-3 flex items-center justify-between border-b border-separator ml-2 mr-2">
            <div className="flex items-center space-x-4">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src="https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=0xb_bb-NBIxjiJL_kqY-o3dCjv2PmKFZfRjHcVEijDc="
                alt=""
              />
              <span>
                <p className="text-sm font-bold text-secondary">Group 1</p>
                <p className="text-xs font-medium">You owe</p>
              </span>
              <p className="text-2xl font-bold text-secondary pl-6">20$</p>
            </div>
            <button className="w-46 h-10 px-5 rounded-lg text-body font-bold bg-blizzard-blue text-primary duration-300">
              Send a reminder
            </button>
          </article>
              )
          }

export default FriendsEachMutualGroup
