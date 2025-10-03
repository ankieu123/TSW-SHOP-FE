import { Badge, Col, Flex, Row } from 'antd'
import React from 'react'
import { WrapperAccountHeader, WrapperHeader, WrapperTextHeader, WrapperTextHeader2 } from './style'
import Search from 'antd/es/transfer/search'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

const HeaderComponent = () => {
  return (
    <div style={{width:'100%',background:'rgb(26,148,255)',display:'flex',justifyContent:'center'}}>
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>TSW SHOP</WrapperTextHeader>
        </Col>
        <Col span={13}>
          <ButtonInputSearch
            size="large"
            bordered={false}
            textButton="Tìm kiếm"
            placeholder='Tìm kiếm sản phẩm'
          />
        </Col>
        <Col span={6} style={{display:'flex', gap:'54px', alignItems:'center'}}>
          <WrapperAccountHeader>
            <UserOutlined style={{fontSize: '30px'}} />
            <div>
              <WrapperTextHeader2>Đăng nhập/Đăng ký</WrapperTextHeader2>
              <div>
                <WrapperTextHeader2>Tài khoản</WrapperTextHeader2>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperAccountHeader>
          <div>
          <Badge count={4} size="small">
              <ShoppingCartOutlined style={{fontSize:'30px', color:'#fff'}}/>
          </Badge>
            
            <WrapperTextHeader2>Giỏ hàng</WrapperTextHeader2>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent