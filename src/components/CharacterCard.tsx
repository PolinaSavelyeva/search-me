import { Grid2, Stack, Typography } from "@mui/material";
import { ShadowBox } from "./ShadowBox";
import { format } from "date-fns";

const Status = (props: { status: "Alive" | "Dead" | "Unknown" }) => {
    let color;
    switch (props.status) {
        case "Dead": {
            color = "#820A0A"
            break;
        }
        case "Alive": {
            color = "#267504"
            break;
        }
        default: {
            color = "#767676"
        }
    }
    return (<Typography variant="body2" fontWeight="700" color={color}>{props.status[0].toUpperCase() + props.status.slice(1)}</Typography>);
}

export default function CharacterCard(props: { minHeight: string, name: string, date: string, status: "Alive" | "Dead" | "Unknown", href: string }) {
    return (
        <ShadowBox padding="20px 30px 20px 30px" onClick={() => window.location.href = props.href}>
            <Stack direction="column" justifyContent="space-between" height="100%" minHeight={props.minHeight} spacing={"42px"}>
                <Typography variant="h1">{props.name}</Typography>
                <Grid2 container direction="row" justifyContent="space-between" columnSpacing="32px">
                    <Stack direction="row">
                        <Typography variant="body2">Status:&nbsp;</Typography>
                        <Status status={props.status} />
                    </Stack>
                    <Stack direction="row">
                        <Typography variant="body2">Created:&nbsp;</Typography>
                        <Typography variant="body2">{format(new Date(props.date), "dd.MM.yyyy")}</Typography>
                    </Stack>
                </Grid2>
            </Stack>
        </ShadowBox>
    );
}