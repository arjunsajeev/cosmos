import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import { List, Switch, StackLayout, Button } from '@auth0/cosmos'
import ListItem from '../resource-list/item/item'

class ExampleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { listDrawers: { uno: false, dos: false } }
  }

  toggleList(listId) {
    this.setState({
      listDrawers: { ...this.state.listDrawers, [listId]: !this.state.listDrawers[listId] }
    })
  }

  render() {
    return (
      <List label="Short List" sortable>
        <List.Item>
          <List.Header>Header</List.Header>
          <List.Body>Body</List.Body>
          <List.Footer>Action</List.Footer>
          <List.Drawer
            open={this.state.listDrawers.uno}
            onToggle={() => this.toggleList('uno')}
            description="desciption of the drawer"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            temporellentesque. Risus ultricies tristique nulla aliquet enim. Proin libero nunc
            consequat interdum varius sit amet. Scelerisque viverra mauris in aliquam sem fringilla
            ut morbi tincidunt. Tincidunt arcu nonLorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod temporellentesque. Risus ultricies tristique nulla aliquet enim.
            Proin libero nunc consequat interdum varius sit amet. Scelerisque viverra mauris in
            aliquam sem fringilla ut morbi tincidunt. Tincidunt arcu nonLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod temporellentesque. Risus ultricies tristique
            nulla aliquet enim. Proin libero nunc consequat interdum varius sit amet. Scelerisque
            viverra mauris in aliquam sem fringilla ut morbi tincidunt. Tincidunt arcu non
          </List.Drawer>
        </List.Item>
        <List.Item>
          <List.Header>Header</List.Header>
          <List.Body>Body</List.Body>
          <List.Footer>Action</List.Footer>
          <List.Drawer
            open={this.state.listDrawers.dos}
            onToggle={() => this.toggleList('dos')}
            description="desciption of the drawer"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            temporellentesque. Risus ultricies tristique nulla aliquet enim. Proin libero nunc
            consequat interdum varius sit amet. Scelerisque viverra mauris in aliquam sem fringilla
            ut morbi tincidunt. Tincidunt arcu nonLorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod temporellentesque. Risus ultricies tristique nulla aliquet enim.
            Proin libero nunc consequat interdum varius sit amet. Scelerisque viverra mauris in
            aliquam sem fringilla ut morbi tincidunt. Tincidunt arcu nonLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod temporellentesque. Risus ultricies tristique
            nulla aliquet enim. Proin libero nunc consequat interdum varius sit amet. Scelerisque
            viverra mauris in aliquam sem fringilla ut morbi tincidunt. Tincidunt arcu non
          </List.Drawer>
        </List.Item>
      </List>
    )
  }
}

storiesOf('List', module).add('default', () => (
  <Example title="default">
    <ExampleList />
  </Example>
))

storiesOf('List', module).add('with stack', () => (
  <Example title="with stack">
    <List label="Social" sortable>
      <StackLayout>
        <div>github</div>
        <div>GitHub</div>
        <Switch on />
      </StackLayout>

      <StackLayout>
        <div>github</div>
        <div>GitHub</div>
        <Switch on />
      </StackLayout>
    </List>
  </Example>
))

storiesOf('List', module).add('stressed new', () => (
  <Example title="mfkdfd">
    <List>
      <React.Fragment>item</React.Fragment>
      <div>item</div>
      <div>item</div>
    </List>
  </Example>
))
storiesOf('List', module).add('stressed', () => (
  <Example title="stressed - 739 characters per row">
    <List label="Short List">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sollicitudin
        pellentesque. Ut magna ex, ultricies in risus eget, laoreet lacinia nunc. Suspendisse mi
        leo, facilisis auctor massa non, congue interdum nunc. Donec eget sem id odio accumsan
        posuere ut ac neque. Etiam nec varius elit. Vivamus pharetra vulputate neque ut dignissim.
        Etiam ut malesuada nisl. Proin eget nulla venenatis ligula fringilla sodales sed in enim.
        Etiam luctus sollicitudin mollis. Duis a varius felis, quis egestas quam. Suspendisse
        sollicitudin varius condimentum. Nam accumsan placerat diam nec pretium. Vestibulum sed
        accumsan tellus. Nullam dictum lorem vel orci porta scelerisque. Nulla malesuada nibh ante,
        id dapibus felis fermentum eget.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sollicitudin
        pellentesque. Ut magna ex, ultricies in risus eget, laoreet lacinia nunc. Suspendisse mi
        leo, facilisis auctor massa non, congue interdum nunc. Donec eget sem id odio accumsan
        posuere ut ac neque. Etiam nec varius elit. Vivamus pharetra vulputate neque ut dignissim.
        Etiam ut malesuada nisl. Proin eget nulla venenatis ligula fringilla sodales sed in enim.
        Etiam luctus sollicitudin mollis. Duis a varius felis, quis egestas quam. Suspendisse
        sollicitudin varius condimentum. Nam accumsan placerat diam nec pretium. Vestibulum sed
        accumsan tellus. Nullam dictum lorem vel orci porta scelerisque. Nulla malesuada nibh ante,
        id dapibus felis fermentum eget.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sollicitudin
        pellentesque. Ut magna ex, ultricies in risus eget, laoreet lacinia nunc. Suspendisse mi
        leo, facilisis auctor massa non, congue interdum nunc. Donec eget sem id odio accumsan
        posuere ut ac neque. Etiam nec varius elit. Vivamus pharetra vulputate neque ut dignissim.
        Etiam ut malesuada nisl. Proin eget nulla venenatis ligula fringilla sodales sed in enim.
        Etiam luctus sollicitudin mollis. Duis a varius felis, quis egestas quam. Suspendisse
        sollicitudin varius condimentum. Nam accumsan placerat diam nec pretium. Vestibulum sed
        accumsan tellus. Nullam dictum lorem vel orci porta scelerisque. Nulla malesuada nibh ante,
        id dapibus felis fermentum eget.
      </div>
    </List>
  </Example>
))
