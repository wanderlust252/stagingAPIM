import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
export default function AgentCash() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
        flexDirection: 'column',
      }}>
      <SettingsIcon
        style={{
          width: 200,
          height: 200,
        }}
      />
      <h3>Under development</h3>
    </div>
  );
}
