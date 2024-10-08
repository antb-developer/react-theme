import React from 'react';

const EcommerceCheckout = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <i className="fab fa-cc-visa text-primary h2"></i>
                                        <h3 className="mt-3 font-size-20">**** **** **** 2355</h3>
                                        <div className="d-flex justify-content-between mt-4">
                                            <p className="mb-0">Charles Daugherty</p>
                                            <p className="mb-0">Expiry date: 12/25 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <i className="fab fa-cc-mastercard text-primary h2"></i>
                                        <h3 className="mt-3 font-size-20">**** **** **** 9652</h3>
                                        <div className="d-flex justify-content-between mt-4">
                                            <p className="mb-0">Robert Whitney</p>
                                            <p className="mb-0">Expiry date: 12/27 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <i className="fab fa-cc-discover text-primary h2"></i>
                                        <h3 className="mt-3 font-size-20">**** **** **** 6523</h3>
                                        <div className="d-flex justify-content-between mt-4">
                                            <p className="mb-0">Kevin Johnson</p>
                                            <p className="mb-0">Expiry date: 12/28 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <i className="fab fa-cc-amex text-primary h2"></i>
                                        <h3 className="mt-3 font-size-20">**** **** **** 4586</h3>
                                        <div className="d-flex justify-content-between mt-4">
                                            <p className="mb-0">Donald Leggett</p>
                                            <p className="mb-0">Expiry date: 12/29 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-8">
                                <div className="card">
                                    <div className="card-body">
                                        <ol className="activity-checkout mb-0 px-4 mt-2">
                                            <li className="checkout-item">
                                                <div className="avatar checkout-icon p-1">
                                                    <div className="avatar-title rounded-circle bg-primary">
                                                        <h5 className="text-white font-size-16 mb-0">01</h5>
                                                    </div>
                                                </div>
                                                <div className="feed-item-list">
                                                    <div>
                                                        <h5 className="font-size-16 mb-1">Billing Info</h5>
                                                        <p className="text-muted text-truncate mb-4">Sed ut perspiciatis unde omnis iste</p>
                                                        <div className="mb-3">
                                                            <form>
                                                                <div>
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <div className="mb-3">
                                                                                <label className="form-label" htmlFor="billing-name">Name</label>
                                                                                <input type="text" id="billing-name" placeholder="Enter name" className="form-control" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <div className="mb-3">
                                                                                <label className="form-label" htmlFor="billing-email-address">Email Address</label>
                                                                                <input type="email" id="billing-email-address" placeholder="Enter email" className="form-control" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <div className="mb-3">
                                                                                <label className="form-label" htmlFor="billing-phone">Phone</label>
                                                                                <input type="text" id="billing-phone" placeholder="Enter Phone no." className="form-control" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="mb-3">
                                                                        <label className="form-label" htmlFor="billing-address">Address</label>
                                                                        <textarea id="billing-address" rows="3" placeholder="Enter full address" className="form-control" ></textarea>
                                                                    </div>

                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <div className="mb-4 mb-lg-0">
                                                                                <label className="form-label">Country</label>
                                                                                <select title="Country" className="form-control form-select">
                                                                                    <option value="0">Select Country</option>
                                                                                    <option value="AF">Afghanistan</option>
                                                                                    <option value="AL">Albania</option>
                                                                                    <option value="DZ">Algeria</option>
                                                                                    <option value="AS">American Samoa</option>
                                                                                    <option value="AD">Andorra</option>
                                                                                    <option value="AO">Angola</option>
                                                                                    <option value="AI">Anguilla</option>
                                                                                    <option value="AQ">Antarctica</option>
                                                                                    <option value="AR">Argentina</option>
                                                                                    <option value="AM">Armenia</option>
                                                                                    <option value="AW">Aruba</option>
                                                                                    <option value="AU">Australia</option>
                                                                                    <option value="AT">Austria</option>
                                                                                    <option value="AZ">Azerbaijan</option>
                                                                                    <option value="BS">Bahamas</option>
                                                                                    <option value="BH">Bahrain</option>
                                                                                    <option value="BD">Bangladesh</option>
                                                                                    <option value="BB">Barbados</option>
                                                                                    <option value="BY">Belarus</option>
                                                                                    <option value="BE">Belgium</option>
                                                                                    <option value="BZ">Belize</option>
                                                                                    <option value="BJ">Benin</option>
                                                                                    <option value="BM">Bermuda</option>
                                                                                    <option value="BT">Bhutan</option>
                                                                                    <option value="BO">Bolivia</option>
                                                                                    <option value="BW">Botswana</option>
                                                                                    <option value="BV">Bouvet Island</option>
                                                                                    <option value="BR">Brazil</option>
                                                                                    <option value="BN">Brunei Darussalam</option>
                                                                                    <option value="BG">Bulgaria</option>
                                                                                    <option value="BF">Burkina Faso</option>
                                                                                    <option value="BI">Burundi</option>
                                                                                    <option value="KH">Cambodia</option>
                                                                                    <option value="CM">Cameroon</option>
                                                                                    <option value="CA">Canada</option>
                                                                                    <option value="CV">Cape Verde</option>
                                                                                    <option value="KY">Cayman Islands</option>
                                                                                    <option value="CF">Central African Republic</option>
                                                                                    <option value="TD">Chad</option>
                                                                                    <option value="CL">Chile</option>
                                                                                    <option value="CN">China</option>
                                                                                    <option value="CX">Christmas Island</option>
                                                                                    <option value="CC">Cocos (Keeling) Islands</option>
                                                                                    <option value="CO">Colombia</option>
                                                                                    <option value="KM">Comoros</option>
                                                                                    <option value="CG">Congo</option>
                                                                                    <option value="CK">Cook Islands</option>
                                                                                    <option value="CR">Costa Rica</option>
                                                                                    <option value="CI">Cote d'Ivoire</option>
                                                                                    <option value="HR">Croatia (Hrvatska)</option>
                                                                                    <option value="CU">Cuba</option>
                                                                                    <option value="CY">Cyprus</option>
                                                                                    <option value="CZ">Czech Republic</option>
                                                                                    <option value="DK">Denmark</option>
                                                                                    <option value="DJ">Djibouti</option>
                                                                                    <option value="DM">Dominica</option>
                                                                                    <option value="DO">Dominican Republic</option>
                                                                                    <option value="EC">Ecuador</option>
                                                                                    <option value="EG">Egypt</option>
                                                                                    <option value="SV">El Salvador</option>
                                                                                    <option value="GQ">Equatorial Guinea</option>
                                                                                    <option value="ER">Eritrea</option>
                                                                                    <option value="EE">Estonia</option>
                                                                                    <option value="ET">Ethiopia</option>
                                                                                    <option value="FK">Falkland Islands (Malvinas)</option>
                                                                                    <option value="FO">Faroe Islands</option>
                                                                                    <option value="FJ">Fiji</option>
                                                                                    <option value="FI">Finland</option>
                                                                                    <option value="FR">France</option>
                                                                                    <option value="GF">French Guiana</option>
                                                                                    <option value="PF">French Polynesia</option>
                                                                                    <option value="GA">Gabon</option>
                                                                                    <option value="GM">Gambia</option>
                                                                                    <option value="GE">Georgia</option>
                                                                                    <option value="DE">Germany</option>
                                                                                    <option value="GH">Ghana</option>
                                                                                    <option value="GI">Gibraltar</option>
                                                                                    <option value="GR">Greece</option>
                                                                                    <option value="GL">Greenland</option>
                                                                                    <option value="GD">Grenada</option>
                                                                                    <option value="GP">Guadeloupe</option>
                                                                                    <option value="GU">Guam</option>
                                                                                    <option value="GT">Guatemala</option>
                                                                                    <option value="GN">Guinea</option>
                                                                                    <option value="GW">Guinea-Bissau</option>
                                                                                    <option value="GY">Guyana</option>
                                                                                    <option value="HT">Haiti</option>
                                                                                    <option value="HN">Honduras</option>
                                                                                    <option value="HK">Hong Kong</option>
                                                                                    <option value="HU">Hungary</option>
                                                                                    <option value="IS">Iceland</option>
                                                                                    <option value="IN">India</option>
                                                                                    <option value="ID">Indonesia</option>
                                                                                    <option value="IQ">Iraq</option>
                                                                                    <option value="IE">Ireland</option>
                                                                                    <option value="IL">Israel</option>
                                                                                    <option value="IT">Italy</option>
                                                                                    <option value="JM">Jamaica</option>
                                                                                    <option value="JP">Japan</option>
                                                                                    <option value="JO">Jordan</option>
                                                                                    <option value="KZ">Kazakhstan</option>
                                                                                    <option value="KE">Kenya</option>
                                                                                    <option value="KI">Kiribati</option>
                                                                                    <option value="KR">Korea, Republic of</option>
                                                                                    <option value="KW">Kuwait</option>
                                                                                    <option value="KG">Kyrgyzstan</option>
                                                                                    <option value="LV">Latvia</option>
                                                                                    <option value="LB">Lebanon</option>
                                                                                    <option value="LS">Lesotho</option>
                                                                                    <option value="LR">Liberia</option>
                                                                                    <option value="LY">Libyan Arab Jamahiriya</option>
                                                                                    <option value="LI">Liechtenstein</option>
                                                                                    <option value="LT">Lithuania</option>
                                                                                    <option value="LU">Luxembourg</option>
                                                                                    <option value="MO">Macau</option>
                                                                                    <option value="MG">Madagascar</option>
                                                                                    <option value="MW">Malawi</option>
                                                                                    <option value="MY">Malaysia</option>
                                                                                    <option value="MV">Maldives</option>
                                                                                    <option value="ML">Mali</option>
                                                                                    <option value="MT">Malta</option>
                                                                                    <option value="MH">Marshall Islands</option>
                                                                                    <option value="MQ">Martinique</option>
                                                                                    <option value="MR">Mauritania</option>
                                                                                    <option value="MU">Mauritius</option>
                                                                                    <option value="YT">Mayotte</option>
                                                                                    <option value="MX">Mexico</option>
                                                                                    <option value="MD">Moldova, Republic of</option>
                                                                                    <option value="MC">Monaco</option>
                                                                                    <option value="MN">Mongolia</option>
                                                                                    <option value="MS">Montserrat</option>
                                                                                    <option value="MA">Morocco</option>
                                                                                    <option value="MZ">Mozambique</option>
                                                                                    <option value="MM">Myanmar</option>
                                                                                    <option value="NA">Namibia</option>
                                                                                    <option value="NR">Nauru</option>
                                                                                    <option value="NP">Nepal</option>
                                                                                    <option value="NL">Netherlands</option>
                                                                                    <option value="AN">Netherlands Antilles</option>
                                                                                    <option value="NC">New Caledonia</option>
                                                                                    <option value="NZ">New Zealand</option>
                                                                                    <option value="NI">Nicaragua</option>
                                                                                    <option value="NE">Niger</option>
                                                                                    <option value="NG">Nigeria</option>
                                                                                    <option value="NU">Niue</option>
                                                                                    <option value="NF">Norfolk Island</option>
                                                                                    <option value="MP">Northern Mariana Islands</option>
                                                                                    <option value="NO">Norway</option>
                                                                                    <option value="OM">Oman</option>
                                                                                    <option value="PW">Palau</option>
                                                                                    <option value="PA">Panama</option>
                                                                                    <option value="PG">Papua New Guinea</option>
                                                                                    <option value="PY">Paraguay</option>
                                                                                    <option value="PE">Peru</option>
                                                                                    <option value="PH">Philippines</option>
                                                                                    <option value="PN">Pitcairn</option>
                                                                                    <option value="PL">Poland</option>
                                                                                    <option value="PT">Portugal</option>
                                                                                    <option value="PR">Puerto Rico</option>
                                                                                    <option value="QA">Qatar</option>
                                                                                    <option value="RE">Reunion</option>
                                                                                    <option value="RO">Romania</option>
                                                                                    <option value="RU">Russian Federation</option>
                                                                                    <option value="RW">Rwanda</option>
                                                                                    <option value="KN">Saint Kitts and Nevis</option>
                                                                                    <option value="LC">Saint LUCIA</option>
                                                                                    <option value="WS">Samoa</option>
                                                                                    <option value="SM">San Marino</option>
                                                                                    <option value="ST">Sao Tome and Principe</option>
                                                                                    <option value="SA">Saudi Arabia</option>
                                                                                    <option value="SN">Senegal</option>
                                                                                    <option value="SC">Seychelles</option>
                                                                                    <option value="SL">Sierra Leone</option>
                                                                                    <option value="SG">Singapore</option>
                                                                                    <option value="SK">Slovakia (Slovak Republic)</option>
                                                                                    <option value="SI">Slovenia</option>
                                                                                    <option value="SB">Solomon Islands</option>
                                                                                    <option value="SO">Somalia</option>
                                                                                    <option value="ZA">South Africa</option>
                                                                                    <option value="ES">Spain</option>
                                                                                    <option value="LK">Sri Lanka</option>
                                                                                    <option value="SH">St. Helena</option>
                                                                                    <option value="PM">St. Pierre and Miquelon</option>
                                                                                    <option value="SD">Sudan</option>
                                                                                    <option value="SR">Suriname</option>
                                                                                    <option value="SZ">Swaziland</option>
                                                                                    <option value="SE">Sweden</option>
                                                                                    <option value="CH">Switzerland</option>
                                                                                    <option value="SY">Syrian Arab Republic</option>
                                                                                    <option value="TW">Taiwan, Province of China</option>
                                                                                    <option value="TJ">Tajikistan</option>
                                                                                    <option value="TZ">Tanzania, United Republic of</option>
                                                                                    <option value="TH">Thailand</option>
                                                                                    <option value="TG">Togo</option>
                                                                                    <option value="TK">Tokelau</option>
                                                                                    <option value="TO">Tonga</option>
                                                                                    <option value="TT">Trinidad and Tobago</option>
                                                                                    <option value="TN">Tunisia</option>
                                                                                    <option value="TR">Turkey</option>
                                                                                    <option value="TM">Turkmenistan</option>
                                                                                    <option value="TC">Turks and Caicos Islands</option>
                                                                                    <option value="TV">Tuvalu</option>
                                                                                    <option value="UG">Uganda</option>
                                                                                    <option value="UA">Ukraine</option>
                                                                                    <option value="AE">United Arab Emirates</option>
                                                                                    <option value="GB">United Kingdom</option>
                                                                                    <option value="US">United States</option>
                                                                                    <option value="UY">Uruguay</option>
                                                                                    <option value="UZ">Uzbekistan</option>
                                                                                    <option value="VU">Vanuatu</option>
                                                                                    <option value="VE">Venezuela</option>
                                                                                    <option value="VN">Viet Nam</option>
                                                                                    <option value="VG">Virgin Islands (British)</option>
                                                                                    <option value="VI">Virgin Islands (U.S.)</option>
                                                                                    <option value="WF">Wallis and Futuna Islands</option>
                                                                                    <option value="EH">Western Sahara</option>
                                                                                    <option value="YE">Yemen</option>
                                                                                    <option value="ZM">Zambia</option>
                                                                                    <option value="ZW">Zimbabwe</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-4">
                                                                            <div className="mb-4 mb-lg-0">
                                                                                <label className="form-label" htmlFor="billing-city">City</label>
                                                                                <input type="text" id="billing-city" placeholder="Enter City" className="form-control" />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-4">
                                                                            <div className="mb-0">
                                                                                <label className="form-label" htmlFor="zip-code">Zip / Postal code</label>
                                                                                <input type="text" id="zip-code" placeholder="Enter Postal code" className="form-control" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="checkout-item">
                                                <div className="avatar checkout-icon p-1">
                                                    <div className="avatar-title rounded-circle bg-primary">
                                                        <h5 className="text-white font-size-16 mb-0">02</h5>
                                                    </div>
                                                </div>
                                                <div className="feed-item-list">
                                                    <div>
                                                        <h5 className="font-size-16 mb-1">Shipping Info</h5>
                                                        <p className="text-muted text-truncate mb-4">Neque porro quisquam est</p>
                                                        <div className="mb-3">
                                                            <div className="row">
                                                                <div className="col-lg-4 col-sm-6">
                                                                    <div data-bs-toggle="collapse">
                                                                        <label className="card-radio-label mb-0">
                                                                            <input type="radio" name="address" id="info-address1" checked className="card-radio-input" />
                                                                            <div className="card-radio text-truncate p-3">
                                                                                <span className="fs-14 mb-4 d-block">Address 1</span>
                                                                                <span className="fs-14 mb-2 d-block">Bradley McMillian</span>
                                                                                <span className="text-muted fw-normal text-wrap mb-1 d-block">109 Clarksburg Park Road Show Low, AZ 85901</span>

                                                                                <span className="text-muted fw-normal d-block">Mo. 012-345-6789</span>
                                                                            </div>
                                                                        </label>
                                                                        <div className="edit-btn bg-light  rounded">
                                                                            <a href="javascript:;" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit">
                                                                                <i className="bx bx-pencil font-size-16"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-sm-6">
                                                                    <div>
                                                                        <label className="card-radio-label mb-0">
                                                                            <input type="radio" name="address" id="info-address2" className="card-radio-input" />
                                                                            <div className="card-radio text-truncate p-3">
                                                                                <span className="fs-14 mb-4 d-block">Address 2</span>
                                                                                <span className="fs-14 mb-2 d-block">Bradley McMillian</span>
                                                                                <span className="text-muted fw-normal text-wrap mb-1 d-block">109 Clarksburg Park Road Show Low, AZ 85901</span>
                                                                                <span className="text-muted fw-normal d-block">Mo. 012-345-6789</span>
                                                                            </div>
                                                                        </label>
                                                                        <div className="edit-btn bg-light  rounded">
                                                                            <a href="javascript:;" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit">
                                                                                <i className="bx bx-pencil font-size-16"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="checkout-item pb-2">
                                                <div className="avatar checkout-icon p-1">
                                                    <div className="avatar-title rounded-circle bg-primary">
                                                        <h5 className="text-white font-size-16 mb-0">03</h5>
                                                    </div>
                                                </div>
                                                <div className="feed-item-list">
                                                    <div>
                                                        <h5 className="font-size-16 mb-1">Payment Info</h5>
                                                        <p className="text-muted text-truncate mb-4">Duis arcu tortor, suscipit eget</p>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-size-14 mb-3">Payment method :</h5>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-sm-6">
                                                                <div data-bs-toggle="collapse">
                                                                    <label className="card-radio-label">
                                                                        <input type="radio" name="pay-method" id="pay-methodoption1" className="card-radio-input" />
                                                                        <span className="card-radio py-3 text-center text-truncate">
                                                                            <i className="bx bx-credit-card d-block h2 mb-3"></i>
                                                                            Credit / Debit Card
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-3 col-sm-6">
                                                                <div>
                                                                    <label className="card-radio-label">
                                                                        <input type="radio" name="pay-method" id="pay-methodoption2" className="card-radio-input" />
                                                                        <span className="card-radio py-3 text-center text-truncate">
                                                                            <i className="bx bxl-paypal d-block h2 mb-3"></i>
                                                                            Paypal
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-3 col-sm-6">
                                                                <div>
                                                                    <label className="card-radio-label">
                                                                        <input type="radio" name="pay-method" id="pay-methodoption3" checked className="card-radio-input" />

                                                                        <span className="card-radio py-3 text-center text-truncate">
                                                                            <i className="bx bx-money d-block h2 mb-3"></i>
                                                                            <span>Cash on Delivery</span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="row my-4">
                                    <div className="col">
                                        <a href="ecommerce-products.html" className="btn btn-link text-muted">
                                            <i className="mdi mdi-arrow-left me-1"></i> Continue Shopping </a>
                                    </div>
                                    <div className="col">
                                        <div className="text-end mt-2 mt-sm-0">
                                            <a href="javascript:;" className="btn btn-success">
                                                <i className="mdi mdi-cart-outline me-1"></i> Procced </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="card checkout-order-summary">
                                    <div className="card-body">
                                        <div className="p-3 bg-light mb-3">
                                            <h5 className="font-size-16 mb-0">Order Summary <span className="float-end ms-2">#MN0124</span></h5>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table align-middle mb-0 table-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th style={{width: "90px"}} scope="col" className="border-top-0">Product</th>
                                                        <th scope="col" className="border-top-0">Product Desc</th>
                                                        <th scope="col" className="border-top-0">Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row"><img src="/images/product/img-1.png" alt="product-img" title="product-img" className="avatar-md" /></th>
                                                        <td>
                                                            <h5 className="font-size-15 text-truncate"><a href="ecommerce-product-detail.html" className="text-body">Home &amp; Office Chair Crime</a></h5>
                                                            <p className="text-muted mb-0">$ 260 x 2</p>
                                                        </td>
                                                        <td>$ 520</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><img src="/images/product/img-2.png" alt="product-img" title="product-img" className="avatar-md" /></th>
                                                        <td>
                                                            <h5 className="font-size-15 text-truncate"><a href="ecommerce-product-detail.html" className="text-body">Sofa Home Chair Black</a></h5>
                                                            <p className="text-muted mb-0">$ 260 x 1</p>
                                                        </td>
                                                        <td>$ 260</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">
                                                            <h5 className="font-size-14 m-0">Sub Total :</h5>
                                                        </td>
                                                        <td>
                                                            $ 780
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">
                                                            <h5 className="font-size-14 m-0">Discount :</h5>
                                                        </td>
                                                        <td>
                                                            - $ 78
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td colspan="2">
                                                            <h5 className="font-size-14 m-0">Shipping Charge :</h5>
                                                        </td>
                                                        <td>
                                                            $ 25
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">
                                                            <h5 className="font-size-14 m-0">Estimated Tax :</h5>
                                                        </td>
                                                        <td>
                                                            $ 18.20
                                                        </td>
                                                    </tr>

                                                    <tr className="bg-light">
                                                        <td colspan="2">
                                                            <h5 className="font-size-14 m-0">Total:</h5>
                                                        </td>
                                                        <td>
                                                            $ 745.2
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

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

export default EcommerceCheckout;
