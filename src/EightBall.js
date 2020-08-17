import React, { useState } from 'react'
import Eightball from './Eightball.css'


const EightBall = ({ answers }) => {

    const eve = () => {
        // here is where the state is changed
        let rand = Math.floor(Math.random() * answers.length)
        setAnswer(answers[rand])
        if (answers[rand].color == 'green')  setPositive(positive + 1)
        else if (answers[rand].color == 'red') setNegative(negative + 1)
        else setunDecisive(undecisive + 1)




    }
    const reset = () => {
        setAnswer({ msg: 'Think of a question', color: "black" })
        setPositive(0)
        setNegative(0)
        setunDecisive(0)
   }
    const [answer, setAnswer] = useState({msg:'Think of a question', color:"black"})
    const [positive, setPositive] = useState(0)
    const [negative, setNegative] = useState(0)
    const [undecisive, setunDecisive] = useState(0)
    return (
        <>
        <div className='eight-ball'>
            <div onClick={eve}className='eight-ball-circle' id={answer.color}>
                <p >{answer.msg}</p>
            </div>
            </div>
            <div>
        <button onClick={reset}>Reset</button>
                <p >positive: {positive}</p>
        <p >negative : {negative}</p>
        <p >undecisive : {undecisive}</p>

            </div>
            </>
    )

}

export default EightBall