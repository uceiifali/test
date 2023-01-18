import React from 'react';
import Box from './Box';
import { BsWallet } from 'react-icons/bs';
import { MdOutlineShoppingBasket } from 'react-icons/md';
import { BiHappyAlt, BiSad } from 'react-icons/bi';

const BoxContainer = () => {
  const boxContent = [
    { icon: <BsWallet />, info: '16,500', name: 'Payout' },
    { icon: <MdOutlineShoppingBasket />, info: '54', name: 'Total orders' },
    { icon: <BiHappyAlt />, info: '143', name: 'Winning trades' },
    { icon: <BiSad />, info: '32', name: 'Losing trades' },
  ];
  return (
    <div className="flex mt-5">
      <Box boxContent={boxContent} />
    </div>
  );
};

export default BoxContainer;
