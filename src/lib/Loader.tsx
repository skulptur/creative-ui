import * as React from 'react'

const accentColor = '#009dff'

const containerStyles: React.CSSProperties = {
  height: '3px',
  position: 'relative',
  background: '#111',
  padding: '3px',
}

const fillStyles: React.CSSProperties = {
  display: 'block',
  height: '100%',
  backgroundColor: accentColor,
}

type LoaderProps = {
  progress: number
}

export const Loader: React.FunctionComponent<LoaderProps> = (props) => {
  return (
    <div style={containerStyles}>
      <div
        style={{
          ...fillStyles,
          width: `${props.progress * 100}%`,
        }}
      />
    </div>
  )
}
