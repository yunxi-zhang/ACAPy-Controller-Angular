// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ip: "localhost",
  issuerPort: "7001",
  holderPort: "8001",
  verifierPort: "9001",
  clientId: "86dec68e-1957-4b9e-83e5-4361da165990",
  authority: "https://login.microsoftonline.com/cf305aba-7c4f-4a23-8b2f-6e18acda1677"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
