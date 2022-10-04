// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Miniticket from './Miniticket';

export default {
  title: 'Miniticket',
  component: Miniticket,
} as ComponentMeta<typeof Miniticket>;

export const Primary: ComponentStory<typeof Miniticket> = () => <Miniticket title='test' priority='low'></Miniticket>;