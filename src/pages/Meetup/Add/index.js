import React from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { MdAddCircleOutline } from 'react-icons/md';
import { parseISO } from 'date-fns';

import history from '~/services/history';
import api from '~/services/api';

import DateTimePicker from '~/components/DateTimePicker';
import ImageInput from '../ImageInput';

import { Container } from './styles';

export default function Add() {
  const schema = Yup.object().shape({
    title: Yup.string().required('Campo obrigatório'),
    description: Yup.string().required('Campo obrigatório'),
    date: Yup.date().required('Campo obrigatório'),
    location: Yup.string().required('Campo obrigatório'),
    file_id: Yup.number().required('Campo obrigatório'),
  });

  async function handleSubmit(data) {
    try {
      await api.post(`/meetups`, {
        ...data,
        date: parseISO(data.date),
      });

      toast.success('Meetup criado com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      const user_msg = err.response.data.error
        ? err.response.data.error.user_msg
        : 'Erro';
      toast.error(user_msg);
    }
  }

  return (
    <Container>
      <Form initialData={{}} schema={schema} onSubmit={handleSubmit}>
        {/* <ImageInput name="file_id" /> */}

        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Input
          name="description"
          type="text"
          placeholder="Descrição completa"
          multiline
        />

        <DateTimePicker name="date" placeholder="Dia do meetup" />

        <Input name="location" type="text" placeholder="Local do meetup" />

        <button type="submit">
          <MdAddCircleOutline size="15" color="#fff" />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
