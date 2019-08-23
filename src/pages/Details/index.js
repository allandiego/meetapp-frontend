import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import {
  MdModeEdit,
  MdDeleteForever,
  MdLocationOn,
  MdDateRange,
} from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';



import { Container } from './styles';

export default function Details({ match }) {
  const [meetup, setMeetup] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${id}/detail`);

      const data = {
        ...response.data,
        formatedDate: format(
          parseISO(response.data.date),
          "d 'de' MMMM, 'às' HH'h'",
          {
            locale: pt,
          }
        ),
      };

      setMeetup(data);
    }

    loadMeetup();
  }, [id]);

  async function handleCancel() {
    try {
      await api.delete(`/meetups/${id}`);

      toast.success('Meetup excluído com sucesso!');
      history.push('/dashboard');
    } catch (err) {
        const user_msg = err.response.data.error ? err.response.data.error.user_msg : 'Erro';
        toast.error(user_msg);
  }

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>

        <div>
          <button
            type="button"
            onClick={() => history.push(`/meetups/${meetup.id}/edit`)}
          >
            <MdModeEdit size="46" color="#fff" />
            Editar
          </button>

          <button type="button" onClick={handleCancel}>
            <MdDeleteForever size="46" color="#fff" />
            Cancelar
          </button>
        </div>
      </header>

      <img src={meetup.file.url} alt={meetup.file.id} />

      <p>{meetup.description}</p>
      <aside>
        <time>{dateFormatted}</time>
        <address><MdLocationOn size="46" color="#fff" /> {meetup.location}</address>
      </aside>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
