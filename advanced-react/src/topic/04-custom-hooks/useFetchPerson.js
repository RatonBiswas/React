import {useState,useEffect} from 'react';

const useFetchPerson = (url) => {
    const [isLoading,setIsLoading] = useState(true)
    const [isError,setIsError] = useState(false)
    const [user,setUser] = useState(null)

    useEffect(()=>{
        const fetchUser = async ()=>{
            try {
                const resp = await fetch(url)
                if(!resp.ok){
                    setIsError(true)
                    setIsLoading(false)
                    return
                }
                const user = await resp.json();
                console.log(user);
                setUser(user)
            } catch (error) {
                setIsError(true)
                console.log(error)
            }
            setIsLoading(false)
        }
        fetchUser()
    },[url])


    return {isLoading,isError,user}
};

export default useFetchPerson;