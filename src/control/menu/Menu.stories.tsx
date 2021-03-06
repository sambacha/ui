import React from "react";
import { storiesOf } from "@storybook/react";
import { Menu } from "./Menu";
import styled from "../../styled-components";
import { MenuItem } from "./MenuItem";
import { CheckboxOnIcon } from "../../icon/CheckboxOnIcon";
import { CheckboxOffIcon } from "../../icon/CheckboxOffIcon";

const RootContainer = styled.div`
    position: relative;
    height: 300px;
    width: 500px;
    margin: 16px;
`;

const MenuContainer = styled.div`
    position: absolute;
`;

storiesOf("control/" + Menu.name, module)
    .addParameters({
        info: {
            propTablesExclude: [MenuContainer]
        }
    })
    .addDecorator(storyFn => <RootContainer><MenuContainer>{storyFn()}</MenuContainer></RootContainer>)
    .add("default", () => (
        <Menu>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem disabled>Item 3</MenuItem>
        </Menu>
    ))
    .add("with icons", () => (
        <Menu>
            <MenuItem Icon={CheckboxOnIcon}>Item 1</MenuItem>
            <MenuItem Icon={CheckboxOffIcon}>Item 2</MenuItem>
            <MenuItem Icon={CheckboxOffIcon} disabled>Item 3</MenuItem>
        </Menu>
    ))
    .add("with scroll", () => (
        <Menu>
            <MenuItem Icon={CheckboxOnIcon}>Item 1</MenuItem>
            <MenuItem Icon={CheckboxOffIcon}>Item 2</MenuItem>
            <MenuItem Icon={CheckboxOffIcon} disabled>Item 3</MenuItem>
            {new Array(50).fill(0).map(() => <MenuItem Icon={CheckboxOffIcon}>Item</MenuItem>)}
        </Menu>
    ))
    .add("max width", () => (
        <Menu maxWidth={200}>
            <MenuItem Icon={CheckboxOnIcon}>Item 1</MenuItem>
            <MenuItem Icon={CheckboxOffIcon}>Item with a very long text will have to wrap</MenuItem>
        </Menu>
    ));
