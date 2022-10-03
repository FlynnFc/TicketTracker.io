import React from "react";
import { Story, Meta } from "@storybook/react";
import Hero from "./Hero";

export default {
  title: "Components/Hero",
  component: Hero,
  argTypes: {
    type: {},
  },
} as Meta;

const Template: Story = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {};
