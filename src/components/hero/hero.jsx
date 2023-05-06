import { useState } from "react";
import "./hero.scss";
import { TfiClose } from "react-icons/tfi";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Hero = () => {
  const [addForm, setAddForm] = useState(false);
  const addUser = () => {
    setAddForm(!addForm);
  };
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [ageValue, setAgeValue] = useState("");

  const [data, setData] = useState(() => {
    const storedItem = localStorage.getItem("data");
    return storedItem ? JSON.parse(storedItem) : [];
  });

  const formDataSubmit = (event) => {
    event.preventDefault();

    if (!firstNameValue.trim())
      return alert("Firstname qismi bo`sh bo`lishi mumkin emas");

    if (!lastNameValue.trim())
      return alert("Lastname qismi bo`sh bo`lishi mumkin emas");

    if (!ageValue.trim()) return alert("Age qismi bo`sh bo`lishi mumkin emas");

    setData([
      ...data,
      {
        id: Date.now(),
        firstName: firstNameValue,
        lastName: lastNameValue,
        age: ageValue,
      },
    ]);

    setFirstNameValue("");
    setLastNameValue("");
    setAgeValue("");
  };

  localStorage.setItem("data", JSON.stringify(data));

  const handleChangeInputF = (e) => {
    setFirstNameValue(e.target.value);
  };
  const handleChangeInputL = (e) => {
    setLastNameValue(e.target.value);
  };
  const handleChangeInputA = (e) => {
    setAgeValue(e.target.value);
  };

  const handleDelete = (id) => {
    const updateData = data.filter((data) => data.id !== id);
    return setData(updateData);
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__block">
            <h2 className="hero__title">User Details</h2>
            <button onClick={addUser} className="hero__add-user">
              ADD USER
            </button>
            <div className={`hero__modal ${addForm ? "hero__modal-key" : ""}`}>
              <div className="hero__modal-close">
                <TfiClose className="TfiClose" onClick={addUser} />
              </div>
              <form className="hero__form" onSubmit={formDataSubmit}>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="FirstName"
                  className="firstNameInput"
                  value={firstNameValue}
                  onChange={handleChangeInputF}
                />
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="LastName"
                  className="lastNameInput"
                  value={lastNameValue}
                  onChange={handleChangeInputL}
                />
                <input
                  type="number"
                  autoComplete="off"
                  placeholder="Age"
                  className="ageInput"
                  value={ageValue}
                  onChange={handleChangeInputA}
                />
                <button className="form-btn" onClick={addUser} type="submit">
                  Save
                </button>
              </form>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Age</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data) => (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.age}</td>
                    <td>
                      <MdModeEdit className="MdModeEdit" />
                    </td>
                    <td>
                      <MdDelete
                        onClick={() => handleDelete(data.id)}
                        className="MdDelete"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
