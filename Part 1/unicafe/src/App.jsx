import { useState } from 'react'

const Button = ({handleClick,text}) => {
  return(
    <button onClick={() => handleClick(text)}>{text}</button>
  )
}

const Statics = ({good, neutral, bad, all}) => {
  return(
    <>
    <StaticLine text='good' value={good} />
    <StaticLine text='neutral' value={neutral} />
    <StaticLine text='bad' value={bad} />
    <StaticLine text='all' value={all} />
    <StaticLine text='average' value={((good+bad*-1)/all).toFixed(2)} />
    <StaticLine text='positive' value={((good / all) * 100).toFixed(2)} />     
    </>
  )
}

const StaticLine = ({text, value}) => {
  return(
    <p style={{lineHeight:"0"}}>{text}: {value}{text === 'positive' ? '%' : ''}</p>)
}


function App() {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  const [ all, setAll ] = useState(0)

  const handleClick = (name) => {
    const updatedAll =  good + neutral + bad + 1

    name === 'Good' ? setGood( good + 1) : name === 'Neutral' ? setNeutral( neutral + 1) : setBad( bad + 1)
    setAll( updatedAll)
  }
  
  return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleClick} text='Good' /> 
        <Button handleClick={handleClick} text='Neutral'/> 
        <Button handleClick={handleClick} text='Bad'/> 
        <h2>statistics</h2>
        {all === 0 ? 'No feedback given' : <Statics good={good} neutral={neutral} bad={bad} all={all} />}
      </div>

  )
}

export default App
