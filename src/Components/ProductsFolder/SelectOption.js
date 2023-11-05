import { useState } from "react";
import "./SelectOption.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const SelectOption = ({options}) => {
  const [showHidden, setShowHidden] = useState(false);
  // const alphabeticalOption = ["lowPrice", "highPrice", "Price(a-z)", "Price(z-a)"];
  const [option, setOption] = useState("PriceSort");
  return (
    <>
      <section className="selectSection">
        <div className="selectBox">
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "700",
              cursor: "pointer",
            }}>
            {option}
          </p>
          <RiArrowDropDownLine
            style={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={() => setShowHidden(!showHidden)}
          />
        </div>
        {
          showHidden && <div className="optionLists" >
          <ul onClick={() => setShowHidden(false)} >
            {
                options.map((lists, index) => (
                <li key={index} onClick={() => setOption(lists)} >
                  {lists}
                </li>
              ))
            }
          </ul>
        </div>
        }
      </section>
    </>
  );
};

export default SelectOption;
