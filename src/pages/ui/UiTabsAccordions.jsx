import React from 'react';

const UiTabsAccordions = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Default Tabs</h4>
                                        <p className="card-title-desc">Use the tab JavaScript plugin—include
                                            it individually or through the compiled <code className="highlighter-rouge">bootstrap.js</code>
                                            file—to extend our navigational tabs and pills to create tabbable panes
                                            of local content, even via dropdown menus.</p>
                                    </div>

                                    <div className="card-body">

                                        <ul role="tablist" className="nav nav-tabs">
                                            <li className="nav-item">
                                                <a data-bs-toggle="tab" href="#home" role="tab" className="nav-link active">
                                                    <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                                    <span className="d-none d-sm-block">Home</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a data-bs-toggle="tab" href="#profile" role="tab" className="nav-link">
                                                    <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                                                    <span className="d-none d-sm-block">Profile</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a data-bs-toggle="tab" href="#messages" role="tab" className="nav-link">
                                                    <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                                                    <span className="d-none d-sm-block">Messages</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a data-bs-toggle="tab" href="#settings" role="tab" className="nav-link">
                                                    <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                                                    <span className="d-none d-sm-block">Settings</span>
                                                </a>
                                            </li>
                                        </ul>


                                        <div className="tab-content p-3 text-muted">
                                            <div id="home" role="tabpanel" className="tab-pane active">
                                                <p className="mb-0">
                                                    Raw denim you probably haven't heard of them jean shorts Austin.
                                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                                    cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                                    butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                                    qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                                    iphone. Seitan aliquip quis cardigan american apparel, butcher
                                                    voluptate nisi qui.
                                                </p>
                                            </div>
                                            <div id="profile" role="tabpanel" className="tab-pane">
                                                <p className="mb-0">
                                                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                    single-origin coffee squid. Exercitation +1 labore velit, blog
                                                    sartorial PBR leggings next level wes anderson artisan four loko
                                                    farm-to-table craft beer twee. Qui photo booth letterpress,
                                                    commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                                                    vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                                    aesthetic magna delectus.
                                                </p>
                                            </div>
                                            <div id="messages" role="tabpanel" className="tab-pane">
                                                <p className="mb-0">
                                                    Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                    sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                    farm-to-table readymade. Messenger bag gentrify pitchfork
                                                    tattooed craft beer, iphone skateboard locavore carles etsy
                                                    salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                    Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                                                    mi whatever gluten yr.
                                                </p>
                                            </div>
                                            <div id="settings" role="tabpanel" className="tab-pane">
                                                <p className="mb-0">
                                                    Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                                    art party before they sold out master cleanse gluten-free squid
                                                    scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                                    art party locavore wolf cliche high life echo park Austin. Cred
                                                    vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                                    farm-to-table VHS.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Justify Tabs</h4>
                                        <p className="card-title-desc">Use the tab JavaScript plugin—include
                                            it individually or through the compiled <code className="highlighter-rouge">bootstrap.js</code>
                                            file—to extend our navigational tabs and pills to create tabbable panes
                                            of local content, even via dropdown menus.</p>
                                    </div>

                                    <div className="card-body">

                                        <ul role="tablist" className="nav nav-pills nav-justified">
                                            <li className="nav-item waves-effect waves-light">
                                                <a data-bs-toggle="tab" href="#home-1" role="tab" className="nav-link active">
                                                    <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                                    <span className="d-none d-sm-block">Home</span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a data-bs-toggle="tab" href="#profile-1" role="tab" className="nav-link">
                                                    <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                                                    <span className="d-none d-sm-block">Profile</span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a data-bs-toggle="tab" href="#messages-1" role="tab" className="nav-link">
                                                    <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                                                    <span className="d-none d-sm-block">Messages</span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a data-bs-toggle="tab" href="#settings-1" role="tab" className="nav-link">
                                                    <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                                                    <span className="d-none d-sm-block">Settings</span>
                                                </a>
                                            </li>
                                        </ul>


                                        <div className="tab-content p-3 text-muted">
                                            <div id="home-1" role="tabpanel" className="tab-pane active">
                                                <p className="mb-0">
                                                    Raw denim you probably haven't heard of them jean shorts Austin.
                                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                                    cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                                    butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                                    qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                                    iphone. Seitan aliquip quis cardigan american apparel, butcher
                                                    voluptate nisi qui.
                                                </p>
                                            </div>
                                            <div id="profile-1" role="tabpanel" className="tab-pane">
                                                <p className="mb-0">
                                                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                    single-origin coffee squid. Exercitation +1 labore velit, blog
                                                    sartorial PBR leggings next level wes anderson artisan four loko
                                                    farm-to-table craft beer twee. Qui photo booth letterpress,
                                                    commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                                                    vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                                    aesthetic magna 8-bit.
                                                </p>
                                            </div>
                                            <div id="messages-1" role="tabpanel" className="tab-pane">
                                                <p className="mb-0">
                                                    Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                    sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                    farm-to-table readymade. Messenger bag gentrify pitchfork
                                                    tattooed craft beer, iphone skateboard locavore carles etsy
                                                    salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                    Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                                                    mi whatever gluten-free.
                                                </p>
                                            </div>
                                            <div id="settings-1" role="tabpanel" className="tab-pane">
                                                <p className="mb-0">
                                                    Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                                    art party before they sold out master cleanse gluten-free squid
                                                    scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                                    art party locavore wolf cliche high life echo park Austin. Cred
                                                    vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                                    farm-to-table.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Vertical Nav Tabs</h4>
                                        <p className="card-title-desc">Example of Vertical nav tabs</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div id="v-pills-tab" role="tablist" aria-orientation="vertical" className="nav flex-column nav-pills">
                                                <a id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" className="nav-link mb-2 active">Home</a>
                                                <a id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" className="nav-link mb-2">Profile</a>
                                                <a id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false" className="nav-link mb-2">Messages</a>
                                                <a id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" className="nav-link">Settings</a>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div id="v-pills-tabContent" className="tab-content text-muted mt-4 mt-md-0">
                                                    <div id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" className="tab-pane fade show active">
                                                        <p>
                                                            Raw denim you probably haven't heard of them jean shorts Austin.
                                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                                            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                                            butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                                            qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                                            iphone. Seitan aliquip quis cardigan.
                                                        </p>
                                                        <p>Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                                                qui irure terry richardson ex squid.</p>
                                                    </div>
                                                    <div id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" className="tab-pane fade">
                                                        <p>
                                                            Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                            single-origin coffee squid. Exercitation +1 labore velit, blog
                                                            sartorial PBR leggings next level wes anderson artisan four loko
                                                            farm-to-table craft beer twee. Qui photo booth letterpress,
                                                            commodo enim craft beer mlkshk.
                                                        </p>
                                                        <p className="mb-0"> Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna 8-bit</p>
                                                    </div>
                                                    <div id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" className="tab-pane fade">
                                                        <p>
                                                            Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                            sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                            farm-to-table readymade. Messenger bag gentrify pitchfork
                                                            tattooed craft beer, iphone skateboard locavore carles etsy
                                                            salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                            Leggings gentrify squid 8-bit cred.
                                                        </p>
                                                        <p className="mb-0">DIY synth PBR banksy irony.
                                                                Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                                                                mi whatever gluten-free.</p>
                                                    </div>
                                                    <div id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" className="tab-pane fade">
                                                        <p>
                                                            Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                                            art party before they sold out master cleanse gluten-free squid
                                                            scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                                            art party locavore wolf cliche high life echo park Austin. Cred
                                                            vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                                            farm-to-table.
                                                        </p>
                                                        <p className="mb-0">Fanny pack portland seitan DIY,
                                                            art party locavore wolf cliche high life echo park Austin. Cred
                                                            vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                                            farm-to-table.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Custom Tabs</h4>
                                        <p className="card-title-desc">Example of custom tabs</p>
                                    </div>

                                    <div className="card-body">

                                        <ul role="tablist" className="nav nav-tabs nav-tabs-custom nav-justified">
                                            <li className="nav-item">
                                                <a data-bs-toggle="tab" href="#home1" role="tab" className="nav-link active">
                                                    <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                                    <span className="d-none d-sm-block">Home</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a data-bs-toggle="tab" href="#profile1" role="tab" className="nav-link">
                                                    <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                                                    <span className="d-none d-sm-block">Profile</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a data-bs-toggle="tab" href="#messages1" role="tab" className="nav-link">
                                                    <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                                                    <span className="d-none d-sm-block">Messages</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a data-bs-toggle="tab" href="#settings1" role="tab" className="nav-link">
                                                    <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                                                    <span className="d-none d-sm-block">Settings</span>
                                                </a>
                                            </li>
                                        </ul>


                                        <div className="tab-content p-3 text-muted">
                                            <div id="home1" role="tabpanel" className="tab-pane active">
                                                <p className="mb-0">
                                                    Raw denim you probably haven't heard of them jean shorts Austin.
                                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                                    cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                                    butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                                    qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                                    iphone. Seitan aliquip quis cardigan american apparel, butcher
                                                    voluptate nisi qui.
                                                </p>
                                            </div>
                                            <div id="profile1" role="tabpanel" className="tab-pane">
                                                <p className="mb-0">
                                                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                    single-origin coffee squid. Exercitation +1 labore velit, blog
                                                    sartorial PBR leggings next level wes anderson artisan four loko
                                                    farm-to-table craft beer twee. Qui photo booth letterpress,
                                                    commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                                                    vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                                    aesthetic magna delectus.
                                                </p>
                                            </div>
                                            <div id="messages1" role="tabpanel" className="tab-pane">
                                                <p className="mb-0">
                                                    Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                    sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                    farm-to-table readymade. Messenger bag gentrify pitchfork
                                                    tattooed craft beer, iphone skateboard locavore carles etsy
                                                    salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                    Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                                                    mi whatever gluten-free carles.
                                                </p>
                                            </div>
                                            <div id="settings1" role="tabpanel" className="tab-pane">
                                                <p className="mb-0">
                                                    Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                                    art party before they sold out master cleanse gluten-free squid
                                                    scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                                    art party locavore wolf cliche high life echo park Austin. Cred
                                                    vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                                    farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral,
                                                    mustache readymade keffiyeh craft.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Card Header Tabs</h4>
                                        <div className="flex-shrink-0">
                                            <ul role="tablist" className="nav justify-content-end nav-tabs-custom rounded card-header-tabs">
                                                <li className="nav-item">
                                                    <a data-bs-toggle="tab" href="#home2" role="tab" className="nav-link active">
                                                        <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                                        <span className="d-none d-sm-block">Home</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a data-bs-toggle="tab" href="#profile2" role="tab" className="nav-link">
                                                        <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                                                        <span className="d-none d-sm-block">Profile</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a data-bs-toggle="tab" href="#messages2" role="tab" className="nav-link">
                                                        <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                                                        <span className="d-none d-sm-block">Message</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="card-body">


                                        <div className="tab-content text-muted">
                                            <div id="home2" role="tabpanel" className="tab-pane active">
                                                <p className="mb-0">
                                                    Raw denim you probably haven't heard of them jean shorts Austin.
                                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                                    cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                                    butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                                    qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                                    iphone. Seitan aliquip quis cardigan american apparel, butcher
                                                    voluptate nisi qui.
                                                </p>
                                            </div>
                                            <div id="profile2" role="tabpanel" className="tab-pane">
                                                <p className="mb-0">
                                                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                    single-origin coffee squid. Exercitation +1 labore velit, blog
                                                    sartorial PBR leggings next level wes anderson artisan four loko
                                                    farm-to-table craft beer twee. Qui photo booth letterpress,
                                                    commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                                                    vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                                    aesthetic magna delectus.
                                                </p>
                                            </div>
                                            <div id="messages2" role="tabpanel" className="tab-pane">
                                                <p className="mb-0">
                                                    Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                    sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                    farm-to-table readymade. Messenger bag gentrify pitchfork
                                                    tattooed craft beer, iphone skateboard locavore carles etsy
                                                    salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                    Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                                                    mi whatever gluten-free carles.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Card Header Pills</h4>
                                        <div className="flex-shrink-0">
                                            <ul role="tablist" className="nav justify-content-end nav-pills card-header-pills">
                                                <li className="nav-item">
                                                    <a data-bs-toggle="tab" href="#home3" role="tab" className="nav-link active">
                                                        <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                                        <span className="d-none d-sm-block">Home</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a data-bs-toggle="tab" href="#profile3" role="tab" className="nav-link">
                                                        <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                                                        <span className="d-none d-sm-block">Profile</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a data-bs-toggle="tab" href="#messages3" role="tab" className="nav-link">
                                                        <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                                                        <span className="d-none d-sm-block">Message</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="card-body">


                                        <div className="tab-content text-muted">
                                            <div id="home3" role="tabpanel" className="tab-pane active">
                                                <p className="mb-0">
                                                    Raw denim you probably haven't heard of them jean shorts Austin.
                                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                                    cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                                    butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                                    qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                                    iphone. Seitan aliquip quis cardigan american apparel, butcher
                                                    voluptate nisi qui.
                                                </p>
                                            </div>
                                            <div id="profile3" role="tabpanel" className="tab-pane">
                                                <p className="mb-0">
                                                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                    single-origin coffee squid. Exercitation +1 labore velit, blog
                                                    sartorial PBR leggings next level wes anderson artisan four loko
                                                    farm-to-table craft beer twee. Qui photo booth letterpress,
                                                    commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                                                    vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                                    aesthetic magna delectus.
                                                </p>
                                            </div>
                                            <div id="messages3" role="tabpanel" className="tab-pane">
                                                <p className="mb-0">
                                                    Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                    sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                    farm-to-table readymade. Messenger bag gentrify pitchfork
                                                    tattooed craft beer, iphone skateboard locavore carles etsy
                                                    salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                    Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                                                    mi whatever gluten-free carles.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Card Header Form Select</h4>
                                        <div className="flex-shrink-0">
                                            <select className="form-select form-select-sm mb-0 my-n1">
                                                <option value="MAY" selected="">May</option>
                                                <option value="AP">April</option>
                                                <option value="MA">March</option>
                                                <option value="FE">February</option>
                                                <option value="JA">January</option>
                                                <option value="DE">December</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="card-body text-muted">
                                        <p className="mb-0">
                                            Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                            sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                            farm-to-table readymade. Messenger bag gentrify pitchfork
                                            tattooed craft beer, iphone skateboard locavore carles etsy
                                            salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                            Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                                            mi whatever gluten-free carles.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Card Header Button</h4>
                                        <div className="flex-shrink-0">
                                            <div className="d-flex flex-wrap gap-2 mb-0 my-n1">
                                                <div className="btn-group">
                                                    <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-primary btn-sm dropdown-toggle">Dropdown <i className="mdi mdi-chevron-down"></i></button>
                                                    <div className="dropdown-menu">
                                                        <a href="javascript:;" className="dropdown-item">Action</a>
                                                        <a href="javascript:;" className="dropdown-item">Another action</a>
                                                        <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn btn-subtle-secondary btn-sm">
                                                    Button
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body text-muted">
                                        <p className="mb-0">
                                            Raw denim you probably haven't heard of them jean shorts Austin.
                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                            butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                            qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                            iphone. Seitan aliquip quis cardigan american apparel, butcher
                                            voluptate nisi qui.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Accordion Example</h4>
                                        <p className="card-title-desc">Click the accordions below to expand/collapse the accordion content.</p>
                                    </div>

                                    <div className="card-body">
                                        <div id="accordionExample" className="accordion">
                                            <div className="accordion-item">
                                                <h2 id="headingOne" className="accordion-header">
                                                    <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="accordion-button fw-medium">
                                                    Accordion Item #1
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample" className="accordion-collapse collapse show">
                                                    <div className="accordion-body">
                                                        <div className="text-muted">
                                                            <strong className="text-body">This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 id="headingTwo" className="accordion-header">
                                                    <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="accordion-button fw-medium collapsed">
                                                    Accordion Item #2
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" className="accordion-collapse collapse">
                                                    <div className="accordion-body">
                                                        <div className="text-muted">
                                                            <strong className="text-body">This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 id="headingThree" className="accordion-header">
                                                    <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="accordion-button fw-medium collapsed">
                                                    Accordion Item #3
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample" className="accordion-collapse collapse">
                                                    <div className="accordion-body">
                                                        <div className="text-muted">
                                                            <strong className="text-body">This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Flush Accordion</h4>
                                        <p className="card-title-desc">Add <code>.accordion-flush</code> to remove the default <code>background-color</code>, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.</p>
                                    </div>

                                    <div className="card-body">
                                        <div id="accordionFlushExample" className="accordion accordion-flush">
                                            <div className="accordion-item">
                                                <h2 id="flush-headingOne" className="accordion-header">
                                                    <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne" className="accordion-button fw-medium">
                                                        Accordion Item #1
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseOne" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" className="accordion-collapse collapse show">
                                                    <div className="accordion-body text-muted">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                                                        quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                                                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 id="flush-headingTwo" className="accordion-header">
                                                    <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" className="accordion-button fw-medium collapsed">
                                                        Accordion Item #2
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseTwo" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" className="accordion-collapse collapse">
                                                    <div className="accordion-body text-muted">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                                                        quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 id="flush-headingThree" className="accordion-header">
                                                    <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" className="accordion-button fw-medium collapsed">
                                                        Accordion Item #3
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample" className="accordion-collapse collapse">
                                                    <div className="accordion-body text-muted">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                                                        quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                                                        anderson cred nesciunt sapiente ea proident.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                         <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Collapse Example</h4>
                                        <p className="card-title-desc">
                                            You can use a link with the <code>href</code> attribute, or a button with the <code>data-bs-target</code> attribute. In both cases, the <code>data-bs-toggle="collapse"</code> is required.
                                        </p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex gap-2 flex-wrap mb-3">
                                            <a data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample" className="btn btn-primary">
                                                Link with href
                                            </a>
                                            <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" className="btn btn-primary">
                                                Button with data-target
                                            </button>
                                        </div>
                                        <div id="collapseExample" className="collapse show">
                                            <div className="card border shadow-none card-body text-muted mb-0">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Multiple Targets Collapse</h4>
                                        <p className="card-title-desc">
                                            A <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show and hide multiple elements by referencing them with a selector in its <code>href</code> or <code>data-bs-target</code> attribute.
                                        </p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex gap-2 flex-wrap mb-3">
                                            <a data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" className="btn btn-primary">Toggle first element</a>
                                            <button type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2" className="btn btn-primary">Toggle second element</button>
                                            <button type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2" className="btn btn-primary">Toggle both elements</button>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div id="multiCollapseExample1" className="collapse multi-collapse show">
                                                    <div className="card border shadow-none card-body text-muted mb-0">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div id="multiCollapseExample2" className="collapse multi-collapse show">
                                                    <div className="card border shadow-none card-body text-muted mb-0">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Horizontal Collapse</h4>
                                        <p className="card-title-desc">The collapse plugin also supports horizontal collapsing. Add the <code>.collapse-horizontal</code> modifier class to transition the <code>width</code> instead of <code>height</code> and set a <code>width</code> on the immediate child element.</p>
                                    </div>

                                    <div className="card-body">
                                        <p>
                                            <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" className="btn btn-primary">
                                                Toggle width collapse
                                            </button>
                                        </p>
                                        <div style={{ minHeight: "120px" }}>
                                            <div id="collapseWidthExample" className="collapse collapse-horizontal">
                                                <div style={{ width: "300px" }} className="card card-body mb-0">
                                                    This is some placeholder content for a horizontal collapse. It's hidden by default and shown when
                                                    triggered.
                                                </div>
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

export default UiTabsAccordions;
