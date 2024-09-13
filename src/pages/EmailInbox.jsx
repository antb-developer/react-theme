import React from 'react';

const EmailInbox = () => {
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
                                                            <div className="btn-group me-2 mb-2">
                                                                <button type="button" className="btn btn-primary waves-light waves-effect"><i className="fa fa-inbox"></i></button>
                                                                <button type="button" className="btn btn-primary waves-light waves-effect"><i className="fa fa-exclamation-circle"></i></button>
                                                                <button type="button" className="btn btn-primary waves-light waves-effect"><i className="far fa-trash-alt"></i></button>
                                                            </div>
                                                            <div className="btn-group me-2 mb-2">
                                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-primary waves-light waves-effect dropdown-toggle">
                                                                    <i className="fa fa-folder"></i> <i className="mdi mdi-chevron-down ms-1"></i>
                                                                </button>
                                                                <div className="dropdown-menu">
                                                                    <a href="javascript:;" className="dropdown-item">Updates</a>
                                                                    <a href="javascript:;" className="dropdown-item">Social</a>
                                                                    <a href="javascript:;" className="dropdown-item">Team Manage</a>
                                                                </div>
                                                            </div>
                                                            <div className="btn-group me-2 mb-2">
                                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-primary waves-light waves-effect dropdown-toggle">
                                                                    <i className="fa fa-tag"></i> <i className="mdi mdi-chevron-down ms-1"></i>
                                                                </button>
                                                                <div className="dropdown-menu">
                                                                    <a href="javascript:;" className="dropdown-item">Updates</a>
                                                                    <a href="javascript:;" className="dropdown-item">Social</a>
                                                                    <a href="javascript:;" className="dropdown-item">Team Manage</a>
                                                                </div>
                                                            </div>

                                                            <div className="btn-group me-2 mb-2">
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

                                        <div>
                                            <h6 className="text-muted text-uppercase mb-3">Today</h6>
                                                <div className="mb-2">
                                                    <div className="message-list mb-0 p-1">
                                                        <div className="list">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk1" />
                                                                    <label className="toggle" htmlFor="chk1"></label>
                                                                </div>
                                                                <div className="d-flex title align-items-center">
                                                                    <img src="/images/users/avatar-1.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                    <div className="flex-1 ms-2 ps-1">
                                                                        <h5 className="font-size-14 mb-0"><a href="" className="text-body">Whitney Peter</a></h5>
                                                                        <a href="" className="text-muted text-uppercase font-size-12">23 Threads</a>
                                                                    </div>
                                                                </div>
                                                                <span className="star-toggle far fa-star"></span>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href="javascript:;" className="subject text-body"> Delectus, ut aut reiciendis – <span className="teaser text-muted fw-normal">Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)</span>
                                                                </a>
                                                                <div className="date"><i className="mdi mdi-link-variant me-2 font-size-15 align-middle"></i> 5:01 AM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="message-list mb-0 p-1">
                                                        <div className="list">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk2" />
                                                                    <label className="toggle" htmlFor="chk2"></label>
                                                                </div>
                                                                <div className="d-flex title align-items-center">
                                                                    <img src="/images/users/avatar-2.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                    <div className="flex-1 ms-2 ps-1">
                                                                        <h5 className="font-size-14 mb-0"><a href="" className="text-body">me, Susanna</a></h5>
                                                                        <a href="" className="text-muted text-uppercase font-size-12">07 Threads</a>
                                                                    </div>
                                                                </div>
                                                                <span className="star-toggle far fa-star"></span>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href="javascript:;" className="subject text-body"><span className="bg-warning badge me-2">Freelance</span> Wolombo has been arranged, – <span className="teaser text-muted fw-normal">Alright thanks. I'll have to re-book that somehow, i'll get back to you.</span>
                                                                </a>
                                                                <div className="date"><i className="mdi mdi-link-variant me-2 font-size-15 align-middle"></i> 8:23 AM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="message-list mb-0 p-1">
                                                        <div className="list">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk3" />
                                                                    <label className="toggle" htmlFor="chk3"></label>
                                                                </div>
                                                                <div className="d-flex title align-items-center">
                                                                    <img src="/images/users/avatar-4.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                    <div className="flex-1 ms-2 ps-1">
                                                                        <h5 className="font-size-14 mb-0"><a href="" className="text-body">Web Support</a></h5>
                                                                        <a href="" className="text-muted text-uppercase font-size-12">14 Threads</a>
                                                                    </div>
                                                                </div>
                                                                <span className="star-toggle far fa-star"></span>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href="javascript:;" className="subject text-body"> Re: New mail settings – <span className="teaser text-muted fw-normal">Will you answer him asap?</span>
                                                                </a>
                                                                <div className="date"><i className="mdi mdi-link-variant me-2 font-size-15 align-middle"></i> 6:36 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>


                                            <div className="pt-2">
                                                <h6 className="text-muted text-uppercase mb-3">Yesterday</h6>
                                                <div className="mb-2">
                                                    <div className="message-list mb-0 p-1">
                                                        <div className="list">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk4" />
                                                                    <label className="toggle" htmlFor="chk4"></label>
                                                                </div>
                                                                <div className="d-flex title align-items-center">
                                                                    <img src="/images/users/avatar-1.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                    <div className="flex-1 ms-2 ps-1">
                                                                        <h5 className="font-size-14 mb-0"><a href="" className="text-body">Whitney Peter</a></h5>
                                                                        <a href="" className="text-muted text-uppercase font-size-12">23 Threads</a>
                                                                    </div>
                                                                </div>
                                                                <span className="star-toggle far fa-star"></span>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href="javascript:;" className="subject text-body"> <span className="bg-info badge me-2">Support</span> Off on Thursday - <span className="teaser text-muted fw-normal">Eff that place, you might as well stay here with us instead! Sent from my iPhone 4  4 mar 2014 at 5:55 pm</span>
                                                                </a>
                                                                <div className="date"><i className="mdi mdi-link-variant me-2 font-size-15 align-middle"></i> 3:26 AM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="unread mb-2">
                                                    <div className="message-list mb-0 p-1">
                                                        <div className="list">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk5" />
                                                                    <label className="toggle" htmlFor="chk5"></label>
                                                                </div>
                                                                <div className="d-flex title align-items-center">
                                                                    <img src="/images/users/avatar-6.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                    <div className="flex-1 ms-2 ps-1">
                                                                        <h5 className="font-size-14 mb-0"><a href="" className="text-body">Death to Stock</a></h5>
                                                                        <a href="" className="text-muted text-uppercase font-size-12">17 Threads</a>
                                                                    </div>
                                                                </div>
                                                                <span className="star-toggle far fa-star"></span>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href="javascript:;" className="subject text-body"> <span className="bg-primary badge me-2">Social</span> This Week's Top Stories – <span className="teaser text-muted fw-normal">Our top pick for you on Medium this week The Man Who Destroyed America’s Ego</span>
                                                                </a>
                                                                <div className="date"><i className="mdi mdi-link-variant me-2 font-size-15 align-middle"></i> 4:32 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-2">
                                                <h6 className="text-muted text-uppercase mb-3">27 March</h6>
                                                <div className="mb-2">
                                                    <div className="message-list mb-0 p-1">
                                                        <div className="list">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk6" />
                                                                    <label className="toggle" htmlFor="chk6"></label>
                                                                </div>
                                                                <div className="d-flex title align-items-center">
                                                                    <img src="/images/users/avatar-1.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                    <div className="flex-1 ms-2 ps-1">
                                                                        <h5 className="font-size-14 mb-0"><a href="" className="text-body">Andrew Zimmer</a></h5>
                                                                        <a href="" className="text-muted text-uppercase font-size-12">02 Threads</a>
                                                                    </div>
                                                                </div>
                                                                <span className="star-toggle far fa-star"></span>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href="javascript:;" className="subject text-body"> Mochila Beta: Subscription Confirmed – <span className="teaser text-muted fw-normal">You've been confirmed! Welcome to the ruling class of the inbox. For your records, here is a copy of the information you submitted to us...</span>
                                                                </a>
                                                                <div className="date"><i className="mdi mdi-link-variant me-2 font-size-15 align-middle"></i> 4:24 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>

                                            <div className="mb-2">
                                                <div className="message-list mb-0 p-1">
                                                    <div className="list">
                                                        <div className="col-mail col-mail-1">
                                                            <div className="checkbox-wrapper-mail">
                                                                <input type="checkbox" id="chk7" />
                                                                <label className="toggle" htmlFor="chk7"></label>
                                                            </div>
                                                            <div className="d-flex title align-items-center">
                                                                <img src="/images/users/avatar-2.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                <div className="flex-1 ms-2 ps-1">
                                                                    <h5 className="font-size-14 mb-0"><a href="" className="text-body">Randy, me (5)</a></h5>
                                                                    <a href="" className="text-muted text-uppercase font-size-12">15 Threads</a>
                                                                </div>
                                                            </div>
                                                            <span className="star-toggle far fa-star"></span>
                                                        </div>
                                                        <div className="col-mail col-mail-2">
                                                            <a href="javascript:;" className="subject text-body"><span className="bg-success badge me-2">Family</span> Weekend on Revibe – <span className="teaser text-muted fw-normal">Today's Friday and we thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen!</span>
                                                            </a>
                                                            <div className="date"><i className="mdi mdi-link-variant me-2 font-size-15 align-middle"></i> 4:24 PM</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="unread mb-2">
                                                <div className="message-list mb-0 p-1">
                                                    <div className="list">
                                                        <div className="col-mail col-mail-1">
                                                            <div className="checkbox-wrapper-mail">
                                                                <input type="checkbox" id="chk8" />
                                                                <label className="toggle" htmlFor="chk8"></label>
                                                            </div>
                                                            <div className="d-flex title align-items-center">
                                                                <img src="/images/users/avatar-7.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                <div className="flex-1 ms-2 ps-1">
                                                                    <h5 className="font-size-14 mb-0"><a href="" className="text-body">KanbanFlow</a></h5>
                                                                    <a href="" className="text-muted text-uppercase font-size-12">06 Threads</a>
                                                                </div>
                                                            </div>
                                                            <span className="star-toggle far fa-star"></span>
                                                        </div>
                                                        <div className="col-mail col-mail-2">
                                                            <a href="javascript:;" className="subject text-body"> Task assigned: Clone ARP's website
                                                            –  <span className="teaser text-muted fw-normal">You have been assigned a task by Alex@Work on the board Web.</span>
                                                            </a>
                                                            <div className="date"><i className="mdi mdi-link-variant me-2 font-size-15 align-middle"></i> 7:36 AM</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-2">
                                                <div className="message-list mb-0 p-1">
                                                    <div className="list">
                                                        <div className="col-mail col-mail-1">
                                                            <div className="checkbox-wrapper-mail">
                                                                <input type="checkbox" id="chk9" />
                                                                <label className="toggle" htmlFor="chk9"></label>
                                                            </div>
                                                            <div className="d-flex title align-items-center">
                                                                <img src="/images/users/avatar-3.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                <div className="flex-1 ms-2 ps-1">
                                                                    <h5 className="font-size-14 mb-0"><a href="" className="text-body">Revibe</a></h5>
                                                                    <a href="" className="text-muted text-uppercase font-size-12">25 Threads</a>
                                                                </div>
                                                            </div>
                                                            <span className="star-toggle far fa-star"></span>
                                                        </div>
                                                        <div className="col-mail col-mail-2">
                                                            <a href="javascript:;" className="subject text-body"> Last pic over my village – <span className="teaser text-muted fw-normal">Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!</span>
                                                            </a>
                                                            <div className="date"><i className="mdi mdi-link-variant me-2 font-size-15 align-middle"></i> 9:52 PM</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-2">
                                                <h6 className="text-muted text-uppercase mb-3">26 March</h6>
                                                <div className="mb-2">
                                                    <div className="message-list mb-0 p-1">
                                                        <div className="list">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk10" />
                                                                    <label className="toggle" htmlFor="chk10"></label>
                                                                </div>
                                                                <div className="d-flex title align-items-center">
                                                                    <img src="/images/users/avatar-1.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                    <div className="flex-1 ms-2 ps-1">
                                                                        <h5 className="font-size-14 mb-0"><a href="" className="text-body">Erik, me (5)</a></h5>
                                                                        <a href="" className="text-muted text-uppercase font-size-12">07 Threads</a>
                                                                    </div>
                                                                </div>
                                                                <span className="star-toggle far fa-star"></span>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href="javascript:;" className="subject text-body"> <span className="bg-danger badge me-2">Friends</span> Let's go fishing! – <span className="teaser text-muted fw-normal">Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.</span>
                                                                </a>
                                                                <div className="date"><i className="mdi mdi-link-variant me-2 font-size-15 align-middle"></i> 5:05 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-2">
                                                <h6 className="text-muted text-uppercase mb-3">25 March</h6>
                                                <div className="unread mb-2">
                                                    <div className="message-list mb-0 p-1">
                                                        <div className="list">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk11" />
                                                                    <label className="toggle" htmlFor="chk11"></label>
                                                                </div>
                                                                <div className="d-flex title align-items-center">
                                                                    <img src="/images/users/avatar-1.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                    <div className="flex-1 ms-2 ps-1">
                                                                        <h5 className="font-size-14 mb-0"><a href="" className="text-body">Stack Exchange</a></h5>
                                                                        <a href="" className="text-muted text-uppercase font-size-12">19 Threads</a>
                                                                    </div>
                                                                </div>
                                                                <span className="star-toggle far fa-star"></span>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href="javascript:;" className="subject text-body"> 1 new items in your Stackexchange inbox
                                                                – <span className="teaser text-muted fw-normal"> The following items were added to your Stack Exchange global inbox since you last checked it.</span>
                                                                </a>
                                                                <div className="date"><i className="mdi mdi-link-variant me-2 font-size-15 align-middle"></i> 7:30 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="message-list mb-0 p-1">
                                                        <div className="list">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk12" />
                                                                    <label className="toggle" htmlFor="chk12"></label>
                                                                </div>
                                                                <div className="d-flex title align-items-center">
                                                                    <img src="/images/users/avatar-7.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                    <div className="flex-1 ms-2 ps-1">
                                                                        <h5 className="font-size-14 mb-0"><a href="" className="text-body">Google Drive Team</a></h5>
                                                                        <a href="" className="text-muted text-uppercase font-size-12">47 Threads</a>
                                                                    </div>
                                                                </div>
                                                                <span className="star-toggle far fa-star"></span>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href="javascript:;" className="subject text-body"> You can now use your storage in Google
                                                                    Drive –  <span className="teaser text-muted fw-normal">Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.</span>
                                                                </a>
                                                                <div className="date"><i className="mdi mdi-link-variant me-2 font-size-15 align-middle"></i> 9:14 AM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="message-list mb-0 p-1">
                                                        <div className="list">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk13" />
                                                                    <label className="toggle" htmlFor="chk13"></label>
                                                                </div>
                                                                <div className="d-flex title align-items-center">
                                                                    <img src="/images/users/avatar-4.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                    <div className="flex-1 ms-2 ps-1">
                                                                        <h5 className="font-size-14 mb-0"><a href="" className="text-body">me, Peter (5)</a></h5>
                                                                        <a href="" className="text-muted text-uppercase font-size-12">07 Threads</a>
                                                                    </div>
                                                                </div>
                                                                <span className="star-toggle far fa-star"></span>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href="javascript:;" className="subject text-body"> <span className="bg-info badge me-2">Support</span> Home again! –  <span className="teaser text-muted fw-normal">That's just perfect! See you tomorrow.</span>
                                                                </a>
                                                                <div className="date"><i className="mdi mdi-link-variant me-2 font-size-15 align-middle"></i> 6:56 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-7">
                                                    Showing 1 - 20 of 1,524
                                                </div>
                                                <div className="col-5">
                                                    <div className="btn-group float-end">
                                                        <button type="button" className="btn btn-sm btn-success waves-effect"><i className="fa fa-chevron-left"></i></button>
                                                        <button type="button" className="btn btn-sm btn-success waves-effect"><i className="fa fa-chevron-right"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                   </div>

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

export default EmailInbox;
