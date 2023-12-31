
import API from '../apis';
import { useCallback, useState } from "react"
function useFetch({
    url,
    method
}) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isFail, setIsFail] = useState(false)
    const fetch = useCallback(
        async (body) => {
            setIsLoading(true)
            setIsFail(false)
            try {
                const { data } = await API({
                    url,
                    method,
                    data: body,
                })
                setData(data)
            } catch (e) {
                console.log(e)
                setIsFail(true)
            } finally {
                setIsLoading(false)
            }
        },
        [url, method]
    )

    return { isLoading, fetch, data, isFail }
}

export default useFetch