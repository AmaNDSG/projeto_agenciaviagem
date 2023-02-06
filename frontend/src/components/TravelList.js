import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button as AntButton } from "antd";
import { Form } from "react-bootstrap";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Viagemfeitauser from "../components/Viagemfeitauser";
import Botoesviagemfeitauser from "../components/Botoesviagemfeitauser";
import "./TravelList.css";

const TripList = () => {
  return (
    <div className="lista">
      <div className="search" id="searchviagem">
        <button className="button2" id="filtrar">
          <img className="filter-icon" alt="" src="../filter.svg" />
        </button>
        <Form.Group className="inputstandard-formgroup22">
          <Form.Control type="search" placeholder="Pesquisar..." />
        </Form.Group>
        <AntButton
          type="default"
          icon={<SearchOutlined />}
          size="middle"
          shape="default"
        />
      </div>
      <Viagemfeitauser />
      <Botoesviagemfeitauser />
    </div>
  );
};

export default TripList;
