import AppliedRoute from './components/AppliedRoute'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import Home from './containers/Home'
import Login from './containers/Login'
import NewNote from './containers/NewNote'
import NotFound from './containers/NotFound'
import Notes from './containers/Notes'
import React from 'react'
import Signup from './containers/Signup'
import UnauthenticatedRoute from './components/UnauthenticatedRoute'
import { Route, Switch } from 'react-router-dom'

export default ({ childProps }) => (
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
        <UnauthenticatedRoute
            path="/login"
            exact
            component={Login}
            props={childProps}
        />
        <UnauthenticatedRoute
            path="/signup"
            exact
            component={Signup}
            props={childProps}
        />
        <AuthenticatedRoute
            path="/notes/new"
            exact
            component={NewNote}
            props={childProps}
        />
        <AuthenticatedRoute
            path="/notes/:id"
            exact
            component={Notes}
            props={childProps}
        />
        {/* Finally, catch all unmatched routes */}
        <Route component={NotFound} />
    </Switch>
)
