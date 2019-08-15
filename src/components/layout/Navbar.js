import React, { useContext } from "react";
import StateContext from '../../context/stateContext'
const Navbar = () => {
  const stateContext = useContext(StateContext)
  const { setState } = stateContext
  return (
      <div className="navbar icons" >
            <button onClick={() => setState(0)}>
              <i class="fas fa-home fa-3x"></i>
            </button>
            <button onClick={() => setState(1)}>
            <i class="fas fa-chess fa-3x"></i>
            </button> 
            <button onClick={() => setState(2)}>
            <i class="fas fa-gamepad fa-3x"></i>
            </button>
      </div>
  );
};

export default Navbar;
