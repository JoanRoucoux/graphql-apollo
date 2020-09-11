import React from 'react';
import { useQuery } from '@apollo/client';
import { Alert, Spin, Empty, Typography, Descriptions } from 'antd';
import { SessionQueries } from '../graphql';

const { Title } = Typography;

const { GET_SESSION_BY_ID } = SessionQueries;

const SessionDetailsView = ({ sessionId }) => {
  const { data, loading, error } = useQuery(GET_SESSION_BY_ID, {
    variables: {
      sessionId,
    },
  });

  if (loading) return <Spin tip="Loading..." />;
  if (error) return <Alert message="Oops something went wrong" type="error" />;
  if (!data || !data.sessionById) return <Empty />;

  const {
    title,
    room,
    format,
    favorite,
    startsAt,
    endsAt,
    description,
  } = data.sessionById;

  return (
    <>
      <Title level={2}>Session details</Title>
      <Descriptions bordered>
        <Descriptions.Item label="Title">{title}</Descriptions.Item>
        <Descriptions.Item label="Room">{room}</Descriptions.Item>
        <Descriptions.Item label="Format">{format}</Descriptions.Item>
        <Descriptions.Item label="Favorite">
          {String(favorite)}
        </Descriptions.Item>
        <Descriptions.Item label="Starts at">{startsAt}</Descriptions.Item>
        <Descriptions.Item label="Ends at">{endsAt}</Descriptions.Item>
        <Descriptions.Item label="Description" span={3}>
          {description}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default SessionDetailsView;
