import "../App.css";

function StyledCard(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
export default StyledCard;
