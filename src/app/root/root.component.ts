
export class AppController {
  title: string;

  $onInit() {
    this.title = 'Welcome';
  }
}

export default {
  controller: AppController,
  template: `
    <h1>{{$ctrl.title}}</h1>
  `
};
