import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFirstNameInput, updateLastNameInput } from '../redux/userForm/userFormActions';


const Form = () => {
    const firstName = useSelector(state => state.firstName)
    const lastName = useSelector(state => state.lastName)

    const dispatch = useDispatch();
    return (
        <div>
            <h2>Register your name and email</h2>
            <form actiom="" className="form">
                
                <div className="input">
                    <div>
                        Name: {' '}
                        <input type="text" placeholder="Name" className="name"
                        value={firstName}
                        onChange = { (e) => dispatch(updateFirstNameInput(e.target.value)) }
                        />
                    </div>
                    <div>
                    Email: {' '}
                    <input type="text" placeholder="Email" className="email"
                    value={lastName}
                    onChange = { (e) => dispatch(updateLastNameInput(e.target.value)) } 
                    />
                    </div>
                    
                </div>
            </form>
            <div>
                <h2>Show</h2>
                <p>Name: {firstName} </p>
                <p>Email: {lastName}</p>
            </div>
        </div>
    );
}

export default Form;
