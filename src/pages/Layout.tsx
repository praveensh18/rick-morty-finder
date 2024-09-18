import { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import { APIResponse } from '../types/api';

type LayoutProps<T> = {
	fetchData: (page: number) => Promise<APIResponse<T>>
	renderCard: (item: T) => JSX.Element;
	title: string;
}
const Layout = <T,>({ fetchData, renderCard, title }: LayoutProps<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
		setLoading(true);
    try {
			setLoading(true);
      const result = await fetchData(page);
      setData(result.results);
      setTotalPages(result.info.pages);
    } catch (err: unknown) {
      alert((err as Error).message);
    }finally {
			setLoading(false);
		}
  };

  useEffect(() => {
    getData();
  }, [fetchData, page]);

  return <div>
		<h1 style={{textAlign:'center'}}>{title}</h1>
		{loading && <div className="loader"></div>}
		<div className="card_container">
        {data.length > 0 && (
          data.map(item => renderCard(item))
        ) }
      </div>
			<div className='btn_container'>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </Button>
      <Button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        Next
      </Button>
			</div>
	</div>;
};

export default Layout;
