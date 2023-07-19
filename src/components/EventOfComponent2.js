import React, { useState } from 'react'

const EventOfComponent2 = () => {
    const [num, setNum] = useState(0);

  return (
    <>
        <div>
            {num}
        </div>
        <button onClick={() => {setNum(num + 1)}}>
            +1
        </button>
    </>
  )
}

export default EventOfComponent2