import './App.scss';
import DashboardHeaderComponent from "./components/dashboard-header/dashboard-header.component";
import DashboardTableComponent from "./components/dashboard-table/dashboard-table.component";

function App() {
  return (
      <div className="dashboard-wrapper">
          <DashboardHeaderComponent/>
          <DashboardTableComponent/>
      </div>
  );
}

export default App;
