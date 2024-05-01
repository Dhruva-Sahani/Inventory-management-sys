"use client";

import CircularProgress from "@mui/material/CircularProgress";

export default function LoadingProgess({ color }) {
  return (
    <CircularProgress
      sx={{
        color: color,
      }}
    />
  );
}