import {useState,useEffect} from 'react';

const url = 'https://api.github.com/users/RatonBiswas'


const UseUseEffectMultiple = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [isError,setIsError] = useState(false)
    const [user,setUser] = useState(null)
    useEffect(()=>{
        const fetchUser = async ()=>{
            try {
                const respo = await fetch(url)
                if(!respo.ok){
                    setIsError(true)
                    setIsLoading(false)
                    return
                }
                const user = await respo.json();
                console.log(user);
                setUser(user)
            } catch (error) {
                setIsError(true)
                console.log(error)
            }
            setIsLoading(false)
        }
        fetchUser()
    },[])
    if(isLoading){
        return <h2>Loading.......</h2>
    }
    if(isError){
        return <h2>Fetching data error</h2>
    }
    const {name,avatar_url,bio,location} = user
    return (
        <div>
            <img style={{width:'150px',borderRadius:'25px'}} src={avatar_url} alt={name} />
            <h3>{name}</h3>
            <p>{bio}</p>
            <h3>{location}</h3>
        </div>
    );
};

export default UseUseEffectMultiple;