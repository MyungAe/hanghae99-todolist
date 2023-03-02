import { useState } from 'react';
import 'styles/Form.css';

function Form({ addTodoList, addTodoCount }) {
  // states
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submitEventHandler = event => {
    event.preventDefault();
    if (!title || !content) {
      alert('제목과 내용을 입력해주세요!');
      return;
    }
    addTodoList({
      title,
      content,
      isDone: false,
    });
    addTodoCount();
    setTitle('');
    setContent('');
  };

  return (
    <form className="form-wrap">
      <div>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={event => {
            setTitle(event.target.value);
          }}
        />
        <label htmlFor="content">내용</label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={event => {
            setContent(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="submit"
          className="form-submit"
          value="추가하기"
          onClick={submitEventHandler}
        />
      </div>
    </form>
  );
}

export default Form;
