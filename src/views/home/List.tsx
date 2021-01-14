import React from 'react'
import { Breadcrumb } from 'antd';
import { NavLink, Route, Switch, Redirect, withRouter, RouteComponentProps } from 'react-router-dom'
import Note from './../Note'
import Frame from './../Frame'
import Advance from './../Advance'
import Home from './../Home'

type Obj = {
  name: string;
  path: string;
}
type Tprops<O> = {
  listName: O
}
type IProps<T> = Tprops<T> & RouteComponentProps
const List: React.FC<IProps<Obj>> = (props) => {
  console.log(props);
  return (
    <div style={{ width: '70%', backgroundColor: '#fff' }}>
      <Breadcrumb>
        <Breadcrumb.Item><NavLink to="/home">首页</NavLink></Breadcrumb.Item>
        <Breadcrumb.Item>{props.listName.path === '/home' ? '' : props.listName.name}</Breadcrumb.Item>
      </Breadcrumb>
      <Switch>
        <Route path='/home/:id' component={Home} />
        <Route path='/note' component={Note} />
        <Route path='/frame' component={Frame} />
        <Route path='/advance' component={Advance} />
        <Redirect to='/home' />
      </Switch>
    </div>
  )
}
export default withRouter(List)