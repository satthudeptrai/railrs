import path from "path";
import csv from "csvtojson";
import TransactionModel from "./models/transaction.model";
import { connect, disconnect } from "./config/db"

const directoryPath = path.join(__dirname, 'csv/transactions.csv');

const convertTransaction = (data: any) => {
  const dataTemp:any = {...data};
  Object.keys(dataTemp).forEach(key => {
    if (dataTemp[key] === "undefined" || dataTemp[key] === "null") {
      delete dataTemp[key];
    }
  });
  return typeof dataTemp.failure_reasons;
}

const traferData = async() => {
  await connect();
  const listTransaction = await csv().fromFile(directoryPath);
  console.log("convertTransaction", convertTransaction(listTransaction[0]))
  // const listConvertTransaction = listTransaction.map(item => convertTransaction(item));
  // console.log("convertTransaction(listConvertTransaction)", convertTransaction(listConvertTransaction))
  // await TransactionModel.create(listConvertTransaction);
  await disconnect();
}
traferData();