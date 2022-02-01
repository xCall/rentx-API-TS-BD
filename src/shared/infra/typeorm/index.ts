import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = 'database_ignite'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  console.log(defaultOptions);
  return createConnection(
    Object.assign(defaultOptions, {
      host,
    }),
  );
};
