import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FormComponent from '../components/FormComponent'

const Register = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const auth = localStorage.getItem("isAuth")

        if (auth === "true") {
            navigate("/")
            // alert("You are no")
        }
    }, [])

    
    return (
        <FormComponent type="register"/>
    )
}

export default Register