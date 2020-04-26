<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h4 class="display-4 text-center text-secondary font-weight-bold">
          Write us.
        </h4>
        <p class="lead text-white">
          Below, you will find a form in which you can let us know your
          comments, If you are interested in being part team of
          <span class="font-weight-600"> The Covid-19 Colombia Project </span>,
        </p>
      </div>
    </div>
    <div v-if="errored" class="row">
      <p class="lead helper-error text-danger">
        Sorry, it is not possible to send the information at this time, by
        please try again later
      </p>
    </div>
    <div v-else>
      <div v-if="loading" class="row">
        <img
          src="@/assets/images/sendmail.gif"
          alt="Covid Send Mail"
          class="imgMail"
        />
      </div>
      <div v-else class="row justify-content-center">
        <form
          class="contact-form text-white col-10 mt-5"
          @submit.prevent="checkForm"
          novalidate="true"
        >
          <div class="form-group col-12">
            <input
              id="contact-name"
              type="text"
              v-model="form.contact_name"
              required
              name="your-name"
              placeholder="Write your names"
              class="validate form-control"
              autocomplete="off"
            />
            <span class="helper-error text-danger" v-if="errors.name.val == 0">
              {{ errors.name.text }}
            </span>
            <span class="helper-ok text-success" v-else>
              {{ errors.name.text }}
            </span>
          </div>
          <div class="form-group col-12">
            <input
              id="contact-email"
              type="email"
              v-model="form.contact_email"
              required
              name="your-email"
              placeholder="Write your email"
              class="validate form-control"
              autocomplete="off"
            />
            <span class="helper-error text-danger" v-if="errors.email.val == 0">
              {{ errors.email.text }}
            </span>
            <span class="helper-ok text-success" v-else>
              {{ errors.email.text }}
            </span>
          </div>
          <div class="form-group col-12">
            <textarea
              id="contact-subject"
              v-model="form.contact_subject"
              required
              name="your-subject"
              placeholder="Let us know your comments"
              data-lenght="255"
              class="form-control"
              rows="4"
              autocomplete="off"
            >
            </textarea>
            <span class="helper-error text-danger" v-if="!errors.subject.val">
              {{ errors.subject.text }}
            </span>
            <span class="helper-ok text-success" v-else>
              {{ errors.subject.text }}
            </span>
          </div>

          <input
            type="submit"
            value="SEND"
            class="mt-2 p-2 mb-4 btn btn-secondary btn-radius-bottom-right mb-lg-0 col-12"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "page-contact",
  data() {
    return {
      errors: {
        name: {
          val: null,
          text: null
        },
        email: {
          val: null,
          text: null
        },
        subject: {
          val: null,
          text: null
        }
      },
      form: {
        contact_name: null,
        contact_email: null,
        contact_subject: null
      },
      loading: false,
      errored: false,
      msn: "Pagína Contacto"
    };
  },
  methods: {
    checkForm: function(event) {
      if (!this.form.contact_name || this.form.contact_name.trim() == "") {
        this.errors.name.val = 0;
        this.errors.name.text = "The name is required.";
        this.form.contact_name = "";
      } else if (
        this.form.contact_name.trim().length <= 4 ||
        this.form.contact_name.trim().length >= 50
      ) {
        this.errors.name.val = 0;
        this.errors.name.text =
          "The name must contain more than 4 AND less than 50 characters";
        this.form.contact_name = this.form.contact_name.trim();
      } else {
        console.log("name = " + this.form.contact_name.trim().length);
        this.errors.name.val = 1;
        this.errors.name.text = "!OK";
      }

      if (!this.form.contact_email || this.form.contact_email.trim() == "") {
        this.errors.email.val = 0;
        this.errors.email.text = "Email is required.";
        this.form.contact_email = "";
      } else if (!this.validEmail(this.form.contact_email.trim())) {
        this.errors.email.val = 0;
        this.errors.email.text = "The email is not valid.";
        this.form.contact_email = this.form.contact_email.trim();
      } else {
        console.log("email = " + this.form.contact_email.trim().length);
        this.errors.email.val = 1;
        this.errors.email.text = "0k!";
      }

      if (
        !this.form.contact_subject ||
        this.form.contact_subject.trim() == ""
      ) {
        this.errors.subject.val = 0;
        this.errors.subject.text = "The message is required.";
        this.form.contact_subject = "";
      } else if (
        this.form.contact_subject.trim().length <= 20 ||
        this.form.contact_subject.trim().length >= 255
      ) {
        this.errors.subject.val = 0;
        this.errors.subject.text =
          "The message must contain more than 20 AND less than 255 characters";
        this.form.contact_subject = this.form.contact_subject.trim();
      } else {
        console.log("subject = " + this.form.contact_subject.trim().length);
        this.errors.subject.val = 1;
        this.errors.subject.text = "!OK";
      }

      event.preventDefault();
      if (
        this.errors.subject.val == 1 &&
        this.errors.email.val == 1 &&
        this.errors.name.val == 1
      ) {
        this.sendMail();
      }
      //alert(JSON.stringify(this.from))
      //console.log(JSON.stringify(this.from));
    },
    sendMail() {
      let apiUrl =
        "https://us-central1-daza-com-co.cloudfunctions.net/sendContactCovid?";
      apiUrl = apiUrl + "name=" + encodeURIComponent(this.form.contact_name);
      apiUrl = apiUrl + "&email=" + encodeURIComponent(this.form.contact_email);
      apiUrl =
        apiUrl + "&subject=" + encodeURIComponent(this.form.contact_subject);

      this.loading = true;

      axios
        .get(apiUrl)
        .then(request => {
          const html = request.data;
          console.log(
            "Status = " + html.status + " totalResult " + html.messages
          );
          if (html.status == "ok") {
            this.loading = false;
          } else {
            this.error = true;
          }
          //console.log(html);
        })
        .catch(error => {
          console.log("error:" + error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    formClear() {
      this.form.contact_name = "";
      this.form.contact_email = "";
      this.form.contact_subject = "";
    },
    validEmail: function(email) {
      // eslint-disable-next-line no-useless-escape
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>

<style lang="scss" scope>
$color: #fff;
.contact-form input {
  color: $color;
  margin-top: 0;
  padding-top: 0;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 3px;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid;
  color: $color;
  padding-top: 13px;
  padding-bottom: 0;
  padding-left: 0;
  margin: 10px 0 0;
  width: 100% !important;
  box-sizing: initial;
}

.helper-error,
.helper-ok {
  font-size: 14px;
  font-weight: 400;
}

.contact-form input[name="your-name"] {
  margin-top: 0;
  padding-top: 0;
}

.form-control::placeholder,
.form-control::-webkit-input-placeholder,
.form-controlinput:-moz-placeholder,
.form-controlinput::-moz-placeholder,
.form-controlinput:-ms-input-placeholder,
.form-controlinput::-ms-input-placeholder {
  color: $color !important;
  opacity: 1;
}
</style>
