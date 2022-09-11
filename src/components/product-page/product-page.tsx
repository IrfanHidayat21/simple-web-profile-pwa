import { Component,State, Prop, h } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { cfg } from '../../config/config';
import { CrudService } from '../../services/crud-service';
import { UtilService } from '../../services/util-service';

@Component({

  tag: 'product-page',
  styleUrl: 'product-page.css',

})
export class ProductPage {
  @Prop() history?: RouterHistory;
  @State() Stories:any=[];
  @State() pageStories:number=0;


  @State() statusSearchLanding = 0;
  @State() valueSearchLanding: string | undefined;
  constructor() {
    document.title = `Produk - Desa Loa Lepu`;
    localStorage.removeItem('stories');   
  }

  getStories() {

    CrudService.getDataTop4(cfg.program.programs,'desc', '3', this.pageStories).then(rs => {
        if (rs){
          this.Stories = rs;
        }
    });
  }


async componentWillLoad(){
  await this.getStories();
}


async pushStories(ds:any){
  const loading = document.createElement('ion-loading');
  loading.message = 'Loading...',

  document.body.appendChild(loading);
   await loading.present();
  setTimeout(() => {
    localStorage.setItem('stories',JSON.stringify(ds));
    this.history?.push('/produk/'+ds.name);  
  }, 1000);

  loading.dismiss();

}

formatDate(date:any) {
let dt = new Date(date);
let a = dt.getDate().toString();
let b:any = dt.getMonth().toString();
let bMonth = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];

let c = dt.getFullYear().toString();
return a + ' ' + bMonth[b] + ' ' + c;
}



formatMoney(money: any) {
let m = money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
return m;
}

formatNumber(n : any) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


async infiniteScrollData(ev: any){
  const loading = document.createElement('ion-loading');
  loading.message = 'Loading...',
  // loading.duration = 2000;

  document.body.appendChild(loading);
  await loading.present();


  // const { role, data } = await loading.onDidDismiss();
setTimeout(() => {
  this.pageStories++;
  if(this.statusSearchLanding == 0){
    CrudService.getDataTop4(cfg.program.programs,'desc','3', this.pageStories).then(rs => {
      if(rs){
        this.Stories = this.Stories.concat(rs);
      }else{
        this.pageStories--;
      }
    });
  }else{
    CrudService.searchData(cfg.program.programs, 'name.contains', this.valueSearchLanding +'&page='+this.pageStories).then(ds => {
      if(ds){
        this.Stories = this.Stories.concat(ds);
      }else{
        this.pageStories--;
      }

    });
  }


ev.target.complete();
  
}, 500);
loading.dismiss();

}

  async changeValue(ev:any) {
    const loading = document.createElement('ion-loading');
    loading.message = 'Loading...',
    // loading.duration = 2000;
  
    document.body.appendChild(loading);
    await loading.present();
      setTimeout(() => {
        const value = ev.target.value;
        switch (ev.target.name) {
  
        case 'searchEngine': {
            if(value == null || value == '' || value == ' ' || value.length < 1){
              this.pageStories = 0;
              this.statusSearchLanding = 0;
              this.getStories();
            }else{
              this.pageStories = 0;
              this.valueSearchLanding = value;
              
              CrudService.searchData(cfg.program.programs, 'name.contains', this.valueSearchLanding +'&page='+this.pageStories).then(ds => {
                this.statusSearchLanding = 1;
                this.Stories = ds;
                if(ds.totalElements == 0){
                  UtilService.presentToastWithOptions('Data tidak ditemukan');
                }
              });
            }
          }
          break;
  
        }
        
      }, 500);
      loading.dismiss();
}
  render() {
    return (
      <div class="container">
          <div class="div-head-title">
              <p class="p-head-title">Produk Desa Loa Lepu</p>
          </div>

          <div class="search-mobile">
            <input type="search" name="search" id="search" placeholder="Produk apa yang Anda butuhkan?"
              class="appearance-none w-full outline-none text-sm focus:outline-none active:outline-none" onChange={(event)=> this.changeValue(event)} />
            <button type="submit" class="ml-1 outline-none focus:outline-none active:outline-none" onChange={(event)=> this.changeValue(event)}>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24" class="w-6 h-6">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>

        <div class="grid-product">
        {this.Stories?.map((ds: { name: any; dateStart: any; desc: any; collected: null; dateEnd: any; image:any; }) =>
        <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 mx-auto">
          <div class="px-4 py-2">
            <h1 class="title-product">Duis sint consectetur quis labore</h1>
          </div>
          <div class="relative bg-gray-100"> 
          {ds.image != null || undefined
          ?<img class="no-product"
            src="../../assets/images/noproduct.svg"
            alt="" />
          :<img class="h-56 w-full object-cover mt-2"
          src={'data:image/jpeg;base64,'+ds.image} 
          alt="" />
           }
           <div class="rounded-full absolute p-2 top-0 right-0 text-sm text-gray-200 font-bold  bg-gray-900 mr-4 mt-4">999/pcs</div>
          </div>

          <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
          {ds.collected != null
          ?<h1 class="text-gray-200 font-bold text-xl">Rp {this.formatMoney(ds.collected)}</h1>
          :<h1 class="text-gray-200 font-bold text-xl">Rp 0</h1>
          }
            <button class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded" onClick={() => this.pushStories(ds)}>Lihat</button>
          </div>
        </div>
        )}
        </div>
      </div>
    );
    }
}
