import { useEffect, useState } from 'react';
import './App.css';
import { Button, TextField } from '@mui/material'


function App() {

  const [json, setJson] = useState("")

  const [dataObj, setDataObj] = useState()

  const [jsonCheck, setJsonCheck] = useState(true)

  useEffect(() => {
    try {
      const dataJSON = JSON.parse(json)
      console.log(dataJSON)
      // dataJSON = JSON.stringify(dataJSON)
      // console.log(dataJSON)
      //console.log("success")
      setJsonCheck(true);
    } catch (error) {
      // console.log({json});
      if (json !== ""){
        setJsonCheck(false);
      }
    }

  }, [json])
  

  return (
    <div className="App">
      <header className="App-header">
        <p>Copy and paste your streaming history json below!</p>
        <div className="App" style={{width : "800px"}}>
          <TextField 
            sx={{
              // Root class for the input field
              "& .MuiFilledInput-root": {
                color: "#000",
                fontFamily: "Arial",
                fontWeight: "bold",
                backgroundColor: "#f4f4f4",
                borderTopLeftRadius: "7px",
                borderTopRightRadius: "7px",
              }
            }}
            label="Paste your JSON here"
            multiline
            color="primary" 
            maxRows={10}
            onChange={(e) => setJson(e.target.value)}
            fullWidth
            maxWidth = {600}
          />
        </div>
        {jsonCheck ? <></> : <p>Current Input is not in a string in Json Format, please check it or try and copy and paste again.</p>}
        <Button>Save Data</Button>
      </header>
    </div>
  );
}

export default App; 
