import "./Service.css";
import { TbTruckDelivery } from "react-icons/tb";
import { GiCheckedShield, GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Service = () => {
  return (
    <>
      <div className="serviceSection">
        <div className="serviceBox">
          <div className="firstBox">
            <TbTruckDelivery className="DeliveryIcon icons"/>
            <p className="msg">Super Fast and Free Delivery</p>
          </div>
          <div className="secondBox">
            <div className="secondFirstBox">
              <GiCheckedShield className="checkedShieldIcon icons" />
              <p className="msg">Non-contact Shipping</p>
            </div>
            <div className="secondSecondBox">
              <GiReceiveMoney className="moneyBackIcons icons"/>
              <p className="msg">Money-Back Guaranteed</p>
            </div>
          </div>
          <div className="thirdBox">
            <RiSecurePaymentLine className="payemtIcons icons"/>
            <p className="msg">Super Secure Payment System </p>
          </div>
        </div>
      </div>
    </>
  )
};

export default Service;