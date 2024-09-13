import { NavLink, Outlet } from "react-router-dom";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import RightBar from '../components/RightBar';
export default function Layout() {
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
          <Sidebar />
          <div className="main-content">
           <Outlet />
           <Footer />
          </div>
       </div>
       <RightBar />
     </>
   );
}
