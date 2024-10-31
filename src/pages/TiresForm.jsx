import React, { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup"; // Para validación de los campos

import Sidebar from "../components/Sidebar";
import SuperiorBar from "../components/SuperiorBar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import "../TiresForm.css";

function TiresForm() {
  //Dropdown de Medidas
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar si el dropdown está abierto o no del apartado de medidas

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Alterna el estado de abierto o cerrado del dropdown de medidas
  };

  //Dropdown de Condicion de la Llantas
  const [condition, setCondition] = useState("NUEVA"); // Estado inicial del la condicion de la llanta
  const [isConditionOpen, setIsConditionOpen] = useState(false); // Estado para controlar el dropdown del la condicion de la llanta

  const toggleConditionDropdown = () => {
    setIsConditionOpen(!isConditionOpen); // Alterna el estado de abierto o cerrado del dropdown de condicion
  };

  const handleSelect = (value) => {
    setCondition(value);
    setIsConditionOpen(false); // Cerrar el dropdown al seleccionar una opción
  };

  // Photo Input
  const [fileName, setFileName] = useState(""); // Almacenar nombre del archivo
  const fileInputRef = useRef(null); //ref para activar el input de foto

  const handleClick = () => {
    fileInputRef.current.click(); // Activa el input cuando se hace clic en el contenedor
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0]; //Obtenemos el archivo seleccionado
    if (file) {
      setFileName(file.name); //Actualizamos el estado con el nombre del archivo
    } else {
      setFileName("");
    }
  };

  return (
    <div className="tires-form">
      <SuperiorBar />
      <div className="container">
        <Sidebar />
        <div className="background">
          <div className="form-container">
            <Formik
              initialValues={{
                marca: "",
                modelo: "",
                alto: "",
                ancho: "",
                pulgada: "",
                cantidad: "",
                precio: "",
                condicion: "",
                foto: null,
              }}
            >
              <Form>
                <div className="form-grid">
                  {/** Primera Columna */}
                  <div className="column">
                    <div className="form-group">
                      <label htmlFor="marca">MARCA</label>
                      <Field
                        name="marca"
                        placeholder="Introduce la marca de la llanta"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="modelo">MODELO</label>
                      <Field
                        name="modelo"
                        placeholder="Introduce el modelo de la llanta"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="medidas">MEDIDAS</label>
                      <div className="custom-dropdown">
                        <div
                          className="dropdown-header"
                          onClick={toggleDropdown}
                        >
                          <span>
                            {!isOpen ? "EXTENDER AQUI" : "\u00A0"}
                          </span>
                          <span className="icon-container">
                            {isOpen ? (
                              <KeyboardArrowUpIcon
                                style={{ fontSize: "80px" }}
                              />
                            ) : (
                              <KeyboardArrowDownIcon
                                style={{ fontSize: "80px" }}
                              />
                            )}
                          </span>
                        </div>
                        {isOpen && (
                          <div className="dropdown-body">
                            <div className="dropdown-row">
                              <label htmlFor="alto" className="small-label">
                                ALTO
                              </label>
                              <Field
                                type="number"
                                name="alto"
                                placeholder="Introduzca el alto"
                                className="small-label"
                                step="0.01"
                              />
                            </div>
                            <div className="dropdown-row">
                              <label htmlFor="ancho" className="small-label">
                                ANCHO
                              </label>
                              <Field
                                type="number"
                                name="ancho"
                                placeholder="Introduzca el ancho"
                                step="0.01"
                                className="small-label"
                              />
                            </div>
                            <div className="dropdown-row">
                              <label htmlFor="pulgada" className="small-label">
                                PULGADA
                              </label>
                              <Field
                                type="number"
                                name="pulgada"
                                placeholder="Introduzca la pulgada"
                                step="0.01"
                                className="small-label"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Segunda Columna  */}
                  <div className="column">
                    <div className="form-group">
                      <label htmlFor="cantidad">CANTIDAD</label>
                      <Field
                        type="number"
                        name="cantidad"
                        placeholder="Introduce la cantidad de llantas"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="precio">PRECIO</label>
                      <Field
                        type="number"
                        name="precio"
                        placeholder="Introduce el precio de las llantas"
                        step="0.01"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="condicion">CONDICIÓN</label>
                      <div
                        className="condition-dropdown"
                        onClick={toggleConditionDropdown}
                        style={{ position: "relative" }}
                      >
                        <div className="header-condition-dropdown">
                          <span>{condition}</span>
                          <span className="icon-container">
                            {isConditionOpen ? (
                              <KeyboardArrowUpIcon
                                style={{ fontSize: "80px" }}
                              />
                            ) : (
                              <KeyboardArrowDownIcon
                                style={{ fontSize: "80px" }}
                              />
                            )}
                          </span>
                        </div>
                        {isConditionOpen && (
                          <div className="body-condition-dropdown">
                            <div
                              onClick={() => handleSelect("NUEVA")}
                              name="condicion"
                            >
                              NUEVA
                            </div>
                            <div onClick={() => handleSelect("SEMI-NUEVA")}>
                              SEMI-NUEVA
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Campo oculto para enviar el valor seleccionado a la base de datos */}
                      <input type="hidden" name="condicion" value={condition} />
                    </div>
                  </div>

                  {/* Tercera Columna */}
                  <div className="column">
                    <div className="form-group">
                      <label htmlFor="foto">AGREGAR FOTO</label>
                      <div
                        className="photo-input-container"
                        onClick={handleClick}
                      >
                        <div className="photo-placeholder">
                          {fileName ? (
                            <span className="file-name">{fileName}</span>
                          ) : (
                            <span>Seleccionar imagen</span>
                          )}
                          <AddAPhotoIcon
                            className="photo-icon"
                            style={{ fontSize: "35px" }}
                          />
                          
                        </div>
                        <input
                          id="foto"
                          name="foto"
                          type="file"
                          accept="image/*"
                          className="photo-input-hidden"
                          ref={fileInputRef}
                          onChange={handleFileChange} // Manejador de cambio de archivo
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn-bottom-right">
                    AGREGAR LLANTA
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TiresForm;
