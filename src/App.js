
import React,{Component} from 'react'
import './App.css';
import Header from './Components/index'
import Multistep from './Components/Multistep/Form'
import Stepper from './Stepper/Stepper'

class App extends Component{
  constructor(){
    super();
    this.state ={
      currentStep:1
    }
  }

  
  handleClick(clicktype){
    const {currentStep} =this.state;
    let newStep = currentStep;
    clicktype==="next"?newStep++:newStep--;

if(newStep>0 && newStep<=6)
    this.setState({
      currentStep:newStep
    });

  }



  render(){
    const stepsArray = [
      "Borrower Company Info",
      "Director Info",
      "Financial Info",
      "Past Perfomance details",
      "Document Upload"
    ];


  //   const model = {
  //     fields: [
  //         {
  //             "fieldId": "1",
  //             "fieldName": "Property Name",
  //             "type": "string"
  //         },
  //         {
  //             "fieldId": "2",
  //             "fieldName": "Property Type",
  //             "type": "dropdown",
  //             "selectableValues": ["Own House", "Rented"]
  //         },
  //         {
  //             "fieldId": "3",
  //             "fieldName": "Number of Units",
  //             "type": "dropdown",
  //             "selectableValues": ["1", "2"]
  //         },
  //         {
  //             "fieldId": "4",
  //             "fieldName": "Property Address",
  //             "type": "textarea"
  //         },
  //         {
  //             "fieldId": "5",
  //             "fieldName": "File Attachment",
  //             "type": "file"
  //         }
  //     ]



  // }

    
    const {currentStep} =this.state
    
    
    return (
      <div className="App">
        <Header/>
  
        <Stepper steps ={stepsArray} currentStep={currentStep}/>

{/*   
        <div className="borrow">
        <Multistep
        
        title="Borrower Company Info"
         const model={[
        {key:"1",label:"Property Name",type:"string"},
        {key:"2",label:"Property Type",type:"dropdown",selectableValues:["Own House", "Rented"]},
        {key:"3",label:"Number Of Units",type:"dropdown",selectableValues: ["1", "2"]},
        {key:"4",label:"Property Address",type:"text"},
        {key:"5",label:"File Attachment",type:"file"}
        
      ]}
      onClick={(model)=>{this.handleClick(model)}}
        
        
        />


        </div> */}
        <Multistep/>
        <div className="buttons-container">
          
          <button className="btnn1" onClick={()=>this.handleClick()}>Back </button>
          <button className="btnn" onClick={()=>this.handleClick("next")} >Continue</button>

          
          
          
        </div>
        
  
      </div>
      
    );
      
  }

  }
  

export default App;
