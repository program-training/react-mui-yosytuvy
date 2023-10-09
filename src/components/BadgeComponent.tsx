import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: 25,
        top: 25,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}));

const BadgeComponent = () => {
    return (
        <>
            <h1>E2:</h1>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </>
    );
};

export default BadgeComponent;
