import { ComponentStory, ComponentMeta } from "@storybook/react";
import {PhoneAuthFields} from "./PhoneAuthFields";

const Meta: ComponentMeta<typeof PhoneAuthFields> = {
    title: "MyPage/PhoneAuthField",
    component: PhoneAuthFields,
};
export default Meta;

export const PhoneAuth: ComponentStory<typeof PhoneAuthFields> = () => (
    <PhoneAuthFields></PhoneAuthFields>

);
