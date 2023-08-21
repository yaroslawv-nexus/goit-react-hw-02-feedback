import React from 'react';
import { Notify } from './Notification.styled';

export function Notification({ message }) {
  return <Notify>{message}</Notify>;
}
