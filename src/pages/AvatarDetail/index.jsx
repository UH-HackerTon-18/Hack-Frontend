import AvatarDetail from "components/AvatarDetail"
import { useParams } from "react-router-dom"
import useFetch from "hooks/useFetch";
import { useEffect } from "react";

export default function AvatarDetailPage() {
    let { id } = useParams();
    const { fetch, data } = useFetch({
        method: 'get',
        url: `/world/${id}`
    });

    useEffect(() => {
        fetch();
    }, [id])

    return (
        <>
            <AvatarDetail data={data} />
        </>
    )
}