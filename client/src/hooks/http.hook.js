import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const request = useCallback ( async (url, method = 'GET', body = null, headers = {}) => {
        try {

        } catch (e) {
            
        }
    })

    return { loading, request, error}
}
