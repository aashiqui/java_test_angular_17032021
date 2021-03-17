import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from './services/http.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bankForm: FormGroup;
  bankDetails: FormControl;
 

  errMsg: string;

  displayedColumns: string[] = ['bank', 'cardNumber', 'expiryDate'];
  dataSource :any;

  constructor(public router: Router, public fb: FormBuilder, public service: HttpService) {


    this.bankDetails = new FormControl('', Validators.required);
    
    this.bankForm = this.fb.group({
      bankDetails: this.bankDetails,
      
    })
  }

  ngOnInit(): void {

  }
  fileChange(event) {

    let reader = new FileReader();
    let fileList: FileList = event.target.files;
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    const formData = new FormData();
    formData.append('file', file, file.name);

    this.service.uploadFile(formData).subscribe((res)=>{
      console.log(res)
      this.dataSource=res;
    })

    }
}
  onSubmit(): void {

    console.log(JSON.stringify(this.bankForm.value))
    this.service.processData(this.bankForm.value).subscribe(
      (data) => {

        console.log(data);

        this.dataSource=data;


      },

      (err) => {

      }
    )




  }

}
