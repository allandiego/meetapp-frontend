import React, { useState, useEffect } from 'react';
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

import { Container, Title, Banner } from './styles';

export default function Details({ match }) {
  const [meetup, setMeetup] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = match.params;

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${id}/detail`);

      const data = {
        ...response.data,
        formatedDate: format(
          parseISO(response.data.date),
          "dd 'de' MMMM, 'às' HH'h'",
          {
            locale: pt,
          }
        ),
      };

      setMeetup(data);
      setLoading(false);
    }

    loadMeetup();
  }, [id]);

  async function handleCancel() {
    try {
      await api.delete(`/meetups/${id}`);

      toast.success('Meetup excluído com sucesso!');
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
      {!loading && (
        <Container>
          <header>
            <Title>
              <h1>{meetup.title}</h1>
              {meetup.organizing && (
                <div>
                  <button
                    type="button"
                    onClick={() => history.push(`/meetups/${meetup.id}/edit`)}
                  >
                    <MdModeEdit size="20" color="#fff" />
                    Editar
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      // eslint-disable-next-line no-alert
                      if (window.confirm('Deseja excluir o evento?')) {
                        handleCancel();
                      }
                    }}
                  >
                    <MdDeleteForever size="20" color="#fff" />
                    Cancelar
                  </button>
                </div>
              )}
            </Title>
          </header>

          <Banner>
            <img src={meetup.File.url} alt={meetup.File.id} />
          </Banner>

          <p>{meetup.description}</p>
          <div>
            <time>
              <MdDateRange size="15" color="#999" /> {meetup.formatedDate}
            </time>
            <address>
              <MdLocationOn size="15" color="#999" /> {meetup.location}
            </address>
          </div>
        </Container>
      )}
    </>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
