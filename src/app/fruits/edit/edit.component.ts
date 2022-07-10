import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  fruitForm: Fruits = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fruitService: FruitsService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) =>{
      var id = Number(param.get('id'));
      this.getByid(id);
    });
  }

  getByid(id: number){
    this.fruitService.getById(id).subscribe((data) => {
      this.fruitForm = data;
    });
  }

  update(){
    this.fruitService.update(this.fruitForm).subscribe({
      next:(data) =>{
        this.router.navigate(['/fruits/home']);
      },
      error(err){
        console.log(err);
      }
    })
  }

}
