import React from 'react'
import {
  Menu,
  Button,
  Popover,
  Position
} from "@blueprintjs/core";

import {
  SCENARIOS,
  SCENARIO_KEY_IN_LOCALSTORAGE,
} from '../constant'

class ScenarioDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedScenario: localStorage.getItem(SCENARIO_KEY_IN_LOCALSTORAGE) || 'DEFAULT'
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