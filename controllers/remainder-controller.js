import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import cron from "node-cron";
function sendEmail() {
  let config = {
    service: "gmail",
    auth: {
      user: "esaseethapathi@gmail.com",
      pass: "uvhffcrolcreadwv",
    },
  };
  const transporter = nodemailer.createTransport(config);

  let mailGenerator = new Mailgen({
    theme: "default",
    product: { name: "Esa", link: "https://mailgen.js/" },
  });
  let responseMail = {
    body: {
      intro: "Hope this email finds you well",
    },
  };
  let mail = mailGenerator.generate(responseMail);

  let messege = {
    from: "esaseethapathi@gmail.com",
    to: "esaseethapathi@gmail.com",
    subject: "remainder email",
    html: mail,
  };
  transporter
    .sendMail(messege)
    .then(() => {
      console.log("successfully signedin");
    })
    .catch((error) => {
      console.log(error);
    });
}
async function notifyUser(request, response) {
  console.log("hiiiii" + request.body);
  const { to } = request.body;
  let config = {
    service: "gmail",
    auth: {
      user: "esaseethapathi@gmail.com",
      pass: "uvhffcrolcreadwv",
    },
  };
  const transporter = nodemailer.createTransport(config);

  let mailGenerator = new Mailgen({
    theme: "default",
    product: { name: "Mailgen", link: "https://mailgen.js/" },
  });
  let responseMail = {
    body: {
      intro: "mail received",
    },
  };
  let mail = mailGenerator.generate(responseMail);

  let messege = {
    from: "esaseethapathi@gmail.com",
    to,
    subject: "testing email",
    html: mail,
  };
  transporter
    .sendMail(messege)
    .then(() => {
      response.status(200).send("successfully signedin");
    })
    .catch((error) => {
      response.status(500).send(error);
    });
  //response.status(200).send("successfully signedin");
}

async function remaindUser(request, response) {}

const task = () => {
  console.log("good work");
};
cron.schedule("* * * * *", task);
export default { notifyUser, remaindUser };
