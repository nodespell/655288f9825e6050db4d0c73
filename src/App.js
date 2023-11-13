import React from 'react'
import { createBrowserRouter, RouterProvider, Routes, Route, Link, Outlet } from 'react-router-dom'

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function Root() {
  return <div>
  <div>
    <Routes>
      <Route
        element={<>zhiqi.art<div><React.Fragment key=".0"><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/photos">Photos</Link></React.Fragment></div><Outlet /></>}
        path=""
      >
        <React.Fragment key=".0">
          <Route
            element={<img src="https://nodespell-test-bucket.s3.eu-west-2.amazonaws.com/assets/654c07d77eeae9f388478454/cloroq16q000j3b6igg6nk0jx" />}
            path="/photos"
          />
          <Route
            element="Build great things."
            path="/about"
          />
          <Route
            element="🚀"
            path="/"
          />
        </React.Fragment>
      </Route>
    </Routes>
  </div>
</div>
}

export default function App() {
  return <RouterProvider router={router} />
}