import '@stencil/router';
import { LocationSegments, RouterHistory } from '@stencil/router';
import { Component, Element, Listen, State, h } from '@stencil/core';
import SiteProviderConsumer, { SiteState } from '../../global/site-provider-consumer';
import { CrudService } from '../../services/crud-service';
import { cfg } from '../../config/config';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  history?: RouterHistory;
  @State() about:any=[];
  @State() pageAbout:number=0;

  elements = [
    'site-header',
    'site-menu',
    'banner',
    'app-burger',
    'main'
  ];
  
  @Element() el!: HTMLElement;

  @State() isLeftSidebarIn: boolean = false;

  @Listen('resize', { target: 'window' })
  handleResize() {
    requestAnimationFrame(() => {
      if (window.innerWidth > 768 && this.isLeftSidebarIn) {
        this.isLeftSidebarIn = false;
        document.body.classList.remove('no-scroll');
        this.elements.forEach((el) => {
          this.el.querySelector(el)!.classList.remove('left-sidebar-in');
        });
      }
    });
  }

  
  private setHistory = ({ history }: { history: RouterHistory }) => {
    if (!this.history) {
      this.history = history;
      this.history.listen((location: LocationSegments) => {
        // Google Analytics
        (window as any).gtag('config', 'UA-44023830-34', { 'page_path': location.pathname + location.search });

        // Hubspot
        // (window as any)._hsq.push(['setPath', location.pathname + location.search ]);
        // (window as any)._hsq.push(['trackPageView']);
      });
    }
  }

  getAbout() {
    CrudService.getData(cfg.about.about,'desc', this.pageAbout).then(rs => {

        this.about = rs;

    });
  }

  componentDidLoad() {
    this.getAbout();
    this.isLeftSidebarIn = false;
   
  }

  private toggleLeftSidebar = () => {
    if (window.innerWidth >= 768) {
      return;
    }
    const elements = this.elements
      .map(el => this.el.querySelector(el))
      .filter(el => !!el) as Element[];

    if (this.isLeftSidebarIn) {
      this.isLeftSidebarIn = false;
      document.body.classList.remove('no-scroll');
      elements.forEach(el => {
        el.classList.remove('left-sidebar-in');
        el.classList.add('left-sidebar-out');
      });
    } else {
      this.isLeftSidebarIn = true;
      document.body.classList.add('no-scroll');
      elements.forEach(el => {
        el.classList.add('left-sidebar-in');
        el.classList.remove('left-sidebar-out');
      });
    }
  }

  render() {
    const siteState: SiteState = {
      isLeftSidebarIn: this.isLeftSidebarIn,
      toggleLeftSidebar: this.toggleLeftSidebar
    };

    return (
      <SiteProviderConsumer.Provider state={siteState}>
        <div id="up"></div>
        <site-header />
        
        <main>
          <stencil-router scrollTopOffset={0}>
            <stencil-route style={{ display: 'none' }} routeRender={this.setHistory}/>
            <stencil-route-switch>
              
              <stencil-route url="/" component="landing-page" exact={true} />
              
              <stencil-route url="/produk/:pageName" routeRender={({ match }) => (
                <blog-component page={match!.url}></blog-component>
              )}/>
              <stencil-route url="/artikel/:pageName" routeRender={({ match }) => (
                <blog-component page={match!.url} ></blog-component>
              )}/>
              <stencil-route url="/tentang-kami" component="app-about" />
              <stencil-route url="/produk" component="product-page" />
              <stencil-route url="/artikel" component="resources-page" />

              <stencil-route component='notfound-page'></stencil-route>
              <stencil-route component='banner'></stencil-route>
            </stencil-route-switch>
          </stencil-router>
         <footer>
              <div class="container">
                <div class="footer-col">
                  <app-icon name="logo"/>
                  <p>Copyright ©2020 Desa Loa Lepu</p>
                  <ul class="external-links list--unstyled">
                    <li>
                      <a rel="noopener" class="link--external" target="_blank" href="" aria-label="Facebook">
                      <img src="../../assets/images/fb.png" class="w-6"/>
                      </a>
                    </li>
                    <li>
                      
                    {this.about?.map(() =>
                      <a rel="noopener" class="link--external" target="_blank" href="" aria-label="Instagram">
                        <app-icon name="ig"></app-icon>
                      </a>
                    )}
                    </li>
                    <li>
                    {this.about?.map(() =>
  
                      <a rel="noopener" class="link--external" target="_blank" href="" aria-label="Whatsapp">
                        <app-icon name="wa"></app-icon>
                      </a>

                    )}
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
         
        </main>
      </SiteProviderConsumer.Provider>
    );
  }
}
