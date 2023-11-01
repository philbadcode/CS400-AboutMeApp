import { createViewModel } from './main-view-model';

export function onNavigatingTo(args) {
  const page = args.object.page;
  page.bindingContext = createViewModel();
}

export function navBack(args) {
  const page = args.object.page;
  page.frame.goBack();
}
