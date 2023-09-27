import React from "react";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartButton = () => {
  // Supongamos que tienes un contador de elementos en el carrito, puedes usar un estado o variable para esto
  const itemCount = 5; // Cambia esto según la cantidad de elementos en el carrito

  return (
    <IconButton aria-label="Carrito de Compras" color="primary">
      <Badge badgeContent={itemCount} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartButton;
