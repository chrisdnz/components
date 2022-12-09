 import { Input } from '../components/Input';

export default {
  title: 'Design System/Components/Input',
  component: Input,
  argTypes: {
    type: {
      options: ['text', 'email', 'password'],
      control: { type: 'select' },
    },
  }
};

const Template = (args) => <Input {...args} />

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Type something...',
  type: 'text',
};
