
import './App.css'

    type FriendProps = {
        name: string,
        age?: number,
        zuAlt?: boolean
    }

    function Hello(props: FriendProps) {
        return<div>
        <h1>
            Hello {props.name} i heared you are {props.age} years old!
        </h1>
            {(() => {
                if (props.zuAlt === true){
                    return <h2>du bist zu alt</h2>
                } else if (props.zuAlt === false){
                    return <h2>dein alter ist okay</h2>
                } else {
                    return <h2>dein alter wurde nicht angegeben</h2>
                }
            })()}
    </div>
    }

    function App() {
        return (
            <div>
                <Hello name={"René"} age={33} zuAlt={true}></Hello>
                <Hello name={"Sunny"} age={0} zuAlt={false}></Hello>
                <Hello name={"ABCDE"} age={0}></Hello>
            </div>
        );

    }



    export default App
