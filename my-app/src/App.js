import './App.css';
import React from 'react';
import DataTable from 'react-data-table-component';
import FilterComponent from 'react-data-table-component';
import Data from './buns-data.json';

console.log(Data);


// Data from JSON file
const data = Data.members;

// Columns to be displayed
const columns = [
  {
    name: 'Date',
    selector: row => row.date,
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

function App() {

    // Questionable stuff
    /*
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = data.filter(
      item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );

    const subHeaderComponentMemo = React.useMemo(() => {
      const handleClear = () => {
        if (filterText) {
          setResetPaginationToggle(!resetPaginationToggle);
          setFilterText('');
        }
      };

      return (
        <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
      );
    }, [filterText, resetPaginationToggle]);

    */
    return (
      <div>
        <DataTable
          title="Buns order list"
          data={data}
          columns={columns}
          //subHeaderComponent={subHeaderComponentMemo} 
          />
      </div>
    )
  }
export default App;