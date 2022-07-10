import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruits } from './fruits';



@Injectable({
  providedIn: 'root'
})


export class FruitsService {

  constructor(
    private http: HttpClient    
    ) { }

  get() {
    return this.http.get<Fruits[]>('http://localhost:3000/fruits/');
  }

  create(payload: Fruits){
    return this.http.post<Fruits>('http://localhost:3000/fruits/',payload);
  }

  //awal kesalahan pada tanda kutip harus menggunakan backquots
  // getById(id:number){
  //   return this.http.get<Fruits>('http://localhost:3000/fruits/${id}');
  // }

  // update(payload:Fruits){
  //   return this.http.put<Fruits>('http://localhost:3000/fruits/${payload.id}',payload);
  // } 
  // akhir kesalahan 

  getById(id: number){
    return this.http.get<Fruits>(`http://localhost:3000/fruits/${id}`);
  }

  update(ubah: Fruits){
    return this.http.put(`http://localhost:3000/fruits/${ubah.id}`,ubah);
  }

  delete(id: number){
    return this.http.delete<Fruits>(`http://localhost:3000/fruits/${id}`);
  }

}
