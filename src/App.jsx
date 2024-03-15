import { useState } from "react"
import UserInput from "./components/UserInput"
import Result from "./components/Result"


function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
});

const inputIsValid = userInput.duration>0;

function handleChange(inputIdentifier,value){
  setUserInput((prevUserInput)=>{
      return{...prevUserInput,[inputIdentifier]:+value,};  // + makes the type conversion of string to integer
  });

}


  return (
    <>
    <UserInput onChange={handleChange} userInput={userInput} />
    {!inputIsValid && <p className="center">Please enter a valid time duration.</p> }
    {inputIsValid && <Result input={userInput} />}
    </>
  )
}

export default App
