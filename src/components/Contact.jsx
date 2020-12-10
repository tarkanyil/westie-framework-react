import React, { useState } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import $ from "jquery";

const Contact = (props) => {

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      text: ""
  })

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      };
    });
  }

  function submitMessage(event) {
    setFormData({
        name: "",
        email: "",
        text: ""
    });
    event.preventDefault();
    $("#msgSubmit").removeClass("invisible");
    setTimeout(() => $("#msgSubmit").addClass("invisible"), 3000);
  }

  // !!!CODE USED WHEN USING SERVER TO SEND DATA TO
  //   function submitForm() {
  //     // Initiate Variables With Form Content
  //     const name = $("#name").val();
  //     const email = $("#email").val();
  //     const message = $("#message").val();

  //     $.ajax({
  //       type: "POST",
  //       url: "http://localhost:3000/send-mail",
  //       data: "name=" + name + "&email=" + email + "&message=" + message,
  //       success: function (text) {
  //         if (text == "Success.") {
  //           formSuccess();
  //         }
  //       },
  //     });
  //   }

  //   function formSuccess() {
  //     $("#msgSubmit").removeClass("invisible");
  //     setTimeout(() => $("#msgSubmit").addClass("invisible"), 4000);
  //   }

  return (
    <div className="contact-container text-center">
      <h2>Contact us</h2>
      <Form id="contactform">
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={formData.name}
              placeholder="Your name"
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Your email"
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Message
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="text"
              id="text"
              onChange={handleChange}
              value={formData.text}
              placeholder="We are curious what you'd like to write us :)"
              required
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col>
            <Button color="info" onClick={submitMessage}>Submit</Button>
          </Col>
        </FormGroup>
        <div id="msgSubmit" class="h3 text-center invisible">
          Your message has been sent!
        </div>
      </Form>
    </div>
  );
};

export default Contact;
