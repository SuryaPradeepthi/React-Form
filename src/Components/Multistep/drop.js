import React,{useState} from 'react'
import { useDropzone } from 'react-dropzone'

function Drop(){
    const[files,setFiles] = useState([])
    const{getRootProps,getInputProps} = useDropzone({
        accept:"image/*",
        onDrop:(acceptedFiles) =>{
            setFiles(
                acceptedFiles.map((file) =>Object.assign(file,{
                    preview:URL.createObjectURL(file)
                }))
            )
        }

    })
    const images = files.map((file) =>(
        <div key={file.name}>
            <img src={file.preview} style={{width:"200px"}} alt="preview"/>
        </div>

    ))

    return(
    <div className="drop">
        <div {...getRootProps()}>
            <input {...getInputProps()}/>
            <p>Drop Files here</p>

        </div>
        <div>{images}</div>



    </div>
) 
}
export default Drop