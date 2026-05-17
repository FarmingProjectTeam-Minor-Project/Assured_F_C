import { Navigate } from "react-router-dom"

function ProtectedRoute({

  children,
  allowedRole

}) {

  const token =
    localStorage.getItem("token")

  const user =
    JSON.parse(

      localStorage.getItem("user")

    )

  // not logged in
  if (!token || !user) {

    return (
      <Navigate to="/login" />
    )
  }

  // wrong role
  if (

    allowedRole &&
    user.role !== allowedRole

  ) {

    return (
      <Navigate to="/login" />
    )
  }

  return children
}

export default ProtectedRoute