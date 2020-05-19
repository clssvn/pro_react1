import React, { useState } from "react";
import Header from "../shared/Header";
import Table from "../shared/Table";

export default function Main() {
  const usersInitial = [
    { idUser: 1, firstName: "Jan", lastName: "Kowalski" },
    { idUser: 2, firstName: "Andrzej", lastName: "Malewicz" },
    { idUser: 3, firstName: "Anna", lastName: "Andrzejewicz" },
    { idUser: 4, firstName: "Marcin", lastName: "Kwiatkowski" },
    { idUser: 5, firstName: "Michał", lastName: "Kowalski" },
  ];

  const [users, setUsers] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedHeader, setSelectedHeader] = useState({});

  const addUser = (e) => {
    setUsers([
      ...users,
      {
        idUser: users[users.length - 1].idUser + 1,
        firstName: "AAA",
        lastName: "BBB",
      },
    ]);
  };

  const deleteUser = (e) => {
    const usersArr = users
      .slice()
      .filter((f) => f.idUser !== selectedUser.idUser);
    setUsers([...usersArr]);
  };


  const sortUser = (c) => {
    if (c === "first name") {
      users.sort((u1, u2) => {
        const u1By_first_name = u1.firstName.toUpperCase();
        const u2By_first_name = u2.firstName.toUpperCase();
        let comparison = 0;
        if (u1By_first_name > u2By_first_name) {
          comparison = 1;
        } else if (u1By_first_name < u2By_first_name) {
          comparison = -1;
        }
        return comparison;
      });
    } else if (c === "last name") {
      users.sort((u1, u2) => {
        const u1By_lastName = u1.lastName.toUpperCase();
        const u2By_lastName = u2.lastName.toUpperCase();
        let comparison = 0;
        if (u1By_lastName > u2By_lastName) {
          comparison = 1;
        } else if (u1By_lastName < u2By_lastName) {
          comparison = -1;
        }
        return comparison;
      });
    } else if (c === "id user") {
      users.sort((u1, u2) => {
        let comparison = 0;
        if (u1.idUser > u2.idUser) {
          comparison = 1;
        } else if (u1.idUser < u2.idUser) {
          comparison = -1;
        }
        return comparison;
      });
    }
    setUsers([...users]);
  };


  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };

  const setCurrentlySelectedHeader = () => {
    setSelectedHeader();
  };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <button type="button" onClick={addUser} className="btn">
          Dodaj użytkownika
        </button>
        <button type="button" onClick={deleteUser} className="btn">
          Usuń użytkownika
        </button>
        <Table
          users={users}
          setSelectedUser={setCurrentlySelectedUser}
          selectedUser={selectedUser}
          setSelectedHeader={setCurrentlySelectedHeader}
          sortUser={sortUser}
        />
      </div>
    </>
  );
}
