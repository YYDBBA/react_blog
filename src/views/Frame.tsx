import React from 'react';
import { useQuery } from '../hooks/hooks'
import { RouteComponentProps } from 'react-router-dom'

const Frame: React.FC<RouteComponentProps> = (props) => {
  console.log(props);
  const query = useQuery()
  const nameParams = new URLSearchParams(props.location.search)
  console.log(nameParams.get('name'));
  return (
    <div className="App">
      Vue，React，{query.get('name')}
      <ul>
        <li>hdsfahds</li>
      </ul>
    </div>
  );
}

export default Frame;
