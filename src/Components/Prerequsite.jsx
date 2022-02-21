import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Prerequsite = () => {
  const attendRef = useRef();
  const laptopRef = useRef();
  const navigate = useNavigate();

  

  const goToInfo = (e) => {
    e.preventDefault();

    var attend = attendRef.current.checked;
    var laptop = laptopRef.current.checked;
    console.log(attend, laptop);
    if (attend && laptop) {
      navigate("/info");
    } else {
      alert("You have to fullfill both the conditions...!!!");
    }
  };

  return (
    <div>
      <form onSubmit={goToInfo}>
        <div>
          <input
            ref={attendRef}
            type="checkbox"
            name="attendAll"
            id="attendAll"
          />
          <label htmlFor="attendAll">Can you attend 90% of the classes ?</label>
        </div>
        <div>
          <input
            ref={laptopRef}
            type="checkbox"
            name="haveLaptop"
            id="haveLaptop"
          />
          <label htmlFor="haveLaptop">Do you have a laptop ?</label>
        </div>
        <input
          type="submit"
          value="CONTINUE"
          disabled={false}
        />
      </form>
    </div>
  );
};
