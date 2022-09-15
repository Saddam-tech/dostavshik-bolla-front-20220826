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
import styled from "styled-components";
import Carousel from "./Carousel/Carousel";
import Item from "./Item/Item";
import SubItem from "./Item/SubItem";
import Card from "./Card/Card";
import { useNavigate } from "react-router-dom";

let dummy_arr = [
  {
    imageurlpc:
      "https://media.istockphoto.com/photos/fresh-tasty-burger-picture-id495204032?k=20&m=495204032&s=612x612&w=0&h=x44AnT8kHv-apqnG9t1ILwf2sIr4uq14CUB7MBaiuOI=",
  },

  {
    imageurlpc: "https://s3.envato.com/files/278887276/burger1148.jpg",
  },
  {
    imageurlpc: "https://s3.envato.com/files/255251442/bur6791.jpg",
  },
  {
    imageurlpc: "https://s3.envato.com/files/255251442/bur6791.jpg",
  },
  {
    imageurlpc: "https://s3.envato.com/files/223964286/IMG_0299.jpg",
  },

  {
    imageurlpc:
      "https://www.eatthis.com/wp-content/uploads/sites/4/2020/06/hamburger-french-fries.jpg?quality=82&strip=1",
  },
  {
    imageurlpc: "https://s3.envato.com/files/223964286/IMG_0299.jpg",
  },

  {
    imageurlpc:
      "https://static1.bigstockphoto.com/3/9/3/large1500/393752210.jpg",
  },
  {
    imageurlpc: "https://restonic.com/wp-content/uploads/2015/05/02E77792.jpg",
  },

  {
    imageurlpc:
      "https://static1.bigstockphoto.com/3/9/3/large1500/393752210.jpg",
  },
];

export default function Main() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    // ref.current.ownerDocument.body.scrollTop = 0;
    switch (value) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/search");
        break;
      case 2:
        navigate("/favorites");
        break;
      case 3:
        navigate("/orders");
        break;
      case 4:
        navigate("/profile");
        break;
      default:
        navigate("/");
    }
  }, [value]);

  function generateRandomHash() {
    return `uuidGWorgV8fimB7aeBxnDqr7bSS${Math.floor(
      Math.random() * 10000 + 10000
    )}LUWLeyFKUukGqDhWnvriQ3T`;
  }

  return (
    <Container>
      <TopPanel>
        <section className="top_div">
          <FmdGoodOutlinedIcon />
          <div className="inner_wrap">
            <p>Uy</p>
            <KeyboardArrowDownOutlinedIcon color="primary" />
          </div>
        </section>
        <div className="top_div">
          <NotificationsNoneRoundedIcon sx={{ fontSize: 30 }} />
          <SearchOutlinedIcon sx={{ fontSize: 30 }} />
        </div>
      </TopPanel>
      <Carousel
        height={43}
        padding="100px 0 0"
        objectFit="contain"
        btns={true}
      />
      <Box sx={{ width: "100%" }} ref={ref}>
        <CssBaseline />
        <div className="posBox">
          <ul className="itemList special_gap">
            {dummy_arr.map((cont, index) => (
              <React.Fragment key={index}>
                <SubItem data={cont} />
              </React.Fragment>
            ))}
          </ul>
        </div>
        <section className="goto">
          <h2>Faqat Bizda</h2>
          <ArrowForwardOutlinedIcon />
        </section>
        <div className="posBox">
          <ul className="itemList normal_gap">
            {dummy_arr.map((cont, index) => (
              <React.Fragment key={index}>
                <Item data={cont} uuid={generateRandomHash()} />
              </React.Fragment>
            ))}
          </ul>
        </div>
        <section className="goto">
          <h2>Top Franshizalar</h2>
          <ArrowForwardOutlinedIcon />
        </section>
        <div style={{ border: "none" }} className="posBox">
          <ul className="itemList normal_gap">
            {dummy_arr.map((cont, index) => (
              <React.Fragment key={index}>
                <Item data={cont} uuid={generateRandomHash()} />
              </React.Fragment>
            ))}
          </ul>
        </div>
        <Carousel height={33} padding="0" objectFit="contain" btns={true} />
        <section className="goto">
          <h2>Restoranlar</h2>
          <ArrowForwardOutlinedIcon />
        </section>
        {/* New restaurants section*/}
        <div className="posBox">
          <ul className="itemList normal_gap">
            {dummy_arr.map((cont, index) => (
              <React.Fragment key={index}>
                <Item data={cont} uuid={generateRandomHash()} />
              </React.Fragment>
            ))}
          </ul>
        </div>
        {dummy_arr.map((el, i) => (
          <Card key={i} uuid={generateRandomHash()} />
        ))}

        {/* New restaurants section*/}
        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            sx={{
              display: "flex",
              alignItems: "flex-start",
              paddingTop: "8px",
              height: 85,
            }}
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

  .goto {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px 0;

    h2 {
      font-weight: 500;
      font-size: 18px;
    }
  }

  .posBox {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    border-bottom: 7px solid #efefef;

    .itemList {
      display: flex;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
    }

    .itemList::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }

    .itemList {
      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
    }

    .normal_gap {
      gap: 15px;
      padding: 20px;
    }
    .special_gap {
      gap: 7px;
      padding: 10px 10px 0 0;
    }
  }
`;
const TopPanel = styled.div`
  display: flex;
  position: fixed;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px;
  top: 0;
  width: 100%;
  height: 100px;
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
