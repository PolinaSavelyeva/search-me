import { Grid2, Stack, Typography } from "@mui/material";
import { ShadowBox } from "./ShadowBox";


const Status = (props: { status: "alive" | "dead" | "unknown" }) => {
    let color;
    let text;
    switch (props.status) {
        case "dead": {
            color = "#820A0A"
            text = "Dead"
            break;
        }
        case "alive": {
            color = "#267504"
            text = "Alive"
            break;
        }
        default: {
            color = "#767676"
            text = "Unknown"
            break;
        }
    }
    return (<Typography variant="body2" fontWeight="700" color={color}>{text}</Typography>);
}

export default function CharacterCard(props: { minHeight: string, name: string, date: string, status: "alive" | "dead" | "unknown", href: string }) {
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
                        <Typography variant="body2">{props.date}</Typography>
                    </Stack>
                </Grid2>
            </Stack>
        </ShadowBox>
    );
}