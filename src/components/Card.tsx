export default function Card({
  name = "",
  desc = "i do animation",
  render = true,
}) {
  const card = (
    <div className="card">
      <img
        src="https://via.placeholder.com/150"
        alt="profile picture"
        className="cardImg"
      ></img>
      <h2 className="cardTitle">{name}</h2>
      <p>{desc}</p>
    </div>
  );

  const cardNull = <div>[not found]</div>;

  return render ? card : cardNull;
}
