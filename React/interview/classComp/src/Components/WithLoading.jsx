import React, {Component} from 'react'

const WithLoading = (WrappedComp) => {
  return class WithLoading extends Component {
    constructor(props){
      super(props);
      this.state={
        isLoading: true
      }
    }

    alterTheme = (e) => {
      console.log("i am going to toggle the theme");
      //chnage p tag background color . 
    }

    componentDidMount(){
      setTimeout(() => {
        this.setState({isLoading: false});
      }, 2000)
    }

    render(){
      if(this.state.isLoading){
        return <div>Loading....</div>
      }

      return <WrappedComp alterTheme={this.alterTheme} {...this.props}/>
    }
  }
}

export default WithLoading