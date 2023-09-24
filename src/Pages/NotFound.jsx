import {useHistory} from 'react-router-dom'

export const NotFound = () =>{
    const {goBack} = useHistory()
    return (
        <div>
            Page not found
            <button onClick={goBack}>Go back</button>
        </div>
    )
}