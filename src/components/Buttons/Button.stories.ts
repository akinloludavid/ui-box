import type { StoryObj, Meta } from '@storybook/react'

import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
        text: {
            control: 'text',
            description: 'Button text',
        },
        size: {
            control: 'size',
            description: 'Controls button size',
        },
        variant: {
            control: 'text',
            description:
                'Defines the type of button particularly background color',
        },
    },
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        variant: 'primary',
        text: 'Button',
    },
}

export const Secondary: Story = {
    args: {
        text: 'Button',
        variant: 'secondary',
    },
}

export const Large: Story = {
    args: {
        size: 'large',
        text: 'Button',
    },
}

export const Small: Story = {
    args: {
        size: 'small',
        text: 'Button',
    },
}
