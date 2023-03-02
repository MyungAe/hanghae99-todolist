import Card from './Card';
import 'styles/CardList.css';

function CardList({ todoList, updateIsDone }) {
  return (
    <>
      <div>
        <h3>Working...</h3>
        <section className="card-list-wrap">
          {todoList
            .filter(object => {
              return !object.isDone;
            })
            .map(object => {
              return (
                <Card
                  key={object.id}
                  object={object}
                  updateIsDone={updateIsDone}
                />
              );
            })}
        </section>
      </div>
      <div>
        <h3>Done..!</h3>
        <section className="card-list-wrap">
          {todoList
            .filter(object => {
              return object.isDone;
            })
            .map(object => {
              return (
                <Card
                  key={object.id}
                  object={object}
                  updateIsDone={updateIsDone}
                />
              );
            })}
        </section>
      </div>
    </>
  );
}

export default CardList;
