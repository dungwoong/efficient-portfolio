import styled from "styled-components";
import { CERISE_RED, DEEP_SKY_BLUE, OCEAN_GREEN, PASTEL_YELLOW } from "../../constants/colors";

export const AssetFormDiv = styled.div`
    background-color: ${PASTEL_YELLOW};
    font-size: 18px;
    color: black;
`;

export const AssetFormInputBox = styled.input`
    border: none;
    color: ${DEEP_SKY_BLUE};
    border-radius: 15px;
`;

export const AssetFormSubmitButton = styled.button`
    border: none;
    color: ${CERISE_RED};
    border-radius: 5px;
`;

export const AssetFormSuccessDialog = styled.div`
    color: ${OCEAN_GREEN};
    border: none;
    border-radius: 15px;
`;

export const AssetFormFailDialog = styled.div`
    color: ${CERISE_RED};
    border: none;
    border-radius: 15px;
`;