// client/src/components/BarWithFilter.jsx
import { useEffect, useState } from "react";
import "../Filter.css";
import "@fontsource/open-sans";

function BarWithFilter() {
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("adminName");
    if (storedName) {
      setAdminName(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminName"); 
    window.location.href = "/";
  };

  return (
    <div className="filter-bar">
      <div className="filter-bar-header">
        <div className="filter-text">Bienvenido {adminName}</div>
        <button className="close-session" onClick={handleLogout}>
          CERRAR SESION
        </button>
      </div>

      <form className="filter-form">
        <div className="filter-field">
          <label htmlFor="marca">Marca</label>
          <input type="text" id="marca" name="marca" placeholder="Escribe Marca" />
        </div>

        <div className="filter-field">
          <label htmlFor="modelo">Modelo</label>
          <input type="text" id="modelo" name="modelo" placeholder="Escribe Modelo" />
        </div>

        <div className="filter-field">
          <label htmlFor="alto">Alto</label>
          <input type="number" id="alto" name="alto" placeholder="Escribe Alto" />
        </div>

        <div className="filter-field">
          <label htmlFor="ancho">Ancho</label>
          <input type="number" id="ancho" name="ancho" placeholder="Escribe Ancho" />
        </div>

        <div className="filter-field">
          <label htmlFor="pulgada">Pulgada</label>
          <input type="number" id="pulgada" name="pulgada" placeholder="Escribe Pulgada" />
        </div>

        <div className="filter-field">
          <label htmlFor="cantidad">Cantidad</label>
          <input type="number" id="cantidad" name="cantidad" placeholder="Escribe Cantidad" />
        </div>

        <div className="filter-field">
          <label htmlFor="precio">Precio</label>
          <input type="number" id="precio" name="precio" placeholder="Escribe Precio" />
        </div>

        <div className="filter-field">
          <label htmlFor="condicion">Condición</label>
          <select id="condicion" name="condicion">
            <option value="">Seleccione</option>
            <option value="Nuevo">Nuevo</option>
            <option value="Usado">Usado</option>
          </select>
        </div>

        <button type="submit" className="search-button">BUSCAR</button>
      </form>
    </div>
  );
}

export default BarWithFilter;
