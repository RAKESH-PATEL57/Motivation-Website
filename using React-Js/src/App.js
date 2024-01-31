import './App.css';

function App() {
  return (
    <div classNameName="App">
            <main className="motivation-container">

      <div className="motivation-content">
         <div className="motivation-heading">
          <h1>Welcome <br />to <br/><span>motivation world</span></h1>
       </div>
    <div className="motivation-line">
        <button className="btn" id="generateTextbtn">Generate Text</button>
        <h1 className="motivation"></h1>
     
    </div>
     </div>
   <button id="Speakerbtn"><i className='bx bx-volume-full'></i></button>
    </main>
    </div>
  );
}

export default App;
