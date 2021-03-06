/**
 * Created by Aaron on 12/21/2015.
 */

import * as React from 'react';

import ReCaptcha from '../../';

const gh_pages_key = "6LfKmBMTAAAAAEEk10iOxbp11HWyhq1v_jGdyyOA";

class DemoApp extends React.Component {
    render() {
        return (
            <div>
                <h1>react-recaptcha2 Demo App</h1>

                <h3>Explicit Rendering</h3>
                <ReCaptcha id="demo_recaptcha" render="explicit" sitekey={gh_pages_key}/>

                <h3>with dark theme</h3>
                <ReCaptcha id="demo_recaptcha2" render="explicit" theme="dark"
                           sitekey={gh_pages_key}/>

                <h3>with compact size</h3>
                <ReCaptcha id="demo_recaptcha3" render="explicit" size="compact"
                           sitekey={gh_pages_key}/>

                <h3>with audio type (may not display differently)</h3>
                <ReCaptcha id="demo_recaptcha4" render="explicit" type="audio"
                           sitekey={gh_pages_key}/>
            </div>
        );
    }
}

export default DemoApp;
