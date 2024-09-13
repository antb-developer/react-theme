import { NavLink, Outlet } from "react-router-dom";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import VerticalBar from '../components/VerticalBar';
import Footer from '../components/Footer';
import RightBar from '../components/RightBar';

export default function DashboardHorzLayout() {
   const testMenuItems = [
       {
           href: '/',
           title: 'Introduction',
       },
       {
           href: 'about',
           title: 'About',
       },
       {
           href: 'contact',
           title: 'Contact',
       }
   ];

   return (
     <>
       <div id={'layout-wrapper'}>
          <Header />
          <VerticalBar />
          <div className="main-content">
           <Outlet />
           <Footer />
          </div>
       </div>
       <RightBar />
     </>
   );
}
