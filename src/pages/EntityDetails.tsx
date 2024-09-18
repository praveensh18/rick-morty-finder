import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { fetchSingleEntity } from '../services/api';
import { capitalizeFirstLetter, formattedDate } from '../utils/utilityMethods';
import Button from '../components/Button/Button';

const EntityDetails = () => {
  const [entityData, setEntityData] = useState({});

  const { entityType, entityId } = useParams();

  const navigate = useNavigate();

  const fetchEntityData = async (type: string, id: string) => {
    const response = await fetchSingleEntity(type, id);
    setEntityData(response);
    console.log('response', response);
  };
  useEffect(() => {
    if (entityType && entityId) {
      fetchEntityData(entityType, entityId);
    }
  }, [entityType, entityId]);

  if (!entityData) {
    return <div>Loading...</div>;
  }

  const CharacterDetails = () => {
    return (
      <div className='entity_details'>
        <div>
          <h3>Name: {entityData.name}</h3>
          <h3>Gender: {entityData.gender}</h3>
          <h3>Species: {entityData.species}</h3>
          <h3>Status: {entityData.status}</h3>
        </div>
        <div>
          <img src={entityData.image} />
        </div>
      </div>
    );
  };

  const EpisodeDetails = () => {
    return (
      <div className='entity_details'>
        <div>
          <h3>Name: {entityData.name}</h3>
          <h3>Episode: {entityData.episode}</h3>
          <h3>Air Date: {entityData.air_date}</h3>
        </div>
        <div>
          <img src={entityData.image} />
        </div>
      </div>
    );
  };

  const LocationDetails = () => {
    return (
      <div className='entity_details'>
        <div>
          <h3>Name: {entityData.name}</h3>
          <h3>Type: {entityData.type}</h3>
          <h3>Created: {formattedDate(entityData.created || '')}</h3>
        </div>
        <div>
          <img src={entityData.image} />
        </div>
      </div>
    );
  };

  const renderEntityData = () => {
    switch (entityType) {
      case 'character':
        return <CharacterDetails />;
      case 'episode':
        return <EpisodeDetails />;
      case 'location':
        return <LocationDetails />;
      default:
        null;
    }
  };

  return (
    <div>
      <h2 className='entity_heading'>
        {capitalizeFirstLetter(entityType || '')} Details
      </h2>
      {renderEntityData()}
      <Button onClick={() => navigate(`/${entityType}s`)}>Back</Button>
    </div>
  );
};

export default EntityDetails;
