import styled from "styled-components";
import { CERISE_RED, OCEAN_GREEN, SIDEBAR_DARK_GRAY, SIDEBAR_INPUT_DARK_GRAY, SIDEBAR_TEXT_COLOR, VISUALIZATION_GRAY, VISUALIZATION_LIGHTER_GRAY } from "../../constants/colors";

export const AssetFormDiv = styled.div`
    background-color: ${SIDEBAR_DARK_GRAY};
    font-size: 18px;
    color: black;
    display: flex;
    flex-direction: column;
    padding: 20px 5px 10px 5px;
`;

export const AssetFormInputBox = styled.input`
    border: none;
    background-color: ${SIDEBAR_INPUT_DARK_GRAY};
    color: ${SIDEBAR_TEXT_COLOR};
    border-radius: 4px;
    padding: 10px 5px;

    &:focus {
        outline: none;
    }
`;

export const AssetFormSubmitButton = styled.button`
    border: none;
    background-color: inherit;
    color: ${SIDEBAR_TEXT_COLOR};
    border: 1px solid ${SIDEBAR_TEXT_COLOR};
    border-radius: 5px;
    margin: 5px 0 0 0;
    padding: 5px 10px;

    &:hover {
        background-color: ${VISUALIZATION_GRAY};
    }

    &:active {
        background-color: ${VISUALIZATION_LIGHTER_GRAY};
    }
`;

export const AssetFormSuccessDialog = styled.div`
    background-color: ${OCEAN_GREEN};
    color: white;
    border: none;
    border-radius: 0;
    padding: 5px;
`;

export const AssetFormFailDialog = styled.div`
    background-color: ${CERISE_RED};
    color: white;
    border: none;
    border-radius: 0;
    padding: 5px;
`;