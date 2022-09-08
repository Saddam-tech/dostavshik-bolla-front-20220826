import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import Carousel from "./Carousel/Carousel";
import Item from "./Item/Item";

const dummy_arr = new Array(17).fill("*");

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  );
}

export default function Main() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const firstAuctionRef = React.useRef();
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <Container>
      <TopPanel>
        <section className="top_div">
          <FmdGoodOutlinedIcon />

          <div className="inner_wrap">
            <p>Home</p>
            <KeyboardArrowDownOutlinedIcon color="primary" />
          </div>
        </section>
        <div className="top_div">
          <NotificationsNoneRoundedIcon sx={{ fontSize: 30 }} />
          <SearchOutlinedIcon sx={{ fontSize: 30 }} />
        </div>
      </TopPanel>
      <Carousel />
      <Box sx={{ width: "100%" }} ref={ref}>
        <CssBaseline />
        <section className="goto">
          <h2>Faqat Bizda</h2>
          <ArrowForwardOutlinedIcon />
        </section>
        <div className="posBox">
          <ul className="itemList" ref={firstAuctionRef}>
            {dummy_arr.map((cont, index) => (
              <React.Fragment key={index}>
                <Item />
              </React.Fragment>
            ))}
          </ul>
        </div>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Asosiy"
              icon={<HomeOutlinedIcon />}
            />
            <BottomNavigationAction
              label="Qidirish"
              icon={<SearchOutlinedIcon />}
            />
            <BottomNavigationAction
              label="Sevimli"
              icon={<FavoriteBorderOutlinedIcon />}
            />
            <BottomNavigationAction
              label="Buyurtmalar"
              icon={<AssignmentOutlinedIcon />}
            />
            <BottomNavigationAction
              label="Profil"
              icon={<PersonOutlineOutlinedIcon />}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  .goto {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px 0;
  }

  .posBox {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;

    .itemList {
      display: flex;
      gap: 40px;
      padding: 20px;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
    }
  }
`;
const TopPanel = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  z-index: 9999;

  .top_div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;

    .inner_wrap {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const messageExamples = [
  {
    primary: "Brunch this week?",
    secondary:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Birthday Gift",
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    primary: "Recipe to try",
    secondary:
      "I am try out this new BBQ recipe, I think this might be amazing",
    person: "/static/images/avatar/2.jpg",
  },
  {
    primary: "Yes!",
    secondary: "I have the tickets to the ReactConf for this year.",
    person: "/static/images/avatar/3.jpg",
  },
  {
    primary: "Doctor's Appointment",
    secondary:
      "My appointment for the doctor was rescheduled for next Saturday.",
    person: "/static/images/avatar/4.jpg",
  },
  {
    primary: "Discussion",
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Summer BBQ",
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: "/static/images/avatar/1.jpg",
  },
];
