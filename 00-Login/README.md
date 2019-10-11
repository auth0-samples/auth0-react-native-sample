# Auth0 React Native Samples - Login

The complete guide to getting started with [react-native-auth0](https://github.com/auth0/react-native-auth0) is our [React Native QuickStart](https://auth0.com/docs/quickstart/native/react-native/00-login).



## How to run the sample app

Clone the repository and install the dependencies:

```bash
git clone git@github.com:auth0-samples/auth0-react-native-sample.git
yarn install
```

#### Additional step for iOS apps

Change the directory into the `ios` folder and run the following command to install the SDK pod:

```bash
# cd ios/
pod install
```

You should see the `A0Auth0` pod being installed and linked to the sample app.

### Auth0 Credentials 

1. Open the [Auth0 dashboard](https://manage.auth0.com/dashboard/) and click **Applications.**
2. Select your existing Application from the list or click **Create Application** at the top to create a new one of type **Native**. 
3. On the **Settings** tab for the Application, copy the "Client ID" and "Domain" values and paste them in the `app/auth0-credentials.js` file. This file is being used in the `app/index.js` file to instantiate the library. You can also change and do that manually this way:

```js
import Auth0 from 'react-native-auth0';

const config = {
  domain: 'YOUR_DOMAIN',
  clientId: 'YOUR_CLIENT_ID'
}

const auth0 = new Auth0(config);
```

### Deep linking setup
The methods required to handle browser deep linking are already in place. If you need to review them, see the [React Native QuickStart](https://auth0.com/docs/quickstart/native/react-native/00-login).

The URL that the Browser app calls to pass the authentication result back to your app is created using a combination of the following values:

- package name / product bundle identifier; currently `com.auth0samples` on both platforms.
- platform name
- auth0 domain

If you happen to change the first remember to take note of it to [update the callback URLs](#whitelist-the-urls) later.


#### Additional step for Android apps

Open the `android/app/src/main/AndroidManifest.xml` file and locate the Intent Filter declaration. You must update the `android:host` property to use your Auth0 domain from the step above.

```xml
<data
  android:host="{YOUR_DOMAIN}"
  android:pathPrefix="/android/${applicationId}/callback"
  android:scheme="${applicationId}" />
```

> The `applicationId` will get auto-completed dynamically.

### Whitelist the URLs

In the [Auth0 dashboard](https://manage.auth0.com/dashboard/), click **Applications** select your application from the list. In the "Allowed Callback URLs" field, add the 2 values below separated with a comma. This is required for the authentication result to be redirected from the browser to the app.

```
com.auth0samples://YOUR_DOMAIN/ios/com.auth0samples/callback, 
com.auth0samples://YOUR_DOMAIN/android/com.auth0samples/callback,
```

> Replace YOUR_DOMAIN with your actual Auth0 domain value

Add the same values to the "Allowed Logout URLs" field as well. This is required for the browser to redirect to the app after logging you out.

Finally, scroll down and click **Save Changes**.


### Run the apps

Run your app on an emulator, simulator, or your own connected device.

- To run the app on iOS run `yarn run ios`.
- To run the app on Android run `yarn run android`.
