import styled from "styled-components";
import {
	SIDEBAR_DARK_GRAY,
	SIDEBAR_TEXT_COLOR,
	VISUALIZATION_GRAY,
	VISUALIZATION_LIGHTER_GRAY
} from "../../constants/colors";

export const AssetListDiv = styled.div`
  background-color: ${SIDEBAR_DARK_GRAY};
  font-size: 18px;
  color: ${SIDEBAR_TEXT_COLOR};
  display: flex;
  flex-direction: column;
  padding: 20px 5px 10px 5px;
  margin: 10px;
`;
export const CategoryListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0;
`;
export const AssetButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CategoriesButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AssetButton = styled.div`
  background-color: ${SIDEBAR_DARK_GRAY};
  border: 1px solid ${SIDEBAR_TEXT_COLOR};
  color: ${SIDEBAR_TEXT_COLOR};
  font-family: inherit;
  padding: 5px 5px;
  margin: 2px 5px;
  border-radius: 5px;

  &:hover {
    background-color: ${VISUALIZATION_GRAY};
  }

  &:active {
    background-color: ${VISUALIZATION_LIGHTER_GRAY};
  }
`;
export const CategoryDiv = styled.div`
  background-color: ${VISUALIZATION_LIGHTER_GRAY};
  border-radius: 10px;
  padding: 5px 10px;
  margin: 5px;
`;
export const AssetListItemDiv = styled.div`
  margin: 0;
  padding: 10px 5px;
  border: 2px solid ${VISUALIZATION_GRAY};
`;
