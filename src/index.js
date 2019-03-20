import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import React, { Component } from "react";
import { createStore } from "redux";
import reducer from './reducers/index'
import action from './actions/index'
import "./index.css";

const originalState = {
  name: "Redux"
};

const store = createStore(reducer, originalState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
const updateName = (e) => {
  store.dispatch(action(e.target.dataset.tech));
};

class App extends Component {

  render() {
    const { name } = store.getState();
    return (
      <div>
        <h2 className="HelloWorld">Hello World { name }</h2>
        <div className="ButtonContainer">
          <button onClick={updateName} data-tech="React" className="Button">React</button>
          <button onClick={updateName} data-tech="Elm" className="Button">Elm</button>
          <button onClick={updateName} data-tech="React-redux" className="Button">React-redux</button>
        </div>
    </div>
    );
  }
}

const render = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};
store.subscribe(render);
render();
registerServiceWorker();
