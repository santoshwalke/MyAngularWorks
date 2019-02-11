import { Component } from '@angular/core';

import { 
	trigger, 
	state, 
	style, 
	transition, 
	animate,
	keyframes,
	group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations : [
  	trigger('divState', [
  		state('normal', style({
  			/*backgroundColor : 'red',*/
  			'background-color' : 'red',
  			transform : 'translateX(0)'
  		})),
  		state('highlighted', style({
  			/*backgroundColor : 'blue',*/
  			'background-color' : 'blue',
  			transform : 'translateX(100px)'
  		})),
  		transition('normal <=> highlighted', animate(300)),
  		transition('highlighted => normal', animate(800))
  	]),
  	trigger('WildState', [
  		state('normal', style({
  			/*backgroundColor : 'red',*/
  			'background-color' : 'red',
  			transform : 'translateX(0) scale(1)'
  		})),
  		state('highlighted', style({
  			/*backgroundColor : 'blue',*/
  			'background-color' : 'blue',
  			transform : 'translateX(100px) scale(1)'
  		})),
  		state('shrunken', style({
  			/*backgroundColor : 'blue',*/
  			'background-color' : 'green',
  			transform : 'translateX(0) scale(0.5)'
  		})),
  		transition('normal => highlighted', animate(300)),
  		transition('highlighted => normal', animate(800)),
  		transition('shrunken <=> *', [
  			style({
  				'background-color' : 'orange',
  			}),
  			animate(1000, style({
  				borderRadius : '50px'
  			})),
  			animate(500)
  		])
  	]),
  	trigger('listAnimation', [
  		state('in', style({
  			/*backgroundColor : 'red',*/
  			opacity : 1,
  			transform : 'translateX(0)'
  		})),
  		transition('void => *', [
  			style({
  			/*backgroundColor : 'blue',*/
  			opacity : 0,
  			transform : 'translateX(-100px)'
  		}),
  		animate(300)
  		]),
  		transition('* => void', [
  		animate(300, style({
  			transform : 'translateX(100px)',
  			opacity : 0
  		}))
  		]),
  	]),

  	trigger('listAnimation1', [
  		state('in', style({
  			/*backgroundColor : 'red',*/
  			opacity : 1,
  			transform : 'translateX(0)'
  		})),
  		transition('void => *', [
  			animate(1000, keyframes([
  				style({
  					transform : 'translateX(-100px)',
  					opacity : 0,
  					offset : 0
  				}),
  				style({
  					transform : 'translateX(-50px)',
  					opacity : 0.5,
  					offset : 0.3
  				}),
  				style({
  					transform : 'translateX(-20px)',
  					opacity : 1,
  					offset : 0.8
  				}),
  				style({
  					transform : 'translateX(0px)',
  					opacity : 1,
  					offset : 1
  				})
  			]))
  		]),
  		transition('* => void', [
  		group([
  			animate(300, style({
  				color : 'red'
  			})),
  			animate(800, style({
  				transform : 'translateX(100px)',
  				opacity : 0
  			}))
  		])
  		]),
  	])
  ]
})
export class AppComponent {
	state = 'normal';
	wildstate = 'normal';

  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }
    onAnimation() {
    	this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    	this.wildstate == 'normal' ? this.wildstate = 'highlighted' : this.wildstate = 'normal';
    }
    onShrink() {
    	this.wildstate = 'shrunken'
    }
    onDelete(index) {
      this.list.splice(index, 1);
    }
}
