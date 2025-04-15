import React from "react";
import "./Gameplay.css";

// import dice_1 from "../../assets/dice/dice_1.png"
import { useState } from "react";
const Gameplay = () => {
  const [selectedNo, setSelectedNo] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);

  const [score, setScore] = useState(0);
  const [error,setError]=useState("")
  const [showRules,setShowRules]=useState(false)

  const handleClick = (e) => {
    console.log(e.target.innerText);
    setSelectedNo(Number(e.target.innerText));
    setError("")
  };

  const generateRandomNo = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const diceChange = () => {
    if (selectedNo === null) {
        setError("You have to selected any Number")
    //   alert("Please select a number before rolling the dice.");
      return;
    }

    const randomNumber = generateRandomNo(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNo === randomNumber) {
      setScore((prev) => prev + selectedNo);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNo(null);
  };

  const resetHandler = () => {
    setScore(0);
    setSelectedNo(null);
  };
  return (
    <>
      {/* <div className='container'> */}
      <main>
        <div className="score">
          <h1>{score}</h1>
          <h3>Total Score</h3>
        </div>

        <div className="box-no">
            <p className="error">{error}</p>
          <div className="boxes">
            {[1, 2, 3, 4, 5, 6].map((value) => {
              return (
                <div
                  key={value}
                  className={selectedNo === value ? "selected" : ""} // div par click karna par , handleClick fn run ho raha hai and issi fn me setSelectedNo , likhe hai , means on clicking the div , setSelectedNo fn runs and then it will check whose div value is equal to this no , jiske bhi div me equal hoga uss div me classname "selected" add ho jayega
                  onClick={(e) => handleClick(e)}
                >
                  {value}
                </div>
              );
            })}
          </div>

          <h4>Select Number</h4>
        </div>
      </main>

      <div className="down-big-div">
        <div className="img-div" onClick={diceChange}>
          <img src={`/dice_${currentDice}.png`} alt="" />
        </div>

        <h4>Click on Dice to roll</h4>

        <div className="btn-div">
          <button className="reset-btn" onClick={resetHandler}>
            Reset Score
          </button>

          <button className="show-btn"
            onClick={()=>setShowRules(prev=>!prev)}
          > 
            {showRules ? "Hide " :"Show "}Rules
            </button>

            {showRules && (
                 <div className="rules">
                 <h2>How to play dice game</h2>
                 <p>Select any number</p>
                 <p>Click on dice image</p>
                 <p>After click on dice if selected number is equal to dice number you will get same point as dice</p>
                 <p>If you get wrong guess then 2 points will be deducted</p>
               </div>

            )}
        
          
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default Gameplay;
