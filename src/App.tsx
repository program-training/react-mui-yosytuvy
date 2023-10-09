import "./App.css";
import BadgeComponent from "./components/BadgeComponent";
import ButtonAndText from "./components/ButtonAndText";
import InputOptions from "./components/InputOptions";
import Modals from "./components/Modals";
import MuiTabs from "./components/MuiTabs";
import Grid from "@mui/material/Unstable_Grid2";

function App() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid xs={3}>
                    <ButtonAndText />
                    <InputOptions />
                </Grid>
                <Grid xs={3}>
                    <BadgeComponent />
                </Grid>
                <Grid xs={3}>
                    <Modals />
                </Grid>
                <Grid xs={3}>
                    <MuiTabs />
                </Grid>
            </Grid>
        </>
    );
}

export default App;
