import React from 'react';
import Title from './Title';
import MissionsCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map(({ name, year, country, destination }) => (
          <MissionsCard
            key={ name }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />))}
      </div>
    );
  }
}

export default Missions;
