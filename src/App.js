import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {

  const [word, setWord] = useState()
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [result, setResult] = useState("");
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000").then((res) => {
      console.log(res.data);
      setWord(res.data.result[0].name);
    })
      .catch((err) => console.log(err));
  }, [])

  const sum = () => {
    let str = `http://localhost:8000/add?a=${a}&b=${b}`;
    axios.get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  }
  const minus = () => {
    let minus = `http://localhost:8000/minus?a=${a}&b=${b}`;
    axios.get(minus)
      .then((res) => {
        console.log(res.data);
        setResult3(res.data.value);
      })
      .catch((err) => console.log(err));
  }

  const multiply = () => {
    let mult = `http://localhost:8000/multiply?a=${a}&b=${b}`;
    axios.get(mult)
      .then((res) => {
        console.log(res.data);
        setResult1((res.data.value));
      })
      .catch((err) => console.log(err));
  }
  const divide = () => {
    let divide = `http://localhost:8000/divide?a=${a}&b=${b}`;
    axios.get(divide)
      .then((res) => {
        console.log(res.data);
        setResult2((res.data.value));
      })
      .catch((err) => console.log(err));
  }


  return (
    <div className="App">
      <input type={"text"} value={a} onChange={(e) => setA(e.target.value)}></input>
      <input type={"text"} value={b} onChange={(e) => setB(e.target.value)}></input>
      <button onClick={sum}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={multiply}>x</button>
      <button onClick={divide}>/</button>
      <hr />
      <span>Нийлбэр: {result}</span>
      <hr />
      <span>Ялгавар: {result3}</span>
      <hr />
      <span>Үржвэр: {result1}</span>
      <hr />
      <span>Ноогдвор: {result2}</span>
      <hr />

      {word}
    </div>
  );
}

export default App;
