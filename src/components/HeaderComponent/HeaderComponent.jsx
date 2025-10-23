import { Badge, Button, Col, Flex, Popover, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { WrapperAccountHeader, WrapperContentPopup, WrapperHeader, WrapperTextHeader, WrapperTextHeader2 } from './style'
import Search from 'antd/es/transfer/search'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService';
import { resetUser } from '../../redux/slides/userSlide';
import Loading from '../LoadingComponent/Loading';


const HeaderComponent = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [loading, setLoading] = useState(false)
  const hadleNavigateLogin = () => {
    navigate('/sign-in');

  }
  const handleLogout = async () => {
    setLoading(true)
    await UserService.logoutUser()
    dispatch(resetUser())
    setLoading(false)
  }
  useEffect(() => {
    setLoading(true)
    setUserName(user?.name)
    setUserAvatar(user?.avatar)
    setLoading(false)
  }, [user?.name, user?.avatar])
  const content = (
    <div>
      <WrapperContentPopup onClick={() => navigate('profile-user')}>Thông tin người dùng</WrapperContentPopup>
      <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
    </div>
  );
  console.log('user', user)
  return (
    <div style={{ width: '100%', background: 'rgb(26,148,255)', display: 'flex', justifyContent: 'center' }}>
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
        <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
          <Loading isLoading={loading}>
            <WrapperAccountHeader>
              {userAvatar ? (
                <img src={userAvatar} alt="avatar" style={{
                  height: '35px',
                  width: '35px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }} />
              ) : (
                <UserOutlined style={{ fontSize: '30px' }} />
              )}

              {user?.access_token ? (
                <>
                  <Popover content={content} trigger="click">
                    <div style={{ cursor: 'pointer' }}>{userName?.length ? userName : user.email}</div>
                  </Popover>
                </>
              ) : (
                <div onClick={hadleNavigateLogin} style={{ cursor: 'pointer' }}>
                  <WrapperTextHeader2>Đăng nhập/Đăng ký</WrapperTextHeader2>
                  <div>
                    <WrapperTextHeader2>Tài khoản</WrapperTextHeader2>
                    <CaretDownOutlined />
                  </div>
                </div>
              )}

            </WrapperAccountHeader>
          </Loading>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
            </Badge>

            <WrapperTextHeader2>Giỏ hàng</WrapperTextHeader2>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent