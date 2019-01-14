import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'

import { colors, spacing } from '@auth0/cosmos-tokens'
import Heading, { StyledHeading } from '../../atoms/heading'
import Icon from '../../atoms/icon'

const excludeDrawer = child => {
  const newChildren = React.Children.map(child.props.children, child => {
    if (child.type === List.Drawer) return null

    return child
  })

  return React.cloneElement(child, { children: newChildren })
}

const getDrawer = child => {
  let onToggle
  const drawer = React.Children.map(child.props.children, child => {
    if (child.type !== List.Drawer) return null
    const { props } = child
    onToggle = props.onToggle

    return React.cloneElement(child, { hidden: !props.open, 'aria-label': props.description })
  })

  return { drawer, onToggle }
}

const isListExpandable = child => {
  let isPresent = false

  React.Children.map(child.props.children, item => {
    if (item.type === List.Drawer) isPresent = true
  })

  return isPresent
}

const List = props => {
  return (
    <List.Element {...Automation('list')} role="list" aria-label="Expandable data list example">
      {props.label ? (
        <List.Label>
          <Heading size={4}>{props.label}</Heading>
        </List.Label>
      ) : null}

      {React.Children.map(props.children, child => {
        const { onToggle, drawer } = getDrawer(child)
        console.log({ child })
        return (
          <List.ItemContainer {...Automation('list.item')} aria-labelledby="example-id">
            {props.sortable ? (
              <List.Handle
                aria-expanded="true"
                aria-label="Toggle details"
                aria-labelledby="example-id button_id"
                id="button_id"
              >
                <Icon name="resize-vertical" size="16" color="blue" />
              </List.Handle>
            ) : null}

            <List.Content>{excludeDrawer(child)}</List.Content>

            {isListExpandable(child) && (
              <List.Arrow onClick={onToggle}>
                <Icon name="chevron-down" size="16" color="default" />
              </List.Arrow>
            )}

            {drawer}
          </List.ItemContainer>
        )
      })}
    </List.Element>
  )
}

List.Element = styled.ul`
  ${containerStyles};
`

List.Item = React.Fragment
List.ItemContainer = styled.li`
  border-top: 1px solid ${colors.list.borderColor};
  padding: ${spacing.small};
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;

  &:hover {
    background-color: ${colors.list.backgroundHover};
  }
`

List.Content = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  > *:not(:last-child):not(:only-child) {
    margin-right: ${spacing.small};
  }

  /* if it has only one item inside we want it to fill all the avaliable space */
  > * {
    flex: 1;
  }
`
List.Header = styled.div`
  flex: 1;
`

List.Body = styled.div`
  flex: 1.4;
  /* This is not mobile first, but it avoids negation of margin */
  @media screen and (max-width: 768px) {
    flex: 1 0 100%;
    order: 1;
    margin-top: ${spacing.small};
  }
`

List.Footer = styled.div`
  flex: none;
`

// Sortable List
List.Handle = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  margin-top: -${spacing.small};
  margin-bottom: -${spacing.small};
  margin-left: -${spacing.small};
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
`

// Sortable List
List.Arrow = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  margin-top: -${spacing.small};
  margin-bottom: -${spacing.small};
  margin-right: -${spacing.small};
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
`

List.Drawer = styled.section`
  flex: 1 0 100%;
  border-top: 1px solid ${colors.list.borderColor};
  display: ${props => (props.hidden ? 'none' : 'block')};

  margin-top: ${spacing.small};
  margin-bottom: -${spacing.small};
  margin-left: -${spacing.small};
  margin-right: -${spacing.small};
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
  padding-top: ${spacing.small};
  padding-bottom: ${spacing.small};
`

List.Label = styled.div`
  padding: ${spacing.xsmall};

  ${StyledHeading[4]} {
    margin: 0;
  }
`

List.propTypes = {
  /** header for list */
  label: PropTypes.string,
  sortable: PropTypes.bool,
  expandable: PropTypes.bool
}

List.defaultProps = {}

export default List
