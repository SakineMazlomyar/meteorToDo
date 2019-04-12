import * as React from 'react';
 
// Task component - represents a single todo item
interface Props{
    task:string,
    removeItems:(value:string)=>void,
    id:string
    
}

export class Task extends React.Component<Props, {}>{
    constructor(props:Props){
        super(props)
    }
  render() {
    return (
      <li key={this.props.id}>{this.props.task} <button onClick={()=>this.props.removeItems(this.props.id)}>Remove Item</button></li>
    );
  }
}