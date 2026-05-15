import "./styles.css";
import { useState } from "react";
export default function App() {
  return (
    <div>
      <Form />
    </div>
  );
}
function Form() {
  const [bill, setBill] = useState("");
  const [myservice, setMyService] = useState(0);
  const [friendservice, setFriendService] = useState(0);

  const tip = (myservice + friendservice) / 2;
  const tipvalue = (Number(bill) * tip) / 100;

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleClear() {
    setBill("");
    setMyService(0);
    setFriendService(0);
  }
  return (
    <form onSubmit={handleSubmit}>
      <span>
        How much was the Bill?
        <input
          type="number"
          placeholder="Bill value..."
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </span>
      <Select value={myservice} onChange={setMyService}>
        How did you like the service?
      </Select>
      <Select value={friendservice} onChange={setFriendService}>
        how did your friend like the service?
      </Select>

      <div>
        you pay {bill}(${bill}+${tipvalue}tip)
      </div>
      <button onClick={handleClear}>Reset</button>
    </form>
  );
}
{
  /* <div>
        <span>
          How did you like the service
          <select
            name=""
            id=""
            value={myservice}
            onChange={(e) => setMyService(Number(e.target.value))}
          >
            <option value={0}>Disatisfied (0%)</option>
            <option value={5}>it was okay (5%)</option>
            <option value={10}>it was good (10%)</option>
            <option value={20}>it was amazing(20%)</option>
          </select>
        </span>
      </div> */
}
// <div>
//   how did your friend like the service
//   <span>
//     <select
//       name=""
//       id=""
//       value={friendservice}
//       onChange={(e) => setFriendService(Number(e.target.value))}
//     >
//       <option value="0">Disatisfied (0%)</option>
//       <option value="5">it was okay (5%)</option>
//       <option value="10">it was good (10%)</option>
//       <option value="20">it was amazing(20%)</option>
//     </select>
//   </span>
// </div>

function Select({ value, onChange, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
        <option value={0}>Disatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>It was amazing (20%)</option>
      </select>
    </div>
  );
}
