import "antd/dist/antd.min.css";
import { Button } from "antd";
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
import "./Botoesviagemfeitauser.css";

const Botoesviagemfeitauser = () => {
  return (
    <div className="botoes" id="searchpass">
      <div className="buttons">
        <Button
          type="default"
          icon={<ArrowLeftOutlined />}
          size="small"
          shape="default"
        />
        <div className="pags" id="pags">
          <span>1</span>
          <span className="span1">/10</span>
        </div>
        <Button
          type="default"
          icon={<ArrowRightOutlined />}
          size="small"
          shape="default"
        />
      </div>
    </div>
  );
};

export default Botoesviagemfeitauser;
