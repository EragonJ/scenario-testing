import React from 'react'
import {
  Menu,
  Button,
  Popover,
  Position
} from "@blueprintjs/core";

import {
  SCENARIO_KEY_IN_LOCALSTORAGE 
} from '../constant'

const SCENARIOS = {
  DEFAULT: 'Default',
  NO_USER_WITH_NO_TEAM: 'No user with no team',
  SEVEN_USERS_WITH_NO_TEAM: '7 users with no team',
  NO_USERS_WITH_THREE_TEAMS: 'No users with 3 teams',
  SEVEN_USERS_WITH_THREE_TEAMS: '7 users with 3 teams',
}

class ScenarioDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedScenario: localStorage.getItem(SCENARIO_KEY_IN_LOCALSTORAGE)
    }
  }
  onClick(scenarioType) {
    localStorage.setItem(SCENARIO_KEY_IN_LOCALSTORAGE, scenarioType);
    this.setState({
      selectedScenario: scenarioType
    })
  }

  render() {
    const ourMenu = (
      <Menu>
        {Object.entries(SCENARIOS).map(([key, text]) => {
          let icon = ''
          if (key === this.state.selectedScenario) {
            icon = "small-tick"
          }

          return (
            <Menu.Item icon={icon} key={key} onClick={this.onClick.bind(this, key)} text={text}/>
          )
        })}
      </Menu>
    )

    return (
      <Popover content={ourMenu} position={Position.RIGHT_BOTTOM}>
        <Button icon="build" text="Scenario Picker" />
      </Popover>
    )
  }
}

export default ScenarioDropdown