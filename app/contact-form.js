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

    let nameTextField = page.getViewById("name").text;
    let emailTextField = page.getViewById("email").text;
    let messageTextField = page.getViewById("message").text;

    if (name && email && message) {
      alert("Submission successful");
    } else {
      alert("Please fill out all fields");
    }
  } catch (e) {
    console.error(e);
  }
}