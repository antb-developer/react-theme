import React from 'react';

const UiVideo = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Ratio video 16:9</h4>
                                        <p className="card-title-desc">Aspect ratios can be customized with modifier classes.</p>
                                    </div>

                                    <div className="card-body">

                                        <div className="ratio ratio-16x9">
                                            <iframe src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowfullscreen=""></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Ratio video 21:9</h4>
                                        <p className="card-title-desc">Aspect ratios can be customized with modifier classes.</p>
                                    </div>

                                    <div className="card-body">

                                        <div className="ratio ratio-21x9">
                                            <iframe src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowfullscreen=""></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Ratio video 4:3</h4>
                                        <p className="card-title-desc">Aspect ratios can be customized with modifier classes.</p>
                                    </div>

                                    <div className="card-body">

                                        <div className="ratio ratio-4x3">
                                            <iframe src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowfullscreen=""></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Ratio video 1:1</h4>
                                        <p className="card-title-desc">Aspect ratios can be customized with modifier classes.</p>
                                    </div>

                                    <div className="card-body">

                                        <div className="ratio ratio-1x1">
                                            <iframe src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowfullscreen=""></iframe>
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

export default UiVideo;
