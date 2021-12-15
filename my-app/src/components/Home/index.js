import {Component} from "react" 
import {BsChevronRight, BsChevronLeft,BsChevronDoubleLeft,BsChevronDoubleRight} from 'react-icons/bs'
import Item from "../Item"
import Pagination from "../Pagination"

import "./index.css" 


const count=10
class Home extends Component {
    state={
        nameList:[],
        lengthOfData:[],
        activePage: 1,
        searchInput: '',
        start:0,
        end:10,
        btn1:true,
        btn2:false,
        btn3:false,
        btn4:false,
        btn5:false,
    }

    componentDidMount(){
        this.getData()
    }

    getData=async ()=>{
        const {nameList,activePage,lengthOfData,start,end,}=this.state
        
        const url=`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json?search`

        const options={
            method:"GET"
        }

        const response=await fetch(url,options)
        if (response.ok===true){
            const data = await response.json() 
            console.log(data.length) 
            const length=data.length
            let limitData=data.slice(start,end)
            
           /* limitData.map(each=>({
                id:each.id,
                name:each.name,
                role:each.role,
                email:each.email
            })) */

            this.setState({
                nameList:limitData,
                lengthOfData:data
            })
              } 


    }


    pagHandler=(number)=>{
           const{start,end}=this.state 
           this.setState({
               start:(number*10)-10,
               end:number*10
           },this.getData)
           console.log(start,end,number)
    }
    

    

   /* onOne=()=>{
        const {start,end}=this.state
       this.setState({
           start:0,
           end:10
       },this.getData)

       this.setState({
        btn2:false,
        btn1:true,
        btn3:false,
        btn4:false,
        btn5:false,
    })
    }

    onTwo=()=>{
        const {start,end,btn2}=this.state
       this.setState({
           start:10,
           end:20,
       },this.getData)

      this.setState({
          btn2:true,
          btn1:false,
          btn3:false,
          btn4:false,
          btn5:false,
      })
    }
    onThree=()=>{
        const {start,end}=this.state
       this.setState({
           start:20,
           end:30
       },this.getData)

       this.setState({
        btn2:false,
        btn1:false,
        btn3:true,
        btn4:false,
        btn5:false,
    })
    }
    onFour=()=>{
        const {start,end}=this.state
       this.setState({
           start:30,
           end:40
       },this.getData)

       this.setState({
        btn2:false,
        btn1:false,
        btn3:false,
        btn4:true,
        btn5:false,
    })
    }
    onFive=()=>{
        const {start,end}=this.state
       this.setState({
           start:40,
           end:50
       },this.getData)

       this.setState({
        btn2:false,
        btn1:false,
        btn3:false,
        btn4:false,
        btn5:true,
    })
    } */

    onLeft=()=>{
        const {start,end}=this.state
        if (start>0 && end<=50){
        this.setState(pre=>({
            start:pre.start-10,
            end:pre.end-10
        }),this.getData)
       console.log(start,end)
        }
       else if (end>=50){
        this.setState({
            start:40,
            end:50
        },this.getData)
        console.log(start,end)
    }
       if (start>=20 && end<=30){
        this.setState({
            btn2:true,
            btn1:false,
            btn3:false,
            btn4:false,
            btn5:false,
        })
    }
    else if (start>=30 && end<=40){
        this.setState({
            btn2:false,
            btn1:false,
            btn3:true,
            btn4:false,
            btn5:false,
        })
    }
    else if (start>=40 && end<=50){
        this.setState({
            btn2:false,
            btn1:false,
            btn3:false,
            btn4:true,
            btn5:false,
        })
    }

   
    else if (start>=10 && end<=20){
        this.setState({
            btn2:false,
            btn1:true,
            btn3:false,
            btn4:false,
            btn5:false,
        })
    }
    else if (start>=50){
        this.setState({
            btn2:false,
            btn1:false,
            btn3:false,
            btn4:false,
            btn5:true,
        })
    }
    

       

       
    }

    onRight=()=>{
        const {start,end}=this.state
        if (start>=0 && end<50)
        this.setState(pre=>({
            start:pre.start+10,
            end:pre.end+10
        }),this.getData)

        if (start>=0 && end<=10){
            this.setState({
                btn2:true,
                btn1:false,
                btn3:false,
                btn4:false,
                btn5:false,
            })
        }
        else if (start>=10 && end<=20){
            this.setState({
                btn2:false,
                btn1:false,
                btn3:true,
                btn4:false,
                btn5:false,
            })
        }
        else if (start>=20 && end<=30){
            this.setState({
                btn2:false,
                btn1:false,
                btn3:false,
                btn4:true,
                btn5:false,
            })
        }

        else if (start>=30 && end<=40){
            this.setState({
                btn2:false,
                btn1:false,
                btn3:false,
                btn4:false,
                btn5:true,
            })
        }
    }

