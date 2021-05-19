import React from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import Display from './Display';
import Form from './Form';


function App() {


const url = "https://hipsters-be.herokuapp.com"
const [hipsters, setHipster] = React.useState([])

//this is to make a new empty hipster
const emptyHipster = {
  name: '', 
  img: '', 
  description: ''
}

const [selectedHipster, setSelectedHipster] = React.useState([])

const getHipsters = () => {
  //making a request from the url here
  fetch(url + '/hipsters/')
  .then( (response) => response.json() )
  .then( (data) => {
    setHipster(data)
  })
};

// this acts like an 'on page load'
React.useEffect( () => {
getHipsters()
}, []);

const handleCreate = (newHipster) => {
  fetch(url + '/hipsters/', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newHipster)
  })
  .then( () => getHipsters() )
};

const handleUpdate = (updateHipster) => {
  fetch(url + '/hipsters/' + updateHipster._id, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateHipster)
  })
  .then( () => getHipsters() )
};

//this is setting the state to the hipster
const selectHipster = (hipster) => {
  setSelectedHipster(hipster)
};

const deleteHipster = (hipster) => {
  fetch(url + '/hipsters/' + hipster._id, {
    method: 'DELETE',
  })
  .then( () => getHipsters() )
}

  return (
    <div className="App">
      <h2>HIPSTERS IN THE WILD</h2>
      <hr/>
      <Link to='/create'>
        <button>Make a new hipster</button>
      </Link>
     <main>
     <Switch>
      <Route
          exact path="/"
          render={(routerProps) => (<Display {...routerProps} 
            hipsters={hipsters} // passing props
            selectHipster={selectHipster} // passing props
            deleteHipster={deleteHipster} // passing props
            />
          )}
          />
        <Route
          exact path='/create'
          render={(routerProps) => (
            <Form {...routerProps}
            label='create'
            hipster={emptyHipster}
            handleSubmit={handleCreate}
            />
          )}
          />
        <Route
        exact path='/edit'
        render={(routerProps) => (
          <Form {...routerProps}
          label='update'
          hipster={selectedHipster}
          handleSubmit={handleUpdate}
          />
        )}
        />
      </Switch>
     </main>
    </div>
  );
}

export default App; 
