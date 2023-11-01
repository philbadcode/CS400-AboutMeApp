import { createViewModel } from './main-view-model';

export function onNavigatingTo(args) {
  const page = args.object.page;
  page.bindingContext = createViewModel();
}

export function navBio(args) {
  const page = args.object.page;
  page.frame.navigate('bio-page');
}

export function navContact(args) {
  const page = args.object.page;
  page.frame.navigate('contact-form');
}

export function navSkills(args) {
  const page = args.object.page;
  page.frame.navigate('skills-page');
}
