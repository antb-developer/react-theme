import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import DashboardLayout from './layouts/DashboardLayout';
import PublicLayout from './layouts/PublicLayout';
import DashboardHorzLayout from './layouts/DashboardHorzLayout';
import Home from './pages/Home';
import DashboardCustom from './pages/DashboardCustom';
import DashboardSales from './pages/DashboardSales';
import AppsCalendar from './pages/AppsCalendar';
import AppsChat from './pages/AppsChat';
import AppsFileManager from './pages/AppsFileManager';
import AppsTodo from './pages/AppsTodo';
import AuthConfirmMail from './pages/auth/AuthConfirmMail';
import AuthEmailVerification from './pages/auth/AuthEmailVerification';
import AuthLockScreen from './pages/auth/AuthLockScreen';
import AuthLogin from './pages/auth/AuthLogin';
import AuthLogout from './pages/auth/AuthLogout';
import AuthRecoverpw from './pages/auth/AuthRecoverpw';
import AuthRegister from './pages/auth/AuthRegister';
import AuthTwoStepVerification from './pages/auth/AuthTwoStepVerification';
import ChartsApex from './pages/charts/ChartsApex';
import ChartsChartjs from './pages/charts/ChartsChartjs';
import ChartsTui from './pages/charts/ChartsTui';
import ContactsGrid from './pages/ContactsGrid';
import ContactsList from './pages/ContactsList';
import ContactsProfile from './pages/ContactsProfile';
import EcommerceAddProduct from './pages/ecommerce/EcommerceAddProduct';
import EcommerceCart from './pages/ecommerce/EcommerceCart';
import EcommerceCheckout from './pages/ecommerce/EcommerceCheckout';
import EcommerceCustomers from './pages/ecommerce/EcommerceCustomers';
import EcommerceOrders from './pages/ecommerce/EcommerceOrders';
import EcommerceProductDetail from './pages/ecommerce/EcommerceProductDetail';
import EcommerceProducts from './pages/ecommerce/EcommerceProducts';
import EcommerceShops from './pages/ecommerce/EcommerceShops';
import EmailInbox from './pages/EmailInbox';
import EmailRead from './pages/EmailRead';

import FormAdvanced from './pages/forms/FormAdvanced';
import FormEditors from './pages/forms/FormEditors';
import FormElements from './pages/forms/FormElements';
import FormLayouts from './pages/forms/FormLayouts';
import FormMask from './pages/forms/FormMask';
import FormUploads from './pages/forms/FormUploads';
import FormValidation from './pages/forms/FormValidation';
import FormWizard from './pages/forms/FormWizard';

