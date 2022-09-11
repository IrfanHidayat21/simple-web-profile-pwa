/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { RouterHistory } from "@stencil/router";
import { SiteStructureItem } from "./global/definitions";
export namespace Components {
    interface AppAbout {
    }
    interface AppBanner {
    }
    interface AppBurger {
        "toggleLeftSidebar": () => void;
    }
    interface AppIcon {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface BlogComponent {
        "page"?: string;
    }
    interface LandingPage {
        "history"?: RouterHistory;
    }
    interface NotfoundPage {
    }
    interface PreFooter {
    }
    interface ProductPage {
        "history"?: RouterHistory;
    }
    interface ResourcesPage {
        "history"?: RouterHistory;
    }
    interface SiteHeader {
    }
    interface SiteMenu {
        "selectedParent"?: SiteStructureItem;
        "siteStructureList": SiteStructureItem[];
    }
}
declare global {
    interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {
    }
    var HTMLAppAboutElement: {
        prototype: HTMLAppAboutElement;
        new (): HTMLAppAboutElement;
    };
    interface HTMLAppBannerElement extends Components.AppBanner, HTMLStencilElement {
    }
    var HTMLAppBannerElement: {
        prototype: HTMLAppBannerElement;
        new (): HTMLAppBannerElement;
    };
    interface HTMLAppBurgerElement extends Components.AppBurger, HTMLStencilElement {
    }
    var HTMLAppBurgerElement: {
        prototype: HTMLAppBurgerElement;
        new (): HTMLAppBurgerElement;
    };
    interface HTMLAppIconElement extends Components.AppIcon, HTMLStencilElement {
    }
    var HTMLAppIconElement: {
        prototype: HTMLAppIconElement;
        new (): HTMLAppIconElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLBlogComponentElement extends Components.BlogComponent, HTMLStencilElement {
    }
    var HTMLBlogComponentElement: {
        prototype: HTMLBlogComponentElement;
        new (): HTMLBlogComponentElement;
    };
    interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {
    }
    var HTMLLandingPageElement: {
        prototype: HTMLLandingPageElement;
        new (): HTMLLandingPageElement;
    };
    interface HTMLNotfoundPageElement extends Components.NotfoundPage, HTMLStencilElement {
    }
    var HTMLNotfoundPageElement: {
        prototype: HTMLNotfoundPageElement;
        new (): HTMLNotfoundPageElement;
    };
    interface HTMLPreFooterElement extends Components.PreFooter, HTMLStencilElement {
    }
    var HTMLPreFooterElement: {
        prototype: HTMLPreFooterElement;
        new (): HTMLPreFooterElement;
    };
    interface HTMLProductPageElement extends Components.ProductPage, HTMLStencilElement {
    }
    var HTMLProductPageElement: {
        prototype: HTMLProductPageElement;
        new (): HTMLProductPageElement;
    };
    interface HTMLResourcesPageElement extends Components.ResourcesPage, HTMLStencilElement {
    }
    var HTMLResourcesPageElement: {
        prototype: HTMLResourcesPageElement;
        new (): HTMLResourcesPageElement;
    };
    interface HTMLSiteHeaderElement extends Components.SiteHeader, HTMLStencilElement {
    }
    var HTMLSiteHeaderElement: {
        prototype: HTMLSiteHeaderElement;
        new (): HTMLSiteHeaderElement;
    };
    interface HTMLSiteMenuElement extends Components.SiteMenu, HTMLStencilElement {
    }
    var HTMLSiteMenuElement: {
        prototype: HTMLSiteMenuElement;
        new (): HTMLSiteMenuElement;
    };
    interface HTMLElementTagNameMap {
        "app-about": HTMLAppAboutElement;
        "app-banner": HTMLAppBannerElement;
        "app-burger": HTMLAppBurgerElement;
        "app-icon": HTMLAppIconElement;
        "app-root": HTMLAppRootElement;
        "blog-component": HTMLBlogComponentElement;
        "landing-page": HTMLLandingPageElement;
        "notfound-page": HTMLNotfoundPageElement;
        "pre-footer": HTMLPreFooterElement;
        "product-page": HTMLProductPageElement;
        "resources-page": HTMLResourcesPageElement;
        "site-header": HTMLSiteHeaderElement;
        "site-menu": HTMLSiteMenuElement;
    }
}
declare namespace LocalJSX {
    interface AppAbout {
    }
    interface AppBanner {
    }
    interface AppBurger {
        "toggleLeftSidebar"?: () => void;
    }
    interface AppIcon {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface BlogComponent {
        "page"?: string;
    }
    interface LandingPage {
        "history"?: RouterHistory;
    }
    interface NotfoundPage {
    }
    interface PreFooter {
    }
    interface ProductPage {
        "history"?: RouterHistory;
    }
    interface ResourcesPage {
        "history"?: RouterHistory;
    }
    interface SiteHeader {
    }
    interface SiteMenu {
        "selectedParent"?: SiteStructureItem;
        "siteStructureList"?: SiteStructureItem[];
    }
    interface IntrinsicElements {
        "app-about": AppAbout;
        "app-banner": AppBanner;
        "app-burger": AppBurger;
        "app-icon": AppIcon;
        "app-root": AppRoot;
        "blog-component": BlogComponent;
        "landing-page": LandingPage;
        "notfound-page": NotfoundPage;
        "pre-footer": PreFooter;
        "product-page": ProductPage;
        "resources-page": ResourcesPage;
        "site-header": SiteHeader;
        "site-menu": SiteMenu;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-about": LocalJSX.AppAbout & JSXBase.HTMLAttributes<HTMLAppAboutElement>;
            "app-banner": LocalJSX.AppBanner & JSXBase.HTMLAttributes<HTMLAppBannerElement>;
            "app-burger": LocalJSX.AppBurger & JSXBase.HTMLAttributes<HTMLAppBurgerElement>;
            "app-icon": LocalJSX.AppIcon & JSXBase.HTMLAttributes<HTMLAppIconElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "blog-component": LocalJSX.BlogComponent & JSXBase.HTMLAttributes<HTMLBlogComponentElement>;
            "landing-page": LocalJSX.LandingPage & JSXBase.HTMLAttributes<HTMLLandingPageElement>;
            "notfound-page": LocalJSX.NotfoundPage & JSXBase.HTMLAttributes<HTMLNotfoundPageElement>;
            "pre-footer": LocalJSX.PreFooter & JSXBase.HTMLAttributes<HTMLPreFooterElement>;
            "product-page": LocalJSX.ProductPage & JSXBase.HTMLAttributes<HTMLProductPageElement>;
            "resources-page": LocalJSX.ResourcesPage & JSXBase.HTMLAttributes<HTMLResourcesPageElement>;
            "site-header": LocalJSX.SiteHeader & JSXBase.HTMLAttributes<HTMLSiteHeaderElement>;
            "site-menu": LocalJSX.SiteMenu & JSXBase.HTMLAttributes<HTMLSiteMenuElement>;
        }
    }
}