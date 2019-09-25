import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdPhotoCamera } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { getError } from '~/util/errorHandler';

import { Container, Placeholder } from './styles';

export default function ImageInput() {
  const { registerField, defaultValue } = useField('file');
  const { error } = useField('file_id');

  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    try {
      const response = await api.post('files', data);

      const { id, url } = response.data;

      setFile(id);
      setPreview(url);
    } catch (err) {
      toast.error(getError(err) || 'Erro interno');
    }
  }

  return (
    <Container>
      <label htmlFor="file">
        {preview ? (
          <img src={preview} alt="banner" />
        ) : (
          <Placeholder>
            <MdPhotoCamera size="45" color="#999" />
            Selecionar imagem
          </Placeholder>
        )}

        <input
          id="file"
          type="file"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
      {error && <span>{error}</span>}
    </Container>
  );
}
