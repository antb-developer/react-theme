import React from 'react';
import SimpleBarReact from "simplebar-react";

const AppsChat = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="d-lg-flex">
                            <div className="chat-leftsidebar card">
                                <div className="card-body">

                                   <div className="text-center bg-light rounded px-4 py-3">
                                            <div className="text-end">
                                                <div className="dropdown chat-noti-dropdown">
                                                    <button type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn dropdown-toggle p-0">
                                                        <i className="bx bx-cog"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a href="javascript:;" className="dropdown-item">Profile</a>
                                                        <a href="javascript:;" className="dropdown-item">Edit</a>
                                                        <a href="javascript:;" className="dropdown-item">Add Contact</a>
                                                        <a href="javascript:;" className="dropdown-item">Setting</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-user-status">
                                                <img src="/images/users/avatar-3.jpg" alt="" className="avatar-md rounded-circle" />
                                                <div className="">
                                                    <div className="status"></div>
                                                </div>
                                            </div>
                                            <h5 className="font-size-16 mb-1 mt-3"><a href="javascript:;" className="text-reset">Martin Gurley </a></h5>
                                            <p className="text-muted mb-0">Available</p>
                                   </div>
                                </div>

                                <div className="p-3">
                                    <div className="search-box position-relative">
                                        <input type="text" placeholder="Search..." className="form-control rounded border" />
                                        <i data-eva="search-outline" data-eva-height="26" data-eva-width="26" className="search-icon"></i>
                                    </div>
                                </div>

                                <div className="chat-leftsidebar-nav">
                                    <ul className="nav nav-pills nav-justified bg-light m-3 rounded">
                                        <li className="nav-item">
                                            <a href="#chat" data-bs-toggle="tab" aria-expanded="true" className="nav-link active">
                                                <i className="bx bx-chat font-size-20 d-sm-none"></i>
                                                <span className="d-none d-sm-block">Chat</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#groups" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                                <i className="bx bx-group font-size-20 d-sm-none"></i>
                                                <span className="d-none d-sm-block">Groups</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#contacts" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                                <i className="bx bx-book-content font-size-20 d-sm-none"></i>
                                                <span className="d-none d-sm-block">Contacts</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div id="chat" className="tab-pane show active">
                                            <SimpleBarReact className="chat-message-list">
                                                <div className="pt-3">
                                                    <div className="px-3">
                                                        <h5 className="font-size-14 mb-3">Recent</h5>
                                                    </div>
                                                    <ul className="list-unstyled chat-list p-3">
                                                        <li className="active">
                                                            <a href="javascript:;">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-shrink-0 user-img online align-self-center me-3">
                                                                        <img src="/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                        <span className="user-status"></span>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <h5 className="text-truncate font-size-14 mb-0">Jennie Sherlock</h5>
                                                                    </div>
                                                                    <div className="flex-shrink-0">
                                                                        <span className="badge bg-danger rounded-pill">1</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-shrink-0 user-img online align-self-center me-3">
                                                                        <div className="avatar-sm align-self-center">
                                                                            <span className="avatar-title rounded-circle bg-primary-subtle  text-primary">
                                                                                S
                                                                            </span>
                                                                        </div>
                                                                        <span className="user-status"></span>
                                                                    </div>

                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <h5 className="text-truncate font-size-14 mb-0">Stacie Dube</h5>
                                                                    </div>
                                                                    <div className="flex-shrink-0">
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-shrink-0 user-img away align-self-center me-3">
                                                                        <img src="/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                        <span className="user-status"></span>
                                                                    </div>

                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <h5 className="text-truncate font-size-14 mb-0">Katie Olson</h5>
                                                                    </div>
                                                                    <div className="flex-shrink-0">
                                                                        <span className="badge bg-warning rounded-pill">4</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-shrink-0 user-img align-self-center me-3">
                                                                        <img src="/images/users/avatar-4.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                        <span className="user-status"></span>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <h5 className="text-truncate font-size-14 mb-0">Marshall Wilson</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-shrink-0 user-img online align-self-center me-3">
                                                                        <div className="avatar-sm align-self-center">
                                                                            <span className="avatar-title rounded-circle bg-primary-subtle  text-primary">
                                                                                J
                                                                            </span>
                                                                        </div>
                                                                        <span className="user-status"></span>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <h5 className="text-truncate font-size-14 mb-0">James Lee</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-shrink-0 user-img align-self-center me-3">
                                                                        <img src="/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                        <span className="user-status"></span>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <h5 className="text-truncate font-size-14 mb-0">Ronald Tucker</h5>
                                                                    </div>
                                                                    <div className="flex-shrink-0">
                                                                        <span className="badge bg-success rounded-pill">23</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="d-flex align-items-center">

                                                                    <div className="flex-shrink-0 user-img align-self-center me-3">
                                                                        <img src="/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                        <span className="user-status"></span>
                                                                    </div>

                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <h5 className="text-truncate font-size-14 mb-0">Dennis Stewart</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-shrink-0 user-img away align-self-center me-3">
                                                                        <img src="/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                        <span className="user-status"></span>
                                                                    </div>

                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <h5 className="text-truncate font-size-14 mb-0">Katie Olson</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="d-flex align-items-center">

                                                                    <div className="flex-shrink-0 user-img align-self-center me-3">
                                                                        <img src="/images/users/avatar-4.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                        <span className="user-status"></span>
                                                                    </div>

                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <h5 className="text-truncate font-size-14 mb-0">Marshall Wilson</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </SimpleBarReact>
                                        </div>

                                        <div id="groups" className="tab-pane">
                                            <SimpleBarReact className="chat-message-list">
                                                <div className="pt-3">
                                                    <div className="px-3">
                                                        <h5 className="font-size-14 mb-3">Groups</h5>
                                                    </div>
                                                    <ul className="list-unstyled chat-list">
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-shrink-0 avatar-sm me-3">
                                                                        <span className="avatar-title rounded-circle bg-primary-subtle  text-primary">
                                                                            G
                                                                        </span>
                                                                    </div>

                                                                    <div className="flex-grow-1">
                                                                        <h5 className="font-size-13 mb-0">General</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-shrink-0 avatar-sm me-3">
                                                                        <span className="avatar-title rounded-circle bg-primary-subtle  text-primary">
                                                                            R
                                                                        </span>
                                                                    </div>

                                                                    <div className="flex-grow-1">
                                                                        <h5 className="font-size-13 mb-0">Reporting</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-shrink-0 avatar-sm me-3">
                                                                        <span className="avatar-title rounded-circle bg-primary-subtle  text-primary">
                                                                            M
                                                                        </span>
                                                                    </div>

                                                                    <div className="flex-grow-1">
                                                                        <h5 className="font-size-13 mb-0">Meeting</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-shrink-0 avatar-sm me-3">
                                                                        <span className="avatar-title rounded-circle bg-primary-subtle  text-primary">
                                                                            A
                                                                        </span>
                                                                    </div>

                                                                    <div className="flex-grow-1">
                                                                        <h5 className="font-size-13 mb-0">Project A</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-shrink-0 avatar-sm me-3">
                                                                        <span className="avatar-title rounded-circle bg-primary-subtle  text-primary">
                                                                            B
                                                                        </span>
                                                                    </div>

                                                                    <div className="flex-grow-1">
                                                                        <h5 className="font-size-13 mb-0">Project B</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </SimpleBarReact>
                                        </div>

                                        <div id="contacts" className="tab-pane">
                                            <SimpleBarReact className="chat-message-list">
                                                <div className="pt-3">
                                                    <div className="px-3">
                                                        <h5 className="font-size-14 mb-3">Contacts</h5>
                                                    </div>

                                                    <div>
                                                        <div>
                                                            <div className="px-3 contact-list">A</div>

                                                            <ul className="list-unstyled chat-list">
                                                                <li>
                                                                    <a href="javascript:;">
                                                                        <h5 className="font-size-13 mb-0">Adam Miller</h5>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="javascript:;">
                                                                        <h5 className="font-size-13 mb-0">Alfonso Fisher</h5>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="mt-4">
                                                            <div className="px-3 contact-list">B</div>

                                                            <ul className="list-unstyled chat-list">
                                                                <li>
                                                                    <a href="javascript:;">
                                                                        <h5 className="font-size-13 mb-0">Bonnie Harney</h5>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="mt-4">
                                                            <div className="px-3 contact-list">C</div>

                                                            <ul className="list-unstyled chat-list">
                                                                <li>
                                                                    <a href="javascript:;">
                                                                        <h5 className="font-size-13 mb-0">Charles Brown</h5>
                                                                    </a>
                                                                    <a href="javascript:;">
                                                                        <h5 className="font-size-13 mb-0">Carmella Jones</h5>
                                                                    </a>
                                                                    <a href="javascript:;">
                                                                        <h5 className="font-size-13 mb-0">Carrie Williams</h5>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="mt-4">
                                                            <div className="px-3 contact-list">D</div>

                                                            <ul className="list-unstyled chat-list">
                                                                <li>
                                                                    <a href="javascript:;">
                                                                        <h5 className="font-size-13 mb-0">Dolores Minter</h5>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SimpleBarReact>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="w-100 user-chat mt-4 mt-sm-0 ms-lg-3">
                                <div className="card">
                                    <div className="p-3 px-lg-4 border-bottom">
                                        <div className="row">
                                            <div className="col-xl-4 col-7">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 avatar me-3 d-sm-block d-none">
                                                        <img src="/images/users/avatar-6.jpg" alt="" className="img-fluid d-block rounded-circle" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-16 mb-1 text-truncate"><a href="javascript:;" className="text-reset">Jennie Sherlock</a></h5>
                                                        <p className="text-muted text-truncate mb-0">Online</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-8 col-5">
                                                <ul className="list-inline user-chat-nav text-end mb-0">
                                                    <li className="list-inline-item">
                                                        <div className="dropdown">
                                                            <button type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn nav-btn dropdown-toggle">
                                                                <i className="bx bx-search"></i>
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-md p-2">
                                                                <form className="px-2">
                                                                    <div>
                                                                        <input type="text" placeholder="Search..." className="form-control border bg-light-subtle" />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="list-inline-item">
                                                        <div className="dropdown">
                                                            <button type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn nav-btn dropdown-toggle">
                                                                <i className="bx bx-dots-horizontal-rounded"></i>
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a href="javascript:;" className="dropdown-item">Profile</a>
                                                                <a href="javascript:;" className="dropdown-item">Archive</a>
                                                                <a href="javascript:;" className="dropdown-item">Muted</a>
                                                                <a href="javascript:;" className="dropdown-item">Delete</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <SimpleBarReact data-simplebar="" className="chat-conversation p-3">
                                        <ul className="list-unstyled mb-0">
                                            <li className="chat-day-title">
                                                <span className="title">Today</span>
                                            </li>
                                            <li>
                                                <div className="conversation-list">
                                                    <div className="d-flex">
                                                        <img src="/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar" />
                                                        <div className="flex-1">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <div className="conversation-name"><span className="time">10:00</span></div>
                                                                    <p className="mb-0">Hi Jordan! <br />
                                                                        Feels like it's been a while! Home are you? Do you
                                                                        have ant time for the remainder of the week to help me with an ongoing project?</p>

                                                                </div>
                                                                <div className="dropdown align-self-start">
                                                                    <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a href="javascript:;" className="dropdown-item">Copy</a>
                                                                        <a href="javascript:;" className="dropdown-item">Save</a>
                                                                        <a href="javascript:;" className="dropdown-item">Forward</a>
                                                                        <a href="javascript:;" className="dropdown-item">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="right">
                                                <div className="conversation-list">
                                                    <div className="d-flex">
                                                        <div className="flex-1">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <div className="conversation-name"><span className="time">10:02</span></div>
                                                                    <p className="mb-0 text-start">Hi Martin, Glad to hear from you, I'm fine,what about you? and how it's going with the velocity website?
                                                                    <br />
                                                                    Of course I will help with this project
                                                                    </p>

                                                                </div>
                                                                <div className="dropdown align-self-start">
                                                                    <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a href="javascript:;" className="dropdown-item">Copy</a>
                                                                        <a href="javascript:;" className="dropdown-item">Save</a>
                                                                        <a href="javascript:;" className="dropdown-item">Forward</a>
                                                                        <a href="javascript:;" className="dropdown-item">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar" />
                                                    </div>

                                                </div>

                                            </li>

                                            <li>
                                                <div className="conversation-list">
                                                    <div className="d-flex">
                                                        <img src="/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar" />
                                                        <div className="flex-1">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <div className="conversation-name"><span className="time">10:04</span></div>
                                                                    <p className="mb-0">
                                                                        Super, I will get you the new brief for our own site over to you this evening, so you have time to read over I'm good thank you!
                                                                    </p>
                                                                </div>
                                                                <div className="dropdown align-self-start">
                                                                    <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a href="javascript:;" className="dropdown-item">Copy</a>
                                                                        <a href="javascript:;" className="dropdown-item">Save</a>
                                                                        <a href="javascript:;" className="dropdown-item">Forward</a>
                                                                        <a href="javascript:;" className="dropdown-item">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </li>

                                            <li className="right">
                                                <div className="conversation-list">
                                                    <div className="d-flex">
                                                        <div className="flex-1">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <div className="conversation-name"><span className="time">10:08</span></div>
                                                                    <p className="mb-0 text-start">
                                                                        Of course I can, just catching up with Steve on it and i'll write it out. Speak tomorrow! Let me know if you have any questions!
                                                                    </p>

                                                                    <p className="mb-0 text-start mt-2">
                                                                        img-1.jpg &amp; img-2.jpg images for a New Projects
                                                                    </p>

                                                                    <ul className="list-inline message-img mt-2 mb-0">
                                                                        <li className="list-inline-item message-img-list">
                                                                            <a href="" className="d-inline-block">
                                                                                <img src="/images/small/img-1.jpg" alt="" className="rounded img-thumbnail" />
                                                                            </a>
                                                                        </li>

                                                                        <li className="list-inline-item message-img-list">
                                                                            <a href="" className="d-inline-block">
                                                                                <img src="/images/small/img-2.jpg" alt="" className="rounded img-thumbnail" />
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="dropdown align-self-start">
                                                                    <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a href="javascript:;" className="dropdown-item">Copy</a>
                                                                        <a href="javascript:;" className="dropdown-item">Save</a>
                                                                        <a href="javascript:;" className="dropdown-item">Forward</a>
                                                                        <a href="javascript:;" className="dropdown-item">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <img src="/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar" />
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="conversation-list">
                                                    <div className="d-flex">
                                                        <img src="/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar" />
                                                        <div className="flex-1">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <div className="conversation-name"><span className="time">10:06</span></div>
                                                                    <p className="mb-0">
                                                                       Thank You very much, I am waiting Project.
                                                                    </p>
                                                                </div>
                                                                <div className="dropdown align-self-start">
                                                                    <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a href="javascript:;" className="dropdown-item">Copy</a>
                                                                        <a href="javascript:;" className="dropdown-item">Save</a>
                                                                        <a href="javascript:;" className="dropdown-item">Forward</a>
                                                                        <a href="javascript:;" className="dropdown-item">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>


                                            <li className="right">
                                                <div className="conversation-list">
                                                    <div className="d-flex">
                                                        <div className="flex-1">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <div className="conversation-name"><span className="time">10:08</span></div>
                                                                    <p className="mb-0 text-start">
                                                                        When someone thanks us, our automatic response is to say, “You’re welcome.” This is something that we have
                                                                        learned from our parents and family and have been doing for a long time.
                                                                    </p>
                                                                </div>

                                                                <div className="dropdown align-self-start">
                                                                    <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a href="javascript:;" className="dropdown-item">Copy</a>
                                                                        <a href="javascript:;" className="dropdown-item">Save</a>
                                                                        <a href="javascript:;" className="dropdown-item">Forward</a>
                                                                        <a href="javascript:;" className="dropdown-item">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <img src="/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar" />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </SimpleBarReact>

                                    <div className="p-3 border-top">
                                        <div className="row">
                                            <div className="col">
                                                <div className="position-relative">
                                                    <input type="text" placeholder="Enter Message..." className="form-control border bg-light-subtle" />
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <button type="submit" className="btn btn-primary chat-send w-md waves-effect waves-light"><span className="d-none d-sm-inline-block me-2">Send</span> <i className="mdi mdi-send float-end"></i></button>
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

export default AppsChat;
