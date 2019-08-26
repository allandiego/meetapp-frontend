import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Profile from '~/pages/Profile';

import Dashboard from '~/pages/Dashboard';

import MeetupAdd from '~/pages/Meetup/Add';
import MeetupEdit from '~/pages/Meetup/Edit';
import MeetupDetails from '~/pages/Meetup/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/meetup/add" component={MeetupAdd} isPrivate />
      <Route path="/meetup/:id/edit" component={MeetupEdit} isPrivate />
      <Route path="/meetup/:id/details" component={MeetupDetails} isPrivate />

      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/" component={() => <h1>Error 404</h1>} />
    </Switch>
  );
}
