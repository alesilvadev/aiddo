import React, { useEffect } from "react";
import { Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, FormGroup, Textarea, Input, Progress, Label, Badge } from "reactstrap";
import { FaFontAwesomeFlag, FaComments, FaArrowLeft } from "react-icons/fa";
import "./goal.scss";

const Goal = (props) => {
  return (
    <div className="goal-info">
      <div className="goal-title">
        <h4> <FaArrowLeft /> Salir a correr diariamente</h4>
      </div>
      <h6>ACTIVA</h6>

      <hr />
      <div class="timeline">
        <div class="entry">
          <div className="box-element-home">
            <h4><FaFontAwesomeFlag/> Formar grupo de Running</h4>
            <p>El objetivo de este punto es reunion un grupo de 2 a 4 personas para motivarse a salir a correr a diario</p>
            <h6><FaComments /> +26 comentarios</h6>
          </div>
        </div>
         <div class="entry">
          <div className="box-element-home">
            <h4><FaFontAwesomeFlag/> Formar grupo de Running</h4>
            <p>El objetivo de este punto es reunion un grupo de 2 a 4 personas para motivarse a salir a correr a diario</p>
            <h6><FaComments /> +26 comentarios</h6>
          </div>
        </div>
         <div class="entry">
          <div className="box-element-home">
            <h4><FaFontAwesomeFlag/> Formar grupo de Running</h4>
            <p>El objetivo de este punto es reunion un grupo de 2 a 4 personas para motivarse a salir a correr a diario</p>
            <h6><FaComments /> +26 comentarios</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
