import React, { useState } from 'react';
import Header from 'components/Header';
import Form from 'components/Form';
import CardList from 'components/CardList';

import 'App.css';

function App() {
  const dummyData = [
    {
      id: 0,
      title: '리액트 공부하기',
      content: '리액트 기초를 공부해봅시다.',
      isDone: true,
    },
    {
      id: 1,
      title: '리액트 싫어하기',
      content: '리액트를 싫어해봅시다.',
      isDone: false,
    },
  ];

  const [todoList, setTodoList] = useState(dummyData);
  const [todoCount, setTodoCount] = useState(2);

  const addTodoList = newTodo => {
    newTodo['id'] = todoCount;
    setTodoList([...todoList, newTodo]);
  };

  const updateIsDone = (id, done) => {
    const newTodoList = [...todoList];
    const index = todoList.findIndex(object => object.id === id);
    newTodoList[index].isDone = done;
    setTodoList(newTodoList);
  };

  const addTodoCount = () => setTodoCount(todoCount + 1);
  return (
    <>
      <Header />
      <Form
        addTodoList={addTodoList}
        addTodoCount={addTodoCount}
      />
      <CardList
        todoList={todoList}
        updateIsDone={updateIsDone}
      />
    </>
  );
}

export default App;
