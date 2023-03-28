export {};

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
    grecaptcha: any;
    recaptchaWidgetId: any;
  }
}