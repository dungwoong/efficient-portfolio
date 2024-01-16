import styled from "styled-components";
import { CERISE_RED, OCEAN_GREEN, SIDEBAR_DARK_GRAY, SIDEBAR_INPUT_DARK_GRAY, SIDEBAR_TEXT_COLOR, VISUALIZATION_GRAY, VISUALIZATION_LIGHTER_GRAY } from "../../constants/colors";

export const AssetFormDiv = styled.div`
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

export const AssetPickerRadioButton = styled.button`
    background-color: ${SIDEBAR_INPUT_DARK_GRAY};
    color: ${SIDEBAR_TEXT_COLOR};
    border: none;
    flex: 1;
    padding: 10px 0;
    font-family: inherit;

    &.selected {
        background-color: ${VISUALIZATION_LIGHTER_GRAY};
    }

    &.right {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    &.left {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
`;

export const AssetFormInputBox = styled.input`
    border: none;
    background-color: ${SIDEBAR_INPUT_DARK_GRAY};
    color: ${SIDEBAR_TEXT_COLOR};
    border-radius: 4px;
    padding: 10px 5px;
    font-family: inherit;

    &:focus {
        outline: none;
    }
`;

export const AssetFormSubmitButton = styled.button`
    border: none;
    background-color: ${SIDEBAR_DARK_GRAY};
    color: ${SIDEBAR_TEXT_COLOR};
    border: 1px solid ${SIDEBAR_TEXT_COLOR};
    border-radius: 5px;
    margin: 15px 0 0 0;
    padding: 10px 10px;
    font-family: inherit;

    &:hover {
        background-color: ${VISUALIZATION_GRAY};
    }

    &:active {
        background-color: ${VISUALIZATION_LIGHTER_GRAY};
    }
`;

export const AssetFormSuccessDialog = styled.div`
    background-color: ${OCEAN_GREEN};
    color: ${SIDEBAR_TEXT_COLOR};
    color: white;
    border: none;
    border-radius: 0;
    padding: 5px;
`;

export const AssetFormFailDialog = styled.div`
    background-color: ${CERISE_RED};
    color: ${SIDEBAR_TEXT_COLOR};
    color: white;
    border: none;
    border-radius: 0;
    padding: 5px;
`;