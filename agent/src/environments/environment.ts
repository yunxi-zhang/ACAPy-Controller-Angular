// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  httpsEnabled: "true",
  httpsUrl: "https://hul7f0k24g.execute-api.us-east-1.amazonaws.com/test-stage",
  ip: "54.173.62.80",
  issuerPort: "9000",
  holderPort: "8001",
  verifierPort: "9001"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
