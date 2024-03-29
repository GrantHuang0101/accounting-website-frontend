import React, { useEffect, useState } from "react";
import { Datepicker } from "flowbite-react";
import axios from "axios";
import API_BASE_URL from "../../../config";
import { useAuth } from "../../components/AuthProvider";
import BSAssetsTable from "../../components/tables/BSAssetsTable";
import BSLiabTable from "../../components/tables/BSLiabTable";
import BSEquityTable from "../../components/tables/BSEquityTable";
import { format, subYears } from "date-fns";

const BalanceSheet = () => {
  const { authToken } = useAuth();

  const [assets, setAssets] = useState([]);
  const [liabilities, setLiabilities] = useState([]);
  const [equity, setEquity] = useState([]);

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  const fetchData = () => {
    axios
      .get(`${API_BASE_URL}/transactions/user`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        const transactions = response.data;

        // Get transactions before or on the selected date
        const filteredTransactions = transactions.filter(
          (transaction) =>
            new Date(transaction.transactionDate) <= new Date(selectedDate)
        );
        const filteredPrevTransactions = transactions.filter(
          (transaction) =>
            new Date(transaction.transactionDate) <= new Date(prevDate)
        );

        // Initialize variables to hold categorized transactions
        let assetTransactions = [];
        let liabilityTransactions = [];
        let equityTransactions = [];

        // Categorize transactions
        filteredTransactions.forEach((transaction) => {
          switch (transaction.type) {
            case "Asset":
              assetTransactions.push(transaction);
              break;
            case "Liability":
              liabilityTransactions.push(transaction);
              break;
            case "Equity":
              equityTransactions.push(transaction);
              break;
            default:
              break;
          }
        });

        // Set state with categorized transactions
        setAssets(assetTransactions);
        setLiabilities(liabilityTransactions);
        setEquity(equityTransactions);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [authToken, selectedDate]);

  const handleDatePickerChange = (date) => {
    setSelectedDate(format(date, "yyyy-MM-dd"));
  };

  console.log(assets);
  console.log(liabilities);
  console.log(equity);
  console.log(selectedDate);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center">
        <div>Company Name</div>
        <div>BALANCE SHEET</div>
        <div>Date</div>
        <Datepicker
          name="selectedDate"
          value={selectedDate}
          onSelectedDateChanged={handleDatePickerChange}
        />
      </div>
      <div className="flex flex-col items-center mt-2">
        <div>ASSETS</div>
        <div>
          <BSAssetsTable assets={assets} date={selectedDate} />
        </div>
      </div>

      <div className="flex flex-col items-center mt-2">
        <div>LIABILITIES & EQUITY</div>
        <div>
          <div>
            <div>Liabilities</div>
            <div>
              <BSLiabTable liabilities={liabilities} />
            </div>
          </div>
          <div>
            <div>Equity</div>
            <div>
              <BSEquityTable equity={equity} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceSheet;
