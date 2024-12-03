import styled from "@emotion/styled";

export const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 20px;
  background-color: antiquewhite;
  border: 2px solid rgb(13, 57, 232);
  border-radius: 5px;
`;

export const ButtonsResultsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
`;

export const Result = styled.div`
  min-width: 70px;
  text-align: center;
  padding: 5px;
  font-size: 30px;
  color: rgb(6, 6, 97);
`;

export const ResetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  padding: 10px;
`;

const StyledButton = styled.div`
  width: 150px;
`;

export const ButtonLike = styled(StyledButton)``;

export const ButtonDislike = styled(StyledButton)``;
