package com.auth0samples;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;

public class MainActivity extends ReactActivity {
  protected String getMainComponentName() {
    return "Auth0Samples";
  }
  /**
   * Returns the instance of the {@link ReactActivityDelegate}.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName());
  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }
  
    @Override
    protected ReactRootView createRootView() {
      return new ReactRootView(getContext());
    }
  }
}
