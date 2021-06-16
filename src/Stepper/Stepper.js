import React, { Component } from 'react'


class Stepper extends Component {
    constructor() {
        super();
        this.state = {
            steps:[]
        };
    }



    componentDidMount(){
        const {steps,currentStep}=this.props;
        const stepsState = steps.map((step,index) =>{
            const stepObj = {};
            stepObj.description=step;
            stepObj.completed=false;
            stepObj.highlighted = index===0 ? true:false;
            stepObj.selected = index===0 ? true:false;

            return stepObj;

        });
        const currentSteps= this.updateStep(currentStep-1,stepsState)



        this.setState({
            steps:currentSteps
        });
    }

    componentDidUpdate(prevProps){
        if(prevProps.currentStep !== this.props.currentStep){
            const{steps}=this.state;
            const currentSteps = this.updateStep(this.props.currentStep-1,steps)



            this.setState({
                steps:currentSteps
            });
        }
    }

    updateStep(stepNumber,steps){
        const newSteps=[...steps];
        let stepCounter = 0;
        while(stepCounter < newSteps.length){
            if(stepCounter===stepNumber){
                newSteps[stepCounter] = {
                    highlighted:true,
                    selected:true,
                    competed:false,
                    ...newSteps[stepCounter]

                };
                stepCounter++;
            }
            else if(stepCounter<stepNumber){
                newSteps[stepCounter]={
                    ...newSteps[stepCounter],
                    highlighted:false,
                    selected:true,
                    completed:true
                };
                stepCounter++;

            }
            else{
                newSteps[stepCounter]={
                    ...newSteps[stepCounter],
                    highlighted:false,
                    selected:false,
                    completed:false
                };
                stepCounter++;
            }

        }
        return newSteps;

    }


    render() {
        const {steps} = this.state;
        const stepsDisplay = steps.map((step,index) => {
            return (
                <div className="step-wrap" key={index}>
                    <div className={`stepnumber ${step.selected ? "stepnumber-active":"stepnumber-disabled"}`}>{step.completed ? <span>&#10003;</span> : index + 1}</div>
                    <div className={`step-description ${step.highlighted && "step-description-active"}`}>{step.description}</div>
                    <div className={index!==steps.length-1 ? `divider-line divider-line-${steps.length}`:""}></div>

                </div>

            );
        });




        return (
            <div className="stepper-wrapper">{stepsDisplay}</div>
        );
    }
}
export default Stepper
