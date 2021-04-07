import React, { Children } from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <header className="Header">
        <div className="Container">
          <h1 className="Header__title">To do List</h1>
        </div>
      </header>
      <div className="Main">{children}</div>
      <footer className="Footer">
        Con amor <span className="Footer__heart">❤</span>
      </footer>
    </div>
  )
}

export default Layout
