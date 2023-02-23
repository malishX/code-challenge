import type { FC } from "react";
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import myData from '../../stations.json';
interface ChargingStation {
  id: number;
  name: string;
  address: string;
  manufacturer: string;
  connectors: Connector[];
}

interface Connector {
  id: number;
  type: string;
  availability: string;
}
const CharagingSatition: FC = () => {

    const [chargingStations, setChargingStations] = useState<ChargingStation[]>([]);

  useEffect(() => {
    const records = myData.map(record=>{
      const new_record = {
        id: record.id,
        name: record.name,
        address: record.address,
        manufacturer: record.manufacturer,
        connectors: record.connectors.map((connector)=>{
          return {id: 1,
            type: connector.type,
            availability: connector.availability?"Available":"Not available"}
        })
      }
      return new_record
    })
    setChargingStations(records)
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "70%",
        flexWrap: {
          md: "nowrap",
          xs: "wrap",
        },
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <BasicTable chargingStations={chargingStations}/>
    </Box>
    
  );
};

export default CharagingSatition;

export const BasicTable: FC<{ chargingStations: ChargingStation[] }> = (
  chargingStations) => {
    const [connectors, setConnectors] = useState<Connector[]>([]);
    useEffect(()=>{
      if(chargingStations&&chargingStations.chargingStations.length) setConnectors(chargingStations.chargingStations[0].connectors)
    },[chargingStations])
  return (
      <Box
      sx={{
        height: "100vh",
        width: "70%",
        flexWrap: {
          md: "nowrap",
          xs: "wrap",
        },
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Box flex={2}>
      <Typography><b>Stations</b></Typography>
      <br/>
      <br/>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Manufacturer</TableCell>
            </TableRow>
          </TableHead> 
          <TableBody>
            {chargingStations.chargingStations.map((row) => (
              <TableRow
              onClick={()=>{
                  setConnectors(row.connectors)
              }}
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.manufacturer}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
      <Connectors connectors={connectors}/>
    </Box>
      );
};

const Connectors: FC<{ connectors: Connector[] }> = (connectors) => {
  return (
    <Box flex={1}>
      <Typography><b>Connectors</b></Typography>
      <br/>
      <br/>
      <TableContainer component={Paper}>
        <Table>
        <TableBody>
          
      {connectors.connectors.map((row) => (
              <TableRow>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.availability}</TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};