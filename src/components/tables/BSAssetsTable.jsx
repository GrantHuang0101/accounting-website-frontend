import { Table } from "flowbite-react";
import React, { useState } from "react";

const BSAssetsTable = ({ assets, date }) => {
  const accountAmounts = {}; // Object to store total amounts for each account name

  // Calculate total amount for each account name
  assets.forEach((asset) => {
    const amount = parseFloat(asset.amount);
    if (asset.dc === "debit") {
      if (accountAmounts.hasOwnProperty(asset.accountName)) {
        accountAmounts[asset.accountName] += amount;
      } else {
        accountAmounts[asset.accountName] = amount;
      }
    } else if (asset.dc === "credit") {
      if (accountAmounts.hasOwnProperty(asset.accountName)) {
        accountAmounts[asset.accountName] -= amount;
      } else {
        accountAmounts[asset.accountName] = -amount;
      }
    }
  });

  return (
    <div>
      <div className="overflow-x-auto ">
        <Table>
          <Table.Head className="bg-gray-500">
            <Table.HeadCell>ASSETS</Table.HeadCell>
            <Table.HeadCell>{date}</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          {Object.keys(accountAmounts).map((accountName) => (
            <Table.Body className="divide-y" key={accountName}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {accountName}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-end">
                  {accountAmounts[accountName]}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-end"></Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default BSAssetsTable;
