import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { LobbyScreen } from '@/screens'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* =============================================================== */}

        {/* <Route path="/" element={<Navigate to="/template" />} /> */}
        <Route path="*" element={<Navigate to="/" />} />

        {/* =============================================================== */}

        <Route path="/" element={<LobbyScreen />} />

        {/* =============================================================== */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

// =========================================== ROUTES

// interface RouteProps {
//   isAuthenticated: boolean
//   children: React.ReactNode
// }

// const PrivateRoute = ({ isAuthenticated, children }: RouteProps) => {
//   if (!isAuthenticated) {
//     return <Navigate to="/" replace />
//   }

//   return children
// }

// const PublicRoute = ({ isAuthenticated, children }: RouteProps) => {
//   if (isAuthenticated) {
//     return <Navigate to="/" />
//   }

//   return children
// }
