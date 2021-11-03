import React, { useState } from "react"

function App() {

  const [userForm, setUserForm] = useState({
    user: "",
    ageRange: "",
    state: "",
    isGoing: false
  })

  const handleChange = event => {
    // console.log("changing")
    const {name, type, value, checked} = event.target;
    const updatedInfo = type === "checkbox" ? checked : value;

    setUserForm({...userForm, [name]:updatedInfo})
  }

  return (
    <div className="App">
      <form>

        <label>
          User Name:
          <input
            name="user"
            type="text"
            value={userForm.name}
            onChange={handleChange}
          />
        </label>

        <label>
          13-18
          <input
            name="ageRange"
            type="radio"
            value="a"
            checked={userForm.ageRange === "a"}
            onChange={handleChange}
          />
        </label>

        <label>
          19-24
          <input
            name="ageRange"
            type="radio"
            value="b"
            checked={userForm.ageRange === "b"}
            onChange={handleChange}
          />
        </label>

        <label>
          25+
          <input
            name="ageRange"
            type="radio"
            value="c"
            checked={userForm.ageRange === "c"}
            onChange={handleChange}
          />
        </label>

        <label>
          State:
          <select name="state" value={userForm.state} onChange={handleChange}>
            <option value=""> --select a state-- </option>
            <option value="AL"> Alabama </option>
            <option value="AK"> Alaska</option>
            <option value="AZ"> Arizona </option>
            <option value="AR"> Arkansas </option>
          </select>
        </label>

        <label>
          RSVP:
          <input name="isGoing" 
          type="checkbox"
          checked={userForm.isGoing}
          onChange={handleChange}
          />
        </label>

      </form>

    </div>
  );
}

export default App;
