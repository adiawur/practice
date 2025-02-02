import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service'; 

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  myForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: DataService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      foodname: ['', Validators.required],
      foodtype: ['', Validators.required],
      description: ['', Validators.required],
      payment: ['', Validators.required]
    });
  }

  onSave() {
    if (this.myForm.valid) {
      this.productService.addProduct(this.myForm.value).subscribe(
        response => {
          console.log('Product added successfully:', response);
          this.successMessage = 'Product added successfully';
          this.errorMessage = null;
          this.myForm.reset(); 
        },
        error => {
          console.error('Error adding product:', error);
          this.errorMessage = 'Failed to add product';
          this.successMessage = null;
        }
      );
    } else {
    }
  }
}
