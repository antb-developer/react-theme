import React, { useState, useEffect } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { CSVLink } from "react-csv";
import Icon from '@mdi/react';
import { mdiTrayArrowDown } from '@mdi/js';

const DataTableComponent1 = () => {

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
      <button class="btn btn-primary btn-sm btn-rounded mb-0 me-2" data-bs-toggle="modal" data-bs-target=".shipping_details_modal">Details</button>
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
      <div className="dropdown mb-3 text-right">
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
      <DataTable paginator rowsPerPageOptions={[10, 25, 50, 100]}  resizableColumns columnResizeMode="expand" value={customers} paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
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

      <div id="composemodal" tabindex="-1" role="dialog" aria-labelledby="composemodalTitle" aria-hidden="true" className="modal fade shipping_details_modal">
            <div role="document" className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 id="composemodalTitle" className="modal-title">Shipments Details</h5>
                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close">
                        </button>
                    </div>
                    <div className="modal-body">
                    <div id="accordionFlushExample" className="accordion accordion-flush">
                        <div className="accordion-item">
                            <h2 id="flush-headingOne" className="accordion-header">
                                <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne" className="accordion-button fw-medium">
                                    Bill Of Lading Details
                                </button>
                            </h2>
                            <div id="flush-collapseOne" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" className="accordion-collapse collapse show">
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-sm-5">
                                      <div className="text-muted">
                                          <p className="font-size-16 mb-1">Arrival Date</p>
                                          <p className="font-size-16 mb-1">Searched Keywords</p>
                                          <p className="font-size-16 mb-1">HS Codes</p>
                                          <p className="font-size-16 mb-1">Quantity</p>
                                          <p className="font-size-16 mb-1">Weight</p>
                                          <p className="font-size-16 mb-1">Place of Receipt</p>
                                          <p className="font-size-16 mb-1">US Port of Arrival</p>
                                          <p className="font-size-16 mb-1">Vessel Name</p>
                                          <p className="font-size-16 mb-1">Vessel Country</p>
                                          <p className="font-size-16 mb-1">Foreign Port of Lading</p>
                                          <p className="font-size-16 mb-1">Mode of Transportation</p>
                                      </div>
                                  </div>
                                  <div className="col-sm-7">
                                    <p className="font-size-16 mb-1">2020-06-29</p>
                                    <p className="font-size-16 mb-1"> &nbsp; </p>
                                    <p className="font-size-16 mb-1">8415</p>
                                    <p className="font-size-16 mb-1">5831 CTN</p>
                                    <p className="font-size-16 mb-1">103930 KG</p>
                                    <p className="font-size-16 mb-1">YANTIAN PT</p>
                                    <p className="font-size-16 mb-1">Norfolk, Virginia</p>
                                    <p className="font-size-16 mb-1">NY UTILITY</p>
                                    <p className="font-size-16 mb-1">LR</p>
                                    <p className="font-size-16 mb-1">Yantian, China [Mainland]</p>
                                    <p className="font-size-16 mb-1">11</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 id="flush-headingTwo" className="accordion-header">
                                <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" className="accordion-button fw-medium collapsed">
                                  Shipper Details
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" className="accordion-collapse collapse">
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-sm-5 text-muted">
                                    <p className="font-size-16 mb-1">Name</p>
                                    <p className="font-size-16 mb-1">Address</p>
                                    <p className="font-size-16 mb-1">City</p>
                                    <p className="font-size-16 mb-1">State</p>
                                    <p className="font-size-16 mb-1">Zip Code</p>
                                    <p className="font-size-16 mb-1">Country Code</p>
                                    <p className="font-size-16 mb-1">Contact Name</p>
                                    <p className="font-size-16 mb-1">Telephone/Email</p>
                                  </div>
                                  <div className="col-sm-7">
                                    <p className="font-size-16 mb-1">MAHLE BEHR SERVICE ASIA CO., LTD.</p>
                                    <p className="font-size-16 mb-1">ROOM 1201 TOWER A ORIENTAL FINANCIAL PLAZA</p>
                                    <p className="font-size-16 mb-1">Shanghai</p>
                                    <p className="font-size-16 mb-1"> &nbsp; </p>
                                    <p className="font-size-16 mb-1"> &nbsp; </p>
                                    <p className="font-size-16 mb-1">200120</p>
                                    <p className="font-size-16 mb-1">CN</p>
                                    <p className="font-size-16 mb-1"> &nbsp; </p>
                                    <p className="font-size-16 mb-1"> &nbsp; </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 id="flush-headingThree" className="accordion-header">
                                <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" className="accordion-button fw-medium collapsed">
                                    Notify Party
                                </button>
                            </h2>
                            <div id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample" className="accordion-collapse collapse">
                              <div className="accordion-body">
                                <div className="row">
                                  <h5 className="font-size-16 mb-3">Notify Party</h5>
                                  <hr />
                                  <div className="col-sm-5 text-muted">
                                    <p className="font-size-16 mb-1">Name</p>
                                    <p className="font-size-16 mb-1">Address</p>
                                    <p className="font-size-16 mb-1">City</p>
                                    <p className="font-size-16 mb-1">State</p>
                                    <p className="font-size-16 mb-1">Zip Code</p>
                                    <p className="font-size-16 mb-1">Country Code</p>
                                    <p className="font-size-16 mb-1">Contact Name</p>
                                    <p className="font-size-16 mb-1">Telephone/Email</p>
                                  </div>
                                  <div className="col-sm-7">
                                    <p className="font-size-16 mb-1">MAHLE BEHR SERVICE AMERICA LLC</p>
                                    <p className="font-size-16 mb-1">5020 AUGUSTA DR</p>
                                    <p className="font-size-16 mb-1">Port Worth</p>
                                    <p className="font-size-16 mb-1">TX</p>
                                    <p className="font-size-16 mb-1">76106-180</p>
                                    <p className="font-size-16 mb-1">US</p>
                                    <p className="font-size-16 mb-1"> &nbsp; </p>
                                    <p className="font-size-16 mb-1"> &nbsp; </p>
                                  </div>
                                </div>

                                <div className="row mt-4">
                                  <h5 className="font-size-16 mb-3">CONSIGNEE</h5>
                                  <hr />
                                  <div className="col-sm-5 text-muted">
                                    <p className="font-size-16 mb-1">Name</p>
                                    <p className="font-size-16 mb-1">Address</p>
                                    <p className="font-size-16 mb-1">City</p>
                                    <p className="font-size-16 mb-1">State</p>
                                    <p className="font-size-16 mb-1">Zip Code</p>
                                    <p className="font-size-16 mb-1">Country Code</p>
                                    <p className="font-size-16 mb-1">Contact Name</p>
                                    <p className="font-size-16 mb-1">Telephone/Email</p>
                                  </div>
                                  <div className="col-sm-7">
                                    <p className="font-size-16 mb-1">MAHLE BEHR SERVICE AMERICA LLC</p>
                                    <p className="font-size-16 mb-1">5020 AUGUSTA DR</p>
                                    <p className="font-size-16 mb-1">Port Worth</p>
                                    <p className="font-size-16 mb-1">TX</p>
                                    <p className="font-size-16 mb-1">76106-180</p>
                                    <p className="font-size-16 mb-1">US</p>                                      
                                    <p className="font-size-16 mb-1"> &nbsp; </p>
                                    <p className="font-size-16 mb-1"> &nbsp; </p>
                                  </div>
                                </div>

                              </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 id="flush-headingFour" className="accordion-header">
                                <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-headingFour" className="accordion-button fw-medium collapsed">
                                    Container & cargo Details
                                </button>
                            </h2>
                            <div id="flush-collapseFour" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample" className="accordion-collapse collapse">
                              <div className="accordion-body">

                                <div className="row">
                                  <div className="col-sm-4 text-muted">
                                    <h5 className="font-size-16 mb-2">Seal Number</h5>
                                  </div>
                                  <div className="col-sm-4">
                                    <h5 className="font-size-16 mb-2">Container No</h5>
                                  </div>
                                  <div className="col-sm-4">
                                    <h5 className="font-size-16 mb-2">Product Description</h5>
                                  </div>
                                </div>
                                <hr />

                                <div className="row">
                                  <div className="col-sm-4 text-muted">
                                    <p className="font-size-16 mb-1">HLB7662103</p>
                                  </div>
                                  <div className="col-sm-4">
                                    <p className="font-size-16 mb-1">BEAU4922331</p>
                                  </div>
                                  <div className="col-sm-4">
                                    <p className="font-size-16 mb-1">Evaporator Heater Core Tube Clip</p>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-4 text-muted">
                                    <p className="font-size-16 mb-1">HLB7662249</p>
                                  </div>
                                  <div className="col-sm-4">
                                    <p className="font-size-16 mb-1">TCNU1643136</p>
                                  </div>
                                  <div className="col-sm-4">
                                    <p className="font-size-16 mb-1">Evaporator Heater Core Tube Clip</p>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-4 text-muted">
                                    <p className="font-size-16 mb-1">HLB7662203</p>
                                  </div>
                                  <div className="col-sm-4">
                                    <p className="font-size-16 mb-1">CAIU8243924</p>
                                  </div>
                                  <div className="col-sm-4">
                                    <p className="font-size-16 mb-1">Evaporator Heater Core Tube Clip</p>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-4 text-muted">
                                    <h5 className="font-size-16 mb-2">Seal Number</h5>
                                  </div>
                                  <div className="col-sm-4">
                                    <h5 className="font-size-16 mb-2">Container No</h5>
                                  </div>
                                  <div className="col-sm-4">
                                    <h5 className="font-size-16 mb-2">Marks & Number</h5>
                                  </div>
                                </div>
                                <hr />

                                <div className="row">
                                  <div className="col-sm-4 text-muted">
                                    <p className="font-size-16 mb-1">HLB7662103</p>
                                  </div>
                                  <div className="col-sm-4">
                                    <p className="font-size-16 mb-1">BEAU4922331</p>
                                  </div>
                                  <div className="col-sm-4">
                                    <p className="font-size-16 mb-1">BASP - U.S. CI200500129 NO. 1-54</p>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-4 text-muted">
                                    <p className="font-size-16 mb-1">HLB7662249</p>
                                  </div>
                                  <div className="col-sm-4">
                                    <p className="font-size-16 mb-1">TCNU1643136</p>
                                  </div>
                                  <div className="col-sm-4">
                                    <p className="font-size-16 mb-1">BASP - U.S. CI200500129 NO. 1-54</p>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-4 text-muted">
                                    <p className="font-size-16 mb-1">HLB7662203</p>
                                  </div>
                                  <div className="col-sm-4">
                                    <p className="font-size-16 mb-1">CAIU8243924</p>
                                  </div>
                                  <div className="col-sm-4">
                                    <p className="font-size-16 mb-1">BASP - U.S. CI200500129 NO. 1-54</p>
                                  </div>
                                </div>

                              </div>
                            </div>
                        </div>
                    </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">PDF <Icon path={mdiTrayArrowDown} size={1} /> </button>
                    </div>
                </div>
            </div>
        </div>

    </>
  );
};

export default DataTableComponent1;