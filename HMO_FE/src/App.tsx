import { useState } from "react"

document.title = "Home Screen"
// import data from "./Components/data1.json"

const HomeScreen = () => {

  const newData = [
    {
      question: "What fruit is this?",
      answer: "apple",
       
          A : "apple",
          B : "orange",
          C : "pear",
          D : "mango"
      
  }, 
    {
      question: "What fruit is this?",
      answer: "pear",
       
          A : "apple",
          B : "orange",
          C : "pear",
          D : "mango"
      
  }, 
    {
      question: "What fruit is this?",
      answer: "mango",
       
          A : "apple",
          B : "orange",
          C : "pear",
          D : "mango"
      
  }, 
    {
      question: "What fruit is this?",
      answer: "orange",
       
          A : "apple",
          B : "orange",
          C : "pear",
          D : "mango"
      
  }, 
  ]

  const [state, setState] = useState({})

  
  
  const handlemyOptions = (e:any)=>{
    setState({...state, [e.target.name]: e.target.value})
  }
  
  
  const handleSubmit = ()=>{

    let correctAnswer: Array<string> = [];
    let score: number = 0
     let percentage: number = 0
     let remarks: string = ""
     let grade: string = ""

    for (let i = 0; i < newData.length; i++){
      correctAnswer.push(newData[i].answer)
      
      if (correctAnswer[i] === Object.values(state)[i]) {
        score++
      }
    }
     percentage = Math.ceil((score / newData.length) * 100)
    
    if (percentage > 65) {
      remarks = "Congratulations....."
    }else{
      remarks = "Try again..."
    }

  
    
    if (percentage >= 0 && percentage <= 65) {
      grade = "F"
    }else if (percentage >= 66 && percentage <=100){
      grade = "A"
    }

    

    console.log("grade" + grade);
    console.log("remarks" + remarks);
    console.log("score" + score);
    console.log("percentage" + percentage);
    
  }


 



  return (
    <div className = "bg-red-900 flex justify-center items-center w-full min-h-[100vh] pt-30">
        <div className = "w-[600px] min-h-[500px] p-6 m-20 rounded-md border shadow-md bg-white">
           <p className = "mt-10 w-full text-center font-bold text-[20px] ">Question</p>
           { newData?.map((props:any, i: number)=>(
              <div className = "my-4">
              <p>
                <span className = "mr-2 w-[100px]">{1 + i}.</span>
                {props.question}
              </p>
              <p className="ml-10 mt-2 gap-2 flex items-center">
                <input type="radio"  className="radio radio-accent radio-sm" id={props.A} value={props.A} name= {`${i}`} onChange={(e: any)=> handlemyOptions}/>
                <label htmlFor={props.A}>{props.A}</label>
              </p>
              <p className="ml-10 mt-2 gap-2 flex items-center">
                <input type="radio" className="radio radio-accent radio-sm" id={props.B} value={props.B} name= {`${i}`} onChange={(e: any)=> handlemyOptions}/>
                <label htmlFor={props.B}>{props.B}</label>
              </p>
              <p className="ml-10 mt-2 gap-2 flex items-center">
                <input type="radio" className="radio radio-accent radio-sm" id={props.C} value={props.C} name= {`${i}`} onChange={(e: any)=> handlemyOptions}/>
                <label htmlFor={props.C}>{props.C}</label>
              </p>
              <p className="ml-10 mt-2 gap-2 flex items-center">
                <input type="radio" className="radio radio-accent radio-sm"  id={props.D} value={props.D} name= {`${i}`} onChange={(e: any)=> handlemyOptions}/>
                <label htmlFor={props.D}>{props.D}</label>
              </p>

              {/* <p className = "ml-10 mt-2">
                {props?.options?.map((el: any) =>(
                  <div>
                    <div className="flex">
                      <input type="radio" className="mr-3" id = {`${i}`} name = {`${i}`} value={`${i}`} />

                      <label htmlFor={`${i}`}>{el.A}</label>
                      <label htmlFor={`${i}`}>{el.B}</label>
                      <label htmlFor={`${i}`}>{el.C}</label>
                      <label htmlFor={`${i}`}>{el.D}</label>
                    </div>
                  </div>
                ))}
              </p> */}
            </div>
           ))
           }

           <div className="mt-10">
            <div >
              <button className="btn btn-neutral rounded-md" onClick={handleSubmit}>Submit Your Answers</button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default HomeScreen