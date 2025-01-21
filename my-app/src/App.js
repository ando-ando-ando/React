import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* MyButton component */}
      <MyButton />

    </div>
  );
}
// MyButton component
function MyButton(){
    return(
        <button> Button </button>
    );
}

export default App;

// 2025/1/21 React公式サイトのコンポーネント
// MyButtonのコンポーネント
// function MyButton(){
//     return(
//         <button> I'm a button</button>
//     );
// }
// MyButton を宣言したら、別のコンポーネント
// export default function MyApp(){
//     return(
//         <div>
//             <h1>Welcome to my app</h1>
//             <MyButton />
//         </div>
//     );
// }