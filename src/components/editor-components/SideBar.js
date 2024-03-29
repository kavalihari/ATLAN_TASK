import { useContext } from "react";
import MainContext from "../../MainContext";
import Query from "./Query";

const SideBar = () => {
  const { queryHistory } = useContext(MainContext);

  return (
    <div className='sidebar'>
      <div className='sidebar-item'>
        <h4>
          <span className='fa fa-cloud secondary me-2'></span>{" "}
          <span className='text-1'>Queries Available</span>
        </h4>
        {queryHistory ? <Query type='saved' /> : null}
      </div>
      <div className='sidebar-item'>
        <h4>
          <span className='fa fa-undo secondary me-2'></span>{" "}
          <span className='text-1'>History Of Query</span>
        </h4>
        {queryHistory ? <Query type='history' /> : null}
      </div>
    </div>

  );
};

export default SideBar;
