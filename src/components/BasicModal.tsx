import styled from "@emotion/styled";
import { Modal } from "@mui/material";

const StyledModal = styled(Modal)`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    & .MuiPaper-root {
        width: 50%;
    }
`;

export default StyledModal


