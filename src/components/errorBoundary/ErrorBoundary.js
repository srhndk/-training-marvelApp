import {Component} from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';
class ErrorBoundary extends Component {
    state={
        error: false
    }


    componentDidCatch(err,errorInfo) {
        console.log(err, errorInfo)

        this.setState({error: true})
    }

    render() {
        if(this.state.error) {
            return <ErrorMessage/>
        }

        //не обращай пока внимания на это
        return this.props.children;
    }
    
  
}



export default ErrorBoundary;