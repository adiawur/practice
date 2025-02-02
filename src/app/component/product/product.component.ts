import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.dataService.getAllProducts().subscribe(
      (response: any[]) => {
        this.products = response;
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.dataService.deleteProduct(id). subscribe(
        response => {
          console.log('Product deleted successfully:', response);
        
          this.fetchProducts();
        },
        error => {
          console.error('Error deleting product:', error);
        
        }
      );
    }
  }

  editProduct(id: number): void {
  
    const product = this.products.find(p => p.id === id);
    

    const editedProduct = {
      foodname: prompt('Enter new food name:', product?.foodname),
      foodtype: prompt('Enter new food type:', product?.foodtype),
      description: prompt('Enter new description:', product?.description),
      payment: prompt('Enter new payment:', product?.payment),
    };

    if (editedProduct.foodname && editedProduct.foodtype && editedProduct.description && editedProduct.payment) {
      this.dataService.updateProduct(id, editedProduct).subscribe(
        response => {
          console.log('Product updated successfully:', response);
          this.fetchProducts();
        },
        error => {
          console.error('Error updating product:', error);
        }
      );
      
    } else {
      console.log('Editing canceled or invalid input.');
    }
  }
}
