# Auth0 React Native Samples - Login

The complete guide to get started with the [react-native-auth0](https://github.com/auth0/react-native-auth0) SDK is on the Auth0 docs link below.

- [Login QuickStart](https://auth0.com/docs/quickstart/native/react-native/00-login)


## How to run the sample app

Clone the repository and install the dependencies:

```bash
yarn install
```

#### Additional step: iOS

Change the directory into the `ios` folder. You must run the following command to install the SDK pod.

```bash
# cd ios/
pod install
```

You should see the `A0Auth0` pod being installed and linked to the sample app.


### Auth0 Credentials 

Open the [Auth0 dashboard](https://manage.auth0.com/dashboard/). Select your existing **Native** type application or create a new one. From the top of the application settings page take the `Client ID` and `Domain` values and put them in the `app/auth0-credentials.js` file. This file is being used in the `app/index.js` file to instantiate the library. You can also change and do that manually this way:

```js
import Auth0 from 'react-native-auth0';

const config = {
  domain: 'lbalmaceda.auth0.com',
  clientId: '4e29mEHknIb1iKesCyeleWJUcz6fVR0O'
}

const auth0 = new Auth0(config);
```

### Deep linking setup
The methods required to handle the browser deep link are already in place. If you need to review them, check the full article linked on top of this document.

The URL that the Browser App calls back with the authentication result is created using a combination of the following values.
- package name / product bundle identifier; currently `com.auth0samples` on both platforms.
- platform name
- auth0 domain

If you happen to change the first remember to take note of it to update the [Auth0 dashboard](https://manage.auth0.com/dashboard/) configuration later.


#### Additional step: Android

Open the `android/app/src/main/AndroidManifest.xml` file and locate the Intent Filter declaration. You must update the `android:host` property to use your Auth0 domain from the step above.

```xml
<data
  android:host="{DOMAIN}"
  android:pathPrefix="/android/${applicationId}/callback"
  android:scheme="${applicationId}" />
```

> The `applicationId` will get auto-completed dynamically.

### Whitelist the URLs

Open one more time the [Auth0 dashboard](https://manage.auth0.com/dashboard/) and select your application. In the "Allowed Callback URLs" add the next 2 values separated with a comma. This is required for the authentication result to be redirected by the browser to the app.

```
com.auth0samples://lbalmaceda.auth0.com/ios/com.auth0samples/callback, 
com.auth0samples://lbalmaceda.auth0.com/android/com.auth0samples/callback,
```

Do the same on the "Allowed Logout URLs". This is required for the browser to redirect to the app after logging you out.

Remember to click **SAVE** to save the changes.


### Run the apps

Run your favorite emulator or simulator, or plug your device.

- To run the app on iOS run `yarn run ios`.
- To run the app on Android run `yarn run android`.
