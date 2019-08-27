import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import {
  MdAddCircleOutline,
  MdChevronRight,
  MdChevronLeft,
} from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import Loading from '~/components/Loading';

import { Container, Meetup, Title, Pagination } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetups() {
      setLoading(true);
      const response = await api.get(`organizing?page=${page}`);

      const data = response.data.map(meetup => {
        return {
          ...meetup,
          formatedDate: format(
            parseISO(meetup.date),
            "dd 'de' MMMM, 'às' HH:mm",
            {
              locale: pt,
            }
          ),
        };
      });

      setMeetups(data);
      setLoading(false);
    }

    loadMeetups();
  }, [page]);

  function handlePrevPage() {
    if (page === 1) return;
    setPage(page - 1);
  }

  function handleNexPage() {
    setPage(page + 1);
  }

  return (
    <>
      {!loading ? (
        <Container>
          <header>
            <Title>
              <strong>Meus Meetups</strong>
              <button type="button" onClick={() => history.push('/meetup/add')}>
                <MdAddCircleOutline size="20" color="#fff" />
                Novo meetup
              </button>
            </Title>

            <Pagination>
              <button type="button" onClick={handlePrevPage}>
                <MdChevronLeft size="46" color="#fff" />
              </button>
              <strong>Página {page}</strong>
              <button type="button" onClick={handleNexPage}>
                <MdChevronRight size="46" color="#fff" />
              </button>
            </Pagination>
          </header>

          {meetups.length > 0 ? (
            <ul>
              {meetups.map(meetup => (
                <Meetup key={meetup.id} past={meetup.past}>
                  <Link to={`/meetup/${meetup.id}`}>
                    <strong>{meetup.title}</strong>
                  </Link>

                  <button
                    type="button"
                    onClick={() => history.push(`/meetup/${meetup.id}`)}
                  >
                    {meetup.formatedDate}{' '}
                    <MdChevronRight size="25" color="#fff" />
                  </button>
                </Meetup>
              ))}
            </ul>
          ) : (
            <h1>Nenhum meetup encontrado</h1>
          )}
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
