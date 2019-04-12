import * as React from 'react';
interface Props{
    addItems:(inputadded:string)=>void
}
interface State{
    inputValue:string
}
export  class Form extends React.Component<Props,State>{
    constructor(props){
        super(props)
        this.state = {
            inputValue:''
        }
    }


    handleChanges = (event:React.ChangeEvent<HTMLInputElement>)=> {
        
       this.setState({
        inputValue:event.target.value
       })

    }

    handleSubmit = (event:React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        this.props.addItems(this.state.inputValue)


    }

    render(){
        return(<form className="new-task" onSubmit={this.handleSubmit}>
            <input type="text" ref="textInput" onChange={this.handleChanges} placeholder="Type to add new tasks"/>
        </form>)
    }


}
