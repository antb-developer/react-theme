import React from 'react';

const Pages500 = () => {
    return (
      <>
        <div style="background: url(./assets/images/bg-2.png) top;" className="min-vh-100">
        <div className="bg-overlay bg-light"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center py-5 mt-5">
                       <div className="position-relative">
                          <h1 className="error-title error-text mb-0">500</h1>
                          <h4 className="error-subtitle text-uppercase mb-0">Internal Server Error</h4>
                          <p className="font-size-16 mx-auto text-muted w-50 mt-4">It will be as simple as Occidental in fact, it will Occidental to an English person</p>
                       </div>
                        <div className="mt-4 text-center">
                            <a href="index.html" className="btn btn-primary">Back to Dashboard</a>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    </div>
    

    
    <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/libs/metismenujs/metismenujs.min.js"></script>
    <script src="assets/libs/simplebar/simplebar.min.js"></script>
    <script src="assets/libs/eva-icons/eva.min.js"></script>

    


      </>
    );
};

export default Pages500;