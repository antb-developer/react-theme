import React from 'react';

const EmailRead = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">


                                <div className="email-leftbar">
                                    <div className="card">
                                        <div className="card-body">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#composemodal" className="btn btn-danger waves-effect waves-light w-100">
                                                Compose
                                            </button>

                                            <div className="card p-0 overflow-hidden mt-4 shadow-none">
                                                <div className="mail-list">
                                                    <a href="javascript:;" className="active bg-primary-subtle ">
                                                        <div className="d-flex align-items-center">
                                                            <i className="mdi mdi-email-outline font-size-20 align-middle me-3"></i>
                                                            <div className="flex-grow-1">
                                                                <h5 className="font-size-14 mb-0">All Inbox</h5>
                                                                <span className="text-muted font-size-13 text-truncate">How To Boost Website</span>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="float-end">
                                                                    <span className="bg-primary badge">18</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:;" className="border-bottom">
                                                        <div className="d-flex align-items-center">
                                                            <i className="mdi mdi-star-outline font-size-20 align-middle me-3"></i>
                                                            <div className="flex-grow-1">
                                                                <h5 className="font-size-14 mb-0">Starred</h5>
                                                                <span className="text-muted font-size-13 text-truncate">Selected messages</span>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="javascript:;" className="border-bottom">
                                                        <div className="d-flex align-items-center">
                                                            <i className="mdi mdi-diamond-stone font-size-20 align-middle me-3"></i>
                                                            <div className="flex-grow-1">
                                                                <h5 className="font-size-14 mb-0">Important</h5>
                                                                <span className="text-muted font-size-13 text-truncate">Selected messages</span>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="javascript:;" className="border-bottom">
                                                        <div className="d-flex align-items-center">
                                                            <i className="mdi mdi-file-outline font-size-20 align-middle me-3"></i>
                                                            <div className="flex-grow-1">
                                                                <h5 className="font-size-14 mb-0">Draft</h5>
                                                                <span className="text-muted font-size-13 text-truncate">Re-edit your messages</span>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="javascript:;" className="border-bottom">
                                                        <div className="d-flex align-items-center">
                                                            <i className="mdi mdi-email-check-outline font-size-20 align-middle me-3"></i>
                                                            <div className="flex-grow-1">
                                                                <h5 className="font-size-14 mb-0">Sent Mail</h5>
                                                                <span className="text-muted font-size-13 text-truncate">Successfully messages</span>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="float-end">
                                                                    <span className="bg-success badge">08</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:;">
                                                        <div className="d-flex align-items-center">
                                                            <i className="mdi mdi-trash-can-outline font-size-20 align-middle me-3"></i>
                                                            <div className="flex-grow-1">
                                                                <h5 className="font-size-14 mb-0">Trash</h5>
                                                                <span className="text-muted font-size-13 text-truncate">Removed messages</span>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>

                                            <h5 className="mt-3 font-size-15 text-uppercase">Labels</h5>

                                            <div className="card p-0 overflow-hidden mt-3 shadow-none">
                                                <div className="mail-list">
                                                    <a href="javascript:;" className="border-bottom"><span className="mdi mdi-arrow-right-drop-circle text-info float-end"></span>Theme Support</a>
                                                    <a href="javascript:;" className="border-bottom"><span className="mdi mdi-arrow-right-drop-circle text-warning float-end"></span>Freelance</a>
                                                    <a href="javascript:;" className="border-bottom"><span className="mdi mdi-arrow-right-drop-circle text-primary float-end"></span>Social</a>
                                                    <a href="javascript:;" className="border-bottom"><span className="mdi mdi-arrow-right-drop-circle text-danger float-end"></span>Friends</a>
                                                    <a href="javascript:;"><span className="mdi mdi-arrow-right-drop-circle text-success float-end"></span>Family</a>
                                                </div>
                                            </div>

                                            <h5 className="mt-3 font-size-15 text-uppercase">Chat</h5>

                                            <div className="card p-0 overflow-hidden mt-3 mb-1 shadow-none">
                                                <div className="mail-list">
                                                    <a href="javascript: void(0);" className="d-flex align-items-start border-bottom">
                                                        <img src="/images/users/avatar-2.jpg" alt="Generic placeholder image" height="36" className="flex-shrink-0 me-3 rounded-circle" />
                                                        <div className="flex-grow-1 chat-user-box">
                                                            <p className="user-title m-0">Scott Median</p>
                                                            <p className="text-muted mb-0">Hello</p>
                                                        </div>
                                                    </a>

                                                    <a href="javascript: void(0);" className="d-flex align-items-start border-bottom">
                                                        <img src="/images/users/avatar-3.jpg" alt="Generic placeholder image" height="36" className="flex-shrink-0 me-3 rounded-circle" />
                                                        <div className="flex-grow-1 chat-user-box">
                                                            <p className="user-title m-0">Julian Rosa</p>
                                                            <p className="text-muted mb-0">What about our next..</p>
                                                        </div>
                                                    </a>

                                                    <a href="javascript: void(0);" className="d-flex align-items-start border-bottom">
                                                        <img src="/images/users/avatar-4.jpg" alt="Generic placeholder image" height="36" className="flex-shrink-0 me-3 rounded-circle" />
                                                        <div className="flex-grow-1 chat-user-box">
                                                            <p className="user-title m-0">David Medina</p>
                                                            <p className="text-muted mb-0">Yeah everything is fine</p>
                                                        </div>
                                                    </a>

                                                    <a href="javascript: void(0);" className="d-flex align-items-start border-bottom">
                                                        <img src="/images/users/avatar-6.jpg" alt="Generic placeholder image" height="36" className="flex-shrink-0 me-3 rounded-circle" />
                                                        <div className="flex-grow-1 chat-user-box">
                                                            <p className="user-title m-0">Jay Baker</p>
                                                            <p className="text-muted mb-0">Wow that's great</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>



                                <div className="email-rightbar mb-3">

                                    <div className="card">
                                        <div className="card-body">

                                            <div className="">
                                                <div className="row mb-4">
                                                    <div className="col-xl-3 col-md-12">
                                                        <div className="pb-3 pb-xl-0">
                                                            <form className="email-search">
                                                                <div className="position-relative">
                                                                    <input type="text" placeholder="Search..." className="form-control bg-light" />
                                                                    <span className="bx bx-search font-size-18"></span>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-9 col-md-12">
                                                        <div className="pb-3 pb-xl-0">
                                                            <div role="toolbar" className="btn-toolbar float-end">
                                                                <div className="btn-group me-2 mb-2 mb-sm-0">
                                                                    <button type="button" className="btn btn-primary waves-light waves-effect"><i className="fa fa-inbox"></i></button>
                                                                    <button type="button" className="btn btn-primary waves-light waves-effect"><i className="fa fa-exclamation-circle"></i></button>
                                                                    <button type="button" className="btn btn-primary waves-light waves-effect"><i className="far fa-trash-alt"></i></button>
                                                                </div>
                                                                <div className="btn-group me-2 mb-2 mb-sm-0">
                                                                    <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-primary waves-light waves-effect dropdown-toggle">
                                                                        <i className="fa fa-folder"></i> <i className="mdi mdi-chevron-down ms-1"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu">
                                                                        <a href="javascript:;" className="dropdown-item">Updates</a>
                                                                        <a href="javascript:;" className="dropdown-item">Social</a>
                                                                        <a href="javascript:;" className="dropdown-item">Team Manage</a>
                                                                    </div>
                                                                </div>
                                                                <div className="btn-group me-2 mb-2 mb-sm-0">
                                                                    <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-primary waves-light waves-effect dropdown-toggle">
                                                                        <i className="fa fa-tag"></i> <i className="mdi mdi-chevron-down ms-1"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu">
                                                                        <a href="javascript:;" className="dropdown-item">Updates</a>
                                                                        <a href="javascript:;" className="dropdown-item">Social</a>
                                                                        <a href="javascript:;" className="dropdown-item">Team Manage</a>
                                                                    </div>
                                                                </div>

                                                                <div className="btn-group me-2 mb-2 mb-sm-0">
                                                                    <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-primary waves-light waves-effect dropdown-toggle">
                                                                        More <i className="mdi mdi-dots-vertical ms-2"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu">
                                                                        <a href="javascript:;" className="dropdown-item">Mark as Unread</a>
                                                                        <a href="javascript:;" className="dropdown-item">Mark as Important</a>
                                                                        <a href="javascript:;" className="dropdown-item">Add to Tasks</a>
                                                                        <a href="javascript:;" className="dropdown-item">Add Star</a>
                                                                        <a href="javascript:;" className="dropdown-item">Mute</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                                <div className="d-flex align-items-center mb-4">
                                                    <div className="flex-shrink-0 me-3">
                                                        <img src="/images/users/avatar-2.jpg" alt="Generic placeholder image" className="rounded-circle avatar-sm" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 mb-0">Humberto D. Champion</h5>
                                                        <small className="text-muted">support@domain.com</small>
                                                    </div>
                                                </div>

                                                <h4 className="font-size-16">This Week's Top Stories</h4>

                                                <p>Dear Lorem Ipsum,</p>
                                                <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus convallis.
                                                </p>
                                                <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.</p>
                                                <p>Sincerly,</p>
                                                <hr />

                                                <div className="row">
                                                    <div className="col-xl-2 col-6">
                                                        <div className="card">
                                                            <img src="/images/small/img-3.jpg" alt="Card image cap" className="card-img-top img-fluid" />
                                                            <div className="py-2 text-center">
                                                                <a href="javascript: void(0);" className="fw-medium">Download</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-2 col-6">
                                                        <div className="card">
                                                            <img src="/images/small/img-4.jpg" alt="Card image cap" className="card-img-top img-fluid" />
                                                            <div className="py-2 text-center">
                                                                <a href="javascript: void(0);" className="fw-medium">Download</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <a href="javascript: void(0);" className="btn btn-secondary waves-effect mt-4"><i className="mdi mdi-reply me-1"></i> Reply</a>


                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>

                </div>



                <div id="composemodal" tabindex="-1" role="dialog" aria-labelledby="composemodalTitle" aria-hidden="true" className="modal fade">
                    <div role="document" className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 id="composemodalTitle" className="modal-title">New Message</h5>
                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close">
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <input type="email" placeholder="To" className="form-control" />
                                    </div>

                                    <div className="mb-3">
                                        <input type="text" placeholder="Subject" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <div id="email-editor"></div>
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" data-bs-dismiss="modal" className="btn btn-secondary">Close</button>
                                <button type="button" className="btn btn-primary">Send <i className="fab fa-telegram-plane ms-1"></i></button>
                            </div>
                        </div>
                    </div>
                </div>


      </>
    );
};

export default EmailRead;
