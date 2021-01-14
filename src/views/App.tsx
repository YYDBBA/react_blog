import React, { CSSProperties, useState } from 'react';
import './../styles/App.less';
import { NavLink } from 'react-router-dom'
import { Space, BackTop } from 'antd'
import { HomeOutlined, BarsOutlined, ShareAltOutlined, RiseOutlined, VerticalAlignTopOutlined } from '@ant-design/icons'
import List from './home/List'
import Descripe from './home/Descripe'
import { useStoreCtx } from './../hooks/hooks'

const App: React.FC = () => {
  const [activeName, setActiveName] = useState({ name: '博客首页', path: '/home' })
  const style: CSSProperties = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#03ce57',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };
  const { state } = useStoreCtx()
  return (
    <div style={{ backgroundColor: 'rgb(240,240,240)' }}>
      <div className="yy-blog-header" style={{ backgroundColor: state.bgColor, color: state.color }}>
        <section className="left">
          <Space>
            <NavLink to='/'><span className="left-logo">YYDBB</span></NavLink>
            <span className="left-word">不定时更新学习、折腾日记</span>
          </Space>
        </section>
        <section className="right">
          <NavLink className="right-link" to='/home/1' onClick={() => setActiveName({ name: '博客首页', path: "/home" })}>
            <HomeOutlined /> 博客首页
          </NavLink>
          <NavLink className="right-link" to={{ pathname: '/note', state: { id: 12 } }} onClick={() => setActiveName({ name: '搭建笔记', path: "/note" })}>
            <BarsOutlined /> 搭建笔记
          </NavLink>
          <NavLink className="right-link" to='/frame?name=yydbb' onClick={() => setActiveName({ name: '前端框架', path: "/frame" })}>
            <ShareAltOutlined /> 前端框架
          </NavLink>
          <NavLink className="right-link" to='/advance' onClick={() => setActiveName({ name: '进阶之路', path: "/advance" })}>
            <RiseOutlined /> 进阶之路
          </NavLink>
        </section>
      </div>
      <div className="yy-blog-content">
        <List listName={activeName}></List>
        <Descripe></Descripe>
      </div>
      <BackTop>
        <div style={style}>
          <VerticalAlignTopOutlined />
        </div>
      </BackTop>
    </div>
  );
}

export default App;
