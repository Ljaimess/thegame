import React from 'react';
import { connect } from "react-redux"; 
import { SPRITE_SIZE } from "../../config/constants";
import "./style.css";

function getTileSprite(type) {
  // eslint-disable-next-line default-case
  switch (type) {
    case 0:
      return "grass"
    case 5:
      return "tree"
    case 6:
      return "rock"
  }

}

const MapTile = (props) => {
  return <div
    className={`tile ${getTileSprite(props.tile)}`}
    style={{
      height: SPRITE_SIZE,
      width: SPRITE_SIZE,
    }}
  />
}

const MapRow = (props) => {
  return <div className="row"
  >
    {
      props.tiles.map(tile =>
        <MapTile tile={tile}
        />)
    }
  </div>
}

const Map = props => {
  return (
    <div style={{
      position: "relative",
      top: "0px",
      left: "0px",
      width: "800px",
      height: "400px",
      // backgroundColor: "green",
      border: "4px solid white",

    }} >
      {
        props.tiles.map(row => <MapRow tiles={row} />)
        // (row => row.map(tile => <MapTile value={tile} />))
        // props.tiles.map(tile => <MapTile value={tile} />)

      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles,
  }
}

export default connect(mapStateToProps)(Map);