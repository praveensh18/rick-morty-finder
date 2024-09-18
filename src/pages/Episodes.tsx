import Card from '../components/Card/Card';
import { useNavigate } from 'react-router-dom';
import { fetchEpisodes } from '../services/api';
import { Episode } from '../types/api';
import Layout from './Layout';

export const Episodes: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout<Episode>
      fetchData={fetchEpisodes}
      renderCard={(episode: Episode) => {
        return (
          <Card
            key={episode.id}
            data={episode}
            type='episode'
            onClickCard={() => navigate(`/episode/${episode.id}`)}
          />
        );
      }}
      title='Episodes'
    ></Layout>
  );
};
