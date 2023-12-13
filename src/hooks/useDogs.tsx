import { collection, query, orderBy, limit } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { firestore } from 'src/clients/firebase'

const dogsRef = collection(firestore, 'dogs')
const q = query(dogsRef, orderBy('name'), limit(100))

export const useDogs = () => {
    const [data, isLoading, error] = useCollectionData(q)

    return { data, isLoading, error }
}
