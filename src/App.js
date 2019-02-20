const Pet = (props) => {
    return React.createElement("div",{},[
        React.createElement("h1",{}, props.name),
        React.createElement("h2",{}, props.animal),
        React.createElement("h2",{}, props.breed)
    ]);
}

const App = () => {
    return React.createElement("div",{}, 
        React.createElement("h1",{},'Adopt me!'),
        React.createElement(Pet, {
            name: "Luna", 
            animal: "Dog",
            breed: "Havanese"
            }
        ),
        React.createElement(Pet, {
            name: "Zoti", 
            animal: "Dog",
            breed: "Labrador"
            }
        ),
        React.createElement(Pet, {
            name: "Honey", 
            animal: "Dog",
            breed: "Cocker"
            }
        )
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))