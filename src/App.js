import './App.css';
import { useState } from 'react';

function App() {

  let Logo = 'ReactBlog';
  let [title, setTitle] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [date, setDate] = useState(['2월 17일 발행','2월 17일 발행','2월 17일 발행']);
  let [like, setLike] = useState([0,0,0]);

  function LikePlus(li){
    let tmp = [...like];
    like[li] = like[li] + 1;
    setLike(like);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{Logo}</h4> 
      </div>
      <div className='list'>
        <h4>{title[0]} <span onClick={LikePlus(0)}>👍</span> {like[0]} </h4>
        <p>{date[0]}</p>
      </div>
      <div className='list'>
        <h4>{title[1]} <span>👍</span> {like[1]} </h4>
        <p>{date[1]}</p>
      </div>
      <div className='list'>
        <h4>{title[2]} <span>👍</span> {like[2]} </h4>
        <p>{date[2]}</p>
      </div>
    </div>
  );
}

export default App;
