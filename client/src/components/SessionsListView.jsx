import React from 'react';
import { useQuery } from '@apollo/client';
import { Alert, Spin, Empty, List, Typography, Space } from 'antd';
import { SessionQueries } from '../graphql';

const { Text, Title } = Typography;

const { GET_SESSIONS } = SessionQueries;

const SessionsListView = () => {
  const { data, loading, error } = useQuery(GET_SESSIONS);

  if (loading) return <Spin tip="Loading..." />;
  if (error) return <Alert message="Oops something went wrong" type="error" />;
  if (!data || !data.sessions) return <Empty />;

  return (
    <>
      <Title level={2}>Sessions list</Title>
      <List
        style={{ height: '325px', overflow: 'auto' }}
        size="large"
        bordered
        dataSource={data.sessions}
        renderItem={(session) => {
          const { title, speakers } = session;
          return (
            <List.Item>
              <Title level={5}>{title}</Title>
              {speakers && speakers.length && (
                <Space>
                  {speakers.map((speaker) => (
                    <Text key={speaker.id}>{speaker.name}</Text>
                  ))}
                </Space>
              )}
            </List.Item>
          );
        }}
      />
    </>
  );
};

export default SessionsListView;
