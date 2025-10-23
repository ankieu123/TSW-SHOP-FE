import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReporText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/b93b8c666e13f49971483596ef14800f.png'



const CardComponent = (props) => {
    const {countInStock,description,image,name,price,rating,type, discount, selled} =  props  
    return (
        <WrapperCardStyle
            hoverable
            style={{ width: 200 }}
            styles={{
                header: { width: '200px', height: '200px' }, 
                body: { padding: '10px' },                   
            }}
            cover={
                <img
                    draggable={false}
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
            }
        >
            <img src={logo} style={{ width: '68px', height: '14px', position: 'absolute', top: 0, left: 0, borderTopLeftRadius: '3px' }} />
            <StyleNameProduct>{name}</StyleNameProduct>
            <WrapperReporText>
                <span style={{ marginRight: '4px' }}>
                    <span>{rating}</span><StarFilled style={{ frontSize: '10px', color: 'yellow' }} />
                </span>
                <WrapperStyleTextSell> | Da ban duoc {selled || 1000 }+</WrapperStyleTextSell>
            </WrapperReporText>
            <WrapperPriceText>
                <span style={{ marginRight: '8px' }}>{price}</span>
                <WrapperDiscountText>
                    {discount || 5 }%
                </WrapperDiscountText>

            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent