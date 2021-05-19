// import React from 'react'

const Display = ({hipsters, selectHipster, deleteHipster, history}) => {
    // const {hipsters} = props 
    // const hipsters = props.hipsters

    // console.log(props);
    const loaded = () => (
        
        <div style={{textAlign: "center"}}>
          {hipsters.map((item) => (
              <article key={item._id}>
              <img src={item.img}/>
              <h1>Name: {item.name}</h1>
              <p>Age: {item.description}</p>

              <h4>beers consumed: {item.test}</h4>
              <h4>beard length: {item.test}</h4>

              <button onClick={() => {
                  selectHipster(item)
                  history.push("/edit")
                }}>
                edit
                </button>
                <button onClick={() => {
                    deleteHipster(item)
                }}>
                Delete
              </button>
            </article>
          ))}
        </div>
      )
      
      const loading = () => <h2>Crap Bag!</h2>
        
        return hipsters.length > 0 ? loaded() : loading()
        // return <h1>testing</h1>
    }
    
export default Display
