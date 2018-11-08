import React, { Component } from 'react';
class ToDoList extends Component{
    constructor(props) {
        super(props);
        this.state={
            list:[
                
            ],
        } 
    }
    checkboxChage=(key)=>{
        let templist=this.state.list;
        templist[key].checked=!templist[key].checked;
        this.setState({
            list:templist
        })
        localStorage.setItem('todolist',JSON.stringify(templist));
    }
    componentDidMount(){
        //获取缓存的数据
        var todolist=JSON.parse(localStorage.getItem('todolist'));   /*字符串*/
        if(todolist){
            this.setState({
                list:todolist
            })
        }
    }
    removeList(key){
        let templist=this.state.list;
        templist.splice(key,1);
        this.setState({
            list:templist
        })
        localStorage.setItem('todolist',JSON.stringify(templist));
    }
    addList=(e)=>{
       if(e.keyCode===13){
        let templist=this.state.list;
        templist.unshift({
            title:e.target.value,
            checked:false
        })
        this.setState({
            list:templist
        })
        e.target.value=""
        localStorage.setItem('todolist',JSON.stringify(templist));
       }
    }
     render (){
         return(
             <div className="todolist">
             <input id="addlist" type="text" onKeyDown={this.addList} placeholder="请输入待办事项后回车"/>

                <h2>待办事项</h2>
                    <ul>
                         {
                             this.state.list.map((value,key) => {
                                 if(!value.checked){
                                    return (
                                        <li key={key}>
                                          <input type="checkbox" checked={value.checked} onChange={this.checkboxChage.bind(this,key)} />
                                          {value.title}
                                          <button onClick={this.removeList.bind(this,key)}>删除</button>
                                        </li>
                                    )
                                 }
                                 return false
                             })
                         }
                    </ul>          
                
                <h2>已完成事项</h2>
                <ul>
                         {
                             this.state.list.map((value,key) => {
                                 if(value.checked){
                                    return (
                                        <li key={key}>
                                          <input type="checkbox" checked={value.checked} onChange={this.checkboxChage.bind(this,key)} />
                                          {value.title}
                                          <button onClick={this.removeList.bind(this,key)}>删除</button>
                                        </li>
                                    )
                                 }
                                 return false
                             })
                         }
                    </ul>
             </div>
         )
     }
}
export default ToDoList