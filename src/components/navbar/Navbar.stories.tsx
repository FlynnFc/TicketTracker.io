import React from "react";
import { Story, Meta } from "@storybook/react";
import Navbar from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    type: {},
  },
} as Meta;

const Template: Story = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
