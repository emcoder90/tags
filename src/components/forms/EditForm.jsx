import React from "react";
import { Formik, FastField, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const initialValues = {
  id: 0,
  productTypeId: 0,
  productReferenceNumber: 0,
  productName: "",
  price: 0,
  color: "",
  fabricType: "",
  fit: "",
  details: "",
  detailsId: 0,
  description: "",
  descriptionId: 0,
  imageId: 0,
  imageUrl: ""
};

const EditForm = props => {
  console.log("Passed Props", props);
  return (
    <div className="container">
      <div className="card col-8 text-center item text-white">
        <Formik
          enableReinitialize={true}
          initialValues={props.isEditing ? props.itemData : initialValues}
          onSubmit={props.handleSubmit}
          validationSchema={Yup.object().shape({
            productTypeId: Yup.number().required("Product Type is required."),
            productReferenceNumber: Yup.number().required(
              "Product Reference Number is required."
            ),
            productName: Yup.string()
              .required("Product name is required")
              .min(2, "Product name must be at least 2 characters")
              .max(255, "Product name must be less than 128 characters"),
            price: Yup.string()
              .required("Valid amount of US currency is required.")
              .max(10, "Amount must be less than $9999.99...c'mon now"),
            color: Yup.string()
              .required("Color is required.")
              .min(2, "Color must be at least 2 characters")
              .max(50, "Color must be less than 50 characters"),
            fabricType: Yup.string()
              .required("Fabric Type is required.")
              .min(2, "Fabric Type must be at least 2 characters")
              .max(128, "Fabric Type must be less than 255 characters"),
            fit: Yup.string()
              .required("Fit is required.")
              .min(2, "Fit must be at least 2 characters")
              .max(50, "Fit must be less than 255 characters"),
            details: Yup.string()
              .required("Detail summary is required.")
              .min(2, "Detail summary must be at least 2 characters")
              .max(250, "Detail summary must be less than 250 characters"),
            detailsId: Yup.number().required("Details Id is required."),
            description: Yup.string()
              .required("Description is required.")
              .min(2, "Description must be at least 2 characters")
              .max(1000, "Description must be less than 1000 characters"),
            descriptionId: Yup.number().required("Description Id is required."),
            imageId: Yup.number().required("Image Id is required."),
            imageUrl: Yup.string()
              .required("Image Url is required.")
              .min(10, "Image Url must be at least 10 characters")
              .max(320, "Image Url must be less than 320 characters")
          })}
          render={({ errors, touched }) => (
            <Form className="flex-column">
              <h4 className="text-center category-text">Edit Item</h4>
              <div className="mb-1">
                <label htmlFor="productTypeId">Product Type Id</label>
                <FastField
                  className={
                    "form-control form-control-sm" +
                    (errors.productTypeId && touched.productTypeId
                      ? " is-invalid"
                      : "")
                  }
                  name="productTypeId"
                  type="text"
                  placeholder="ex. header = 1, body = 2, footer = 3"
                />
                <ErrorMessage
                  name="productTypeId"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="productReferenceNumber">Item Number</label>
                <FastField
                  className={
                    "form-control form-control-sm" +
                    (errors.productReferenceNumber &&
                    touched.productReferenceNumber
                      ? " is-invalid"
                      : "")
                  }
                  name="productReferenceNumber"
                  type="text"
                  placeholder="ex. 621193 = June 21, 2019 footer item"
                />
                <ErrorMessage
                  name="productReferenceNumber"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="productName">Product Name</label>
                <FastField
                  className={
                    "form-control form-control-sm" +
                    (errors.productName && touched.productName
                      ? " is-invalid"
                      : "")
                  }
                  name="productName"
                  type="text"
                  placeholder="ex. Hip Hip Array Shirt"
                />
                <ErrorMessage
                  name="productName"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="price">Price</label>
                <FastField
                  className={
                    "form-control form-control-sm" +
                    (errors.price && touched.price ? " is-invalid" : "")
                  }
                  name="price"
                  type="text"
                  placeholder="ex. 24.99"
                />
                <ErrorMessage
                  name="price"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="color">Color</label>
                <FastField
                  className={
                    "form-control form-control-sm" +
                    (errors.color && touched.color ? " is-invalid" : "")
                  }
                  name="color"
                  type="text"
                  placeholder="ex. Black...obviously"
                />
                <ErrorMessage
                  name="color"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="fabricType">Fabric Composition</label>
                <FastField
                  className={
                    "form-control form-control-sm" +
                    (errors.fabricType && touched.fabricType
                      ? " is-invalid"
                      : "")
                  }
                  name="fabricType"
                  type="text"
                  placeholder="ex. 100% Cotton"
                />
                <ErrorMessage
                  name="fabricType"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="fit">Fit</label>
                <FastField
                  className={
                    "form-control form-control-sm" +
                    (errors.fit && touched.fit ? " is-invalid" : "")
                  }
                  name="fit"
                  type="text"
                  placeholder="ex. One Size Fits Most"
                />
                <ErrorMessage
                  name="fit"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="details">Detail Summary</label>
                <FastField
                  className={
                    "form-control form-control-sm" +
                    (errors.details && touched.details ? " is-invalid" : "")
                  }
                  name="details"
                  type="text"
                  placeholder="ex. Mid-weight Crewneck T-shirt"
                />
                <ErrorMessage
                  name="details"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="detailsId">Details Id</label>
                <FastField
                  className={
                    "form-control form-control-sm" +
                    (errors.detailsId && touched.detailsId ? " is-invalid" : "")
                  }
                  name="detailsId"
                  type="text"
                  placeholder="ex. 1"
                />
                <ErrorMessage
                  name="detailsId"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="description">Description</label>
                <FastField
                  className={
                    "form-control form-control-sm" +
                    (errors.description && touched.description
                      ? " is-invalid"
                      : "")
                  }
                  component="textarea"
                  name="description"
                  type="text"
                  placeholder="ex. Super catchy explanation goes here"
                />
                <ErrorMessage
                  name="description"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="descriptionId">Description Id</label>
                <FastField
                  className={
                    "form-control form-control-sm" +
                    (errors.descriptionId && touched.descriptionId
                      ? " is-invalid"
                      : "")
                  }
                  name="descriptionId"
                  type="text"
                  placeholder="ex. 1"
                />
                <ErrorMessage
                  name="descriptionId"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="imageId">Image Id</label>
                <FastField
                  className={
                    "form-control form-control-sm" +
                    (errors.imageId && touched.imageId ? " is-invalid" : "")
                  }
                  name="imageId"
                  type="text"
                  placeholder="ex. 1"
                />
                <ErrorMessage
                  name="imageId"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="imageUrl">Product Image Url</label>
                <FastField
                  className={
                    "form-control form-control-sm" +
                    (errors.imageUrl && touched.imageUrl ? " is-invalid" : "")
                  }
                  name="imageUrl"
                  type="text"
                  placeholder="ex. https://www.tags.com/photo/73"
                />
                <ErrorMessage
                  name="imageUrl"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-oval btn-sm btn-dark col-xl-3 text-center m-2"
                >
                  Update
                </button>
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  );
};

export default EditForm;
