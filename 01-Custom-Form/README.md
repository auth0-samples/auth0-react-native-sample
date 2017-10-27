# Auth0 React Native Embedded Sample

## Custom Login Form

This sample creates a custom form that resembles the Hosted Login Page (HLP) using react-native components. It is not intended to be a complete
replication of Lock.  Upon successful authentication, the user will be taken to a Profile page which also demonstrates how to Call an API using your `accessToken`.

There is no storage of credentials in this sample as configuration is beyond the scope of this sample.  React Native does not provide any secure
storage facilities. You might want to look at a module such as:

- [React Native Keychain](https://github.com/oblador/react-native-keychain)

The sample form is hardcoded with Facebook, Google social connections and a `Username-Password-Authentication` database connection. You will need to have these connections enabled in your [Auth0 Dashboard](https://manage.auth0.com/#/)

### Important: Database Connection Authentication

Since June 2017 new Clients no longer have the **Password Grant Type*** enabled by default.
This sample demonstrates using a Database Connection so you will need to enable the Password Grant Type, please follow [this guide](https://auth0.com/docs/clients/client-grant-types#how-to-edit-the-client-grant_types-property).

### Call API

Sample code is provided in `app/screens/ProfileScreen.js` using the native [fetch](https://facebook.github.io/react-native/docs/network.html) component. You will need to change this value to a real URL for it to work.

### Install

Install dependencies

```bash
npm install
```

### Credentials 

Add your client credentials

Add your native Auth0 client credentials to `app/auth0-credentials.js`, you can find these in your [Auth0 Dashboard](https://manage.auth0.com/#/clients).

### Configure Callback URL

### Android

Open `android/app/src/main/AndroidManifest.xml` and replace `{YOUR AUTH0 DOMAIN}` with your Auth0 client domain value.

The Android project uses the callback scheme `com.auth0sample`

Add an entry to your **Allowed Callback URLs** in the [Auth0 Dashboard](https://manage.auth0.com/#/clients) with the value

`com.auth0sample://{YOUR AUTH0 DOMAIN}/android/com.auth0sample/callback`

### iOS

The Android project uses the callback scheme `auth0.samples.Auth0Sample`

Add an entry to your **Allowed Callback URLs** in the [Auth0 Dashboard](https://manage.auth0.com/#/clients) with the value

`auth0.samples.Auth0Sample://{YOUR AUTH0 DOMAIN}/ios/auth0.samples.Auth0Sample/callback`

