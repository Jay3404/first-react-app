import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
//내보낸 컴포넌트를 import하여서 사용한다.
//태그처럼 사용
import PropsOfComponent from './components/PropsOfComponent';
import StateOfComponent from './components/StateOfComponent';
import EventOfComponent from './components/EventOfComponent';
import EventOfComponent2 from './components/EventOfComponent2';

function App() {
  let num = 10;
  let name = "고기천";

  //부모 state 선언
  const [intNum, setIntNum] = useState(0);

  const [message, setMessage] = useState('');

  const propsFunc = () => {
    alert("자식 컴포넌트의 버튼 클릭");
  }

  //자식컴포넌트에서 부모 컴포넌트의 state값을 변경하기 위한 메소드 선언
  //해당 메소드를 자식 컴포넌트의 props에 넘겨서 자식 컴포넌트에서 부모컴포넌트의 state 값을 변경할 수 있다.
  const addIntNum = () => {
    setIntNum(intNum + 1);
  }

  const minusIntNum = () => {
    setIntNum(intNum - 1);
  }

  const divideIntNum = () => {
    setIntNum(intNum / 2);
  }

  const mulIntNum = () => {
    setIntNum(intNum * 2);
  }

  const changeMessage = (text) => {
    setMessage(text);
  }

  return (
    <>
      <PropsOfComponent num={num} name={name} propsFunc={propsFunc}>
      </PropsOfComponent>
      
      <StateOfComponent intNum={intNum} addIntNum={addIntNum} minusIntNum={minusIntNum} divideIntNum={divideIntNum} mulIntNum={mulIntNum}>
      </StateOfComponent>

      <EventOfComponent message={message} setMessage={setMessage} changeMessage={changeMessage}>
      </EventOfComponent>

      <EventOfComponent2>
      </EventOfComponent2>
    </>
  );
}

export default App;
