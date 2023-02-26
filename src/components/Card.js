import "./../App.css";

function Card(props) {
  const randomNumber = Math.floor(Math.random() * 180) + 20;
  const rotationAngle = generateRandomNumber();

  return (
    <div
      className="card"
      style={{ transform: `rotate(${rotationAngle}deg)` }}
      key={props.id}
    >
      <img
        src={`https://picsum.photos/id/${randomNumber}/600/300`}
        alt="test"
      />
      <h2>{props.author}</h2>
      <p>{props.quotes}</p>
    </div>
  );
}

function generateRandomNumber() {
  const min = -4;
  const max = 4;
  const randomNum = Math.random() * (max - min) + min;
  return randomNum.toFixed(15);
}

export default Card;
