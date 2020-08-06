import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Employee from './components/employye/employee';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Provider } from 'react-redux';
import store from './redux/store'


class HomePage extends React.Component{

  render(){

    return(
      <Provider store={store}>
        <div className="container is-fluid mt-4">
          <Employee/>
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(
  <HomePage/>,
  document.getElementById('root')
)
