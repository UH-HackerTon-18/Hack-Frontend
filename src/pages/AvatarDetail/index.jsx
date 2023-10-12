import AvatarDetail from 'components/AvatarDetail';
import { useParams } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import { useEffect } from 'react';
import { isNotNull } from 'utils/isNotNull';
import Loading from '../../components/Loading';
export default function AvatarDetailPage() {
  let { id } = useParams();
  const { isLoading, fetch, data } = useFetch({
    method: 'get',
    url: `/${id}`,
  });
  console.log(process.env.REACT_APP_BASE_URL);
  useEffect(() => {
    fetch();
  }, [id]);
  return <>{!isLoading && isNotNull(data) ? <AvatarDetail data={data} /> : <Loading />}</>;
}
