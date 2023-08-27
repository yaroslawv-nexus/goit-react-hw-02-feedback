import React from 'react';
import { Notify } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Notify>{message}</Notify>;
};
