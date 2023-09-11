# Auth0 React Native Samples - Login

The complete guide to getting started with [react-native-auth0](https://github.com/auth0/react-native-auth0) is our [React Native QuickStart](https://auth0.com/docs/quickstart/native/react-native/00-login).

## 1. Install

Clone the repository and install the dependencies with [Yarn](https://yarnpkg.com):

```bash
git clone git@github.com:auth0-samples/auth0-react-native-sample.git
cd auth0-react-native-sample/00-login-hooks
yarn install
```

### iOS Applications only

Change the directory into the `ios` folder and run the following command to install the SDK pod with [CocoaPods](https://cocoapods.org/):

```bash
cd ios
pod install
```

You should see the `A0Auth0` pod being installed and linked to the sample app.

### Android applications only

Open the `android/app/build.gradle` file and locate the following manifest placeholders:

```groovy
android {
    defaultConfig {
        manifestPlaceholders = [auth0Domain: "YOUR_AUTH0_DOMAIN",
                                auth0Scheme: "${applicationId}.auth0"]
    }
    ...
}
```

Replace `YOUR_AUTH0_DOMAIN` with your Auth0 domain value. If you have `samples.auth0.com` as your Auth0 domain you would have a configuration like the following:

```groovy
android {
    defaultConfig {
        manifestPlaceholders = [auth0Domain: "samples.auth0.com",
                                auth0Scheme: "${applicationId}.auth0"]
    }
    ...
}
```

The `applicationId` value will be auto-replaced at runtime with the package name or ID of your application (e.g. `com.example.app`).

## 2. Configure Auth0

1. Copy the `app/auth0-configuration.js.example` in this sample to `app/auth0-configuration.js`.
2. Open your [Applications in the Auth0 dashboard](https://manage.auth0.com/#/applications).
3. Select your existing Application from the list or click **Create Application** at the top to create a new Application of type **Native**.
4. On the **Settings** tab for the Application, copy the "Client ID" and "Domain" values and paste them into the `app/auth0-configuration.js` file created above.
5. In the **Allowed Callback URLs** field, paste in the text below and replace `YOUR_DOMAIN` with the **Domain** from above. These URLs are required for the authentication result to be redirected from the browser to the app:

```
com.auth0samples.auth0://YOUR_DOMAIN/ios/com.auth0samples/callback,
com.auth0samples.auth0://YOUR_DOMAIN/android/com.auth0samples/callback
```

6. Add the same values to the **Allowed Logout URLs** field as well. These are required for the browser to redirect back to the app after the user logs out.
7. Scroll down and click **Save Changes**.

## 3. Run The App

Run your app on an emulator, simulator, or your own connected device.

- To run the app on iOS run `yarn run ios`.
- To run the app on Android run `yarn run android`.

The first run may take a while to fully launch. Keep an eye out for confirmation windows and watch the terminal for output and results.

**Note:** If you get an error about "No bundle URL present" try clicking reload in the app or running `yarn run ios` again.
