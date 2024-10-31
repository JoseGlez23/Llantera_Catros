import Sidebar from "../components/Sidebar";
import BarWithFilter from "../components/BarWithFilter";

function TiresPage() {
  return (
    <div>
      <BarWithFilter />
        <div className="container">
          <Sidebar />
          <div className="background">
            <div>
              <h1 style={{marginTop: "120px", color: "white"}}>Stock de Llantas</h1>
            </div>
          </div>
        </div>
    </div>
  );
}

export default TiresPage;
