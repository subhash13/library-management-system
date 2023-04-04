import { Routes,Route } from "react-router-dom";
import AdminHome from "./adminHome";
import BookList from "./BookList";
import AdminNavbar from "./adminNavbar";
const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<AdminHome />} />
                <Route path="/book-list" element={<BookList />} />
            </Routes>
        </div>
     );
}
 
export default AdminPortal;