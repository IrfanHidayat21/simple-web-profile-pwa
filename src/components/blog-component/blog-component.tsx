import { Component, Prop, h, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'blog-component',
  styleUrl: 'blog-component.css'
})
export class BlogIndex {
  @Prop() page?: string;
  @State() history?: RouterHistory;
  @State() strg: any;
  @State() content: any;
  @State() image: any;
  @State() titlePage: any;

  @State() stories=[];
  @State() pageStories:number=0;
  @State() storiesData : any;

  constructor() {
    this.strg = this.page?.substr(1,6);
    this.titlePage = this.page?.substring(8); 
    this.storiesData = JSON.parse(localStorage.getItem('stories') || '{}');
    Object.assign(this.storiesData);

   document.title = this.titlePage + ' - '+'iCare';

 }



 formatDate(date: any) {
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
 
 
 async pushDonasi(ds:any){
  const loading = document.createElement('ion-loading');
  loading.message = 'Loading...',

  document.body.appendChild(loading);
   await loading.present();
  setTimeout(() => {
    let strgLogin = localStorage.getItem('login');
    if(strgLogin){
      this.history?.push('/checkout/'+ds.name,{donationId:'' + this.storiesData.id, donationName:ds.category.name});
    }else{
      this.history?.replace('/login');
    }
  }, 1000);

  loading.dismiss();

 }
 
  
  async componentWillRender() {

  }


  render() {
    // if (!this.data || !this.content) {
    //   return;
    // }
    // const post = this.data;
    // const content = this.content;

    return (
      <div class="container mt-8">

        {this.strg == 'donasi'
        ?[
        <div class="blog-content">
        {this.storiesData != null
        ?<h1 class="h1-title">Ex cillum mollit quis commodo magna.</h1>
        :<h1 class="h1-title">-</h1>
        }
          <span class="post-meta">
            {this.storiesData.categoryName != null
            ?<span class="post-author-name">Produk</span>
            : <span class="post-author-name">-</span>
            }
            <span class="post-date">Postingan Tanggal <b>{this.formatDate(this.storiesData.dateStart)}</b></span>

          </span>
          {this.strg == 'donasi'
          ? [<div class="div-ket flex">
              <div class="div-terkumpul">
                <p class="p-list-ket">Harga</p>
                {this.storiesData.collected != null
                 ?<p class="p-list-donate"><b>Rp {this.formatMoney(this.storiesData.collected)}</b></p>
                 :<p class="p-list-donate"><b>Rp 0</b></p>
                }
              </div>
              <div class="div-sisa">
              <p class="p-list-ket">Stok tersedia</p>
                <p class="p-list-donate"><b>29</b></p>
              </div>
            </div>,
          //   <stencil-route-link url={'/checkout/'+this.storiesData.name}>
          //   <ion-button fill="clear" class="btn-donasi" onClick={() => this.pushDonasi(this.storiesData)}>DONASI</ion-button>
          // </stencil-route-link>
           
          ]
          :<div class="div-null"></div>
          }
          
          
          <div class="div-image">
            {this.storiesData.image != null || undefined
            ? <div class="relative h-64 my-auto bg-gray-200">
              <img  class="no-img" src="/assets/images/noimage.png" alt="No Image"/>
              </div>
            : <div class="w-full h-auto my-auto bg-gray-200">
              <img class="on-img" src={'data:image/jpeg;base64,'+this.storiesData.image} />
              </div>
            }
          </div>
          
          <div class="div-content-donasi">
          Minim ut irure ipsum velit ad veniam exercitation aliquip id. Do labore id ex deserunt sint duis. Commodo pariatur mollit adipisicing eiusmod nostrud et qui in anim pariatur ut commodo. Laborum fugiat esse magna duis occaecat labore consectetur reprehenderit cupidatat. Irure officia ad duis sint excepteur ea officia cupidatat dolor non quis. Fugiat nostrud et fugiat eu.
          </div>

        </div>
        ]
        :
        [<div class="blog-content">
        {this.storiesData != null
        ?<h1 class="h1-title">Adipisicing culpa et enim enim aute deserunt</h1>
        :<h1 class="h1-title">-</h1>
        }
          <span class="post-meta">


            <span class="post-author-name">Artikel</span>


            <span class="post-date">Postingan Tanggal <b>{this.formatDate(this.storiesData.publishDate)}</b></span>

          </span>
          
          <div class="div-image">
            {this.storiesData.image != null || undefined
            ? <div class="relative h-64 my-auto bg-gray-200">
              <img  class="no-img" src="/assets/images/noimage.png" alt="No Image"/>
              </div>
            : <div class="w-full h-auto my-auto bg-gray-200">
              <img class="on-img" src={'data:image/jpeg;base64,'+this.storiesData.image} />
              </div>
            }
          </div>
          
          <div class="div-content-donasi">
          Irure adipisicing elit eu adipisicing est exercitation proident commodo irure reprehenderit minim deserunt mollit consectetur. Consequat eiusmod qui voluptate qui eu Lorem aliqua. Occaecat dolore consequat sunt aliquip officia in eu sint occaecat irure ad amet quis. Pariatur in velit sit eu. Incididunt commodo veniam laboris tempor culpa veniam ad. Lorem minim non ut proident aliquip id. Proident cupidatat dolore et cupidatat ea labore consequat aliquip.
          </div>

        </div>
        ]
      }

        
      </div>
    );
  }
}


// const insertMetaTags = (post: BlogPostInterface) => {
//   createOgTag('og:title', `Stencil Blog - ${post.title}`);
//   createOgTag('og:description', post.description);
//   createOgTag('og:url', window.location.href);
//   createOgTag('og:image', `${window.location.origin}${post.img}`);

//   createTwitterTag('twitter:card', `summary`);
//   createTwitterTag('twitter:title', post.title);
//   createTwitterTag('twitter:description', post.description);
//   createTwitterTag('twitter:image', `${window.location.origin}${post.img}`);
//   if (post.twitter) {
//     createTwitterTag('twitter:creator', `@${post.twitter}`);
//   }
// }

// const createOgTag = (type: string, content: string) => {
//   let el = document.head.querySelector(`meta[property="${type}"]`);
//   if (!el) {
//     el = document.createElement('meta');
//     el.setAttribute('property', type);
//     el.setAttribute('content', content);
//     document.head.appendChild(el);
//   } else {
//     el.setAttribute('property', type);
//     el.setAttribute('content', content);
//   }
// };

// const createTwitterTag = (type: string, content: string) => {
//   let el = document.head.querySelector(`meta[name="${type}"]`);
//   if (!el) {
//     el = document.createElement('meta');
//     el.setAttribute('name', type);
//     el.setAttribute('content', content);
//     document.head.appendChild(el);
//   } else {
//     el.setAttribute('name', type);
//     el.setAttribute('content', content);
//   }
// };


// const localCache = new Map<string, Promise<MarkdownContent>>();

// const fetchContent = (path: string) => {
//   let promise = localCache.get(path);
//   if (!promise) {
//     promise = fetch(path).then(response => response.json());
//     localCache.set(path, promise);
//   }
//   return promise;
// }

// const toHypertext = (data: any) => {
//   if (!Array.isArray(data)) {
//     console.error('content error, hypertext is undefined')
//     return null;
//   }
//   const args = [];
//   for (let i = 0; i < data.length; i++) {
//     let arg = data[i];
//     if (i === 0 && typeof arg === 'string' && tagBlacklist.includes(arg.toLowerCase().trim())) {
//       arg = 'template';

//     } else if (i === 1 && arg) {
//       const attrs: any = {};
//       Object.keys(arg).forEach(key => {
//         const k = key.toLowerCase();
//         if (!k.startsWith('on') && k !== 'innerhtml') {
//           attrs[key] = arg[key];
//         }
//       });
//       arg = attrs;

//     } else if (i > 1) {
//       if (Array.isArray(arg)) {
//         arg = toHypertext(arg);
//       }
//     }
//     args.push(arg);
//   }
//   return (h as any).apply(null, args);
// };

// const tagBlacklist = ['script', 'link', 'meta', 'object', 'head', 'html', 'body'];
