import { Component, h, State, Listen } from '@stencil/core';
import { CrudService } from '../../services/crud-service';
import { cfg } from '../../config/config';

@Component({
  tag: 'app-about',
  styleUrl: 'about.css',

})
export class About {
  @State() about:any=[];
  @State() pageAbout:number=0;

  @State() callUs: string = 'HUBUNGI KAMI';
  @Listen('resize', { target: 'window' })
  
  handleResize() {
    requestAnimationFrame(() => {
      if (window.innerWidth > 768) {
        this.callUs = 'HUBUNGI KAMI';
      }
    });
  }
  constructor() {
    document.title = `Tentang-kami - Desa Loa Lepu`;
    
  }

  componentDidLoad(){
    this.getAbout();
  }

  checkContact(text: string) {
    if (window.innerWidth <= 768) {
      this.callUs = text;
      setTimeout(() => {
        this.callUs = 'HUBUNGI KAMI';
      },5000);
    }else {
      this.callUs = 'HUBUNGI KAMI';
    }
  }

  getAbout() {
    CrudService.getData(cfg.about.about,'desc', this.pageAbout).then(rs => {

        this.about = rs;

    });
  }


  render() {
    return [

      <div class="container con-about">

      <p class="p-list-title2">TENTANG DESA LOA LEPU , TENGGARONG</p>

      <div class="div-about-img">
        <div class="div-img-desa">
        <img src="/assets/images/kantor-desa.jpg" class="mx-auto rounded-lg" alt="Kantor Desa Loa Lepu"/>
        </div>
        <div class="div-about-desc">
        <p class="p-list-title">TENTANG DESA LOA LEPU, TENGGARONG</p>
          <p class="p-list-detail"><b>Loa Lepu</b> adalah salah satu desa di Kecamatan Tenggarong Seberang, Kabupaten Kutai Kartanegara, Provinsi Kalimantan Timur, Indonesia.
Desa Loa Lepu adalah salah satu dari 18 (delapan belas) desa dalam wilayah kewenangan Kecamatan Tenggarong Seberang Kabupaten Kutai Kartanegara Provinsi Kalimantan Timur.</p>
        </div>
      </div>

      <div class="div-map">
      <iframe src="https://maps.google.com/maps?q=Loa%20Lepu%2C%20Kabupaten%20Kutai%20Kartanegara%2C%20Kalimantan%20Timur&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="400px" frameborder="0" aria-hidden="false" tabindex="0"></iframe>
      </div>

      <div class="py-6">
        <p class="p-list-detail">
        <b>Legenda dan sejarah</b> dahulunya desa ini dipinitif pada tahun dan disebut Kampong Luah Lepu, yang dipimpin oleh seorang petinggi. Kampung Luah Lepu berdiri sejak zaman penjajahan Hindia Belanda hingga zaman penjajahan Jepang, dan sampai sekarang berubah sebutan menjadi Desa Loa Lepu dalam Sistem Pemerintahan Negara Kesatuan Republik Indonesia, yang dipimpin oleh Kepala Desa. Hingga pemerintahan Swapraja-Daerah Istimewa Kutai (DIK), yang dulunya dipimpin oleh Wedana dan di wilayah kecamatan dipimpin oleh Asisten Wedana yang kemudian disebut Camat, Desa Loa Lepu masih di bawah kewenangan Kecamatan Tenggarong. Setelah pemekaran kecamatan tahun 1992, maka Desa Loa Lepu berada di bawah Kewenangan Kecamatan Tenggarong Seberang. Sebutan Luah Lepu berubah menjadi Loa Lepu kerana pada tahun 1952-1965 ada kegiatan eksploitasi batu bara oleh CV. Loa Lepu, milik A.R Sukmawira, di mana buruhnya banyak berasal dari jawa, maka kata “Luah“ berubah menjadi “Loa“. Adapun arti kata “Luah“ adalah anak sungai. Sedangkan kata “Lepu“ timbul dari kata “Sempu“, yaitu daun pohon sempu, sejenis tumbuhan perdu yang daunnya rontok memenuhi aliran sungai, sehingga dikenal dengan Loa Lepu.
        </p>
      </div>

      <div class="div-head-title">
          <p class="p-head-title">{this.callUs}</p>
          
      </div>
      <ion-grid class="grid-contact">
          <ion-row>
              <ion-col class="col-1 " size="3" size-xs="3" size-sm="3" size-md="3" size-lg="3">
                  <div class="mx-auto">
                  {this.about?.map((_ds: { address: any; }) =>
                    <div class="flex-contact">
                      <div class="div-logo">
                      <img src="../../assets/images/fb.png" class="img-contact" alt="Desa Loa Lepu" onClick={() => this.checkContact('Desa Loa Lepu') }/>
                      </div>
                        <p class="p-contact">Desa Loa Lepu</p> 
                    </div>
                     )}
                  </div>
              </ion-col>
              <ion-col class="col-3" size="3" ssize-xs="3" size-sm="3" size-md="3" size-lg="3">
              {this.about?.map((_ds: { telp: any; }) =>
              <div class="flex-contact">
                    <div class="div-logo">
                    <img src="../../assets/images/wa.png" class="img-contact" alt="082157259756" onClick={() => this.checkContact('082157259756') }/>
                    </div>
                 
                      <p class="p-contact">082157259756</p>

                    
                  </div>
                  )}
              </ion-col>
              <ion-col class="col-3" size="3" size-xs="3" size-sm="3" size-md="3" size-lg="3">
              {this.about?.map((_ds: { fax: any; }) =>
              <div class="flex-contact">
                
                    <div class="div-logo">
                    <img src="../../assets/images/email.png" class="img-contact" onClick={() => this.checkContact('loalepudesa@gmail.com') } alt="loalepudesa@gmail.com"/>
                    </div>

                        <p class="p-contact">loalepudesa@gmail.com</p>
                    
                  </div>
              )}
              </ion-col>
              <ion-col class="col-2" size="3" size-xs="3" size-sm="3" size-md="3" size-lg="3">
                  <div  class="mx-auto">
                  {this.about?.map((_ds: { address2: any; }) =>
                    <div class="flex">
                      <div class="div-logo">
                      <img src="../../assets/images/ig.png" class="img-contact" alt="@loa_lepu" onClick={() => this.checkContact('@loa_lepu') } />
                      </div>
                      

                        <p class="p-contact">@loa_lepu</p>
                      
                     
                    </div>
                     )}
                  </div>
              </ion-col>
             
          </ion-row>
    </ion-grid>
    <div class="clear-about"></div>
     
    </div>
    ]
  }

}
