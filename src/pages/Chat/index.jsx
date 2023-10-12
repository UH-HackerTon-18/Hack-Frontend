import ChatBox from "components/ChatBox";
import { useParams } from "react-router-dom";
import useFetch from "hooks/useFetch";
import { useEffect } from "react";
import Loading from "../../components/Loading"
function Chat() {
    const { id } = useParams();
    const { isLoading, fetch, data } = useFetch({
        method: 'get',
        url: `/${id}`
    });
    useEffect(() => {
        fetch();
    }, [id])
    return (
        <>
            {!isLoading && data ? <ChatBox id={id} name={data.name} src={data.profile_image_url} /> : <Loading />}
        </>
    )
}
export default Chat;