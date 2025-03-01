import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import Footer from "./components/Footer";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput, // diğer güncellenmemiş tüm değişkenler
        [inputIdentifier]: +newValue, // Computed Property Syntax ([key]),
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid ? <Results input={userInput}/> : <p className="center">Please enter a duration greater then zero.</p>}
      <Footer/>
    </>
  );
}

export default App;
