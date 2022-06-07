import React from "react";
import Formation442 from "../formations/formation442.tsx";
import Formation433 from "../formations/formation433.tsx";
import Formation352 from "../formations/formation352.tsx";
import Formation4231 from "../formations/formation4231.tsx";
import Formation451 from "../formations/formation451.tsx";

function Formation(props) {
  const formation = props.formation;
  const players = props.players;
  return (
    <div>
      {
        {
          "4-4-2": <Formation442 players={players} />,
          "4-3-3": <Formation433 players={players} />,
          "3-5-2": <Formation352 players={players} />,
          "4-2-3-1": <Formation4231 players={players} />,
          "4-5-1": <Formation451 players={players} />
        }[formation]
      }
    </div>
  );
}

export default Formation;
