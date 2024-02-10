import styled from "styled-components";
import { SIDEBAR_DARK_GRAY, SIDEBAR_INPUT_DARK_GRAY, SIDEBAR_TEXT_COLOR } from "../../constants/colors";

export const AddConstraintSelect = styled.select`
    background-color: ${SIDEBAR_INPUT_DARK_GRAY};
    color: ${SIDEBAR_TEXT_COLOR};
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    outline: none;
`;

export const AddConstraintFormDiv = styled.div`
    background-color: ${SIDEBAR_DARK_GRAY};
    font-size: 18px;
    color: black;
    display: flex;
    flex-direction: column;
    padding: 20px 5px 10px 5px;

    &.horizontal {
        flex-direction: row;
    }
`;

export const AddConstraintInputBox = styled.input`
    border: none;
    background-color: ${SIDEBAR_INPUT_DARK_GRAY};
    color: ${SIDEBAR_TEXT_COLOR};
    border-radius: 4px;
    padding: 10px 5px;
    font-family: inherit;
    margin: 5px;

    &:focus {
        outline: none;
    }
`;