import { createViewModel } from './main-view-model';

export function onNavigatingTo(args) {
  const page = args.object.page;
  page.bindingContext = createViewModel();
}

export function navBack(args) {
  const page = args.object.page;
  page.frame.goBack();
}

export function onSubmit(args) {
  const page = args.object.page;

  let name = page.getViewById("name").text;
  let email = page.getViewById("email").text;
  let message = page.getViewById("message").text;

  if (name && email && message) {
    alert("Submission successful!");
    page.getViewById("name").text = "";
    page.getViewById("email").text = "";
    page.getViewById("message").text = "";
  } else {
    alert("Please fill out all fields");
  }
}