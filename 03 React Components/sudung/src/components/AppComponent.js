// import Welcome from './components/Welcome';
// function App() {
//     return (
//         <div className="App">
//             <Welcome name="Admin" />
//         </div>
//     );
// }
// export default App;


// import { Component } from 'react';
// class AddComponent extends Component {
//     render() {
//         return <h1>Total: {this.props.firstNumber + this.props.secondNumber}</h1>
//     }
// }
// export default AddComponent;


function AddComponent(props) {
    return (
        <h1>Total: {props.firstNumber + props.secondNumber}</h1>
    );
}
 
export default AddComponent;