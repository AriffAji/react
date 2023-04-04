import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Header from "parts/Header";
import Button from "elements/Button";
import Stepper from "elements/Stepper";
import Numbering from "elements/Stepper/Numbering";
import Controller from "elements/Stepper/Controller";
import MainContent from "elements/Stepper/MainContent";
import Meta from "elements/Stepper/Meta";
import BookingInformation from "parts/Checkout/BookingInformation";
import Payment from "parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";
import ItemDetails from "json/itemDetails.json";

export default class Checkout extends Component {
  state = {
    data: { firstname: "", lastName: "", email: "", phone: "", proofPayment: "", bankName: "", bankHolder: "" },
  };

  onChange = (event) => {
    this.setState({ data: { ...this.state.data, [event.target.name]: event.target.value } });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { data } = this.state;
    const checkout = { duration: 3 };
    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: " Please fill up the blank fields below",
        content: <BookingInformation data={data} checkout={checkout} ItemDetails={ItemDetails} onChange={this.onChange}></BookingInformation>,
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions blow",
        content: <Payment data={data} checkout={checkout} ItemDetails={ItemDetails} onChange={this.onChange}></Payment>,
      },
      completed: { title: " Yay! Completed", description: null, content: <Completed /> },
    };
    return (
      <>
        <Header isCentered></Header>
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering data={steps} current={CurrentStep} style={{ marginBottom: 80 }} />
              <Meta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />

              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" && data.lastName !== "" && data.email !== "" && data.phone !== "" && (
                    <Fade>
                      <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={nextStep}>
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                  <Button className="btn" type="link" isBlock isLight href={`/properties/${ItemDetails._id}`}>
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" && data.bankName !== "" && data.bankHolder !== "" && (
                    <Fade>
                      <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={() => this._Submit(nextStep)}>
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                  <Button className="btn" type="button" isBlock isLight onClick={prevStep}>
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "completed" && (
                <Controller>
                  <Button className="btn" type="link" isBlock isPrimary hasShadow href="">
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}
