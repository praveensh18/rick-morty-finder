import Card from '../components/Card/Card';
import { fetchCharacters } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { Character } from '../types/api';
import Layout from './Layout';

export const Characters: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout<Character>
      fetchData={fetchCharacters}
      renderCard={(character: Character) => {
        return (
          <Card
            key={character.id}
            data={character}
            type='character'
            onClickCard={() => navigate(`/character/${character.id}`)}
          />
        );
      }}
      title='Characters'
    ></Layout>
  );
};
