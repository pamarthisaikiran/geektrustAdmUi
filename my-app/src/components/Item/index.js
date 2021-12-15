import "./index.css"
import {AiOutlineDelete,} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'

const Item=(props)=>{
    const {eachDetails,onDelete}=props
    const {role,name,email,id}=eachDetails
    
    const ondelete=()=>{
         onDelete(id)
    }
     
    const onInput=(event)=>{
        console.log(event.target.checked)
    }

    return(
        <li>
            <div  className="item-li">    
            <input onClick={onInput} type="checkbox"/>       
            <p>{name}</p>
            <p>{email}</p>
            <p>{role}</p>
            <div className="del-btn">
            <button className="btn-del"><BiEdit/></button>
            <button onClick={ondelete} className="btn-del"><AiOutlineDelete/></button>
            </div>
            </div>
            <hr/>
        </li>
    )
}
export default  Item