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

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="devices" element={ <Devices/> } />
            <Route path="sendmessage" element={ <SendMessage/> } />
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
