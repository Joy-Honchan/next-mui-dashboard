'use client'
import axios from "axios"
import { redirect } from 'next/navigation'

if (localStorage.getItem('token')) {
    axios.defaults.headers.common.Authorization = localStorage.getItem('token')
}

axios.interceptors.response.use(
    (res) => {
        return res
    },
    (error) => {
        if (error.response.status === 401) {
            redirect('/signout')
        }
        return Promise.reject(error)
    }
)