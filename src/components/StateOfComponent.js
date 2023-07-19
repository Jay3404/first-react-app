//rface
import React, { useState } from 'react'

const StateOfComponent = ({intNum, addIntNum, minusIntNum, divideIntNum, mulIntNum}) => {
    const [num, setNum] = useState(0);

    const addNum = () => {
      //setter 메소드를 통한 state값 변경
      setNum(num + 1);
    }

  return (
    <>
      <div>{intNum}</div>
      <button onClick={addIntNum}>+1</button>
      <button onClick={minusIntNum}>-1</button>
      <button onClick={mulIntNum}>x2</button>
      <button onClick={divideIntNum}>%2</button>
    </>
  )
}

export default StateOfComponent