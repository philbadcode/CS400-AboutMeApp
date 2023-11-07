import { createViewModel } from './main-view-model';

export function onNavigatingTo(args) {
  const page = args.object.page;
  page.bindingContext = createViewModel();
}

export function navBack(args) {
  const page = args.object.page;
  page.frame.goBack();
}

const ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
const listViewModule = require("@nativescript/core/ui/list-view");
exports.pageLoaded = function(args) {
  const page = args.object;
  const listView = page.getViewById("myListView");
  const itemList = new ObservableArray([
    { name: 'PLC Programming' },
    { name: 'PCB Design' },
    { name: 'Database Design' },
    { name: '3d Modeling' },
    { name: 'HMI Design' },
  ]);
  listView.items = itemList;
};
