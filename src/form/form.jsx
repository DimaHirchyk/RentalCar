import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const today = new Date();
const minDate = today.toISOString().split("T")[0];

const maxDateObj = new Date();
maxDateObj.setDate(today.getDate() + 30);
const maxDate = maxDateObj.toISOString().split("T")[0];

const ValidationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(25, "Name must be at most 25 characters")
    .required("Name is required"),

  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .min(3, "Email must be at least 3 characters")
    .max(25, "Email must be at most 25 characters")
    .required("Email is required"),

  date: Yup.date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .required("Date is required")
    .test(
      "format",
      "Date is invalid",
      (date) => (date?.getFullYear() ?? 0) <= 9999
    ),

  message: Yup.string()
    .trim()
    .min(5, "Message must be at least 5 characters")
    .max(100, "Message must be at most 100 characters"),
});

const initialValues = {
  name: "",
  email: "",
  date: "",
  message: "",
};

const handlSubmit = (value, action) => {
  console.log(value);
  action.resetForm();
};
const ContactForm = () => {
  return (
    <div className="border border-gray-300 rounded-2xl p-8 mt-10">
      <h4 className="font-semibold text-2xl">Book your car now</h4>
      <p className="font-medium text-gray-400 mt-2">
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={handlSubmit}
        validationSchema={ValidationSchema}>
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-3 mt-6">
            <Field
              className={`mt-1 block w-full rounded-md px-3.5 py-2 text-base bg-gray-100 text-gray-900 placeholder:text-gray-400 transition-colors outline-none border ${
                errors.name && touched.name
                  ? "border-red-500 focus:outline-red-500"
                  : "border-transparent"
              }`}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <ErrorMessage
              name="name"
              render={(msg) => <p className="text-red-600 text-sm">{msg}</p>}
            />
            <Field
              className={`mt-1 block w-full rounded-md px-3.5 py-2 text-base bg-gray-100 text-gray-900 placeholder:text-gray-400 transition-colors outline-none border ${
                errors.name && touched.name
                  ? "border-red-500 focus:outline-red-500"
                  : "border-transparent"
              }`}
              type="text"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage
              name="email"
              render={(msg) => <p className="text-red-600 text-sm">{msg}</p>}
            />

            <Field
              className={`mt-1 block w-full rounded-md px-3.5 py-2 text-base bg-gray-100 text-gray-900 placeholder:text-gray-400 transition-colors outline-none border ${
                errors.name && touched.name
                  ? "border-red-500 focus:outline-red-500"
                  : "border-transparent"
              }`}
              type="date"
              name="date"
              placeholder="Booking date"
              min={minDate}
              max={maxDate}
            />
            <ErrorMessage
              name="date"
              render={(msg) => <p className="text-red-600 text-sm">{msg}</p>}
            />

            <Field
              className={`mt-1 block w-full h-20 rounded-md px-3.5 py-2 text-base bg-gray-100 text-gray-900 placeholder:text-gray-400 transition-colors outline-none border resize-none ${
                errors.name && touched.name
                  ? "border-red-500 focus:outline-red-500"
                  : "border-transparent"
              }`}
              as="textarea"
              name="message"
              placeholder="Comment"
            />
            <ErrorMessage
              name="message"
              render={(msg) => <p className="text-red-600 text-sm">{msg}</p>}
            />

            <button
              className="w-40 mx-auto bg-blue-500 text-white hover:bg-blue-700 transition-colors py-3 font-semibold rounded-xl mt-10 cursor-pointer"
              type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
