import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { updateProfileRequest } from '~/store/Modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Email" />

        <hr />

        <Input name="old_password" type="password" placeholder="Senha atual" />

        <Input name="password" type="password" placeholder="Nova senha" />

        <Input
          name="password_confirmation"
          type="password"
          placeholder="Confirmação da nova senha"
        />

        <button type="submit">
          <MdAddCircleOutline size="15" color="#fff" />
          Salvar Perfil
        </button>
      </Form>
    </Container>
  );
}
