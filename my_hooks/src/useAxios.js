import React from 'react'
import {useState, useEffect} from 'react'
import defaultAxios from 'axios'


const useAxios = (opt, axiosInstance = defaultAxios) => {

    const [state, setState] = useState({
        loading: true,
        data: null,
        error: null,
     })

     const [trigger, setTrigger] = useState(0)

     
     const refetch = () => {
        setState({
            ...state,
            loading: true
        })
        setTrigger(Date.now())
     }     

     useEffect(()=> {
        axiosInstance(opt).then(data => {
            setState({
                ...state,
                loading: false,
                data
            })
        }).catch(error => {
            setState({...state, loading: false, error })
        })
    }, [trigger]);

    
    if(!opt.url) {
        return;
    }

    return {...state, refetch};

}
export default useAxios;