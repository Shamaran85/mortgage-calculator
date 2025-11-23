declare module "virtual:pwa-register" {
  export function registerSW(options?: any): (reloadPage?: boolean) => void;
}

declare module "virtual:pwa-register/react" {
  export const useRegisterSW: any;
}
