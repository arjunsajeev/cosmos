import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc'
import { spacing, colors } from '@auth0/cosmos-tokens'
import { actionShapeWithRequiredIcon } from '@auth0/cosmos/_helpers/action-shape'
import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'
import ResourceListItem from './item'
import Tooltip from '../../atoms/tooltip'
import Icon from '../../atoms/icon'
import Button from '../../atoms/button'

const SortableListHandle = SortableHandle(({ onFocusStatusChange = () => {} } = {}) => (
  <SortableListHandle.Element>
    <Tooltip content="Re-order">
      <SortableListHandle.Button
        onFocusStatusChange={onFocusStatusChange}
        appearance="link"
        icon="resize-vertical"
      />
    </Tooltip>
  </SortableListHandle.Element>
))

SortableListHandle.Element = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: ${spacing.xsmall};
`

SortableListHandle.Button = class extends React.Component {
  notifyParent({ onFocus }) {
    if (this.props.onFocusStatusChange) this.props.onFocusStatusChange({ onFocus })
  }

  componentDidMount() {
    // Register events
    const button = ReactDOM.findDOMNode(this.button)
    button.addEventListener('focus', this.notifyParent.bind(this, { onFocus: true }))
    button.addEventListener('blur', this.notifyParent.bind(this, { onFocus: false }))
  }

  componentWillUnmount() {
    // Unregister events
    const button = ReactDOM.findDOMNode(this.button)
    button.removeEventListener('focus', this.notifyParent)
    button.removeEventListener('blur', this.notifyParent)
  }

  render() {
    const Element = styled(Button)`
      padding-left: ${spacing.xxsmall};
      padding-right: ${spacing.xxsmall};
      min-width: 0;

      &:focus {
        background-color: ${colors.base.grayLightest};
      }
    `
    return (
      <Element
        ref={node => {
          this.button = node
        }}
        {...this.props}
      />
    )
  }
}

const ResourceList = props => {
  const defaultItemRenderer = (item, index) => (
    <ResourceListItem
      index={index}
      reorderHandle={props.sortable ? SortableListHandle : null}
      {...item}
    />
  )

  const itemRendererBuilder = ({ item, index, renderItem, onItemClick, actions }) => {
    const itemRenderer = renderItem || defaultItemRenderer
    return React.cloneElement(itemRenderer(item, index), {
      actions: item.actions || actions,
      onClick: item.onClick || onItemClick,
      item
    })
  }

  const defaultChildrenRenderer = ({ items, actions, onItemClick, renderItem }) =>
    items.map((item, index) =>
      itemRendererBuilder({ item, index, renderItem, onItemClick, actions })
    )

  const SortableResourceListItem = SortableElement(
    ({ item, index, renderItem, actions, onClick: onItemClick }) =>
      itemRendererBuilder({ item, index, renderItem, actions, onItemClick })
  )

  const SortableResourceList = SortableContainer(
    ({ items: sortableItems, actions, onItemClick, renderItem }) => (
      <div>
        {sortableItems.map((item, index) => (
          <SortableResourceListItem
            actions={item.actions || actions}
            onClick={item.onClick || onItemClick}
            item={item}
            key={index}
            index={index}
            renderItem={renderItem}
          />
        ))}
      </div>
    )
  )

  const sortableChildrenRenderer = props => {
    return <SortableResourceList {...props} useDragHandle={true} helperClass="cosmos-dragging" />
  }

  const resolveChildrenRenderer = props =>
    props.sortable ? sortableChildrenRenderer(props) : defaultChildrenRenderer(props)

  return (
    <ResourceList.Element {...Automation('resource-list')}>
      {resolveChildrenRenderer(props)}
    </ResourceList.Element>
  )
}

ResourceList.Element = styled.ul`
  ${containerStyles};

  margin: ${spacing.large} 0;
  padding: 0;
`

ResourceList.Item = ResourceListItem

ResourceList.propTypes = {
  /** The items that will be rendered in the list. */
  items: PropTypes.array.isRequired,
  /** The actions to render to the right side of the list items. */
  actions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(actionShapeWithRequiredIcon)
  ]),
  /** A function that will be called when an item is clicked. */
  onItemClick: PropTypes.func,
  /** A function that accepts an item from the items array, and returns a ResourceList.Item. */
  renderItem: PropTypes.func
}

export default ResourceList
export { arrayMove }
