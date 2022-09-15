import ListAltIcon from "@mui/icons-material/ListAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PaymentIcon from "@mui/icons-material/Payment";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
export const navigationitems = [
  "Taniqli",
  "Menyu",
  "Ikkilamchi",
  "Ichimliklar",
  "Saladlar",
  "Desert",
];

export const options = [
  { label: "Q'oy go'shti qo'shmoq", price: "(+ 3,000 UZS)" },
  { label: "Tovuq go'shti qo'shmoq", price: "(+ 2,500 UZS)" },
  { label: "Mol go'shti qo'shmoq", price: "(+ 4,300 UZS)" },
];

export const profileOpt = [
  {
    label: "Manzillar",
    icon: <ListAltIcon sx={{ fontSize: 35, color: "#595959" }} />,
  },
  {
    label: "Mening sevimli",
    icon: <FavoriteBorderIcon sx={{ fontSize: 35, color: "#595959" }} />,
  },
  {
    label: "Promotsion kod",
    icon: <SellOutlinedIcon sx={{ fontSize: 35, color: "#595959" }} />,
  },
  {
    label: "Tadbirlar",
    icon: <EventAvailableIcon sx={{ fontSize: 35, color: "#595959" }} />,
  },
  {
    label: "Tolov",
    icon: <PaymentIcon sx={{ fontSize: 35, color: "#595959" }} />,
  },
  {
    label: "Ovqat yetkazish",
    icon: <DeliveryDiningIcon sx={{ fontSize: 35, color: "#595959" }} />,
  },
  {
    label: "FAQ",
    icon: <LiveHelpOutlinedIcon sx={{ fontSize: 35, color: "#595959" }} />,
  },
  {
    label: "Biz bilan bog'lanish",
    icon: <CallOutlinedIcon sx={{ fontSize: 35, color: "#595959" }} />,
  },
  {
    label: "Sozlamalar",
    icon: <SettingsOutlinedIcon sx={{ fontSize: 35, color: "#595959" }} />,
  },
  {
    label: "E'lonlar",
    icon: <CampaignOutlinedIcon sx={{ fontSize: 35, color: "#595959" }} />,
  },
  {
    label: "Foydalanish shartlari",
    icon: (
      <FeaturedPlayListOutlinedIcon sx={{ fontSize: 35, color: "#595959" }} />
    ),
  },
];
