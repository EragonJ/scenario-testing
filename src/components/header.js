import React from 'react'
import ScenarioDropdown from './scenario-dropdown'
import {
  Button,
  Classes,
  Navbar,
  Alignment,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core"

export default () => {
  return (
    <Navbar className={Classes.DARK}>
      <NavbarGroup>
        <NavbarHeading>
          <Button className={Classes.MINIMAL} icon="home" text="Marvel" />
        </NavbarHeading>
        <NavbarDivider />
        <ScenarioDropdown/>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Button className={Classes.MINIMAL} icon="log-out" text="Logout" />
      </NavbarGroup>
    </Navbar>
  )
}