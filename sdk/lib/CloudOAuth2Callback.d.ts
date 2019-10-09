export = CloudOAuth2Callback;
declare const CloudOAuth2Callback_base: any;
/**
 * A OAuth2 Callback class that can be used to log-in using OAuth2
 * @tutorial Drivers-Pairing-System-Views
 * @example
 * let myOAuth2Callback = new Homey.CloudOAuth2Callback(apiUrl)
 * myOAuth2Callback
 *     .on('url', url => {
 *         // the URL which should open in a popup for the user to login
 *     })
 *     .on('code', code => {
 *         // ... swap your code here for an access token
 *     })
 *     .generate()  // Generate the url after the listeners are registered
 *     .catch( err => {
 *         // Log when generate() experiences an error.
 *         console.log(err);
 *     })
 */
declare class CloudOAuth2Callback extends CloudOAuth2Callback_base {
    [x: string]: any;
    /**
     * @param {string} apiUrl - The Api url of the service you want to login with
     */
    constructor(apiUrl: string);
    url: string;
    /**
     * Generate the OAuth2 Callback.
     * This is a shorthand method for {@link ManagerCloud#generateOAuth2Callback}
     * @param {genericCallbackFunction} [callback]
     * @returns {Promise}
     */
    generate(callback?: any): Promise<any>;
    /**
     * This event is fired when a URL has been received.
     * The user must be redirected to this URL to complete the sign-in process.
     * @event CloudOAuth2Callback#url
     * @param {string} url - The absolute URL to the sign-in page
     */
    _onUrl(url: string): void;
    /**
     * This event is fired when a OAuth2 code has been received.
     * The code can usually be swapped by the app for an access token.
     * @event CloudOAuth2Callback#code
     * @param {String|Error} code - The OAuth2 code, or an Error when something went wrong
     */
    _onCode(code: string | Error): void;
}
