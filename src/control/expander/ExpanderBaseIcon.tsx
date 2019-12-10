import * as React from "react";
import styled, { css } from "../../styled-components";
import { ArrowDownIcon } from "../../icon/ArrowDownIcon";
import { ITheme } from "../../theme/ITheme";

const ExpanderIconRoot = styled<IExpanderIconProps, "div">("div")`
    display: inline-block;
    color: ${props => props.expanded ? props.theme.colors.expanderOpenIcon : props.theme.colors.expanderIcon};
    padding: 1px 1px 0 0;
    ${props => props.getColor ? css`
    background-color: ${(props.getColor(props.theme))}
    border: 1px solid ${(props.getColor(props.theme))}
    border-radius: 0 2px 2px 0;
    ` : ``}
`;

const Icon = styled<IExpanderIconProps, "div">("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform .2s ease-in-out;
    ${props => props.expanded ? css`
    transform: rotate(-180deg);
    ` : ``}
`;

interface IExpanderIconProps {
    expanded: boolean;
    getColor?(theme: ITheme): string | undefined;
}

export class ExpanderBaseIcon extends React.PureComponent<IExpanderIconProps> {
    render() {
        return (
            <ExpanderIconRoot {...this.props}>
                <Icon {...this.props}>
                    <ArrowDownIcon />
                </Icon>
            </ExpanderIconRoot>
        );
    }
}