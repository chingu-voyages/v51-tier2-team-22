import {useSelector} from "react-redux";

const GetGroupMembers = (group) => {
  const friends = useSelector((state) => state.friends)
  const members = friends.map((friend) => {
    if (group.members.includes(friend.id)) {
      return friend
    }
  })

  Object.keys(members).forEach(function (key) {
    if(typeof members[key] === 'undefined'){
      delete members[key];
    }
  });

  return members
}

export default GetGroupMembers