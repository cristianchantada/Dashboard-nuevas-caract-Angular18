import { Component, Input, booleanAttribute } from '@angular/core';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [SidemenuComponent],
  template: `
		<h1 class="text-3xl mb-5">{{ title }}</h1>
	`,
  styles: ``
})
export class TitleComponent {

	@Input({required: true}) title!: string;
	@Input({transform: booleanAttribute}) withShadow: boolean = false;

}
