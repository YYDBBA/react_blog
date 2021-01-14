import React from 'react';
import Article from './../components/Article'
import { match, RouteComponentProps, useParams, useRouteMatch,useHistory,useLocation } from 'react-router-dom'

interface Params {
  id?: string | undefined
}
const Home: React.FC<RouteComponentProps<Params>> = (props) => {
  // 能获取到params的
  console.log(props.match.params.id);

  const param: Params = useParams()
  console.log(param.id);

  const match: match<Params> = useRouteMatch()
  console.log(match.params.id);

  // 不能获取的
  const history = useHistory()
  console.log(history);
  const location = useLocation()
  console.log(location);
  return (
    <div className="Home">
      <Article></Article>
      <Article></Article>
      <Article></Article>
      <Article></Article>
      <Article></Article>
      <Article></Article>
      <Article></Article>
    </div>
  );
}

export default Home;
