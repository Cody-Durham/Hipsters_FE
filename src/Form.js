import React from 'react';

const Form = (props) => {

    // need to create STATE for the form
    const [formData, setFormData] = React.useState(props.hipster)


    //Funcitons
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        props.history.push('/') // <-- Handles like a link tag and goes back to the main page
    };

    const handleChange = (event) => {
        setFormData( {...formData, [event.target.name] : event.target.value })
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <input
                type='text'
                name='name'
                value={formData.thing}
                onChange={handleChange}
                placeholder='Pick your bro name'
            /> */}
            <input
                type='text'
                name='name'
                value={formData.name} 
                onChange={handleChange}
                placeholder='Hipster name here'
            />
            <input
                type='text'
                name='img'
                value={formData.thing}
                onChange={handleChange}
                placeholder='paste url here'
            />
            <input
                type='number'
                // name='img'
                value={formData.thing}
                onChange={handleChange}
                placeholder='Beers drank'
            />
            <input
                type='submit'
                value={props.label}
            />
        </form>
    )

    return <h1>form page</h1>
}

export default Form