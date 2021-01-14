import React from 'react'
import { NavLink } from 'react-router-dom'
import { Space } from 'antd'
import { CalendarOutlined, FileOutlined, FireOutlined } from '@ant-design/icons'

const Article: React.FC = () => {
  return (
    <div style={{ padding: '15px', boxSizing: 'border-box' }}>
      <div style={{ fontSize: '22px' }}>
        <NavLink to='/jj'>
        Vue3.x从零开始学-第一季 基础语法篇 -更新中
        </NavLink>
      </div>
      <ul style={{ display: 'flex', width: '100%' }}>
        <li><CalendarOutlined />2019-12-04 00:00:00  </li>
        <li style={{ marginLeft: '20px' }}><FileOutlined />文字教程</li>
        <li style={{ marginLeft: '20px' }}><FireOutlined />37157人</li>
      </ul>
      <div>
        这是我网站恢复后写的第一篇文章，在关站这段时间里，
        群里的小伙伴们给了我很多支持，没有你们的支持，
        很可能我就放弃写博客了，所以非常感谢你们的支持。
      </div>
      <div style={{marginTop:'20px',paddingBottom:'15px',display:'flex',justifyContent:'flex-end',borderBottom:'1px solid #ccc'}}>
        <Space>
          <FileOutlined />
          <NavLink to='/home'>查看全文</NavLink>
        </Space>
      </div>
    </div>
  )
}
export default Article