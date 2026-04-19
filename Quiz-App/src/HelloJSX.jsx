function HelloJSX() {
  const name = "Tejas";
  const year = new Date().getFullYear();

  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Welcome to Reactjs</p>
      <p>Current year is {year}</p>
    </div>
  );
}

export default HelloJSX;
