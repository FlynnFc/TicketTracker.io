import React from "react";
import { Story, Meta } from "@storybook/react";
import TemplateFile from "./TemplateFile";

export default {
  title: "Components/Template",
  component: TemplateFile,
  argTypes: {
    type: {},
  },
} as Meta;

const Template: Story = (args) => <Template {...args} />;

export const Default = Template.bind({});
Default.args = {};
