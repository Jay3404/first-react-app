import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  //state 변수 생성
  //num: 상태변수
  //setNum = num을 변경하는 메소드
  const [num, setNum] = useState(1); 

  useEffect(() => {
    const interval = setInterval(() => {
      setNum(num + 1);
    }, 1000);
  }, []);

  return (
    <div class="App">
      <p>{num}</p>
    </div>
  );
}

export default App;
