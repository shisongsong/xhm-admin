/**
 * This file contains authentication parameters. Contents of this file
 * is roughly the same across other MSAL.js libraries. These parameters
 * are used to initialize Angular and MSAL Angular configurations in
 * in app.module.ts file.
 */

// import { LogLevel, BrowserCacheLocation } from '@azure/msal-browser';

// const baseUrl = process.env.NODE_ENV === 'production' ? "https://wechatautomation-api.azurewebsites.net/" : "https://localhost:7261/";

// const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig = {
    auth: {
        clientId: 'a0081aeb-bffe-4ff7-823d-f73da167664c', // This is the ONLY mandatory field that you need to supply.
        authority: 'https://login.microsoftonline.com/5e1e8ac4-0822-4081-bb7f-97cedbb43f8b', // Defaults to "https://login.microsoftonline.com/common"
        // redirectUri: '/signin-oidc', // Points to window.location.origin by default. You must register this URI on Azure portal/App Registration.
        // postLogoutRedirectUri: '/signin-oidc', // Points to window.location.origin by default.
        redirectUri: '/',
        postLogoutRedirectUri: '/logout',
    },
    // cache: {
    //     cacheLocation: BrowserCacheLocation.LocalStorage, // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    //     storeAuthStateInCookie: isIE, // Set this to "true" if you are having issues on IE11 or Edge. Remove this line to use Angular Universal
    // },
    // system: {
    //     /**
    //      * Below you can configure MSAL.js logs. For more information, visit:
    //      * https://docs.microsoft.com/azure/active-directory/develop/msal-logging-js
    //      */
    //     loggerOptions: {
    //         loggerCallback(logLevel, message) {
    //             // console.log(message);
    //         },
    //         logLevel: LogLevel.Verbose,
    //         piiLoggingEnabled: false,
    //     },
    // },
};

/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const protectedResources = {
    apiTodoList: {
        // endpoint: `${baseUrl}api/`,
        scopes: {
            read: ['api://3a1ecc0e-ab1e-41c8-9c9f-c46c48dc283e/TodoList.Read'],
        },
    },
    // signalRUrl: {
    //     notification: `${baseUrl}notification`,
    // },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: [protectedResources.apiTodoList.scopes.read[0]],
};
