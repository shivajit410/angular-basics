import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: `
        <p>This is a warning!</p>
    `,
    styles: [
        `
            p{
                padding: 20px;
                background-color: mistyrose;
                color: red;
                font-weight: 800;
                border: 1px solid red;
             }
        `
    ]
})

export class WarningAlertComponent {

}