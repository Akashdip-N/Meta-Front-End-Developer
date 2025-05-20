import React from "react";

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
      fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data fetched:", data);
        setUser(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
      <div style={{padding: "40px"}}>
          <h1>Customer data</h1>
      <h2>Name: {user.results[0].name.first} {user.results[0].name.last} </h2>
          <img src={user.results[0].picture.large} alt="User" />
      </div>
      ) : (
      <h1>Data pending...</h1>
  );
}

export default App;
