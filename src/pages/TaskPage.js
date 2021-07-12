import { useEffect } from 'react';
import {getTasks} from '../services/user.service';

export default function TaskPage() {
    useEffect(() => {
        getTasks().then(res => {console.log(res.data)});
    }, [])

    return (
        <>
          <h1>La liste de mes tâches</h1>  
        </>
    )
}
