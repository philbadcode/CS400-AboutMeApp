import { createViewModel } from './main-view-model';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

export function navBack(args) {
  const object = args.object;
  const page = object.page;
  page.frame.goBack();
}

export function onSubmit(args) {
  try {
    const page = args.object;
    const nameTextField = page.getViewById("name");
    const emailTextField = page.getViewById("email");
    const messageTextField = page.getViewById("message");

    console.info(nameTextField);
    console.info(emailTextField);
    console.info(messageTextField);

    const name = nameTextField.text;
    const email = emailTextField.text;
    const message = messageTextField.text;

    if (name && email && message) {
      alert("Submission successful");
    } else {
      alert("Please fill out all fields");
    }
  } catch (e) {
    console.error(e);
  }
}