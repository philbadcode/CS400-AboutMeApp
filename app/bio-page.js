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
