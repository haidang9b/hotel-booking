import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";

import RoomManagement from "./pages/RoomManagement";
import AdminRoute from "./features/AdminRoute";
import AuthWrapper from "./features/AuthWrapper";
function App() {
    return (
		<AuthWrapper>	
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route
						path="/room-management"
						element={
							<AdminRoute>
								<RoomManagement />
							</AdminRoute>
						}
					/>
					<Route path="/rooms" element={<Rooms />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</Router>
		</AuthWrapper>
    );
}

export default App;
