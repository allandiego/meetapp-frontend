import React from 'react';
import { MdAddCircleOutline, MdPhotoCamera } from 'react-icons/md';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Meetup() {
  return (
    <>
      <AvatarInput name="avatar_id" />
      MEETUP
    </>
  );
}
