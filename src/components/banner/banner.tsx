import { Component, h, State } from '@stencil/core';
import { cfg } from '../../config/config';
import { CrudService } from '../../services/crud-service';


@Component({
tag: 'app-banner',
styleUrl: 'banner.css',


})
export class Banner {
@State() slideIndex = 1;

@State() Banner:any=[];
@State() pageBanner:number=0;
@State() loadBanner: any = 0;

public slideOpts = {
  
  initialSlide: 0,
  speed: 400,
  autoplay:true,

};

async componentDidLoad(){
 //await this.getBanner();
}


getBanner() { CrudService.getData(cfg.banner.banners,'desc',
  this.pageBanner).then(rs=> {
  if(rs.length > 0 ){

  this.Banner = rs;
  this.loadBanner = 1;
  setTimeout(() => {
  }, 500);

  }

  })
}

  formatDate(date: any) {
  let dt = new Date(date);
  let a = dt.getDate().toString();
  let b:any = dt.getMonth().toString();
  let bMonth = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober',
  'Nopember', 'Desember'];

  let c = dt.getFullYear().toString();
  return a + ' ' + bMonth[b] + ' ' + c;
  }

  render() {
  return [
  <div class="container">
<ion-slides mode="md" class="w-sreen slides-ion" pager={true} options={this.slideOpts}>
    {/* {this.Banner?.map((ds: { name: any; publishDate: any; image:any; }) =>
    this.loadBanner == 1
    ? <ion-slide class=" mx-auto p-2"> 
    <div class="fade">

      {ds.image == null || undefined
      ?<img src="/assets/images/no-ex-banner.png" class=" text-center w-full mx-auto h-auto bg-no-repeat rounded-lg " />
      :<img src={'data:image/jpeg;base64,'+ds.image} class="img-slide " />
      }

      <div class=" div-text-banner">

        <div class="w-full">
          <p class="text ml-2">
          {this.formatDate(ds.publishDate)}
          </p>
          
          <stencil-route-link class="">
            <p class="p-title ml-2">
              Reprehenderit laborum incididunt officia eiusmod in irure exercitation duis commodo ea proident.
            </p>
          </stencil-route-link>
        </div>

      </div>

    </div>
    </ion-slide>
    :''
    )} */}


  <ion-slide class=" mx-auto p-2"> 
    <div class="fade">

      <img src="/assets/images/no-ex-banner.png" class=" text-center w-full mx-auto h-auto bg-no-repeat rounded-lg " />

      <div class=" div-text-banner">

        <div class="w-full">
          <p class="text ml-2">
          4 Mei 2020
          </p>
          
          <stencil-route-link class="">
            <p class="p-title ml-2">
              Reprehenderit laborum incididunt officia eiusmod in irure exercitation duis commodo ea proident.
            </p>
          </stencil-route-link>
        </div>

      </div>

    </div>
    </ion-slide>

    <ion-slide class=" mx-auto p-2"> 
    <div class="fade">

      <img src="/assets/images/no-ex-banner.png" class=" text-center w-full mx-auto h-auto bg-no-repeat rounded-lg " />

      <div class=" div-text-banner">

        <div class="w-full">
          <p class="text ml-2">
          4 Mei 2020
          </p>
          
          <stencil-route-link class="">
            <p class="p-title ml-2">
              Reprehenderit laborum incididunt officia eiusmod in irure exercitation duis commodo ea proident.
            </p>
          </stencil-route-link>
        </div>

      </div>

    </div>
    </ion-slide>

    <ion-slide class=" mx-auto p-2"> 
    <div class="fade">

      <img src="/assets/images/no-ex-banner.png" class=" text-center w-full mx-auto h-auto bg-no-repeat rounded-lg " />

      <div class=" div-text-banner">

        <div class="w-full">
          <p class="text ml-2">
          4 Mei 2020
          </p>
          
          <stencil-route-link class="">
            <p class="p-title ml-2">
              Reprehenderit laborum incididunt officia eiusmod in irure exercitation duis commodo ea proident.
            </p>
          </stencil-route-link>
        </div>

      </div>

    </div>
    </ion-slide>



</ion-slides>
  </div>
  ];
  }

  }
