import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"

const AppsCalendar = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-xl-3">
                                        <div className="card card-h-100">
                                            <div className="card-body">
                                                <button id="btn-new-event" className="btn btn-primary w-100"><i className="mdi mdi-plus"></i> Create New Event</button>

                                                <div id="external-events">
                                                    <br />
                                                    <p className="text-muted">Drag and drop your event or click in the calendar</p>
                                                    <div data-class="bg-success" className="external-event fc-event bg-success">
                                                        <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>New Event Planning
                                                    </div>
                                                    <div data-class="bg-info" className="external-event fc-event bg-info">
                                                        <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>Meeting
                                                    </div>
                                                    <div data-class="bg-warning" className="external-event fc-event bg-warning">
                                                        <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>Generating Reports
                                                    </div>
                                                    <div data-class="bg-danger" className="external-event fc-event bg-danger">
                                                        <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>Create New theme
                                                    </div>
                                                </div>

                                                <div className="row justify-content-center mt-5">
                                                    <img src="/images/calendar-img.png" alt="" className="img-fluid d-block" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-9">
                                        <div className="card card-h-100">
                                            <div className="card-body">
                                              <FullCalendar
                                                plugins={[ dayGridPlugin, interactionPlugin ]}
                                                initialView="dayGridMonth"
                                                weekends={false}
                                                events={[
                                                  { title: 'event 1', date: '2024-08-12' , backgroundColor : 'red' },
                                                  { title: 'event 2', date: '2024-08-26', backgroundColor : '#28b765' }
                                                ]}
                                              />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ clear: "both"}}></div>


                                <div id="event-modal" tabindex="-1" className="modal fade">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header py-3 px-4 border-bottom-0">
                                                <h5 id="modal-title" className="modal-title">Event</h5>

                                                <button type="button" data-bs-dismiss="modal" aria-hidden="true" className="btn-close"></button>

                                            </div>
                                            <div className="modal-body p-4">
                                                <form name="event-form" id="form-event" novalidate="" className="needs-validation">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="mb-3">
                                                                <label className="form-label">Event Name</label>
                                                                <input placeholder="Insert Event Name" type="text" name="title" id="event-title" required="" value="" className="form-control" />
                                                                <div className="invalid-feedback">Please provide a valid event name</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="mb-3">
                                                                <label className="form-label">Category</label>
                                                                <select name="category" id="event-category" required="" className="form-select shadow-none">
                                                                    <option value="" selected=""> --Select-- </option>
                                                                    <option value="bg-danger">Danger</option>
                                                                    <option value="bg-success">Success</option>
                                                                    <option value="bg-primary">Primary</option>
                                                                    <option value="bg-info">Info</option>
                                                                    <option value="bg-dark">Dark</option>
                                                                    <option value="bg-warning">Warning</option>
                                                                </select>
                                                                <div className="invalid-feedback">Please select a valid event category</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-6">
                                                            <button type="button" id="btn-delete-event" className="btn btn-danger">Delete</button>
                                                        </div>
                                                        <div className="col-6 text-end">
                                                            <button type="button" data-bs-dismiss="modal" className="btn btn-light me-1">Close</button>
                                                            <button type="submit" id="btn-save-event" className="btn btn-success">Save</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>

      </>
    );
};

export default AppsCalendar;
