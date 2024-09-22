import React, { useState, useEffect } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { CSVLink } from "react-csv";

const DataTableComponent2 = () => {

  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({
    orderID: { value: null, matchMode: FilterMatchMode.CONTAINS },
    Date: { value: null, matchMode: FilterMatchMode.CONTAINS },
    BillingName: { value: null, matchMode: FilterMatchMode.CONTAINS },
    Amount: { value: null, matchMode: FilterMatchMode.CONTAINS },
    Status: { value: null, matchMode: FilterMatchMode.CONTAINS },
    Action: { value: null, matchMode: FilterMatchMode.CONTAINS }
});
  const [loading, setLoading] = useState(true);
  const [globalFilterValue, setGlobalFilterValue] = useState('');

  const orderData = [
    { id: 1, orderID: "ORD123", Date: "2024-09-01", BillingName: "John Doe", Amount: 250.00, Status: "Paid" },
    { id: 2, orderID: "ORD124", Date: "2024-09-03", BillingName: "Jane Smith", Amount: 450.00, Status: "Pending" },
    { id: 3, orderID: "ORD125", Date: "2024-09-05", BillingName: "Emily Johnson", Amount: 120.00, Status: "Paid" },
    { id: 4, orderID: "ORD126", Date: "2024-09-07", BillingName: "Michael Brown", Amount: 300.00, Status: "Pending" },
    { id: 5, orderID: "ORD123", Date: "2024-09-01", BillingName: "John Doe", Amount: 250.00, Status: "Paid" },
    { id: 6, orderID: "ORD124", Date: "2024-09-03", BillingName: "Jane Smith", Amount: 450.00, Status: "Pending" },
    { id: 7, orderID: "ORD125", Date: "2024-09-05", BillingName: "Emily Johnson", Amount: 120.00, Status: "Paid" },
    { id: 8, orderID: "ORD126", Date: "2024-09-07", BillingName: "Michael Brown", Amount: 300.00, Status: "Pending" },
    { id: 9, orderID: "ORD123", Date: "2024-09-01", BillingName: "John Doe", Amount: 250.00, Status: "Paid" },
    { id: 10, orderID: "ORD124", Date: "2024-09-03", BillingName: "Jane Smith", Amount: 450.00, Status: "Pending" },
    { id: 11, orderID: "ORD125", Date: "2024-09-05", BillingName: "Emily Johnson", Amount: 120.00, Status: "Paid" },
    { id: 12, orderID: "ORD126", Date: "2024-09-07", BillingName: "Michael Brown", Amount: 300.00, Status: "Pending" }
  ];
  
  const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

  useEffect(() => {
    setOrders(orderData);
    setLoading(false);
  }, []);

  const onGlobalFilterChange = (e) => {
      const value = e.target.value;
      let _filters = { ...filters };

      _filters['global'].value = value;

      setFilters(_filters);
      setGlobalFilterValue(value);
  };

  const renderHeader = () => {
      return (
          <div className="flex justify-content-end">
              <IconField iconPosition="left">
                  <InputIcon className="pi pi-search" />
                  <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
              </IconField>
          </div>
      );
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <div class={"badge font-size-12" + ( rowData.Status == 'Paid' ? ' bg-success-subtle text-success' : ' bg-warning-subtle text-warning') }>{rowData.Status}</div>
    );
  };

  const amountTemplate = (rowData) => {
    return (
      <div>${rowData.Amount}</div>
    );
  }

  const actionBodyTemplate = (rowData) => {
    return (
        <div className="dropdown position-static">
          <a className="text-muted dropdown-toggle btn btn-light" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="mdi mdi-dots-horizontal"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <a className="dropdown-item" href="#">Edit</a>
            <a className="dropdown-item" href="#">Print</a>
            <a className="dropdown-item" href="#">Delete</a>
          </div>
        </div>      
    );
  };

  const selection = (rowData) => {
    return (
      <input type='checkbox' />
    );
  }

  const header = renderHeader();


  return (
    <>
      <div className="dropdown mb-3 text-right">
        <a
          className="dropdown-toggle btn btn-success btn-rounded mb-0 me-2 btn-right"
          href="#"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
        Export
        </a>
        <div className="dropdown-menu dropdown-menu-end">
          <CSVLink className="dropdown-item" data={ orderData }>Export as csv</CSVLink>
        </div>
      </div>
    <DataTable
      className="font-size-14"
      paginator
      rowsPerPageOptions={[10, 25, 50, 100]}
      resizableColumns
      columnResizeMode="expand"
      value={orders}
      paginatorTemplate="PrevPageLink PageLinks NextPageLink CurrentPageReport RowsPerPageDropdown"
      rows={10}
      dataKey="id"
      loading={loading}
      globalFilterFields={['orderID', 'Date', 'BillingName', 'Amount', 'Status']}
      emptyMessage="No orders found."
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} results"
    >
        <Column field="select" header="#" body={selection}/>
        <Column field="orderID" sortable header="Order ID" />
        <Column field="Date" sortable header="Date" />
        <Column field="BillingName" sortable header="Billing Name" />
        <Column field="Amount" sortable header="Amount" body={amountTemplate} />
        <Column field="Status" sortable header="Status" body={statusBodyTemplate} />
        <Column field="Action" header="Action" body={actionBodyTemplate} />
      </DataTable>
    </>
  );
};

export default DataTableComponent2;
