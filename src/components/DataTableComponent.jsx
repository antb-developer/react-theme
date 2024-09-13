import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { CSVLink } from "react-csv";

const DataTableComponent = () => {

  const [customers, setCustomers] = useState(null);
  const [filters, setFilters] = useState({
      arrivalDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
      masterBol: { value: null, matchMode: FilterMatchMode.CONTAINS },
      'countryOfOrigin': { value: null, matchMode: FilterMatchMode.CONTAINS },
      supplierName: { value: null, matchMode: FilterMatchMode.CONTAINS },
      description: { value: null, matchMode: FilterMatchMode.CONTAINS },
      importerName: { value: null, matchMode: FilterMatchMode.CONTAINS },
      notifyParty: { value: null, matchMode: FilterMatchMode.CONTAINS },
      portOfArrival: { value: null, matchMode: FilterMatchMode.CONTAINS }
  });
  const [loading, setLoading] = useState(true);
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const importData = [
    {
      arrivalDate: "2024-09-01",
      masterBol: "MBL123456",
      countryOfOrigin: "India",
      supplierName: "ABC Exports Pvt. Ltd.",
      description: "Electronic Goods",
      importerName: "XYZ Imports Ltd.",
      notifyParty: "XYZ Logistics",
      portOfArrival: "New York Port"
    },
    {
      arrivalDate: "2024-09-05",
      masterBol: "MBL789012",
      countryOfOrigin: "China",
      supplierName: "Shanghai Trading Co.",
      description: "Textile Products",
      importerName: "Global Textiles Inc.",
      notifyParty: "East Coast Shipping",
      portOfArrival: "Los Angeles Port"
    },
    {
      arrivalDate: "2024-09-10",
      masterBol: "MBL345678",
      countryOfOrigin: "Germany",
      supplierName: "Berlin Auto Parts",
      description: "Automobile Spare Parts",
      importerName: "Auto Import Services",
      notifyParty: "West Coast Freight",
      portOfArrival: "San Francisco Port"
    },
    {
      arrivalDate: "2024-09-12",
      masterBol: "MBL901234",
      countryOfOrigin: "Brazil",
      supplierName: "Rio Coffee Exports",
      description: "Coffee Beans",
      importerName: "Global Beverages Ltd.",
      notifyParty: "Southern Ocean Shipping",
      portOfArrival: "Miami Port"
    },
    {
      arrivalDate: "2024-09-15",
      masterBol: "MBL567890",
      countryOfOrigin: "Australia",
      supplierName: "Sydney Wool Co.",
      description: "Wool Fabrics",
      importerName: "Textile Traders Inc.",
      notifyParty: "Pacific Freight Services",
      portOfArrival: "Seattle Port"
    },
    {
      arrivalDate: "2024-09-18",
      masterBol: "MBL234567",
      countryOfOrigin: "Italy",
      supplierName: "Milan Leather Goods",
      description: "Leather Products",
      importerName: "Fashion Imports Ltd.",
      notifyParty: "European Shipping Co.",
      portOfArrival: "Boston Port"
    },
    {
      arrivalDate: "2024-09-20",
      masterBol: "MBL678901",
      countryOfOrigin: "Vietnam",
      supplierName: "Hanoi Furniture Exporters",
      description: "Wooden Furniture",
      importerName: "Home Decor Ltd.",
      notifyParty: "Asia Freight Co.",
      portOfArrival: "Houston Port"
    },
    {
      arrivalDate: "2024-09-18",
      masterBol: "MBL234567",
      countryOfOrigin: "Italy",
      supplierName: "Milan Leather Goods",
      description: "Leather Products",
      importerName: "Fashion Imports Ltd.",
      notifyParty: "European Shipping Co.",
      portOfArrival: "Boston Port"
    },
    {
      arrivalDate: "2024-09-20",
      masterBol: "MBL678901",
      countryOfOrigin: "Vietnam",
      supplierName: "Hanoi Furniture Exporters",
      description: "Wooden Furniture",
      importerName: "Home Decor Ltd.",
      notifyParty: "Asia Freight Co.",
      portOfArrival: "Houston Port"
    },
    {
      arrivalDate: "2024-09-22",
      masterBol: "MBL345678",
      countryOfOrigin: "Mexico",
      supplierName: "Guadalajara Glassworks",
      description: "Glassware",
      importerName: "Kitchenware Imports",
      notifyParty: "Central Freight Solutions",
      portOfArrival: "San Diego Port"
    },
    {
      arrivalDate: "2024-09-25",
      masterBol: "MBL456789",
      countryOfOrigin: "Japan",
      supplierName: "Osaka Tech Co.",
      description: "Consumer Electronics",
      importerName: "Tech World Ltd.",
      notifyParty: "Nippon Logistics",
      portOfArrival: "San Francisco Port"
    },
    {
      arrivalDate: "2024-09-28",
      masterBol: "MBL567890",
      countryOfOrigin: "South Korea",
      supplierName: "Seoul Cosmetics",
      description: "Beauty Products",
      importerName: "Beauty Imports Inc.",
      notifyParty: "Korean Shipping Co.",
      portOfArrival: "Los Angeles Port"
    }
  ];

  const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

  useEffect(() => {
    setCustomers(importData);
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

  const country = (rowData) => {
    return (
      <div>
        <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.countryOfOrigin}`} style={{ width: '24px' }} />
        <span>{rowData.countryOfOrigin}
        </span>
      </div>
    );
  };

  const detailsBody = (rowData) => {
    return (
      <button class="btn btn-success btn-rounded waves-effect waves-light mb-0 me-2">Details</button>
    )
  };

  const verifiedBodyTemplate = (rowData) => {
    return (
      <div className="flex align-items-center gap-2">
        <span>{rowData.importerName}</span>
      </div> );
  };

  const header = renderHeader();


  return (
    <>
      <div className="dropdown mb-3">
        <a
          className="dropdown-toggle btn btn-primary"
          href="#"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
        Export
        </a>
        <div className="dropdown-menu dropdown-menu-end">
          <CSVLink className="dropdown-item" data={ importData }>Export as csv</CSVLink>
        </div>
      </div>
      <DataTable paginator rowsPerPageOptions={[10, 25, 50, 100]}  resizableColumns columnResizeMode="expand"  showGridlines value={customers} paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading} globalFilterFields={['arrivalDate', 'masterBol', 'countryOfOrigin', 'supplierName', 'description' ,'importerName', 'notifyParty', 'portOfArrival']} emptyMessage="No customers found." currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
        <Column field="details" header="#" showFilterMenu={false} body={ detailsBody }/>
        <Column field="arrivalDate" sortable header="Arrival Date" filter showFilterMenu={false} filterPlaceholder="Search by arrivalDate" />
        <Column field="masterBol" sortable header="Master Bol" style={{ minWidth: '12rem' }} filter showFilterMenu={false} filterPlaceholder="Search by country" />
        <Column field="countryOfOrigin" sortable header="Country of origin" showFilterMenu={false} filter body={country} filterPlaceholder="Search by name" />
        <Column field="supplierName" sortable header="Supplier name" showFilterMenu={false} filter filterPlaceholder="Search by name"/>
        <Column field="description" sortable header="Description" showFilterMenu={false} style={{ minWidth: '6rem' }} filter filterPlaceholder="Search by name"/>
        <Column field="importerName" sortable header="Importer name" showFilterMenu={false} filter body={verifiedBodyTemplate} filterPlaceholder="Search by name"/>
        <Column field="notifyParty" sortable header="Notify party" showFilterMenu={false} filter filterPlaceholder="Search by name"/>
        <Column field="portOfArrival" sortable header="Port of Arrival" showFilterMenu={false} filter filterPlaceholder="Search by name"/>
      </DataTable>
    </>
  );
};

export default DataTableComponent;
