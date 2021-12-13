import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./Components/display";
import Button from "./Components/button";


export type BtnPropsType = {
  value: string
}

function App() {
  const btnArr = [
    {value: "1"},
    {value: "2"},
    {value: "3"},
    {value: "4"},
    {value: "5"},
    {value: "6"},
    {value: "7"},
    {value: "8"},
    {value: "9"},
    {value: '+'},
    {value: '-'},
    {value: '*'},
    {value: '/'},
    {value: '='},
    {value: 'C'},
  ];

  let [btn] = useState(btnArr);
  let [values, setValue] = useState<string>('');

  const clickBtn = (value: string ) => {
    // setValue(values + value)

    if (value === '=') {
       try {
         const test = eval(values)
         setValue(String(test))
       } catch {}
    } else if (value === 'C') {
        setValue('')
    } else {
      setValue(values + value)
    }

  }

  return (
    <div className="App">
      <div className={'container'}>
        <Display values={values}/>
        <Button btn={btn} clickBtn={clickBtn}/>
      </div>
    </div>
  );
}

export default App;
