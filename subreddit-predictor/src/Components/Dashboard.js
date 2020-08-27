import React from "react";
import { axiosWithAuth } from "../utils/axiosWthAuth";

const Dashboard = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <button>Predict</button>
      </form>
    </div>
  );
};

export default Dashboard;
