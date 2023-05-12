import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";
export const Login = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);
  const [newUsername, setNewUsername] = useState<string>("");
  return (
    <h1>
      {username}
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewUsername(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        Submit Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </h1>
  );
};
