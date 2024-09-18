import Card from '../components/Card/Card';
import { useNavigate } from 'react-router-dom';
import { fetchLocations } from '../services/api';
import { Location } from '../types/api';
import Layout from './Layout';

export const Locations: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout<Location>
      fetchData={fetchLocations}
      renderCard={(location: Location) => {
        return (
          <Card
            key={location.id}
            data={location}
            type='location'
            onClickCard={() => navigate(`/location/${location.id}`)}
          />
        );
      }}
      title='Locations'
    ></Layout>
  );
};
