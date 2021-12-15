import { Component } from "react";
import React  from "react";
import "./index.css"


class  Pagination extends Component{

    

       
   
     render(){
        const {lengthOfData,pagHandler}=this.props
        let pageNumbers=[]
        for (let i=1;i<= Math.ceil(lengthOfData.length/10);i++){
            pageNumbers.push(i)
        }
    return(
        <li>
        {pageNumbers.map(number => (
            <button  className="btn-bg-Pag butPag" onClick={()=>pagHandler(number)}><a className="a" >{number}</a></button>
          ))}
          </li>
    )
        }

}

// onClick={()=>const pagHandler(number)}
export default Pagination