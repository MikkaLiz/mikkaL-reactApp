/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";
const ClientCheckoutForm = ({ stateHandler, orderHandler }) => {
  const { cart, totalPrice } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    const cleanData = {
      name: data.name.trim(),
      lastName: data.lastName.trim(),
      address: data.address.trim(),
      email: data.email.trim(),
    }
    const orderData = {
      buyer: cleanData,
      cart: cart.map((item) => ({
        id: item.item.id,
        name: item.item.name,
        quantity: item.quantity,
        price: item.item.price,
        stock: item.item.stock,
      })),
      total: totalPrice(),
      date: serverTimestamp(),
    };
    console.log("Order data:", orderData);
    orderHandler(orderData);
    stateHandler("loading");
  };

  const onError = (errors) => {
    console.log("Form errors:", errors);
    Swal.fire({
      title: "Error",
      text: "Por favor, completa todos los campos correctamente.",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="container mt-5"
      noValidate
    >
      <h1>Estas cerca!</h1>
      <h2>Te vamos a pedir un par de datos antes de continuar</h2>
      <p>
        los campos marcados con <span className="text-danger">*</span> son
        obligatorios
      </p>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name && (
          <span className="text-danger">
            {errors.name.type === "required" && "Este campo es obligatorio"}
            {errors.name.type === "minLength" &&
              "El nombre debe tener al menos 3 caracteres"}
          </span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Apellido <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          {...register("lastName", { required: true, minLength: 3 })}
        />
        {errors.lastName && (
          <span className="text-danger">
            {errors.lastName.type === "required" && "Este campo es obligatorio"}
            {errors.lastName.type === "minLength" &&
              "El apellido debe tener al menos 3 caracteres"}
          </span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Dirección <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          {...register("address", { required: true, minLength: 5 })}
        />
        {errors.address && (
          <span className="text-danger">
            {errors.address.type === "required" && "Este campo es obligatorio"}
            {errors.address.type === "minLength" &&
              "La dirección debe tener al menos 5 caracteres"}
          </span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Correo electrónico <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
        />
        {errors.email && (
          <span className="text-danger">
            {errors.email.type === "required" && "Este campo es obligatorio"}
            {errors.email.type === "pattern" &&
              "Por favor, ingresa un correo electrónico válido"}
          </span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="emailConfirmation" className="form-label">
          Confirmar correo electrónico <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="emailConfirmation"
          {...register("emailConfirmation", {
            required: "Este campo es obligatorio",
            validate: (value) =>
              value === document.getElementById("email").value ||
              "Los correos no coinciden",
          })}
        />
        {errors.emailConfirmation && (
          <span className="text-danger">
            {errors.emailConfirmation.message}
          </span>
        )}
      </div>
      <div className="mt-3 col-12 d-flex justify-content-end align-items-end">
        <button type="submit" className="btn btn-primary">
          Completar Compra
        </button>
      </div>
    </form>
  );
};

export default ClientCheckoutForm;
