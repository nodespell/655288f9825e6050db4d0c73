import React from 'react'
import { createBrowserRouter, RouterProvider, Routes, Route, Link, Outlet } from 'react-router-dom'

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function Root() {
  return <div>
  <div>
    <Routes>
      <Route
        element={<div style={{boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '10px', minHeight: 'calc(100vh - 20px)', width: 'calc(100% - 20px)'}}><React.Fragment key=".0"><div><React.Fragment key=".0"><div style={{'align-items': 'cente', display: 'flex', 'justify-content': 'space-between'}}><React.Fragment key=".0"><div style={{display: 'flex'}}><React.Fragment key=".0"><div style={{color: 'rgb(160, 30, 250)', fontSize: '30px', fontWeight: '200', 'padding-right': '10px'}}><Link to="/">Home</Link></div><div style={{color: 'rgb(160, 30, 250)', fontSize: '30px', fontWeight: '200', 'padding-right': '10px'}}><Link to="/about">About</Link></div><div style={{color: 'rgb(160, 30, 250)', fontSize: '30px', fontWeight: '200', 'padding-right': '10px'}}><Link to="/photos">Photos</Link></div></React.Fragment></div><div style={{alignItems: 'center', color: 'rgb(180, 30, 20)', display: 'flex', fontSize: '20px', fontWeight: '200'}}>zhiqi.art</div></React.Fragment></div><Outlet /></React.Fragment></div><div style={{color: 'gray', textAlign: 'cent', width: '100%'}}><React.Fragment key=".0"><a href="https://www.nodespell.com" style={{marginRight: '10px', textDecoration: 'none'}} target="_blank">nodespell</a><a href="https://cniu.art" style={{marginRight: '10px', textDecoration: 'none'}} target="_blank">cniu</a></React.Fragment></div></React.Fragment></div>}
        path=""
      >
        <React.Fragment key=".0">
          <Route
            element={<div style={{undefined: undefined}}>🚀</div>}
            path="/"
          />
          <Route
            element="Build great things."
            path="/about"
          />
          <Route
            element={<div style={{alignItems: 'center', display: 'flex', flexDirection: 'column', padding: '20px'}}><React.Fragment key=".0"><img src="https://nodespell-test-bucket.s3.eu-west-2.amazonaws.com/assets/654c07d77eeae9f388478454/cloxl5v1k011p3b6c6c2ux5pk" style={{borderRadius: '10px', margin: '20px', width: '400px'}}/><img src="https://nodespell-test-bucket.s3.eu-west-2.amazonaws.com/assets/654c07d77eeae9f388478454/cloxl5v1k011q3b6cwbgfhvoj" style={{borderRadius: '10px', margin: '20px', width: '400px'}}/><img src="https://nodespell-test-bucket.s3.eu-west-2.amazonaws.com/assets/654c07d77eeae9f388478454/cloxl5v1k011r3b6cf6l1sb5c" style={{borderRadius: '10px', margin: '20px', width: '400px'}}/></React.Fragment></div>}
            path="/photos"
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