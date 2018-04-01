import { 
	Component, 
	ViewChild } from '@angular/core';
import { 
	NgForm, 
	FormGroup, 
	FormControl,
	FormArray, 
	Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//RactiveForm
	signupForm : FormGroup;
	forbiddenUser = ['Anna', 'Test'];
	ngOnInit() {
		/*this.signupForm = new FormGroup({
			'txtUserName' : new FormControl(null, Validators.required),
			'txtEmail' : new FormControl(null, [Validators.required, Validators.email]),
			'gender1' : new FormControl('Male')
		});*/
		this.signupForm = new FormGroup({
			'userData' : new FormGroup({				
			'txtUserName' : new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
			'txtEmail' : new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail)
			}),
			'gender1' : new FormControl('Male'),
			'hobbies' : new FormArray([])
		});
		/*this.signupForm.valueChanges.subscribe((value) => console.log(value););*/
		this.signupForm.statusChanges.subscribe((status) => console.log(status));
		this.signupForm.setValue({
			'userData' : {
				'txtUserName' : 'Santosh',
				'txtEmail' : 'santosh@gmail.com'
			},
			'gender1' : 'Male',
			'hobbies' : []
		});
		this.signupForm.patchValue({
			'userData' : {
				'txtUserName' : 'Sachin'
			}
		});
			
	}
	onReactiveSubmit() {
		console.log(this.signupForm);
		this.signupForm.reset();
	}
	onAddHobbie() {
		const control = new FormControl(null, Validators.required);
		(<FormArray>this.signupForm.get('hobbies')).push(control);
	}

	forbiddenName(control : FormControl) : {[s : string] : boolean} {
		if (this.forbiddenUser.indexOf(control.value) !== -1) {
			return {'nameIsFirbidden' : true};
		}else {
			null;
		}
	}
forbiddenEmail(control : FormControl) : Promise<any> | Observable<any> {
	const promise = new Promise<any>((resolve, reject) => {
		setTimeout(() => {
			if (control.value === 'test@test.com') {
				resolve({'emailforbidden': true});
			} else {
				resolve(null);
			}
		},1500);
	});
	return promise;
}

	@ViewChild('f') singupForm : NgForm; 
	@ViewChild('AssiF') AssiForm : NgForm; 
	deQuestionsAns = "";
	defaultQ = "pet";
	genders = ['Male','Female'];
	showData = false;
	user = {
    	txtuserName : '',
    	txtemail : '',
    	secretQustion : '',
    	QuestionsAns : '',
    	gender : ''
    }
	
  suggestUserName() {
    const suggestedName = 'Superuser';
    
     // this.singupForm.setValue({
    	// userData : {
    	// 	txtuserName : suggestedName,
    	// 	txtemail : ''
    	// },
    	// secretQustion :'teacher',
    	// QuestionsAns : '',
    	// gender : 'Male'
     // });
    this.singupForm.form.patchValue({
    	userData : { 
    	txtuserName : suggestedName
    }
    });
  }
  // onSubmit(form :NgForm) {
  // 	console.log(form);
  // }
  onSubmit() {
  	this.showData = true;
  	this.user.txtuserName = this.singupForm.value.userData.txtuserName,
  	this.user.txtemail = this.singupForm.value.userData.txtemail,
  	this.user.secretQustion = this.singupForm.value.secretQustion,
  	this.user.QuestionsAns = this.singupForm.value.QuestionsAns,
  	this.user.gender = this.singupForm.value.gender

  	this.singupForm.reset();
  }

  AssFormSubmit() {
  	console.log(this.AssiForm)
  }
}
