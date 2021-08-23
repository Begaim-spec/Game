import React, {useState} from 'react';

const Check = () => {
    const [number] = useState((Math.floor(Math.random()*10)))
    const [guess, setGuess] = useState('')
    const [message,setMessage] = useState('')
    const [freeAttempt, setFreeAttempt]= useState('3')
    const [count, setCount] = useState(0)
    const [zero, setZero] = useState(0)
     const [help, setHelp]= useState('')
    const handleNumber = (e) => {
        setGuess(e.target.value)
        if ( number !== +guess && freeAttempt-1 === 0){
            setMessage('Вы  проиграли')
        }
        else if (number === +guess){
            setMessage('Вы выиграли')
        }
        setGuess('')
    }
    const addNum = () => {
        guess !== '' && setFreeAttempt(freeAttempt-1)
      if  (guess !== '' && guess === number.toString()){
          setCount(count+1)
          localStorage.setItem('score', count+1)
      }
      else if ( guess !== '' && guess !== number.toString()){
          setZero(zero+1)
          localStorage.setItem('band', zero+1)
          localStorage.getItem('band'+1)
      }
    }
   const helpingFor = () => {
        setHelp('1. Значение принимает положительные, целые числа.' +
            ' 2. Введите число от 0 до 10', )
   }
    const reStart = () => {
        localStorage.clear()
    }
    const reset = () => {
        setMessage('')
        setGuess('')
        setFreeAttempt('3')
        setCount(0)
        setZero(0)

    }
    return (
        <div>
            <h1>Угадай число с 3 попыток </h1>
            <input type="number" placeholder=' Введите число' onChange={handleNumber} value={guess}/>
            <div>{message}</div>
            <button onClick={addNum} value={message} disabled={!freeAttempt}>CHECK</button>
            <button type='reset' onClick={reset}>reset</button>
            {
                Boolean (freeAttempt) && <div>У вас остались {freeAttempt} {freeAttempt === 1? 'попытка' : 'попытки'} попытки</div>
            }
            <div>счет {count}:{zero}</div>
            <button onClick={reStart}> Очистить счет</button>
            <div>Процент побед и поражений {localStorage.getItem('band')}:{localStorage.getItem('score')}</div>
            <div> Выберите режим игры
                <label htmlFor="spoiler" onClick={helpingFor}> С подсказкой </label>
                <input type="radio" id='spoiler' name='choose' onClick={helpingFor} />
                <div>
                    {help}
                </div>
                <div>
                    <label htmlFor="withoutSpoiler" >  Без подсказки</label>
                    <input type="radio" id='withoutSpoiler' name='choose'/>
                </div>
            </div>
        </div>
    );
};

export default Check;