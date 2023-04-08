import React from 'react';
import Title from './Title';
import MissionsCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions">
          {missions.map((bloco) => (
            <MissionsCard
              key={ bloco.name }
              name={ bloco.name }
              year={ bloco.year }
              country={ bloco.country }
              destination={ bloco.destination }
            />))}
        </div>
      </div>
    );
  }
}

export default Missions;
