/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppProfile {
    'name': string;
  }
  interface AppRoot {}
  interface AssisterChat {}
  interface AssisterMessage {
    'alignment': 'left' | 'right';
    'status': 'none' | 'pending' | 'sent' | 'delivered';
    'triangle': 'none' | 'top' | 'bottom';
  }
}

declare global {


  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAssisterChatElement extends Components.AssisterChat, HTMLStencilElement {}
  var HTMLAssisterChatElement: {
    prototype: HTMLAssisterChatElement;
    new (): HTMLAssisterChatElement;
  };

  interface HTMLAssisterMessageElement extends Components.AssisterMessage, HTMLStencilElement {}
  var HTMLAssisterMessageElement: {
    prototype: HTMLAssisterMessageElement;
    new (): HTMLAssisterMessageElement;
  };
  interface HTMLElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'assister-chat': HTMLAssisterChatElement;
    'assister-message': HTMLAssisterMessageElement;
  }
}

declare namespace LocalJSX {
  interface AppProfile extends JSXBase.HTMLAttributes<HTMLAppProfileElement> {
    'name'?: string;
  }
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface AssisterChat extends JSXBase.HTMLAttributes<HTMLAssisterChatElement> {}
  interface AssisterMessage extends JSXBase.HTMLAttributes<HTMLAssisterMessageElement> {
    'alignment'?: 'left' | 'right';
    'status'?: 'none' | 'pending' | 'sent' | 'delivered';
    'triangle'?: 'none' | 'top' | 'bottom';
  }

  interface IntrinsicElements {
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'assister-chat': AssisterChat;
    'assister-message': AssisterMessage;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


