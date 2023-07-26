
import './App.css'

type FriendProps = {
    name: string,
    age: number
}

function Hello(props: FriendProps) {
    return <h1>Hello {props.name} i heared you are {props.age} years old!</h1>
}
function App() {
    return (
        <div>
            <Hello name={"René"} age={33}></Hello>
        </div>
    );// <Hello name={"Marvin"} age={26}></Hello>

}



export default App
