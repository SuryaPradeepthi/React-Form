
import React,{Component} from 'react'
class File extends Component{
    constructor(){
        super();

    }
    
    
    render(){
        return<div className="file">

        <div>
            <label>File Attachment</label>

        </div>
        <div className="fi">
            <p style={{marginLeft:"-3em"}}>Browse or Attach files here</p>
            <input type="file" style={{marginLeft:"20px"}}></input>

        </div>


    </div>

    }
}
export default File;