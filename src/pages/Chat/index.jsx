import ChatBox from "components/ChatBox";
import { useParams } from "react-router-dom";
import useFetch from "hooks/useFetch";
function Chat() {
    const { id } = useParams();
    const { isLoading, fetch, data } = useFetch({
        method: 'get',
        url: `/${id}`
    });
    return (
        <>
            <ChatBox id={id} />
        </>
    )
}
export default Chat;