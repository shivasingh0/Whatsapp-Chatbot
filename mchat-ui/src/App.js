import { Route, Routes } from "react-router-dom";
import "./App.css";

// Pages
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import VarifyOtp from "./pages/VarifyOtp";
import Devices from "./pages/devicePage/Devices";
import SendMessage from "./pages/sendMessagePage/SendMessage";
import WelcomeMessage from "./pages/welcomeMessagePage/WelcomeMessage";
import AutoReply from "./pages/autoReplyPage/AutoReply";
import Template from "./pages/templatesPage/Template";
import Report from "./pages/reportPage/Report";
import ReceivedMessage from "./pages/receivedMessagePage/ReceivedMessage";
import Contact from "./pages/contactsPage/Contact";
import Unsubscribers from "./pages/unsubscribersPage/Unsubscribers";


function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="devices" element={ <Devices/> } />
            <Route path="sendmessage" element={ <SendMessage/> } />
            <Route path="welcomemessage" element={ <WelcomeMessage/> } />
            <Route path="autoreply" element={ < AutoReply /> } />
            <Route path="templates" element={ <Template/> } />
            <Route path="contact" element={ <Contact/> } />
            <Route path="unsubscribers" element={ < Unsubscribers /> } />
            <Route path="report" element={ <Report/> } />
            <Route path="receivedmessage" element={ < ReceivedMessage /> } />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/varifyotp" element={<VarifyOtp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
