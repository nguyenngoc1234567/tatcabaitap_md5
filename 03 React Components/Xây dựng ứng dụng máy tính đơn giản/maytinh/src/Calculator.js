// import {useState} from "react";

// function Calculator(){
// const [number,setNumber] = useState(0);
// const [number2,setNumber2] = useState(0);
// const [result,setResult] = useState(0)

//     function handleChangeNumber(e) {
//       setNumber(e.target.value)

//     }
//     function handleChangeNumber2(e) {
//       setNumber2(e.target.value)
//     }
//     function handleClickAdd(){
//       setResult( number/1 + number2/1)
//     }
//     function handleClickSub(){
//       setResult( number/1 - number2/1)
//     }
//     function handleClickMulti(){
//       setResult( number/1 * number2/1)
//     }
//     function handleClickDivide(){
//       setResult( (number/1) / (number2/1))
//     }
//     return (
//         <div>
//             <input type='number' onChange={handleChangeNumber}/>
//             <input type='number' onChange={handleChangeNumber2}/>
//             <button type='button' onClick={handleClickAdd}>+</button>
//             <button type='button' onClick={handleClickSub}>-</button>
//             <button type='button' onClick={handleClickMulti}>X</button>
//             <button type='button' onClick={handleClickDivide}>/</button>
//             <p>result: {result}</p>
//         </div>
//     )
// }
//  cách 2

import {useState} from "react";


    function Calculator() {
        const [result, setResult] = useState('');
      
        const handleClick = (e) => {
          setResult(result.concat(e.target.name));
        }
      
        const calculate = () => {
          try {
            setResult(eval(result).toString());
          } catch (error) {
            setResult('Error');
          }
        }
      
        const clear = () => {
          setResult('');
        }
      
        return (
          <div className="calculator">
            <input type="text" value={result} />
            <div className="keypad">
              <button name="1" onClick={handleClick}>1</button>
              <button name="2" onClick={handleClick}>2</button>
              <button name="3" onClick={handleClick}>3</button>
              <button name="4" onClick={handleClick}>4</button>
              <button name="5" onClick={handleClick}>5</button>
              <button name="6" onClick={handleClick}>6</button>
              <button name="7" onClick={handleClick}>7</button>
              <button name="8" onClick={handleClick}>8</button>
              <button name="9" onClick={handleClick}>9</button>
              <button name="0" onClick={handleClick}>0</button>
              <button name="+" onClick={handleClick}>+</button>
              <button name="-" onClick={handleClick}>-</button>
              <button name="*" onClick={handleClick}>*</button>
              <button name="/" onClick={handleClick}>/</button>
              <button name="." onClick={handleClick}>.</button>
              <button name="clear" onClick={clear}>C</button>
              <button name="result" onClick={calculate}>=</button>
            </div>
          </div>
        )
}
export default Calculator



// export default Calculator