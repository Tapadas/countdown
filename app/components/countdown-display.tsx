import { Grid } from "@mui/material";

interface Props {
  value: number;
  label: string;
}
const CountdownDisplay = ({ value, label }: Props) => {
  return (
    <Grid
      item
      xs={2}
      container
      padding={1}
      textAlign={"center"}
      style={{
        background: "rgb(226,90,24,0.8)",
        borderRadius: 10,
      }}
    >
      <Grid item xs={12}>
        {value.toString().padStart(2, "0")}
      </Grid>
      <Grid item xs={12} fontSize="1.7vw">
        {label}
      </Grid>
    </Grid>
  );
};

export default CountdownDisplay;