    onLeftD=()=>{
        const {start,end}=this.state

    if (start>=20 && end<=50){
        this.setState(pre=>({
            start:pre.start-20,
            end:pre.end-20
        }),this.getData)
        console.log(start,end)
    }
    
    else if (start<=20){
        this.setState({
            start:0,
            end:10
        },this.getData)
        
    }

    if (start>0 && end<=10){
        this.setState({
            btn2:false,
            btn1:false,
            btn3:true,
            btn4:false,
            btn5:false,
        })
    }
    else if (start>=40 && end<=50){
        this.setState({
            btn2:false,
            btn1:false,
            btn3:true,
            btn4:false,
            btn5:false,
        })
    }
    else if (start>=20 && end<=30){
        this.setState({
            btn2:false,
            btn1:true,
            btn3:false,
            btn4:false,
            btn5:false,
        })
    }
    else if (start>=30 & end<=40){
        this.setState({
            btn2:true,
            btn1:false,
            btn3:false,
            btn4:false,
            btn5:false,
        })
    }
    else if (start>=10 && end<=20){
        this.setState({
            btn2:false,
            btn1:true,
            btn3:false,
            btn4:false,
            btn5:false,
        })
    }
    

     
    }

    onRightD=()=>{
        const {start,end}=this.state
        if (start>=0 && end<50){
        this.setState(pre=>({
            start:pre.start+20,
            end:pre.end+20
        }),this.getData)
        console.log(start,end)
       }

       else if (end>=20){
        this.setState({
            start:40,
            end:50
        },this.getData)
    }


        
        if (start>=0 && end<=10){
            this.setState({
                btn2:false,
                btn1:false,
                btn3:true,
                btn4:false,
                btn5:false,
            })
        }
        else if (start>=10 && end<=20){
            this.setState({
                btn2:false,
                btn1:false,
                btn3:false,
                btn4:true,
                btn5:false,
            })
        }
        else if (start>=20 && end<=30){
            this.setState({
                btn2:false,
                btn1:false,
                btn3:false,
                btn4:false,
                btn5:true,
            })
        }
       /* else if (start>=30){
            this.setState({
                btn2:false,
                btn1:false,
                btn3:false,
                btn4:false,
                btn5:false,
            })
        } */

        
      
    
    } 

    text=()=>{
        const {nameList}=this.state
        let para
        if (nameList.length===0){
        para =<p>No More People to Show</p>

        }
        return para
       
    }

    onChangeSearch=(event)=>{
        this.setState({
            searchInput:event.target.value
        })

    }

    onDelete=(id)=>{
        const {nameList} = this.state
       const filteredUsersData = nameList.filter(
      each => each.id !== id)
      this.setState({
        nameList: filteredUsersData
      })
    } 

    checkBox=(id)=>{
         
    }

    onDeleteBut=(i)=>{
        this.checkBox()
    }
    
    render(){
        
        const {nameList,searchInput,btn1,btn2,btn3,btn4,btn5,end,lengthOfData}=this.state

        console.log(nameList,end,lengthOfData.length)

        let searchResults = nameList.filter(eachUser =>
            eachUser.name.toLowerCase().includes(searchInput.toLowerCase())
          )

        const chgBg=btn1?"button":"btn-bg"
        const chgBg2=btn2?"button":"btn-bg"
        const chgBg3=btn3?"button":"btn-bg"
        const chgBg4=btn4?"button":"btn-bg"
        const chgBg5=btn5?"button":"btn-bg"

        return (
            <div>
                <div className="div-con">
                <input className="search" placeholder="Search by name" value={searchInput} onChange={this.onChangeSearch} type="search"/>
                </div>
            <ul className="container">
               <li >
                   <div className="li1">
                 <input type="checkbox"/>
                 <p className="para">Name</p>
                 <p className="para">Email</p>
                 <p className="para">Role</p>
                 <p className="para">Actions</p>
                 </div>
                 <hr/>
               </li>
              {searchResults.map(each=>(
                  <Item eachDetails={each} key={each.id} onDelete={this.onDelete}/>
              ))}
               
            </ul>
            {this.text()} 
            <div className="but-container">
            <button onClick={this.onDeleteBut} >Delete Checked</button>
            <ul className="ul-pag">
                <li><button onClick={this.onLeftD} className="but btn-bg"><BsChevronDoubleLeft/></button></li>
                <li> <button onClick={this.onLeft} className="but btn-bg"><BsChevronLeft/></button></li>
                
                 <Pagination lengthOfData={lengthOfData}  lengthdet={count} pagHandler={this.pagHandler}/>
                 <button onClick={this.onRight} className="but btn-bg"><BsChevronRight/></button>
                <button onClick={this.onRightD} className="but btn-bg"><BsChevronDoubleRight/></button>
                 </ul>
            </div>
            </div>
        )
    }
}

/*   
  <div>
                <button onClick={this.onLeftD} className="but btn-bg"><BsChevronDoubleLeft/></button>
                <button onClick={this.onLeft} className="but btn-bg"><BsChevronLeft/></button>
                <button onClick={this.onOne} className={`but ${chgBg}`}>1</button>
                <button onClick={this.onTwo} className={`but ${chgBg2}`}>2</button>
                <button onClick={this.onThree} className={`but ${chgBg3}`}>3</button>
                <button onClick={this.onFour} className={`but ${chgBg4}`}>4</button>
                <button onClick={this.onFive} className={`but ${chgBg5}`}>5</button>
                <button onClick={this.onRight} className="but btn-bg"><BsChevronRight/></button>
                <button onClick={this.onRightD} className="but btn-bg"><BsChevronDoubleRight/></button>
            </div>
*/

export default Home