import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  photos = [];
  loading = true
  error = false
  
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.getPhotos()
  }

  getPhotos(){
    this.loading = true
    this.apiService.get('12', '5').subscribe((data: any[]) => {
      this.loading = false
      data.map(res => {
        this.photos.push({
          id: res.id,
          title: res.title,
          numberActiveSatrs: res.id % 5 + 1,
          numberStars: 5 - (res.id % 5 + 1)
        })
      },(error : any)=>{
        this.loading = false
        this.error = true
      }
      );
    })
  }

  // Delete issue
  deletePhoto(data : any) {
    this.photos = this.photos.filter(res => res.id != data.id);
  }

}
