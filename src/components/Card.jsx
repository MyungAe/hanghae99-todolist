import 'styles/Card.css';

function Card({ object, updateIsDone }) {
  return (
    <div className="card-wrap">
      <h2>{object.title}</h2>
      <p>{object.content}</p>
      <button
        className="card-button remove"
        onClick={() => updateIsDone(object.id, false)}
      >
        삭제하기
      </button>
      <button
        className="card-button done"
        onClick={() => updateIsDone(object.id, true)}
      >
        완료
      </button>
    </div>
  );
}

export default Card;
