import { NavLink, Outlet } from "react-router-dom";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import RightBar from '../components/RightBar';
export default function PublicLayout() {
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
       <div className="authentication-bg min-vh-100">
        <Outlet />
       </div>
     </>
   );
}
