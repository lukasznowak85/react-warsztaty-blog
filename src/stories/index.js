import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Post from '../components/Post';


storiesOf('Post', module)
  .add('to Storybook', () => {
    return(
      <Router>
        <Post post={{id:'1', title:'lorem title', body:'post body'}} />
      </Router>
    )
  })


// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
  // .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  // .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
