import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReporText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/b93b8c666e13f49971483596ef14800f.png'



const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width:`200px`, height:`200px`}}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={
                <img
                    draggable={false}
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
            }
        >
            <img src={logo} style={{width:'68px', height:'14px', position:'absolute',top:0,left:0, borderTopLeftRadius:'3px'}}/>
            <StyleNameProduct>Iphone</StyleNameProduct>
            <WrapperReporText>
                <span style={{marginRight: '4px'}}>
                    <span>4.96</span><StarFilled style={{ frontSize: '10px', color: 'yellow' }} />
                </span>
                <WrapperStyleTextSell> | Da ban duoc 200k</WrapperStyleTextSell>
            </WrapperReporText>
            <WrapperPriceText>
            <span style={{marginRight:'8px'}}>1.000.000 VND</span>
                <WrapperDiscountText>
                    -5%
                </WrapperDiscountText>

            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent