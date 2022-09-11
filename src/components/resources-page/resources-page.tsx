import { Component, h, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { cfg } from '../../config/config';
import { CrudService } from '../../services/crud-service';
import { UtilService } from '../../services/util-service';

@Component({
  tag: 'resources-page',
  styleUrl: 'resources-page.css'
})
export class ResourcesPage {
  @Prop() history?: RouterHistory;
  @State() News:any=[];
  @State() pageNews:number=0;


  @State() statusSearchLanding = 0;
  @State() valueSearchLanding: string | undefined;
  constructor() {
    document.title = `Artikel - Desa Loa Lepu`;
    localStorage.removeItem('stories');   
  }

  getNews() {
      CrudService.getDataNew4(cfg.news.news,'publishDate,desc','4', this.pageNews).then(rs => {
        if(rs){
          this.News = rs;
        }
 
      });

  }


  async componentWillLoad(){
    await this.getNews();
  }

 async pushNews(ds:any){
  const loading = document.createElement('ion-loading');
  loading.message = 'Loading...',

  document.body.appendChild(loading);
   await loading.present();
  setTimeout(() => {
    localStorage.setItem('stories',JSON.stringify(ds));
    this.history?.push('/artikel/'+ds.title);
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

  async push(page: any){
    const loading = document.createElement('ion-loading');
    loading.message = 'Loading...',
  
    document.body.appendChild(loading);
     await loading.present();
    setTimeout(() => {
      this.history?.push(page);
    }, 1000);
  
    loading.dismiss();

  }

  async infiniteScrollData(ev: any){
    const loading = document.createElement('ion-loading');
    loading.message = 'Loading...',
    // loading.duration = 2000;

    document.body.appendChild(loading);
    await loading.present();
    // const { role, data } = await loading.onDidDismiss();
    setTimeout(() => {
      this.pageNews++;
      if(this.statusSearchLanding == 0){
        CrudService.getDataNew4(cfg.news.news,'publishDate,desc', '4', this.pageNews).then(rs => {
          if(rs){
            this.News = this.News.concat(rs);
          }else{
            this.pageNews--;
          }
        });
      }else{
        CrudService.searchData(cfg.news.news, 'title.contains', this.valueSearchLanding +'&page='+this.pageNews).then(ds => {
          if(ds){
            this.News = this.News.concat(ds);
          }else{
            this.pageNews--;
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
                this.pageNews = 0;
                this.statusSearchLanding = 0;
                this.getNews();
              }else{
                this.pageNews = 0;
                this.valueSearchLanding = value;
                
                CrudService.searchData(cfg.news.news, 'title.contains', this.valueSearchLanding +'&page='+this.pageNews).then(ds => {
                  this.statusSearchLanding = 1;
                  this.News = ds;
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
    return [
      <div class="container">
        {/* <h1 class="headline">Berita ICare</h1> */}
          <div class="div-head-title">
              <p class="p-head-title">Artikel Desa Loa Lepu</p>
          </div>
          <div class="div-list">

          <div class="search-mobile">
            <input type="search" name="search" id="search" placeholder="Cari Artikel..."
              class="appearance-none w-full outline-none text-sm focus:outline-none active:outline-none" onChange={(event)=> this.changeValue(event)} />
            <button type="submit" class="ml-1 outline-none focus:outline-none active:outline-none" onChange={(event)=> this.changeValue(event)}>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24" class="w-6 h-6">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>

         
            <div class="list">
            {this.News?.map((ds: { title: any; publishDate: any; description: any; content:any; image:any; }) => 
              <ion-row class="row-list">
                <ion-col class="list-kiri" size="3" size-xs="12" size-sm="12" size-md="4" size-lg="2.5">
                <p class="p-list-title2" onClick={() => this.pushNews(ds)}>Laborum Lorem laboris irure</p>
                <div class="div-img">
                {ds.image != null || undefined
                ?<div class="bg-gray-200 img-square">
                  <img src="../../assets/images/noimage.png" class="img-square mx-auto p-8 px-10" alt="" onClick={() => this.pushNews(ds)}/>
                </div>
                 
                :<img src={'data:image/jpeg;base64,'+ds.image} class="img-square bg-gray-400" alt="" onClick={() => this.pushNews(ds)}/>
                }
                </div>
                </ion-col>
                <ion-col class="list-kanan" size="9" size-xs="12" size-sm="12" size-md="8" size-lg="9.5">
                  <p class="p-list-title" onClick={() => this.pushNews(ds)}>Commodo duis est occaecat minim mollit</p>
                  <p class="p-list-date">Postingan Tanggal <b>{this.formatDate(ds.publishDate)}</b></p>
                   <div class="p-list-detail">Ad officia quis voluptate ad ut enim. Ea nisi duis consequat commodo ad. Labore irure non qui dolor proident magna irure. Id proident ad eu cupidatat commodo cillum sit. Dolore laborum adipisicing occaecat esse.</div>
                </ion-col>
              </ion-row>
              )}
            </div>
          </div>
          <p class="p-more"  onClick={(event)=> this.infiniteScrollData(event)}>
            <a href="#">
            View More
            </a>
          </p>

      </div>
    ];
  }
}


