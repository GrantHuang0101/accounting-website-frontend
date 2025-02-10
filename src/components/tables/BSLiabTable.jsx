import React from "react";
import { Table } from "flowbite-react";

const BSLiabTable = ({ liabilities, date }) => {
  // Create an array of objects with accountId, accountName, and totalAmount
  const accountAmountsArray = liabilities.reduce((acc, liability) => {
    const accountId = liability.accountId;
    const accountName = liability.accountName;
    const amount =
      parseFloat(liability.amount) * (liability.dc === "credit" ? 1 : -1);

    // Find the existing entry for the accountId
    const existingEntryIndex = acc.findIndex(
      (entry) => entry.accountId === accountId
    );

    if (existingEntryIndex !== -1) {
      // If an entry for the accountId exists, update the total amount
      acc[existingEntryIndex].totalAmount += amount;
    } else {
      // If no entry for the accountId exists, create a new entry
      acc.push({ accountId, accountName, totalAmount: amount });
    }

    return acc;
  }, []);

  // Sort the accountAmountsArray based on accountId
  accountAmountsArray.sort((a, b) => a.accountId - b.accountId);

  const totalSum = accountAmountsArray.reduce(
    (sum, entry) => sum + entry.totalAmount,
    0
  );

  // Function to format number in accounting format
  const formatNumber = (num) => {
    // Check if the number is negative
    const isNegative = num < 0;

    // Convert negative number to positive for formatting
    const absNum = Math.abs(num);

    // Format the absolute number with commas for thousands separator
    const formattedNumber = absNum.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    // If the number is negative, enclose it within parentheses
    return isNegative ? `(${formattedNumber})` : formattedNumber;
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head className="bg-gray-800">
            <Table.HeadCell className="text-center">Liabilities</Table.HeadCell>
            <Table.HeadCell className="text-end">{date}</Table.HeadCell>
          </Table.Head>
          {accountAmountsArray.map((entry) => (
            <Table.Body className="divide-y" key={entry.accountId}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-regular text-gray-800 dark:text-white">
                  {entry.accountName}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-regular text-gray-800 dark:text-white text-end">
                  {formatNumber(entry.totalAmount)}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
          <Table.Body>
            <Table.Row className="bg-gray">
              <Table.Cell className="font-bold ">
                Total Liabilities:{" "}
              </Table.Cell>
              <Table.Cell className="font-bold text-end underline">
                ${"  " + formatNumber(totalSum)}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default BSLiabTable;
