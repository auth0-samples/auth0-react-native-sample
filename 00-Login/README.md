# Auth0 React Native Samples - Login

The complete guide to getting started with [react-native-auth0](https://github.com/auth0/react-native-auth0) is our [React Native QuickStart](https://auth0.com/docs/quickstart/native/react-native/00-login).

## How to run the sample app

Clone the repository and install the dependencies with [Yarn](https://yarnpkg.com):

```bash
git clone git@github.com:auth0-samples/auth0-react-native-sample.git
cd auth0-react-native-sample
yarn install
```

### Additional step for iOS apps

Change the directory into the `ios` folder and run the following command to install the SDK pod with [CocoaPods](https://cocoapods.org/):

```bash
cd ios
pod install
```

You should see the `A0Auth0` pod being installed and linked to the sample app.

### Auth0 Credentials 

1. Open the [Auth0 dashboard](https://manage.auth0.com/dashboard/) and click **Applications.**
2. Select your existing Application from the list or click **Create Application** at the top to create a new one of type **Native**. 
3. On the **Settings** tab for the Application, copy the "Client ID" and "Domain" values and paste them in the `app/auth0-credentials.js` file. This file is being used in the `app/index.js` file to instantiate the library.
4. In the **Allowed Callback URLs** field, paste in the text below and replace `YOUR_DOMAIN` with the Domain from step 3. These URLs are required for the authentication result to be redirected from the browser to the app:

```
com.auth0samples://YOUR_DOMAIN/ios/com.auth0samples/callback, 
com.auth0samples://YOUR_DOMAIN/android/com.auth0samples/callback
```

5. Add the same values to the **Allowed Logout URLs** field as well. These are required for the browser to redirect back to the app after the user logs out.
6. Scroll down and click **Save Changes**.

### Deep linking setup (Android only)

Open the `android/app/src/main/AndroidManifest.xml` file and locate the Intent Filter declaration. You must update the `android:host` property to use your Auth0 domain from the step above.

```xml
<data
  android:host="{YOUR_DOMAIN}"
  android:pathPrefix="/android/${applicationId}/callback"
  android:scheme="${applicationId}" />
```

The `applicationId` will get auto-completed dynamically.

### Run the apps

Run your app on an emulator, simulator, or your own connected device.

- To run the app on iOS run `yarn run ios`.
- To run the app on Android run `yarn run android`.

The first run may take a while to fully launch. Keep an eye out for confirmation windows and watch the terminal for output and results. 
