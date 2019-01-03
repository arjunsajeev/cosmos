import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import SidebarLink from './sidebar-link'
import { __ICONNAMES__ } from '@auth0/cosmos/atoms/icon'
import { spacing } from '@auth0/cosmos-tokens'
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
      <React.Fragment>
        {/* <SidebarLinkGroup.Element {...Automation('sidebar.group')} {...this.props}> */}
        <SidebarLink icon={icon} label={label} onClick={this.handleClick} />
        <SidebarLinkGroup.Content open={open}>{children}</SidebarLinkGroup.Content>
        {/* </SidebarLinkGroup.Element> */}
      </React.Fragment>
    )
  }
}

SidebarLinkGroup.Element = styled.li`
  /* Fragment */
  /* background: #000; */
`

SidebarLinkGroup.Content = styled.ul`
  margin-left: calc(18px + ${spacing.xsmall});
  overflow: hidden;
  max-height: ${props => (props.open ? props.children.length * 50 + 'px' : '0')};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  transition: all 0.3s ease-in-out;
`

SidebarLinkGroup.propTypes = {
  icon: PropTypes.oneOf(__ICONNAMES__).isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

SidebarLinkGroup.defaultProps = {}

export default SidebarLinkGroup
