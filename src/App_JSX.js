import './App.css';

function App() {
  let str1 = "hello";
  let str2 = "world";

  return (
    <div>
      <div className='react'>
        {str1}
      </div>
      <div style={{backgroundColor: 'red'}}>
        {str2}
      </div>
      {str1 === "hello" ? <div>1</div> : <div>2</div>}
    </div>
  );
}

export default App;
