import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import SignUp from './SignUp';
// import AdminLogin from './adminLogin';
import UserLogin from './UserLogin';
import JobSearch from './JobSearch';
import About from './About';
import Contact from './Contact';
import PostJob from './PostJob'
// import UserAttendance from './userAttendance'
// import UserAssignments from './userAssignments';
// import AdminHome from './AdminHome'
// import AdminAssignments from './AdminAssignments';
// import Result from './Result'
// import StudentDB from './studb'
// import AddProduct from './components/AddProduct';
// import EditProduct from './components/EditProduct';
// import Home2 from './components/home2';
// import Attendance from "./Attendance"
// import Grade from "./Grade"
// import Report from "./Report"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<UserLogin/>}/>
    <Route path="/userLogin" element={<UserLogin/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/search" element={<JobSearch/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/postjob" element={<PostJob/>}/>

    </Routes>
    </BrowserRouter>
    );
  }
  
  export default App;