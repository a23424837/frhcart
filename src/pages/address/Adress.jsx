import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

export default function Address() {
  const { cartId } = useParams(); 
  const [isLoading, setIsLoading] = useState(false);

  const Checkout = async (values) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`, {
        shippingAddress: values
      }, {
        headers: {
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NGFmYmY3ODAzZTg4OGUwNTYzZDc3OCIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzMyOTY3NDE2LCJleHAiOjE3NDA3NDM0MTZ9.DF2iqgIpmEyWasg06v59Qi8TkHP6PLGNJXTROpo4CZ0"
        },
        params: {
          url: "http://localhost:5173"
        }
      });
      location.href = data.session.url;
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const initialValues = {
    details: "yuqwiwiw",
    phone: "010366447",
    city: "masr"
  };

  const validationSchema = Yup.object({
    details: Yup.string()
      .required("Details are required"),
    city: Yup.string()
      .required("City is required")
      .min(3, "City must be at least 3 characters")
      .max(20, "City must be at most 20 characters"),
    phone: Yup.string()
      .required("Phone is required")
      .length(11, "Phone must be exactly 11 characters")
      .matches(/^[0-9]+$/, "Phone must be only numbers"),
  });

  const { handleSubmit, values, handleChange, errors, handleBlur, touched } = useFormik({
    initialValues,
    onSubmit: Checkout,
    validationSchema: validationSchema,
  });

  return (
    <div className="my-10">
      <form onSubmit={handleSubmit}>
        <div className="w-2/3 mx-auto grid grid-cols-2 gap-4">
          <Input
            clearable
            isInvalid={touched.details && !!errors.details}
            helperText={errors.details}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.details}
            name="details"
            label="Details"
            type="text"
            className="col-span-2"
          />
          <Input
            clearable
            isInvalid={touched.city && !!errors.city}
            helperText={errors.city}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.city}
            name="city"
            label="City"
            type="text"
            className="col-span-2"
          />
          <Input
            clearable
            isInvalid={touched.phone && !!errors.phone}
            helperText={errors.phone}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.phone}
            name="phone"
            label="Phone"
            type="tel"
            className="col-span-2"
          />
          <Button
            isLoading={isLoading}
            type="submit"
            className="col-span-2"
            color="success"
          >
            Place Order
          </Button>
        </div>
      </form>
    </div>
  );
}