import React, { useEffect } from "react";
import { Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, FormGroup, Textarea, Input, Progress, Label, Badge } from "reactstrap";
import { connect } from "react-redux";
import "./home.scss";
import Loading from "../../components/loading/loading";
import { useState } from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import menu from "../../modules/menu/menu";
import firebase from "../../modules/auth/firebase";
import { BsPauseFill } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import { FaRocket, FaBell, FaUserFriends, FaCalendarAlt, FaGlobe } from "react-icons/fa";
import Goal from "../goal/goal";
import { AiOutlineSearch, AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineEdit } from "react-icons/ai";

const Home = (props) => {
  const [selected, setSelected] = useState("overview");
  const [redirect, setRedirect] = useState(false);
  const [myMenu, setMyMenu] = useState(null);
  const [myCategories, setMyCategories] = useState([]);
  const [tab, setTab] = useState("home");
  const [title, setTitle] = useState("Secciones");
  const [item, setItem] = useState({});

  useEffect(() => {
    async function getMenus() {
      if (myMenu == null) {
        //set status to all items
        // let menuFormatted = response["sections"];
        // for (let index = 0; index < menuFormatted.length; index++) {
        //   const categories = menuFormatted[index]["categories"];
        //   menuFormatted[index]["status"] = "enabled";
        //   for (let j = 0; j < categories.length; j++) {
        //     menuFormatted[index]["categories"][j]["status"] = "enabled";
        //     const options = categories[j]["options"];
        //     for (let p = 0; p < options.length; p++) {
        //       const element = options[p];
        //       menuFormatted[index]["categories"][j]["options"][p]["status"] = "enabled";
        //     }
        //   }
        // }
        // console.log(JSON.stringify(menuFormatted))
      }
    }
    getMenus();
  }, []);

  if (redirect) {
    return <Loading />;
  }

  const logout = () => {
    firebase.logOut();
  };

  const setItems = (tabSelected, itemsSelected) => {
    console.log(itemsSelected);
    setMyCategories(itemsSelected);
    setTab(tabSelected);
  };

  const goHome = () => {
    setMyCategories([]);
    setTab("home");
  };

  const selectToUpdate = (item, index, type) => {
    setTab(type);
    setItem(item);
  };

  return (
    <>
      <div className="navbar-app">
        <a href="#" class="dots">
          <div class="dot"></div>
          <div class="dot dot-active"></div>
        </a>
      </div>
      <div className="header-home">
        <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="Avatar" class="avatar" />
        <div className="header-user-info">
          <FaBell className="notification-icon" />
          <Badge color="danger" className="notification-badge">
            4
          </Badge>

          <h2>
            @alesilvabk97 <span className="level">NIVEL 2</span>
          </h2>
          <Progress value={75}>100XP para el nivel 3!</Progress>
        </div>
      </div>
      <Fade>
        <div className="fix-header-box" />
        <>
          {tab == "home" && (
            <Container className="cateogories">
              <div className="box-home">
                <div className="box-element-home">
                  <div className="element-create-goal">
                    <FormGroup>
                      <Label for="exampleSelect">¿Qué te motiva hoy?</Label>

                      <Input type="textarea" name="text" id="exampleText" placeholder="Aquí comienza tu próximo objetivo..." />
                    </FormGroup>
                    <FaCalendarAlt />
                    <FaGlobe />
                    <h4 className="create-goal">COMENZAR AHORA</h4>
                  </div>
                </div>
                <div className="box-element-home" onClick={() => setTab("goal-info")}>
                  <div className="element-info">
                    <h6>
                      <span className="goal-icon">
                        <FaUserFriends />
                      </span>
                      ACTIVA
                    </h6>
                    <h4>Salir a correr diariamente</h4>
                    <span className="item-status">Para el año</span> <span className="item-people">+10 Participaciones</span>
                  </div>
                  <div className="element-action">
                    <BsPauseFill />
                  </div>
                </div>
                <div className="box-element-home" onClick={() => setTab("goal-info")}>
                  <div className="element-info">
                    <h6>ACTIVA</h6>
                    <h4>Salir a correr diariamente</h4>
                    <span className="item-status">Para el año</span> <span className="item-people">+10 Participaciones</span>
                  </div>
                  <div className="element-action">
                    <BsPauseFill />
                  </div>
                </div>

                <div className="box-element-home" onClick={() => setTab("goal-info")}>
                  <div className="element-create-goal">
                    <FormGroup>
                      <Label for="exampleText">Título</Label>
                      <Input type="textarea" name="text" id="exampleText" placeholder="¿Qué te motiva hoy?" />
                    </FormGroup>
                    <div className="create-goal-option">
                      <FormGroup>
                        <Label for="exampleSelect">¿Cuándo?</Label>
                        <Input type="select" name="select" id="exampleSelect">
                          <option>Anual</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>{" "}
                      <FormGroup>
                        <Label for="exampleSelect">¿Tú solo?</Label>
                        <Input type="select" name="select" id="exampleSelect">
                          <option>Con Ayuda</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </div>
                    <h4 className="create-goal">COMENZAR AHORA</h4>
                  </div>
                </div>
              </div>
            </Container>
          )}
        </>
        <>
          {tab == "goal-info" && (
            <Container className="cateogories">
              <div className="box-home">
                <Goal />
              </div>
            </Container>
          )}
        </>
      </Fade>
    </>
  );
};

const mapStateToProps = (state) => ({
  status: state.status,
  user: state.user,
});

export default connect(mapStateToProps)(Home);
