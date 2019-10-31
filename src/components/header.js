import React from 'react'
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
          <Button className={Classes.MINIMAL} icon="home" text="Scenario Testing" />
        </NavbarHeading>
        <NavbarDivider />
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Button className={Classes.MINIMAL} icon="log-out" text="Logout" />
      </NavbarGroup>
    </Navbar>
  )
}