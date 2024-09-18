import { Character, Location, Episode } from '../../types/api';
import './Card.css';

type CardProps = {
  data: Character | Location | Episode;
  type: 'character' | 'location' | 'episode';
  onClickCard: () =>  void
};

const Card: React.FC<CardProps> = ({ data, type, onClickCard }) => {
  switch (type) {
    case 'character':
      const character = data as Character;
      return (
        <div className='card' onClick={onClickCard}>
          <img src={character.image} alt={character.name}/>
          <h3>{character.name}</h3>
          <p>Status: {character.gender}</p>
        </div>
      );
    case 'location':
      const location = data as Location;
      return (
        <div className='card' onClick={onClickCard}>
          <h3>{location.name}</h3>
          <p>Type: {location.type}</p>
        </div>
      );
    case 'episode':
      const episode = data as Episode;
      return (
        <div className='card' onClick={onClickCard}>
          <h3>{episode.name}</h3>
          <p>Episode: {episode.episode}</p>
        </div>
      );
    default:
      return null;
  }
};

export default Card;
