import styled from "../styled-components";
import { Label } from "./Label";
import { $StatusError } from "./FieldError";
export const FormItem = styled.div.withConfig({ displayName: "FormItem", componentId: "sc-1e1w90w" }) `
    margin: 16px 0;

    ${Label} {
        margin-bottom: 8px;
        display: block;
    }

    ${$StatusError} {
        margin-top: 6px;
    }
`;
//# sourceMappingURL=FormItem.js.map