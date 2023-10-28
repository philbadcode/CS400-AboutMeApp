import { createViewModel } from './main-view-model';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

export function navBio(args) {
  const object = args.object;
  const page = object.page;
  page.frame.navigate('bio-page');
}

export function navContact(args) {
  const object = args.object;
  const page = object.page;
  page.frame.navigate('contact-form');
}

export function navSkills(args) {
  const object = args.object;
  const page = object.page;
  page.frame.navigate('skills-page');
}
