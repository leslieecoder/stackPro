import LinearProgress from '@mui/material/LinearProgress';
// Function to normalise the values (MIN / MAX could be integrated)
const normalise = (value) => ((value - 10) * 100) / (100 - 10);

// Example component that utilizes the `normalise` function at the point of render.


export default function ProBar(props) {
  return (
  
     
      <LinearProgress variant="determinate" value={normalise(props.value)} />
   
  );
}
