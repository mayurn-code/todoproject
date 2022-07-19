import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FormComponent = ({ type }) => {
    const navigate = useNavigate()

    const [registerForm, setRegisterForm] = useState(
        {
            id: 0,
            name: "",
            password: ""
        }
    )


    const { id, name, password } = registerForm


    const onInputChange = (e) => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        let arr = JSON.parse(localStorage.getItem("user_array")) || []
        if (type === "register") {
            const obj = {
                id: id + 1,
                name: name,
                password: password,
            }

            arr.push(obj)
            localStorage.setItem("user_array", JSON.stringify(arr))
            setRegisterForm({
                id: obj.id,
                name: "",
                password: ""
            })
            navigate("/login")
        }


        if (type === "login") {
            console.log(arr, 'Arr')
            const loggedInArr = arr.filter((item) => item.name === name && item.password === password)
            console.log(loggedInArr)

            if (loggedInArr.length > 0) {
                localStorage.setItem("isAuth", "true")
                navigate("/")
            }
        }
    }


    return (
        <div className='container'>
            <h1 className='text-center'>{type === "login" ? "Login Page" : "Register Page"}</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={name} onChange={(e) => onInputChange(e)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="text" className="form-control" name='password' value={password} onChange={(e) => onInputChange(e)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default FormComponent;