#pragma once

#include "App.xaml.g.h"

namespace activation = winrt::Windows::ApplicationModel::Activation;

namespace winrt::Auth0Samples::implementation
{
    struct App : AppT<App>
    {
        App() noexcept;
        void OnLaunched(activation::LaunchActivatedEventArgs const&);
        void OnSuspending(IInspectable const&, Windows::ApplicationModel::SuspendingEventArgs const&);
        void OnNavigationFailed(IInspectable const&, Windows::UI::Xaml::Navigation::NavigationFailedEventArgs const&);
        void OnActivated(Windows::ApplicationModel::Activation::IActivatedEventArgs const& args);
      private:
        using super = AppT<App>;
    };
} // namespace winrt::Auth0Samples::implementation
