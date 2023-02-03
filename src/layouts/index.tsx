/*
 * @Description: 全局 Layout
 * @Author: ygwang@secusoft.cc
 * @Date: 2022-05-24 17:25:37
 * @LastEditTime: 2022-06-13 15:20:04
 */
import { Layout } from 'antd';
import { Outlet } from '@umijs/max';

const { Content, Sider, Header } = Layout;
export default function Page() {
  return (
    <div style={{ padding: 20 }}>
      <Header style={{ background: 'rgba(0,0,0,0.19)' }}>Header</Header>
      <Sider style={{ background: 'rgba(0,0,0,0.19)' }}>Sider</Sider>
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}
