import React, { Component } from 'react'
import App from '../../App';

class Multistep extends Component {
    state = {

    }
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    // renderForm = () => {
    //     let model = this.props.model;
    //     let formUI = model.map((m) => {
    //         let key = m.key;
    //         let type = m.type;
    //         return (
    //             <div key={key}>

    //                 <label key={"l" + m.key} htmlFor={m.key}>{m.label}</label>
    //                 <div>
    //                 <input ref={(key)=>{this[m.key]=key}}
    //                     type={type}
    //                     key={"i"+m.key}


    //                 ></input>





    //                 </div>




    //             </div>
    //         )

    //     });
    //     return formUI;
    // }

    // render() {
    //     let title = this.props.title || App.js
    //     return (

    //         <div className={this.props.className}>
    //             <h2 className="heading">{title}</h2>
    //             <form>

    //                 {this.renderForm()}

    //             </form>

    //         </div>


    //     )
    // }
    render() {
        return <div className="borrow">
            <h2 className="heading">Borrower Company Info</h2>

            <form>
                <div className="property">
                    <div>
                        <label>Property Name</label>

                    </div>
                    <div>
                        <input type="text" placeholder="Property Name" />
                    </div>
                </div>

                <div className="type1">

                    <div>
                        <label>Property Type</label>

                    </div>
                    <select>
                        <option value="0">Own House</option>
                        <option value="0">Rented</option>
                    </select>

                </div>

                <div className="type">

                    <div>
                        <label>Number Of Units</label>

                    </div>
                    <select>
                        <option value="0">1</option>
                        <option value="0">2</option>
                        <option value="0">3</option>

                    </select>

                </div>
                




            </form>
            <div className="text">

                    <div>
                        <label>Property Address</label>

                    </div>
                    <textarea placeholder="Enter Borrower Name "></textarea>


                </div>

            <div className="file">

                <div>
                    <label>File Attachment</label>

                </div>
                <div className="fi">
                    <p style={{marginLeft:"-3em"}}>Browse or Attach files here</p>
                    <input type="file" style={{marginLeft:"20px"}}></input>

                </div>


            </div>

        </div>

    }
}



export default Multistep
