import './App.css';
import React from 'react';
import DataTable from 'react-data-table-component';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import Data from './buns-data.json';

// Data from JSON file
let members = Data.members;

// Columns to be displayed
const columns = [
  {
    name: 'Date',
    selector: row => row.date,
    sortable: true,
  },

  {
    name: 'Member',
    selector: row => row.member,
    sortable: true,
  },
  {
    name: 'Kringel',
    selector: row => row.kringel,
    sortable: true,
  },
  {
    name: 'Bolla normal',
    selector: row => row.bollaNormal,
    sortable: true,
  },
  {
    name: 'Bolla Choco',
    selector: row => row.bollaChoco,
    sortable: true,
  },
  {
    name: 'Koerner',
    selector: row => row.koerner,
    sortable: true,
  }
];

let invoices = Data.invoices;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Ordered value',
    },
  },
};

const labels = invoices.map(item => item.date);

export const data = {
  labels,
  datasets: [
    {
      label: 'Data',
      data: invoices.map(
        (item) => {
          if (item.currency.toUpperCase() === 'DKK')
            return item.price * 0.13;

          return item.price;
        }),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

class FilterButton extends React.Component {

  constructor(){
    super();
    this.name = '';
    this.value = '';
  }

  onApplyFilter() {
    members = members.map(
      member => {
        if (new Date(member.date).getFullYear() === InputEvent.target.value) {
          return member;
        }
      }
    );
  }

  render(){
    return(
      <input/>
    )
  }

}

function App() {
  return (
    <div>
      <div>
        <label>
          Year:
          <FilterButton name='Year' type={'search'} onChange={FilterButton.onApplyFilter} value={FilterButton.value}/>
        </label>
      </div>
      <div>
        <DataTable
          title="Buns order list"
          data={members}
          columns={columns} />
      </div>
      <div>
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}
export default App;