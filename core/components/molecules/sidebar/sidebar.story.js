import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import { Sidebar } from '@auth0/cosmos'

storiesOf('Sidebar', module).add('default', () => (
  <Example title="default">
    <Sidebar>
      <Sidebar.Group title="Something">
        <Sidebar.Link icon="arrow-right" label="Getting started" url="#/welcome" />
        <Sidebar.Link
          icon="dashboard"
          label="dashboard dashboard dashboard dashboard dashboard dashboard dashboard dashboard"
          url="#/"
          new
          selected
        />
        {/* test a long string of text  test a long string of text  test a long string of text  test a long string of text  test a long string of text  test a long string of text  test a long string of text */}
      </Sidebar.Group>
      <Sidebar.Group title="Something">
        <Sidebar.Link icon="clients" label="Applications" url="#/applications" />
        <Sidebar.Link icon="apis" label="APIs" url="#/apis" new />
        <Sidebar.Link icon="sso-integrations" label="SSO Integrations" url="#/sso-integrations" />
        <Sidebar.LinkGroup icon="connections" label="Connections" open="open">
          <Sidebar.Link label="Database" url="#/connections/database" />
          <Sidebar.Link label="Social" url="#/connections/social" />
          <Sidebar.Link label="Enterprise" url="#/connections/enterprise" />
          <Sidebar.Link label="Passwordless" url="#/connections/passwordless" />
        </Sidebar.LinkGroup>
        <Sidebar.Link icon="users" label="Users" url="#/users" />
        <Sidebar.Link icon="rules" label="Rules" url="#/rules" />
        <Sidebar.Link icon="hooks" label="Hooks" url="#/hooks" new />
        <Sidebar.Link icon="multifactor" label="Multifactor Auth" url="#/guardian" />
        <Sidebar.Link icon="hosted-pages" label="Hosted Pages" url="#/login_page" />
        <Sidebar.LinkGroup icon="emails" label="Emails">
          <Sidebar.Link label="Templates" url="#/emails" />
          <Sidebar.Link label="Provider" url="#/emails/provider" />
        </Sidebar.LinkGroup>
        <Sidebar.Link icon="logs" label="Logs" url="#/logs" />
        <Sidebar.Link icon="anomaly-detection" label="Anomaly Detection" url="#/anomaly" />
        <Sidebar.Link icon="extensions" label="Extensions" url="#/extensions" />
      </Sidebar.Group>
    </Sidebar>
  </Example>
))
