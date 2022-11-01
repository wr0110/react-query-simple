import React from 'react';
import { CheckoutContainer, CheckoutText, CheckoutWrapper } from './style';
import CustomButton from '../button/custom-button';
import { TextMobile } from '../../style/custom-styles';
import { IoBagCheckOutline } from 'react-icons/io5';

const Checkout = ({ onClick, setCheckout, items, setItems }) => {
  return (
    <CheckoutWrapper onClick={onClick}>
      <CheckoutContainer
        initial={{ y: '-30%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '-50%', opacity: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <CheckoutText>
          <div
            style={{
              display: 'flex',
              gap: 10,
            }}
          >
            <TextMobile bold>My bag</TextMobile>
            <TextMobile>{items.length} Items</TextMobile>
          </div>
          <div
            onClick={() => {
              setCheckout(false);
              setItems(0);
            }}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
            }}
          >
            <TextMobile>View bag</TextMobile>
            <IoBagCheckOutline />
          </div>
        </CheckoutText>
        <CustomButton
          onClick={() => {
            setCheckout(false);
            setItems(0);
          }}
          title="Go To Checkout"
          primary
        />
      </CheckoutContainer>
    </CheckoutWrapper>
  );
};

export default Checkout;
