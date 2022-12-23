import Swal from "sweetalert2";

export const successAlert = (text: string) => {
  Swal.fire({
    icon: "success",
    title: "Udało się!",
    text,
  });
};

export const errorAlert = (text: string) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text,
  });
};
