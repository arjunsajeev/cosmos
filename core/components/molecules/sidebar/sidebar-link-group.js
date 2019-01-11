import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import SidebarLink from './sidebar-link'
import Icon, { __ICONNAMES__ } from '../../atoms/icon'
import { spacing, colors } from '@auth0/cosmos-tokens'
import Automation from '../../_helpers/automation-attribute'

class SidebarLinkGroup extends React.Component {
  constructor(props) {
    super(props)
    let open = false

    /* If a child is selected, group should be open */
    React.Children.forEach(props.children, child => {
      if (child.props.selected) open = true
    })

    this.state = { open }
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { icon, label, children } = this.props
    const { open } = this.state
    return (
      <SidebarLinkGroup.Element>
        <SidebarLink icon={icon} label={label} onClick={this.handleClick} open={open}>
          <SidebarLinkGroup.Content
            {...Automation('sidebar.link-group')}
            open={open}
            hidden={!open}
          >
            {children}
          </SidebarLinkGroup.Content>
        </SidebarLink>
      </SidebarLinkGroup.Element>
    )
  }
}

SidebarLinkGroup.Element = React.Fragment

SidebarLinkGroup.Content = styled.ul`
  margin-left: calc(18px + ${spacing.xsmall});
  overflow: hidden;
  max-height: ${props => (props.open ? props.children.length * 50 + 'px' : '0')};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  transition: all 0.3s ease-in-out;

  ${SidebarLink.Element} {
    padding-top: ${spacing.xxsmall};
    padding-bottom: ${spacing.xxsmall};
  }
  ${Icon.Element} path {
    fill: ${colors.text.secondary};
  }
`

SidebarLinkGroup.propTypes = {
  icon: PropTypes.oneOf(__ICONNAMES__).isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

SidebarLinkGroup.defaultProps = {}

export default SidebarLinkGroup
