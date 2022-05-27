import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../Store/Modules/User/actions";

const UserCard = () => {
  const dispatch = useDispatch();
  const nameStory = useSelector((story) => story.user);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <h2>User name:</h2>
      <input
        type="text"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <button onClick={() => dispatch(changeName(newName))}>Mudar nome</button>
      <hr />
      <h3>Novo nome:</h3>
      <p> {nameStory.name} </p>
    </div>
  );
};
export default UserCard;
