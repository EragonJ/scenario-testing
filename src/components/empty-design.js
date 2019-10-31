import React from 'react';
import {
  Icon,
  Button,
  Classes
} from "@blueprintjs/core";

import './empty-design.css';

export default () => {
  return (
    <div className={'empty-design'}>
      <div>
        <Icon icon="user" iconSize={40}></Icon>
      </div>
      <h1>Nothing Found</h1>
      <p>You have no teams and no users in your organization now.</p>
      <p>Try to add your first user :)</p>
      <p></p>
      <Button className={Classes.LARGE} text="Add a new user" />
    </div>
  )
}