import IconsBoxicons from './pages/IconsBoxicons';
import IconsEvaicons from './pages/IconsEvaicons';
import IconsFontawesome from './pages/IconsFontawesome';
import IconsMaterialdesign from './pages/IconsMaterialdesign';
import InvoicesDetail from './pages/InvoicesDetail';
import InvoicesList from './pages/InvoicesList';
import LayoutsHorizontal from './pages/LayoutsHorizontal';
import MapsGoogle from './pages/MapsGoogle';
import MapsLeaflet from './pages/MapsLeaflet';
import MapsVector from './pages/MapsVector';
import Pages404 from './pages/Pages404';
import Pages500 from './pages/Pages500';
import PagesComingsoon from './pages/PagesComingsoon';
import PagesFaqs from './pages/PagesFaqs';
import PagesMaintenance from './pages/PagesMaintenance';
import PagesPricing from './pages/PagesPricing';
import PagesStarter from './pages/PagesStarter';
import PagesTimeline from './pages/PagesTimeline';
import TablesAdvanced from './pages/TablesAdvanced';
import TablesBasic from './pages/TablesBasic';
import UiAlerts from './pages/ui/UiAlerts';
import UiButtons from './pages/ui/UiButtons';
import UiCards from './pages/ui/UiCards';
import UiCarousel from './pages/ui/UiCarousel';
import UiColors from './pages/ui/UiColors';
import UiDropdowns from './pages/ui/UiDropdowns';
import UiGeneral from './pages/ui/UiGeneral';
import UiGrid from './pages/ui/UiGrid';
import UiImages from './pages/ui/UiImages';
import UiLightbox from './pages/ui/UiLightbox';
import UiModals from './pages/ui/UiModals';
import UiNotifications from './pages/ui/UiNotifications';
import UiOffcanvas from './pages/ui/UiOffcanvas';
import UiProgressbars from './pages/ui/UiProgressbars';
import UiRangeslider from './pages/ui/UiRangeslider';
import UiRating from './pages/ui/UiRating';
import UiSweetAlert from './pages/ui/UiSweetAlert';
import UiTabsAccordions from './pages/ui/UiTabsAccordions';
import UiTypography from './pages/ui/UiTypography';
import UiVideo from './pages/ui/UiVideo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />} >
        <Route path="/auth/confirm-mail" element={<AuthConfirmMail />} />
        <Route path="/auth/email-verification" element={<AuthEmailVerification />} />
        <Route path="/auth/lock-screen" element={<AuthLockScreen />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/auth/logout" element={<AuthLogout />} />
        <Route path="/auth/recoverpw" element={<AuthRecoverpw />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/two-step-verification" element={<AuthTwoStepVerification />} />
        <Route path="/pages/404" element={<Pages404 />} />
        <Route path="/pages/500" element={<Pages500 />} />
        <Route path="/pages/comingsoon" element={<PagesComingsoon />} />
        <Route path="/pages/faqs" element={<PagesFaqs />} />
        <Route path="/pages/maintenance" element={<PagesMaintenance />} />
        <Route path="/pages/pricing" element={<PagesPricing />} />
        <Route path="/pages/timeline" element={<PagesTimeline />} />
        </Route>
        <Route element={<DashboardHorzLayout />} >
          <Route path="/layouts-horizontal" element={<LayoutsHorizontal />} />
        </Route>
        <Route element={<DashboardLayout />} >
          <Route path="/" element={<DashboardCustom />} />
          <Route path="/dashboard/custom" element={<DashboardCustom />} />
          <Route path="/dashboard/ecommerce" element={<Home />} />
          <Route path="/dashboard/sales" element={<DashboardSales />} />
          <Route path="/pages/starter" element={<PagesStarter />} />
          <Route path="/apps/calendar" element={<AppsCalendar />} />
          <Route path="/apps/chat" element={<AppsChat />} />
          <Route path="/apps/file-manager" element={<AppsFileManager />} />
          <Route path="/apps/todo" element={<AppsTodo />} />
          <Route path="/charts/apex" element={<ChartsApex />} />
          <Route path="/charts/chartjs" element={<ChartsChartjs />} />
          <Route path="/charts/tui" element={<ChartsTui />} />
          <Route path="/contacts/grid" element={<ContactsGrid />} />
          <Route path="/contacts/list" element={<ContactsList />} />
          <Route path="/contacts/profile" element={<ContactsProfile />} />
          <Route path="/ecommerce/add-product" element={<EcommerceAddProduct />} />
          <Route path="/ecommerce/cart" element={<EcommerceCart />} />
          <Route path="/ecommerce/checkout" element={<EcommerceCheckout />} />
          <Route path="/ecommerce/customers" element={<EcommerceCustomers />} />
          <Route path="/ecommerce/orders" element={<EcommerceOrders />} />
          <Route path="/ecommerce/product-detail" element={<EcommerceProductDetail />} />
          <Route path="/ecommerce/products" element={<EcommerceProducts />} />
          <Route path="/ecommerce/shops" element={<EcommerceShops />} />
          <Route path="/email/inbox" element={<EmailInbox />} />
          <Route path="/email/read" element={<EmailRead />} />
          <Route path="/form/advanced" element={<FormAdvanced />} />
          <Route path="/form/editors" element={<FormEditors />} />
          <Route path="/form/elements" element={<FormElements />} />
          <Route path="/form/layouts" element={<FormLayouts />} />
          <Route path="/form/mask" element={<FormMask />} />
          <Route path="/form/uploads" element={<FormUploads />} />
          <Route path="/form/validation" element={<FormValidation />} />
          <Route path="/form/wizard" element={<FormWizard />} />
          <Route path="/icons/boxicons" element={<IconsBoxicons />} />
          <Route path="/icons/evaicons" element={<IconsEvaicons />} />
          <Route path="/icons/fontawesome" element={<IconsFontawesome />} />
          <Route path="/icons/materialdesign" element={<IconsMaterialdesign />} />
          <Route path="/invoices/detail" element={<InvoicesDetail />} />
          <Route path="/invoices/list" element={<InvoicesList />} />
          <Route path="/maps/google" element={<MapsGoogle />} />
          <Route path="/maps/leaflet" element={<MapsLeaflet />} />
          <Route path="/maps/vector" element={<MapsVector />} />
          <Route path="/tables-advanced" element={<TablesAdvanced />} />
          <Route path="/tables-basic" element={<TablesBasic />} />
          <Route path="/ui/alerts" element={<UiAlerts />} />
          <Route path="/ui/buttons" element={<UiButtons />} />
          <Route path="/ui/cards" element={<UiCards />} />
          <Route path="/ui/carousel" element={<UiCarousel />} />
          <Route path="/ui/colors" element={<UiColors />} />
          <Route path="/ui/dropdowns" element={<UiDropdowns />} />
          <Route path="/ui/general" element={<UiGeneral />} />
          <Route path="/ui/grid" element={<UiGrid />} />
          <Route path="/ui/images" element={<UiImages />} />
          <Route path="/ui/lightbox" element={<UiLightbox />} />
          <Route path="/ui/modals" element={<UiModals />} />
          <Route path="/ui/notifications" element={<UiNotifications />} />
          <Route path="/ui/offcanvas" element={<UiOffcanvas />} />
          <Route path="/ui/progressbars" element={<UiProgressbars />} />
          <Route path="/ui/rangeslider" element={<UiRangeslider />} />
          <Route path="/ui/rating" element={<UiRating />} />
          <Route path="/ui/sweet-alert" element={<UiSweetAlert />} />
          <Route path="/ui/tabs-accordions" element={<UiTabsAccordions />} />
          <Route path="/ui/typography" element={<UiTypography />} />
          <Route path="/ui/video" element={<UiVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
