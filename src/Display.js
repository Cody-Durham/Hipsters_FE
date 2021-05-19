// import React from 'react'

const Display = (props) => {
    const {hipsters} = props
    
    const loaded = () => (
        <div style={{textAlign: "center"}}>
          {hipsters.map((item) => (
              <article key={item._id}>
              <img src={item.img} alt={'something'}/>
              <h1>{item.name}</h1>
              <h3>{item.age}</h3>
              <button onClick={() => {
                  props.selectHipster(item)
                  props.history.push("/edit")
                }}>
                edit
                </button>
                <button onClick={() => {
                    props.deleteHipster(item)
                }}>
                Delete
              </button>
            </article>
          ))}
        </div>
    //   console.log(props);
      )
      
      const loading = () => <h2>Crap Bag!</h2>
        
        return hipsters.length > 0 ? loaded() : loading()
        // return <h1>testing</h1>
    }
    
export default Display