// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rating, RatingPropsType } from './Rating';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Button',
    component: Rating,
} as ComponentMeta<typeof Rating>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Primary = Template.bind({});
export const RatingPrim = Template.bind({});
RatingPrim.args = {
    value: 5,

}

Primary.args = {
    primary: true,
    label: 'Rating',
    value:5,
    changeRating:(value:0|1|2|3|4|5)=>void
};