import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Alert, Spin, Typography, Form, Button, Descriptions } from 'antd';
import { SessionMutations } from '../graphql';

const { Title } = Typography;

const { TOGGLE_FAVORITE_SESSION } = SessionMutations;

const SessionToggleFavoriteView = ({ sessionId }) => {
  const [toggleFavorite, { data }] = useMutation(TOGGLE_FAVORITE_SESSION, {
    variables: {
      sessionId,
    },
  });
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      toggleFavorite();
    } catch (e) {
      setError(e);
    }
  };

  const onFinish = () => {
    handleSubmit();
  };

  if (data && data.loading) return <Spin tip="Loading..." />;
  if (error) return <Alert message="Oops something went wrong" type="error" />;

  return (
    <>
      <Title level={2}>Toggle favorite session</Title>
      <Form name="basic" onFinish={onFinish}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Toggle favorite
          </Button>
        </Form.Item>
      </Form>
      {data && data.toggleFavoriteSession && (
        <Descriptions bordered>
          <Descriptions.Item label="Title">
            {data.toggleFavoriteSession.title}
          </Descriptions.Item>
          <Descriptions.Item label="Favorite">
            {String(data.toggleFavoriteSession.favorite)}
          </Descriptions.Item>
        </Descriptions>
      )}
    </>
  );
};

export default SessionToggleFavoriteView;
