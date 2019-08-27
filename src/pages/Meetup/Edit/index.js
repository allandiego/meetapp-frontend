import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
import { MdAddCircleOutline } from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import DateTimePicker from '~/components/DateTimePicker';
import ImageInput from '../ImageInput';
import Loading from '~/components/Loading';

import { Container } from './styles';

export default function Edit({ match }) {
  const schema = Yup.object().shape({
    title: Yup.string().required('Campo obrigatório'),
    description: Yup.string().required('Campo obrigatório'),
    date: Yup.date().required('Campo obrigatório'),
    location: Yup.string().required('Campo obrigatório'),
    file_id: Yup.number().required('Campo obrigatório'),
  });

  const [meetup, setMeetup] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = match.params;

  useEffect(() => {
    async function loadMeetup() {
      setLoading(true);
      const response = await api.get(`meetups/${id}`);

      const data = {
        ...response.data,
        date: parseISO(response.data.date),
      };

      setMeetup(data);
      setLoading(false);
    }
    loadMeetup();
  }, [id]);

  async function handleSubmit(data) {
    try {
      await api.put(`/meetups/${id}`, { ...data });

      toast.success('Meetup atualizado com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      const user_msg = err.response.data.error
        ? err.response.data.error.user_msg
        : 'Erro';
      toast.error(user_msg);
    }
  }

  return (
    <>
      {!loading ? (
        <Container>
          <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
            <ImageInput name="file_id" />

            <Input name="title" type="text" placeholder="Título do Meetup" />

            <Input
              multiline
              name="description"
              placeholder="Descrição completa"
            />

            <DateTimePicker name="date" placeholder="Dia do meetup" />

            <Input name="location" type="text" placeholder="Local do meetup" />

            <button type="submit">
              <MdAddCircleOutline size="15" color="#fff" />
              Salvar meetup
            </button>
          </Form>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
