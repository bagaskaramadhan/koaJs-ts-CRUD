import * as Koa from "koa";
import { DefaultContext, DefaultState } from "koa";
import { ENVConfig } from "../helpers/env";
import "reflect-metadata";
import { Connection, createConnection } from "typeorm";

export const connectWithDBMS = async (
  server: Koa<DefaultState, DefaultContext>
): Promise<void> => {
  const connect: Connection = await createConnection({
    type: "mysql",
    host: ENVConfig.HOST,
    username: ENVConfig.USER,
    password: ENVConfig.PASS,
    database: ENVConfig.NAME,
  });

  await connect
    .synchronize(true)
    .then(() => console.log(`CONNECT TO ${ENVConfig.NAME}`))
    .catch(() => console.log("ERROR TO CONNECT"));

  server.context.db = connect;
};
