import "./App.css";
import { fakeUserData } from "./api/index.";
import { useDispatch } from "react-redux";
import { addUser } from "./store/slice/userslice";
function App() {
  const dispatch = useDispatch();
  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flex: "justify-center",
      }}
    >
      <div>
        <button onClick={() => addNewUser(fakeUserData())}>Add Users</button>

        <ul>
          <li style={{ display: "flex" }}>
            <div>sdfsdf</div>
            <button style={{ fontSize: "11px" }}>delete</button>
          </li>
        </ul>

        <button>Clear all data </button>
      </div>
    </div>
  );
}

export default App;
