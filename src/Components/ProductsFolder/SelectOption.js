import { useState } from "react";
import "./SelectOption.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useGetDispatch } from "../ContextApiFolder/ContextOne";
import { useSecondData } from "../ContextApiFolder/ContextTwo";

const SelectOption = ({options, heading}) => {
  const secondState = useSecondData();
  const [showHidden, setShowHidden] = useState(false);
  const [option, setOption] = useState(heading.name);
  const dispatch = useGetDispatch();
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
                  <li
                    key={index}
                    onClick={() => {
                      setOption(lists);
                      dispatch({ type: "PriceFilter", payload: {lists:lists, secondState:secondState} });
                    }}
                  >
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
