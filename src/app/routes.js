import React from 'react'
import { Route, Routes } from 'react-router-dom'
import withRouter from '../hooks/withRouter'
import { Portfolio } from '../pages/portfolio'
import { ContactUs } from '../pages/contact'
import { About } from '../pages/about'
import { Socialicons } from '../components/socialicons'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{}}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
))

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  )
}

export default AppRoutes
