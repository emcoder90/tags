import React from "react";
import { Formik, FastField, Form } from "formik";
import { Card } from "reactstrap";

const initialValues = {
  customerEmail: "",
  customerFirstName: "",
  customerLastName: ""
};

const EmailForm = props => {
  return (
    <div className="text-center p-5">
      <Card className="col-xl-6 flex-grid item-details ">
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={props.sendEmail}
          render={() => (
            <Form className="flex-column">
              <p className="text-center footer-text pt-3">
                if (inviteFriends == true) &#123;{" "}
              </p>
              <p className="text-center body-text">
                {" "}
                get(discount).nextPurchase();{" "}
              </p>
              <p className="text-center email-text"> &#125; else &#123; </p>
              <p className="text-center header-text">
                {" "}
                &lt;Route exact path=<a href="/iAmLame">"/iAmLame"</a> /&gt;
                &#125;;{" "}
              </p>
              <div className="mb-1">
                <label htmlFor="customerEmail" className="text-white">
                  Email
                </label>
                <FastField
                  className={"form-control form-control-sm"}
                  name="customerEmail"
                  type="text"
                  placeholder="ex. leCoder@codeLyfe.com"
                />
              </div>
              <div className="row">
                <div className="mb-1 col-xl-6">
                  <label htmlFor="customerFirstName" className="text-white">
                    First Name
                  </label>
                  <FastField
                    className={"form-control form-control-sm"}
                    name="customerFirstName"
                    type="text"
                    placeholder="ex. Shmemily"
                  />
                </div>
                <div className="mb-1 col-xl-6">
                  <label htmlFor="customerLastName" className="text-white">
                    Last Name
                  </label>
                  <FastField
                    className={"form-control form-control-sm"}
                    name="customerLastName"
                    type="text"
                    placeholder="ex. Shmiacovetti"
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-oval btn-m btn-dark col-xl-5 text-center m-2"
                >
                  Send Invite
                </button>
              </div>
            </Form>
          )}
        />
      </Card>
    </div>
  );
};

export default EmailForm;
